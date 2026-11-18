#!/usr/bin/env node

/**
 * FrozenLab Content & Documentation Validator
 *
 * Enforces frontmatter standards, meta.json integrity, project-doc alignment,
 * and validates local internal links across all documentation and blog files.
 */

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const ROOT_DIR = process.cwd();
const DOCS_DIR = path.join(ROOT_DIR, 'content/docs');
const BLOG_DIR = path.join(ROOT_DIR, 'content/blog');
const PROJECTS_CONFIG = path.join(ROOT_DIR, 'src/config/projects.ts');

let errorCount = 0;
let checkedFiles = 0;

function logError(file, message) {
  console.error(`\x1b[31m[ERROR]\x1b[0m ${path.relative(ROOT_DIR, file)}: ${message}`);
  errorCount++;
}

function logInfo(message) {
  console.log(`\x1b[36m[INFO]\x1b[0m ${message}`);
}

function logSuccess(message) {
  console.log(`\x1b[32m[PASS]\x1b[0m ${message}`);
}

// 1. Verify Project Folders against Central Registry
function validateProjectDocAlignment() {
  logInfo('Validating project registry alignment with content/docs...');
  if (!fs.existsSync(PROJECTS_CONFIG)) {
    logError(PROJECTS_CONFIG, 'src/config/projects.ts file not found');
    return;
  }

  const rawContent = fs.readFileSync(PROJECTS_CONFIG, 'utf8');
  // Strip block comments (/* ... */) and single line comments (// ...)
  const strippedContent = rawContent
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*/g, '');

  // Extract slug definitions from active code only
  const slugMatches = [...strippedContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(
    (m) => m[1],
  );

  for (const slug of slugMatches) {
    const projectDocDir = path.join(DOCS_DIR, slug);
    if (!fs.existsSync(projectDocDir)) {
      logError(
        projectDocDir,
        `Project slug "${slug}" registered in projects.ts has no matching folder in content/docs/${slug}`,
      );
    } else {
      const metaPath = path.join(projectDocDir, 'meta.json');
      if (!fs.existsSync(metaPath)) {
        logError(
          metaPath,
          `Missing required meta.json in project doc folder content/docs/${slug}`,
        );
      }
    }
  }
}

// 2. Validate all meta.json files and their listed pages
function validateMetaFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      validateMetaFiles(fullPath);
    } else if (entry.name === 'meta.json') {
      checkedFiles++;
      try {
        const raw = fs.readFileSync(fullPath, 'utf8');
        const parsed = JSON.parse(raw);

        if (!parsed.title) {
          logError(fullPath, 'meta.json missing "title" property');
        }

        if (Array.isArray(parsed.pages)) {
          for (const pageName of parsed.pages) {
            // Check if page corresponds to an .mdx file, .md file, or subfolder
            const mdxPath = path.join(dir, `${pageName}.mdx`);
            const mdPath = path.join(dir, `${pageName}.md`);
            const subDirPath = path.join(dir, pageName);

            if (
              !fs.existsSync(mdxPath) &&
              !fs.existsSync(mdPath) &&
              !fs.existsSync(subDirPath)
            ) {
              logError(
                fullPath,
                `meta.json references page or folder "${pageName}" which does not exist in ${path.relative(
                  ROOT_DIR,
                  dir,
                )}`,
              );
            }
          }
        }
      } catch (err) {
        logError(fullPath, `Invalid JSON formatting: ${err.message}`);
      }
    }
  }
}

// Collect all existing doc routes for link checking
const knownDocRoutes = new Set(['/docs', '/projects', '/blog', '/about']);

function indexDocRoutes(dir, currentSlug = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      indexDocRoutes(fullPath, currentSlug ? `${currentSlug}/${entry.name}` : entry.name);
    } else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
      const baseName = entry.name.replace(/\.mdx?$/, '');
      let route = '/docs';
      if (currentSlug) {
        route += `/${currentSlug}`;
      }
      if (baseName !== 'index') {
        route += `/${baseName}`;
      }
      knownDocRoutes.add(route);
    }
  }
}

// 3. Validate MDX Frontmatter and internal links
function validateMdxFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      validateMdxFiles(fullPath);
    } else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
      checkedFiles++;
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      try {
        const { data, content } = matter(fileContents);

        if (!data.title || typeof data.title !== 'string') {
          logError(fullPath, 'Missing or non-string "title" in frontmatter');
        }

        if (!data.description || typeof data.description !== 'string') {
          logError(fullPath, 'Missing or non-string "description" in frontmatter');
        }

        // Check for broken internal links formatted as [text](/docs/...)
        const internalLinks = [...content.matchAll(/\[([^\]]+)\]\(((\/docs[^\)#\s]*))/g)];
        for (const match of internalLinks) {
          const targetUrl = match[2];
          // Strip trailing slash
          const normalized = targetUrl.endsWith('/') ? targetUrl.slice(0, -1) : targetUrl;
          if (!knownDocRoutes.has(normalized)) {
            logError(
              fullPath,
              `Broken internal documentation link: "${targetUrl}" (destination not found in content routes)`,
            );
          }
        }
      } catch (err) {
        logError(fullPath, `Frontmatter parsing error: ${err.message}`);
      }
    }
  }
}

// 4. Validate Blog Frontmatter
function validateBlogFiles() {
  if (!fs.existsSync(BLOG_DIR)) return;
  const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
      checkedFiles++;
      const fullPath = path.join(BLOG_DIR, entry.name);
      const raw = fs.readFileSync(fullPath, 'utf8');

      try {
        const { data } = matter(raw);
        if (!data.title) logError(fullPath, 'Blog post missing "title"');
        if (!data.description) logError(fullPath, 'Blog post missing "description"');
        if (!data.date) logError(fullPath, 'Blog post missing "date"');
      } catch (err) {
        logError(fullPath, `Blog frontmatter error: ${err.message}`);
      }
    }
  }
}

// Execution
console.log('\n--- FrozenLab Content & Documentation Verification ---');
indexDocRoutes(DOCS_DIR);
validateProjectDocAlignment();
validateMetaFiles(DOCS_DIR);
validateMdxFiles(DOCS_DIR);
validateBlogFiles();

console.log('------------------------------------------------------');
if (errorCount > 0) {
  console.error(
    `\x1b[31m[FAILED]\x1b[0m Content validation failed with ${errorCount} error(s) across ${checkedFiles} checked files.`,
  );
  process.exit(1);
} else {
  logSuccess(`All ${checkedFiles} content and metadata files passed validation.`);
  process.exit(0);
}
