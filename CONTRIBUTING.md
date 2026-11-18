# Contributing to FrozenLab

Thank you for your interest in contributing to FrozenLab! As an open-source engineering initiative, we welcome contributions ranging from documentation improvements and typo fixes to new project proposals and UI enhancements.

This guide outlines our development workflow and provides step-by-step instructions for contributors.

---

## Code of Conduct

All contributors and participants in the FrozenLab community are expected to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md). Please read it before participating.

---

## Documentation Contributions

You **do not need deep Next.js or React knowledge** to contribute to FrozenLab documentation. All documentation pages are authored in Markdown and MDX files inside the `content/docs/` directory.

### Quick Workflow for Documentation Changes

1. **Fork the Repository**: Fork [github.com/frozenlabx/frozenlab-web](https://github.com/frozenlabx/frozenlab-web) to your personal account.
2. **Clone your fork**:
   ```bash
   git clone https://github.com/<your-username>/frozenlab-web.git
   cd frozenlab-web
   ```
3. **Install Dependencies**:
   ```bash
   pnpm install
   ```
4. **Locate the Relevant Document**:
   Find the project folder in `content/docs/<project-slug>/`:
   - VetroLog: `content/docs/vetrolog/`
   - Image Quality Guard: `content/docs/image-quality-guard/`
   - UI Guard: `content/docs/ui-guard/`
5. **Edit or Create Your File**:
   Update an existing `.mdx` file or create a new one following the frontmatter standards below.
6. **Update Navigation (`meta.json`)**:
   If you created a new page, register its file base name in the folder's `meta.json` under the `pages` array.
7. **Validate Content**:
   ```bash
   pnpm docs:check
   ```
8. **Start Local Preview**:
   ```bash
   pnpm dev
   ```
   Open `http://localhost:3000/docs` to preview your changes live in your browser.
9. **Commit and Submit PR**:
   Push to your branch and open a pull request on GitHub!

---

## Documentation Guidelines

### 1. MDX Frontmatter Standards

Every `.mdx` or `.md` file must begin with valid YAML frontmatter containing `title` and `description`:

```markdown
---
title: 'Configuring Output Sinks'
description: 'Detailed guide for piping structured logs to cloud collectors.'
---

# Configuring Output Sinks

...
```

_Note: If your title contains colons (`:`), wrap the entire title in double quotes._

### 2. Updating Navigation (`meta.json`)

Documentation sidebars are dynamically built from `meta.json` files located in each content folder:

```json
{
  "title": "VetroLog",
  "description": "Structured logging and observability utility",
  "root": true,
  "pages": ["index", "getting-started", "installation", "configuration", "your-new-page"]
}
```

Order pages logically: Overview (`index`), Getting Started, Installation, Configuration, and Guides.

### 3. Writing Code Examples

Always specify language identifiers for code blocks so syntax highlighting operates correctly:

````markdown
```typescript
import { createLogger } from '@frozenlab/vetrolog';

const logger = createLogger({ level: 'info' });
```
````

### 4. Adding Images

1. Place image assets in `public/images/projects/<project-slug>/`.
2. Reference images using relative URLs starting with `/images/...`:
   ```markdown
   ![Architecture Diagram](/images/projects/vetrolog/architecture.svg)
   ```

### 5. Internal Links

Link between documentation pages using root-relative paths:

- Correct: `[Installation Guide](/docs/vetrolog/installation)`
- Avoid absolute URLs (`https://frozenlab.dev/docs/...`) for internal pages.

---

## How to Register a New (4th) Project

Adding a new project to FrozenLab requires zero changes to the core documentation layout engine:

1. **Register the Project**:
   Open `src/config/projects.ts` and add your project to the `PROJECTS` array:
   ```typescript
   {
     id: 'new-tool',
     slug: 'new-tool',
     name: 'New Tool',
     description: 'Short single-sentence description.',
     summary: 'Full summary describing the tool purpose.',
     category: 'Developer Tooling',
     githubUrl: 'https://github.com/frozenlabx/new-tool',
     docsUrl: '/docs/new-tool',
     logo: '/images/projects/new-tool/logo.svg',
     tags: ['TypeScript', 'CLI'],
     featured: false,
     releaseInfo: {
       version: '0.1.0',
       status: 'alpha',
     },
   }
   ```
2. **Create Documentation Folder**:
   Create `content/docs/new-tool/`:
   - `content/docs/new-tool/meta.json`
   - `content/docs/new-tool/index.mdx`
3. **Add Project Logo**:
   Place an SVG logo in `public/images/projects/new-tool/logo.svg`.
4. **Validate**:
   Run `pnpm check` to ensure your project compiles and passes all checks.

---

## Development & Code Quality Commands

FrozenLab enforces strict formatting, linting, and type safety checks. Before submitting a pull request, run the unified verification suite:

| Command             | Purpose                                                            |
| :------------------ | :----------------------------------------------------------------- |
| `pnpm dev`          | Starts local development server on `http://localhost:3000`         |
| `pnpm build`        | Executes static export production build into `/out`                |
| `pnpm lint`         | Runs ESLint across all codebase files                              |
| `pnpm typecheck`    | Validates TypeScript types in strict mode                          |
| `pnpm format:check` | Checks code formatting against Prettier rules                      |
| `pnpm format`       | Automatically formats files with Prettier                          |
| `pnpm docs:check`   | Validates documentation frontmatter, meta.json, and internal links |
| `pnpm check`        | Runs lint, typecheck, format check, and docs check in sequence     |

---

## Commit & Pull Request Conventions

We adhere to clear, conventional commit messages:

- `docs: add getting-started guide for image-quality-guard`
- `fix(docs): resolve broken link in vetrolog installation`
- `feat(projects): register new developer utility`
- `chore(ci): update github action runner version`

### PR Submission Checklist

- [ ] `pnpm check` passes with zero errors.
- [ ] `pnpm build` successfully outputs the static build without warnings.
- [ ] Commit history is clean and descriptive.
- [ ] Pull request references relevant issue number if applicable.
