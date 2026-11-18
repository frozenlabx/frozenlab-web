'use client';

import * as React from 'react';
import { Project } from '@/types/project';
import { ProjectCard } from '@/components/projects/project-card';
import { Search } from 'lucide-react';

interface ProjectGridProps {
  projects: Project[];
  showFilter?: boolean;
}

export function ProjectGrid({ projects, showFilter = false }: ProjectGridProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const categories = React.useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => set.add(p.category));
    return ['all', ...Array.from(set)];
  }, [projects]);

  const filteredProjects = React.useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [projects, searchQuery, selectedCategory]);

  return (
    <div className="space-y-6">
      {showFilter && (
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by name, tag, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-input bg-background/80 placeholder:text-muted-foreground focus:ring-ring w-full rounded-md border py-1.5 pr-3 pl-9 text-sm shadow-sm focus:ring-1 focus:outline-none"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground font-semibold'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {cat === 'all' ? 'All Categories' : cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="border-border rounded-xl border border-dashed p-12 text-center">
          <p className="text-muted-foreground text-sm">
            No projects matched your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
