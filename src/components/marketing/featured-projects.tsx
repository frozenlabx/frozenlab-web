import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Layers } from 'lucide-react';
import { getFeaturedProjects } from '@/config/projects';
import { ProjectCard } from '@/components/projects/project-card';
import { Button } from '@/components/ui/button';

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="border-border/60 bg-muted/20 border-b py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="text-frozen-cyan mb-2 inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase">
              <Layers className="h-3.5 w-3.5" />
              <span>Modular Tooling</span>
            </div>
            <h2 className="text-foreground text-3xl font-bold tracking-tight">
              Featured Projects
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl text-sm">
              Independent tools and libraries engineered for real-world production stacks.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            size="sm"
            className="gap-1.5 self-start md:self-auto"
          >
            <Link href="/projects">
              <span>View All Projects ({featured.length})</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
