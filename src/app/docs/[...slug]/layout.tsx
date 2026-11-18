import * as React from 'react';
import { AppImage as Image } from '@/components/ui/image';
import Link from 'next/link';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import { ProjectSelector } from '@/components/docs/project-selector';
import { siteConfig } from '@/config/site';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      githubUrl={siteConfig.links.github}
      nav={{
        title: (
          <Link
            href="/"
            className="text-foreground flex items-center gap-2 text-sm font-bold tracking-tight transition-opacity hover:opacity-90"
          >
            <Image
              src="/images/branding/logo-mark.svg"
              alt="FrozenLab logo"
              width={22}
              height={22}
            />
            <span>
              Frozen<span className="text-frozen-cyan">Lab</span>
              <span className="text-muted-foreground ml-1 font-mono text-xs font-normal">
                / docs
              </span>
            </span>
          </Link>
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
