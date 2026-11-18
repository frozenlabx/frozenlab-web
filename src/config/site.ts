export const siteConfig = {
  name: 'FrozenLab',
  shortName: 'FrozenLab',
  description:
    'Independent open-source engineering initiative building developer tools, reusable libraries, and practical engineering solutions.',
  tagline: 'Engineering tools for people who build.',
  url: 'https://frozenlab.dev',
  ogImage: 'https://frozenlab.dev/images/branding/og-image.png',
  links: {
    github: 'https://github.com/frozenlabx',
    repo: 'https://github.com/frozenlabx/frozenlab-web',
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
    'Developer Tools',
    'Software Engineering',
    'VetroLog',
    'Image Quality Guard',
    'UI Guard',
    'Libraries',
    'Observability',
  ],
} as const;

export type SiteConfig = typeof siteConfig;
