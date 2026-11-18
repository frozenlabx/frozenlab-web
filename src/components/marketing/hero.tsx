import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section className="border-border/60 relative overflow-hidden border-b pt-20 pb-16 md:pt-28 md:pb-24">
      {/* Background ambient gradient glow */}
      <div
        className="bg-frozen-cyan/10 dark:bg-frozen-cyan/15 pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 container flex flex-col items-center text-center">
        {/* Initiative Badge */}
        <div className="border-frozen-cyan/30 bg-frozen-secondary/60 text-frozen-cyan mb-8 inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs backdrop-blur-md">
          <Sparkles className="text-frozen-cyan h-3.5 w-3.5" />
          <span className="font-mono font-medium">
            Independent Open-Source Initiative
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-foreground max-w-4xl text-4xl leading-[1.12] font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Engineering tools for{' '}
          <span className="from-frozen-cyan via-frozen-cyan-light bg-gradient-to-r to-white bg-clip-text text-transparent">
            people who build.
          </span>
        </h1>

        {/* Tagline / Positioning */}
        <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
          FrozenLab develops deterministic developer utilities, observability libraries,
          and practical asset guardrails. Minimal overhead. Clean code. Zero runtime
          fluff.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="h-11 gap-2 px-6 font-semibold">
            <Link href="/projects">
              <span>Explore Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="h-11 gap-2 px-6">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <GithubIcon className="h-4 w-4" />
              <span>GitHub Organization</span>
            </Link>
          </Button>
        </div>

        {/* Frosted Tech Terminal Preview */}
        <div className="mt-14 w-full max-w-2xl text-left">
          <div className="border-frozen-cyan/25 overflow-hidden rounded-xl border bg-[#0A1019]/90 shadow-2xl backdrop-blur-xl">
            {/* Terminal Top Bar */}
            <div className="border-border/80 bg-frozen-secondary/50 flex items-center justify-between border-b px-4 py-2.5">
              <div className="flex items-center space-x-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="text-muted-foreground flex items-center gap-1.5 font-mono text-xs">
                <Terminal className="text-frozen-cyan h-3.5 w-3.5" />
                <span>frozenlab ~ workspace</span>
              </div>
              <span className="w-10" />
            </div>

            {/* Terminal Body */}
            <div className="space-y-2 p-4 font-mono text-xs text-slate-300 sm:p-5 sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="text-frozen-cyan">$</span>
                <span className="text-slate-100">
                  pnpm dlx @frozenlab/image-quality-guard scan
                </span>
              </div>
              <div className="text-muted-foreground">
                [info] Inspecting 48 repository assets across /public/images...
              </div>
              <div className="text-emerald-400">
                [pass] All assets adhere to byte budget &lt; 250kb &middot; 0 regressions
                found
              </div>
              <div className="flex items-center gap-2 pt-2">
                <span className="text-frozen-cyan">$</span>
                <span className="text-slate-400">
                  # Engineering tools for people who build.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
