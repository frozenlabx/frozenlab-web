import type { Metadata } from 'next';
import { getAllProjects } from '@/config/projects';
import { ProjectGrid } from '@/components/projects/project-grid';
import { Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Open-Source Projects',
  description:
    'Explore FrozenLab developer tools, observability libraries, and automated quality guardrails.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="py-12 md:py-20">
      <div className="container">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <div className="text-frozen-cyan mb-2 inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase">
            <Layers className="h-3.5 w-3.5" />
            <span>Project Registry</span>
          </div>
          <h1 className="text-foreground text-3xl font-extrabold tracking-tight sm:text-4xl">
            Open-Source Projects
          </h1>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed sm:text-base">
            Every tool in the FrozenLab organization is engineered as an independent,
            reusable software solution. Browse projects, inspect source code on GitHub, or
            consult dedicated documentation suites.
          </p>
        </div>

        {/* Interactive Filterable Grid */}
        <ProjectGrid projects={projects} showFilter />
      </div>
    </div>
  );
}
