import type { Metadata } from 'next';
import Link from 'next/link';
import { AppImage as Image } from '@/components/ui/image';
import { getAllProjects } from '@/config/projects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  ArrowRight,
  GitPullRequest,
  CheckCircle2,
  FileText,
} from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Documentation Portal',
  description:
    'Comprehensive documentation, API guides, and tutorials for FrozenLab open-source developer tools.',
};

export default function DocsPortalPage() {
  const projects = getAllProjects();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-5xl">
          {/* Header */}
          <div className="mb-12">
            <div className="text-frozen-cyan mb-2 inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Multi-Project Docs</span>
            </div>
            <h1 className="text-foreground text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Documentation Portal
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed sm:text-base">
              Centralized, type-checked documentation suites for all FrozenLab open-source
              initiatives. Select a project below to access guides, installation
              walkthroughs, and configuration references.
            </p>
          </div>

          {/* Project Documentation Cards */}
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group border-border bg-card/60 hover:border-frozen-cyan/50 hover:bg-frozen-secondary/40 relative flex flex-col justify-between rounded-xl border p-6 shadow-sm backdrop-blur-sm transition-all"
              >
                <div>
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="border-border bg-card/60 relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border p-1 shadow-sm">
                      <Image
                        src={project.logo}
                        alt=""
                        width={40}
                        height={40}
                        className="h-full w-full rounded-lg object-contain"
                      />
                    </div>
                    {project.releaseInfo && (
                      <Badge variant="alpha">v{project.releaseInfo.version}</Badge>
                    )}
                  </div>

                  <h2 className="text-foreground group-hover:text-frozen-cyan text-lg font-bold transition-colors">
                    {project.name}
                  </h2>
                  <div className="text-muted-foreground mt-0.5 mb-3 font-mono text-xs">
                    {project.category}
                  </div>
                  <p className="text-muted-foreground mb-6 line-clamp-3 text-xs leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="border-border/60 space-y-3 border-t pt-4">
                  <div className="text-muted-foreground text-[11px] font-semibold tracking-wider uppercase">
                    Quick Links
                  </div>
                  <ul className="text-muted-foreground space-y-1.5 text-xs">
                    <li>
                      <Link
                        href={`${project.docsUrl}/getting-started`}
                        className="hover:text-frozen-cyan inline-flex items-center gap-1 transition-colors"
                      >
                        <CheckCircle2 className="text-frozen-cyan h-3 w-3" />
                        <span>Getting Started</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={project.docsUrl}
                        className="hover:text-frozen-cyan inline-flex items-center gap-1 transition-colors"
                      >
                        <FileText className="h-3 w-3 opacity-60" />
                        <span>Documentation Home</span>
                      </Link>
                    </li>
                  </ul>

                  <Button asChild size="sm" className="mt-4 w-full gap-1.5 font-semibold">
                    <Link href={project.docsUrl}>
                      <span>Explore {project.name} Docs</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Contributor Callout */}
          <div className="border-frozen-cyan/30 bg-frozen-secondary/30 flex flex-col items-start justify-between gap-6 rounded-xl border p-6 sm:flex-row sm:items-center md:p-8">
            <div>
              <div className="text-frozen-cyan mb-1.5 inline-flex items-center gap-1.5 font-mono text-xs">
                <GitPullRequest className="h-3.5 w-3.5" />
                <span>Documentation as Code</span>
              </div>
              <h2 className="text-foreground text-lg font-bold">
                Notice an omission or typo?
              </h2>
              <p className="text-muted-foreground mt-1 max-w-xl text-xs sm:text-sm">
                Every documentation page is rendered directly from Markdown and MDX files
                in our Git repository. External contributors can edit documentation
                directly via GitHub pull requests.
              </p>
            </div>
            <Button asChild variant="outline" size="sm" className="shrink-0 gap-1.5">
              <Link
                href="https://github.com/frozenlabx/frozenlab-web/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noreferrer"
              >
                <span>Read Contributor Guide</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
