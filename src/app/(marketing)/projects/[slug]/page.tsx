import type { Metadata } from 'next';
import Link from 'next/link';
import { AppImage as Image } from '@/components/ui/image';
import { notFound } from 'next/navigation';
import { getAllProjects, getProjectBySlug } from '@/config/projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowLeft, CheckCircle2, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.name} — Open-Source Tool`,
    description: project.summary,
    openGraph: {
      title: `${project.name} | FrozenLab`,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const status = project.releaseInfo?.status ?? 'alpha';

  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-4xl">
        {/* Back Link */}
        <Link
          href="/projects"
          className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-1.5 text-xs transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to All Projects</span>
        </Link>

        {/* Project Header */}
        <div className="border-border flex flex-col items-start justify-between gap-6 border-b pb-8 sm:flex-row">
          <div className="flex items-start gap-4">
            <div className="border-border bg-frozen-secondary relative flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border p-3">
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                width={48}
                height={48}
                priority
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <h1 className="text-foreground text-2xl font-extrabold tracking-tight sm:text-3xl">
                  {project.name}
                </h1>
                {project.releaseInfo && (
                  <Badge
                    variant={
                      status === 'stable'
                        ? 'stable'
                        : status === 'beta'
                          ? 'beta'
                          : 'alpha'
                    }
                  >
                    v{project.releaseInfo.version} &middot; {status}
                  </Badge>
                )}
              </div>
              <p className="text-frozen-cyan mt-1 font-mono text-xs">
                {project.category}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex w-full items-center gap-2.5 sm:w-auto">
            <Button asChild size="default" className="flex-1 gap-2 sm:flex-none">
              <Link href={project.docsUrl}>
                <BookOpen className="h-4 w-4" />
                <span>Documentation</span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="default"
              className="flex-1 gap-2 sm:flex-none"
            >
              <Link href={project.githubUrl} target="_blank" rel="noreferrer">
                <GithubIcon className="h-4 w-4" />
                <span>GitHub Repo</span>
                <ExternalLink className="ml-0.5 h-3.5 w-3.5 opacity-60" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Overview & Summary */}
        <div className="space-y-8 py-8">
          <div>
            <h2 className="text-foreground mb-3 text-lg font-bold">Overview</h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h2 className="text-foreground mb-4 text-lg font-bold">
                Architectural Highlights
              </h2>
              <ul className="grid grid-cols-1 gap-3">
                {project.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="border-border bg-card/40 text-foreground/90 flex items-start gap-3 rounded-lg border p-4 text-sm"
                  >
                    <CheckCircle2 className="text-frozen-cyan mt-0.5 h-4 w-4 shrink-0" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Tags */}
          <div>
            <h2 className="text-muted-foreground mb-3 font-mono text-sm font-semibold tracking-wider uppercase">
              Technologies & Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border-border bg-frozen-secondary text-foreground rounded-md border px-3 py-1 font-mono text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Documentation Banner */}
          <div className="border-frozen-cyan/30 bg-frozen-secondary/40 flex flex-col items-start justify-between gap-4 rounded-xl border p-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-foreground font-bold">
                Ready to integrate {project.name}?
              </h3>
              <p className="text-muted-foreground mt-1 text-xs">
                Explore installation prerequisites, code examples, and configuration
                guides.
              </p>
            </div>
            <Button asChild size="sm" className="shrink-0 gap-1.5">
              <Link href={project.docsUrl}>
                <span>Open Documentation</span>
                <BookOpen className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
