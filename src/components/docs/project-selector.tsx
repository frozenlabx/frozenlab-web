'use client';

import * as React from 'react';
import Link from 'next/link';
import { AppImage as Image } from '@/components/ui/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Check } from 'lucide-react';
import { getAllProjects } from '@/config/projects';
import { cn } from '@/lib/utils';

export function ProjectSelector() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const projects = getAllProjects();

  // Determine current active project based on URL path (/docs/[project-slug]/...)
  const currentProject =
    projects.find((p) => pathname.startsWith(`/docs/${p.slug}`)) ?? projects[0];

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="relative mb-4 w-full">
      <div className="text-muted-foreground mb-1.5 px-1 font-mono text-[11px] tracking-wider uppercase">
        Documentation Scope
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="border-border bg-card/80 hover:border-frozen-cyan/50 hover:bg-frozen-secondary/50 flex w-full items-center justify-between rounded-lg border p-2.5 text-left text-sm shadow-sm transition-all"
        aria-expanded={open}
        aria-label="Select documentation project"
      >
        <div className="flex items-center gap-2.5 truncate">
          {currentProject?.logo && (
            <div className="border-border bg-frozen-secondary relative flex h-6 w-6 shrink-0 items-center justify-center rounded border p-1">
              <Image
                src={currentProject.logo}
                alt={`${currentProject.name} logo`}
                width={18}
                height={18}
              />
            </div>
          )}
          <div className="truncate">
            <div className="text-foreground truncate text-xs font-semibold">
              {currentProject?.name}
            </div>
            <div className="text-muted-foreground truncate text-[10px]">
              {currentProject?.category}
            </div>
          </div>
        </div>
        <ChevronDown
          className={cn(
            'text-muted-foreground ml-2 h-4 w-4 shrink-0 transition-transform',
            open && 'rotate-180',
          )}
        />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="animate-in fade-in-50 zoom-in-95 border-border bg-popover/95 absolute top-full right-0 left-0 z-50 mt-1.5 space-y-1 rounded-lg border p-1.5 shadow-xl backdrop-blur-xl duration-150">
            {projects.map((project) => {
              const isActive = project.id === currentProject?.id;
              return (
                <Link
                  key={project.id}
                  href={project.docsUrl}
                  className={cn(
                    'flex items-center justify-between rounded-md p-2 text-xs transition-colors',
                    isActive
                      ? 'bg-frozen-secondary text-frozen-cyan font-semibold'
                      : 'text-foreground/90 hover:bg-muted hover:text-foreground',
                  )}
                >
                  <div className="flex items-center gap-2 truncate">
                    <div className="border-border bg-frozen-secondary relative flex h-5 w-5 shrink-0 items-center justify-center rounded border p-0.5">
                      <Image src={project.logo} alt="" width={14} height={14} />
                    </div>
                    <div className="truncate">
                      <div className="font-medium">{project.name}</div>
                      <div className="text-muted-foreground/80 text-[10px]">
                        {project.category}
                      </div>
                    </div>
                  </div>
                  {isActive && (
                    <Check className="text-frozen-cyan ml-2 h-3.5 w-3.5 shrink-0" />
                  )}
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
