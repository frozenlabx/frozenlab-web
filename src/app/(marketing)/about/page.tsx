import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { Code2, Shield, Layers, Sparkles, GitPullRequest } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';

export const metadata: Metadata = {
  title: 'About FrozenLab',
  description:
    "FrozenLab's mission, engineering principles, and open-source software philosophy.",
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <div className="text-frozen-cyan mb-2 inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Open Initiative</span>
          </div>
          <h1 className="text-foreground text-3xl leading-[1.15] font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            About FrozenLab
          </h1>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
            An independent open-source engineering initiative dedicated to crafting
            high-fidelity developer tools, reusable libraries, and deterministic software
            guardrails.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Mission */}
          <section className="border-border bg-card/40 rounded-xl border p-6 backdrop-blur-sm md:p-8">
            <h2 className="text-foreground mb-3 flex items-center gap-2 text-xl font-bold">
              <Code2 className="text-frozen-cyan h-5 w-5" />
              <span>Our Mission</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
              Software development has become increasingly complex. Modern pipelines are
              frequently weighed down by fragile scripts, excessive dependency graphs, and
              opaque runtime behavior.
            </p>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed sm:text-base">
              FrozenLab exists to provide a counterweight: focused developer utilities
              that solve concrete problems cleanly. Our goal is to author software that
              engineers can rely on without fearing unexpected regressions, breaking
              downstream changes, or license friction.
            </p>
          </section>

          {/* Pillars */}
          <section className="space-y-6">
            <h2 className="text-foreground text-2xl font-bold">
              Core Engineering Tenets
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="border-border bg-card/30 rounded-lg border p-5">
                <div className="text-foreground mb-2 flex items-center gap-2.5 text-sm font-semibold">
                  <Shield className="text-frozen-cyan h-4 w-4" />
                  <span>Minimal Dependencies</span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
                  We maximize usage of runtime standard libraries. Less external code
                  means fewer security vulnerabilities, faster installs, and easier
                  long-term maintenance.
                </p>
              </div>

              <div className="border-border bg-card/30 rounded-lg border p-5">
                <div className="text-foreground mb-2 flex items-center gap-2.5 text-sm font-semibold">
                  <Layers className="text-frozen-cyan h-4 w-4" />
                  <span>Modular Architecture</span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
                  Every project is an independent unit. You can adopt VetroLog for
                  logging, Image Quality Guard for assets, or UI Guard for visual testing
                  without bringing in an entire framework lock-in.
                </p>
              </div>

              <div className="border-border bg-card/30 rounded-lg border p-5">
                <div className="text-foreground mb-2 flex items-center gap-2.5 text-sm font-semibold">
                  <GitPullRequest className="text-frozen-cyan h-4 w-4" />
                  <span>Public & Open Process</span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
                  From architecture discussion records to code reviews and documentation
                  fixes, all work occurs in open GitHub repositories under transparent
                  workflows.
                </p>
              </div>

              <div className="border-border bg-card/30 rounded-lg border p-5">
                <div className="text-foreground mb-2 flex items-center gap-2.5 text-sm font-semibold">
                  <Sparkles className="text-frozen-cyan h-4 w-4" />
                  <span>Documentation Rigor</span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
                  We believe incomplete documentation is an engineering defect. Our docs
                  are validated by automated link checkers, frontmatter tests, and
                  continuous integration.
                </p>
              </div>
            </div>
          </section>

          {/* Open Source Commitment */}
          <section className="border-frozen-cyan/30 bg-frozen-secondary/40 rounded-xl border p-6 md:p-8">
            <h2 className="text-foreground mb-3 text-xl font-bold">
              Open-Source Licensing & Community
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              All FrozenLab projects are published under permissive open-source licenses
              (predominantly MIT). We do not lock features behind proprietary enterprise
              tiers or inject telemetry backchannels.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="sm">
                <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                  <GithubIcon className="mr-1.5 h-4 w-4" />
                  <span>View GitHub Organization</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/projects">Explore Projects</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
