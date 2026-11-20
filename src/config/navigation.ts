export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
  badge?: string;
  description?: string;
}

export interface NavigationConfig {
  mainNav: NavItem[];
  footerNav: {
    category: string;
    items: NavItem[];
  }[];
}

export const navigationConfig: NavigationConfig = {
  mainNav: [
    {
      title: 'Home',
      href: '/',
      description: 'FrozenLab homepage and developer tooling overview.',
    },
    {
      title: 'Projects',
      href: '/projects',
      description: 'Explore open-source developer tools and libraries.',
    },
    {
      title: 'Documentation',
      href: '/docs',
      description: 'Comprehensive guides, references, and getting-started tutorials.',
    },
    {
      title: 'Blog',
      href: '/blog',
      description: 'Engineering notes, architecture decisions, and release updates.',
    },
    {
      title: 'About',
      href: '/about',
      description: 'Our mission, engineering principles, and open-source philosophy.',
    },
  ],
  footerNav: [
    {
      category: 'Projects',
      items: [
        { title: 'VetroLog', href: '/docs/vetrolog' },
        { title: 'Flutter-Kick', href: '/docs/flutter-kick' },
        { title: 'Image Quality Guard', href: '/docs/image-quality-guard' },
        { title: 'UI Guard', href: '/docs/ui-guard' },
        { title: 'All Projects', href: '/projects' },
      ],
    },
    {
      category: 'Documentation',
      items: [
        { title: 'Docs Portal', href: '/docs' },
        { title: 'VetroLog Guide', href: '/docs/vetrolog/getting-started' },
        { title: 'Flutter-Kick Guide', href: '/docs/flutter-kick/quickstart' },
        { title: 'Image Guard Guide', href: '/docs/image-quality-guard/getting-started' },
        { title: 'UI Guard Guide', href: '/docs/ui-guard/getting-started' },
      ],
    },
    {
      category: 'Initiative',
      items: [
        { title: 'About FrozenLab', href: '/about' },
        { title: 'Engineering Blog', href: '/blog' },
        {
          title: 'GitHub Organization',
          href: 'https://github.com/frozenlabx',
          external: true,
        },
        {
          title: 'Sponsor FrozenLab',
          href: 'https://github.com/sponsors/frozenlabx',
          external: true,
        },
        {
          title: 'Contributing Guide',
          href: 'https://github.com/frozenlabx/frozenlab-web/blob/main/CONTRIBUTING.md',
          external: true,
        },
      ],
    },
    {
      category: 'Community',
      items: [
        {
          title: 'Code of Conduct',
          href: 'https://github.com/frozenlabx/frozenlab-web/blob/main/CODE_OF_CONDUCT.md',
          external: true,
        },
        {
          title: 'Issue Tracker',
          href: 'https://github.com/frozenlabx/frozenlab-web/issues',
          external: true,
        },
        {
          title: 'License (MIT)',
          href: 'https://github.com/frozenlabx/frozenlab-web/blob/main/LICENSE',
          external: true,
        },
      ],
    },
  ],
};
