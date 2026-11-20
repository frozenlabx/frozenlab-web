export const siteConfig = {
  name: 'FrozenLab',
  shortName: 'FrozenLab',
  description:
    'Independent open-source engineering initiative building 100% free developer tools, observability utilities, and production-grade software libraries.',
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
    'Developer Tooling',
    'Developer Utilities',
    'Observability',
    'Software Libraries',
    'Zero Telemetry',
    'VetroLog',
    'Flutter-Kick',
    'Android SDK Toolchain',
    'Headless Android SDK',
    'UI Guard',
    'Image Quality Guard',
  ],
} as const;

export type SiteConfig = typeof siteConfig;
