import * as React from 'react';
import { Hero } from '@/components/marketing/hero';
import { FeaturedProjects } from '@/components/marketing/featured-projects';
import { Philosophy } from '@/components/marketing/philosophy';
import { ContributeCTA } from '@/components/marketing/contribute-cta';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedProjects />
      <Philosophy />
      <ContributeCTA />
    </div>
  );
}
