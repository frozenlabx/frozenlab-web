# FrozenLab (`frozenlab-web`)

> **"Engineering tools for people who build."**

The official website and multi-project documentation platform for **FrozenLab** ([frozenlab.dev](https://frozenlab.dev)), an independent open-source engineering initiative developing deterministic developer tools, observability libraries, and practical software guardrails.

---

## Architecture & Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, statically exported with `output: 'export'`)
- **Documentation Engine**: [Fumadocs](https://fumadocs.dev/) (Local Markdown/MDX collections with typed page trees)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Dark Minimal + Frosted Tech design system)
- **Typography**: Inter/Geist with JetBrains Mono for code blocks
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Type Checking**: TypeScript (Strict Mode)
- **Code Quality**: ESLint + Prettier
- **Continuous Integration**: GitHub Actions

---

## Active Projects Documented

| Project                 | Category                | Repository                                                                                     | Documentation                                          |
| :---------------------- | :---------------------- | :--------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| **VetroLog**            | Observability & Logging | [github.com/frozenlabx/vetrolog](https://github.com/frozenlabx/vetrolog)                       | [/docs/vetrolog](/docs/vetrolog)                       |
| **Image Quality Guard** | Asset Processing        | [github.com/frozenlabx/image_quality_guard](https://github.com/frozenlabx/image_quality_guard) | [/docs/image-quality-guard](/docs/image-quality-guard) |
| **UI Guard**            | Testing & UI            | [github.com/frozenlabx/ui_guard](https://github.com/frozenlabx/ui_guard)                       | [/docs/ui-guard](/docs/ui-guard)                       |

---

## Getting Started Locally

### Prerequisites

- **Node.js**: `v20` or `v22` LTS
- **pnpm**: `v9` or `v10` (`corepack enable pnpm` or `npm install -g pnpm`)

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/frozenlabx/frozenlab-web.git
cd frozenlab-web

# Install dependencies using frozen lockfile
pnpm install

# Start local development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the homepage or [http://localhost:3000/docs](http://localhost:3000/docs) for the documentation portal.

---

## Verification & Code Quality Scripts

```bash
# Run all quality checks (formatting, linting, typecheck, doc links)
pnpm check

# Individual commands:
pnpm format:check   # Validate formatting with Prettier
pnpm format         # Auto-format with Prettier
pnpm lint           # Run ESLint
pnpm typecheck      # TypeScript compilation check in strict mode
pnpm docs:check     # Validate frontmatter, meta.json, and internal links
pnpm build          # Generate static export into /out
```

---

## Documentation Contribution Workflow

Documentation is stored as code under `content/docs/`. External contributors do not need React or Next.js experience to improve docs:

1. Locate the project folder in `content/docs/<project-slug>/`.
2. Add or update `.mdx` documents.
3. Update `meta.json` if adding new pages to navigation.
4. Run `pnpm docs:check` to verify frontmatter and internal links.
5. Submit a pull request.

Detailed instructions are available in [CONTRIBUTING.md](./CONTRIBUTING.md).

---

## How to Register a New Project

1. Add the project definition to `src/config/projects.ts` in the `PROJECTS` array.
2. Create the documentation folder `content/docs/<slug>/` with `meta.json` and `index.mdx`.
3. Add the project emblem to `public/images/projects/<slug>/logo.svg`.
4. Run `pnpm check` to confirm everything compiles.

---

## Deployment (Static Hosting)

The project generates a 100% static export located in the `out/` directory:

```bash
pnpm build
```

This output can be deployed to Cloudflare Pages, GitHub Pages, Netlify, Vercel, or AWS S3/CloudFront with zero Node.js server dependencies.

---

## License

Licensed under the [MIT License](./LICENSE).
