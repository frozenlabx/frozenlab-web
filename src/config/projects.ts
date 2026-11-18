import { Project } from '@/types/project';

/**
 * FrozenLab Central Project Registry
 *
 * This typed registry acts as the single source of truth for all projects built
 * and maintained under the FrozenLab engineering organization.
 *
 * HOW TO ADD A NEW (4th) PROJECT:
 * 1. Add your project configuration to the `PROJECTS` array below.
 * 2. Create the documentation directory under `content/docs/<your-project-slug>/`
 *    with a `meta.json` and `index.mdx`.
 * 3. Add any relevant project logos to `public/images/projects/<your-project-slug>/`.
 * 4. Run `pnpm check` to validate navigation, frontmatter, and types.
 *
 * EXAMPLE 4th PROJECT:
 * {
 *   id: 'schema-forge',
 *   slug: 'schema-forge',
 *   name: 'SchemaForge',
 *   description: 'Type-safe schema synthesis and mock data generation engine.',
 *   summary: 'Zero-runtime overhead schema validation and contract generator for distributed systems.',
 *   category: 'Developer Tooling',
 *   githubUrl: 'https://github.com/frozenlabx/schema-forge',
 *   docsUrl: '/docs/schema-forge',
 *   logo: '/images/projects/schema-forge/logo.svg',
 *   tags: ['TypeScript', 'Codegen', 'Schema'],
 *   featured: false,
 *   releaseInfo: {
 *     version: '0.1.0-alpha',
 *     status: 'planning',
 *   },
 * }
 */
export const PROJECTS: Project[] = [
  {
    id: 'vetrolog',
    slug: 'vetrolog',
    name: 'VetroLog',
    description:
      'Zero-config desktop SQLite database inspector for mobile developers (Flutter, Android, React Native).',
    summary:
      'High-performance desktop database inspector featuring zero SDK code integration, live WAL synchronization, visual query planner, and natural language AI.',
    category: 'Database & Mobile Tooling',
    githubUrl: 'https://github.com/frozenlabx/vetrolog',
    docsUrl: '/docs/vetrolog',
    logo: '/images/projects/vetrolog/logo.svg',
    tags: ['SQLite', 'Mobile', 'Flutter', 'Android', 'React Native', 'DevTools'],
    featured: true,
    releaseInfo: {
      version: '1.6.0',
      status: 'stable',
    },
    highlights: [
      'Zero SDK code required: inspects databases via ADB run-as without app modifications',
      'Live Write-Ahead Log (WAL) auto-synchronization with instant DataGrid updates',
      'Intelligent SQL console with 60 FPS mobile frame-budget profiler and natural language AI',
    ],
  },
  {
    id: 'image-quality-guard',
    slug: 'image-quality-guard',
    name: 'Image Quality Guard',
    description:
      'Automated image validation and quality assurance guardrails for modern asset pipelines.',
    summary:
      'A deterministic asset validation tool to catch unoptimized dimensions, format regressions, and perceptual degradation before images ship to production.',
    category: 'Asset Processing',
    githubUrl: 'https://github.com/frozenlabx/image_quality_guard',
    docsUrl: '/docs/image-quality-guard',
    logo: '/images/projects/image-quality-guard/logo.svg',
    tags: ['Images', 'CI/CD', 'Performance', 'Automation'],
    featured: true,
    releaseInfo: {
      version: '0.1.0',
      status: 'alpha',
    },
    highlights: [
      'Pre-commit and CI verification of asset byte limits and compression ratios',
      'Format-aware analysis supporting WebP, AVIF, PNG, and JPEG formats',
      'Non-blocking reporter modes with configurable failure thresholds',
    ],
  },
  {
    id: 'ui-guard',
    slug: 'ui-guard',
    name: 'UI Guard',
    description:
      'Lightweight visual regression and interface consistency testing tool for frontend workflows.',
    summary:
      'UI Guard isolates and validates component visual state without requiring complex browser virtualization infrastructure.',
    category: 'Testing & UI',
    githubUrl: 'https://github.com/frozenlabx/ui_guard',
    docsUrl: '/docs/ui-guard',
    logo: '/images/projects/ui-guard/logo.svg',
    tags: ['Visual Testing', 'Regression', 'Frontend', 'Quality'],
    featured: true,
    releaseInfo: {
      version: '0.1.0',
      status: 'alpha',
    },
    highlights: [
      'Snapshot difference detection tailored for headless testing pipelines',
      'Deterministic viewport emulation and layout drift reporting',
      'Lightweight integration path for open-source component libraries',
    ],
  },
];

export function getAllProjects(): Project[] {
  return PROJECTS;
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((project) => project.id === id);
}
