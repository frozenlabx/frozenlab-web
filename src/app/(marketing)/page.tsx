import * as React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/marketing/hero';
import { FeaturedProjects } from '@/components/marketing/featured-projects';
import { Philosophy } from '@/components/marketing/philosophy';
import { ContributeCTA } from '@/components/marketing/contribute-cta';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'FrozenLab — 100% Free Developer Tools & Observability Libraries',
  description:
    'FrozenLab develops 100% free and open-source developer tools, observability utilities, and software libraries designed for modern engineering workflows.',
  alternates: {
    canonical: siteConfig.url,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/images/branding/logo-mark.svg`,
      sameAs: [siteConfig.links.github],
      description: siteConfig.description,
    },
    {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
    },
    {
      '@type': 'SoftwareApplication',
      name: 'VetroLog',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'iOS, Android, macOS, Windows, Linux',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description:
        'Free, real-time SQLite database inspector, live query runner, and structured logging suite for mobile and desktop applications.',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Flutter-Kick',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'macOS, Linux, Windows',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description:
        'Lightweight, automated bootstrapper configuring headless Android SDK and Flutter toolchains without Android Studio.',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'UI Guard',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Cross-platform',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description:
        'Free automated UI validation and regression prevention guardrails for Flutter applications.',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Image Quality Guard',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Cross-platform',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description:
        'Free asset quality inspection and compression analyzer for developer pipelines.',
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col">
        <Hero />
        <FeaturedProjects />
        <Philosophy />
        <ContributeCTA />
      </div>
    </>
  );
}
