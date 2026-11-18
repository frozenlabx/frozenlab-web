import * as React from 'react';
import Link from 'next/link';
import { AppImage as Image } from '@/components/ui/image';
import { BookOpen, ArrowRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';
import { Project } from '@/types/project';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const status = project.releaseInfo?.status ?? 'alpha';

  return (
    <div className="group border-border bg-card/60 hover:border-frozen-cyan/50 hover:bg-frozen-secondary/40 relative flex flex-col justify-between rounded-xl border p-6 backdrop-blur-sm transition-all duration-200 hover:shadow-lg">
      <div>
        {/* Top Header: Logo + Badges */}
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="border-border/80 bg-card/60 relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border p-1 shadow-sm">
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                width={40}
                height={40}
                className="h-full w-full rounded-lg object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>
            <div>
              <Link
                href={`/projects/${project.slug}`}
                className="text-foreground hover:text-frozen-cyan text-lg font-bold transition-colors"
              >
                {project.name}
              </Link>
              <div className="text-muted-foreground mt-0.5 font-mono text-xs">
                {project.category}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {project.releaseInfo && (
              <Badge
                variant={
                  status === 'stable' ? 'stable' : status === 'beta' ? 'beta' : 'alpha'
                }
              >
                v{project.releaseInfo.version} &middot; {status}
              </Badge>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-5 line-clamp-3 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border-border/60 bg-muted/60 text-muted-foreground inline-flex items-center rounded border px-2 py-0.5 font-mono text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="border-border/60 flex items-center justify-between gap-2 border-t pt-4">
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="h-8 gap-1.5 px-2.5 text-xs"
          >
            <Link href={project.docsUrl}>
              <BookOpen className="text-frozen-cyan h-3.5 w-3.5" />
              <span>Docs</span>
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="sm"
            className="h-8 gap-1.5 px-2.5 text-xs"
          >
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`GitHub repo for ${project.name}`}
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Repo</span>
            </Link>
          </Button>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="text-frozen-cyan inline-flex items-center gap-1 text-xs font-medium transition-all hover:underline"
        >
          <span>Details</span>
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
