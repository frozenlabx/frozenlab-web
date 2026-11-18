export const siteConfig = {
  name: 'FrozenLab',
  shortName: 'FrozenLab',
  description:
    'Independent open-source engineering initiative building 100% free developer tools, mobile SQLite inspectors, Flutter debugging utilities, and asset quality guardrails.',
  tagline: 'Engineering tools for people who build.',
  url: 'https://frozenlab.dev',
  ogImage: 'https://frozenlab.dev/images/branding/og-image.png',
  links: {
    github: 'https://github.com/frozenlabx',
    repo: 'https://github.com/frozenlabx/frozenlab-web',
    sponsor: 'https://github.com/sponsors/frozenlabx',
    docs: '/docs',
    projects: '/projects',
    blog: '/blog',
    about: '/about',
  },
  author: {
    name: 'FrozenLab Core Team',
    url: 'https://frozenlab.dev',
  },
  keywords: [
    'FrozenLab',
    'Open Source',
    'Free Developer Tools',
    'Open Source Developer Tools',
    'Free Software',
    'MIT License',
    'Software Engineering',
    'VetroLog',
    'Mobile SQLite Inspector',
    'Flutter SQLite Debugger',
    'UI Guard',
    'Flutter Asset Guard',
    'Image Quality Guard',
    'Visual Regression Testing',
    'Developer Tooling',
    'Libraries',
    'Observability',
    'Zero Telemetry',
  ],
} as const;

export type SiteConfig = typeof siteConfig;
