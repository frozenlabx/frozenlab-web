import * as React from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import { ProjectSelector } from '@/components/docs/project-selector';
import { siteConfig } from '@/config/site';
import { LogoMark } from '@/components/ui/icons';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      githubUrl={siteConfig.links.github}
      nav={{
        title: (
          <div className="text-foreground flex items-center gap-2 text-sm font-bold tracking-tight">
            <LogoMark className="text-foreground h-5 w-auto" />
            <span>
              Frozen<span className="text-frozen-cyan">Lab</span>
              <span className="text-muted-foreground ml-1 font-mono text-xs font-normal">
                / docs
              </span>
            </span>
          </div>
        ),
      }}
      sidebar={{
        banner: <ProjectSelector />,
      }}
    >
      {children}
    </DocsLayout>
  );
}
