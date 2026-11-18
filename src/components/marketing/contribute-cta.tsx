import * as React from 'react';
import Link from 'next/link';
import { GitPullRequest, ArrowRight, BookOpen } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

export function ContributeCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="border-frozen-cyan/30 from-frozen-secondary/60 to-frozen-bg/90 relative overflow-hidden rounded-2xl border bg-gradient-to-b p-8 backdrop-blur-xl md:p-12">
          {/* Subtle Glow */}
          <div
            className="bg-frozen-cyan/10 pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full blur-[90px]"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl">
            <div className="border-frozen-cyan/30 bg-frozen-cyan/10 text-frozen-cyan mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs">
              <GitPullRequest className="h-3.5 w-3.5" />
              <span>Open for Contribution</span>
            </div>

            <h2 className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl">
              Build with FrozenLab
            </h2>

            <p className="text-muted-foreground mt-3 text-sm leading-relaxed sm:text-base">
              Whether you are refining documentation, filing reproduction test cases, or
              proposing new developer tools, FrozenLab welcomes constructive open-source
              contributions from developers worldwide.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="default" className="gap-2 font-semibold">
                <Link
                  href="https://github.com/frozenlabx/frozenlab-web/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Contribution Guide</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="default" className="gap-2">
                <Link href="/docs">
                  <BookOpen className="text-frozen-cyan h-4 w-4" />
                  <span>Documentation Portal</span>
                </Link>
              </Button>

              <Button asChild variant="ghost" size="default" className="gap-2">
                <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub Organization</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
