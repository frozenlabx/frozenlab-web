import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Heart, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section className="border-border/60 relative overflow-hidden border-b pt-16 pb-16 md:pt-24 md:pb-24">
      {/* Background ambient gradient glow */}
      <div
        className="bg-frozen-cyan/10 dark:bg-frozen-cyan/15 pointer-events-none absolute -top-40 left-1/2 h-[450px] w-[800px] -translate-x-1/2 rounded-full blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative z-10 container flex flex-col items-center text-center">
        {/* Initiative Badge */}
        <div className="border-frozen-cyan/30 bg-frozen-secondary/60 text-frozen-cyan mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs backdrop-blur-md">
          <Sparkles className="text-frozen-cyan h-3.5 w-3.5" />
          <span className="font-mono font-medium">
            Independent Open-Source Initiative · 100% Free Forever
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-foreground max-w-4xl text-4xl leading-[1.12] font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Engineering tools for{' '}
          <span className="from-frozen-cyan via-frozen-cyan-light bg-gradient-to-r to-white bg-clip-text text-transparent">
            people who build.
          </span>
        </h1>

        {/* Value Proposition & Free Statement */}
        <p className="text-muted-foreground mt-6 max-w-3xl text-base leading-relaxed sm:text-lg md:text-xl">
          Deterministic developer utilities, real-time mobile SQLite inspection, and
          practical asset guardrails. Every FrozenLab tool is{' '}
          <span className="text-foreground decoration-frozen-cyan/50 font-semibold underline decoration-2 underline-offset-4">
            100% free and open source forever
          </span>
          . No subscriptions, zero feature gating, and no cloud telemetry.
        </p>

        {/* Value Pillars / Trust Indicators */}
        <div className="text-muted-foreground mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium sm:text-sm">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            100% Free & MIT Licensed
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            Zero Paywalls or Gated Tiers
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            100% Offline & Private
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            Community & Sponsor Funded
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="shadow-frozen-cyan/10 h-11 gap-2 px-6 font-semibold shadow-lg"
          >
            <Link href="/projects">
              <span>Explore Free Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-foreground h-11 gap-2 border-pink-500/40 px-6 font-semibold hover:border-pink-500/70 hover:bg-pink-500/10 hover:text-pink-400"
          >
            <Link href={siteConfig.links.sponsor} target="_blank" rel="noreferrer">
              <Heart className="h-4 w-4 fill-pink-500 text-pink-500" />
              <span>Sponsor Initiative</span>
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="h-11 gap-2 px-6">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <GithubIcon className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
          </Button>
        </div>

        {/* Sponsor Request Showcase Card */}
        <div className="border-border/70 bg-card/60 hover:border-border mt-12 w-full max-w-3xl rounded-2xl border p-5 text-left shadow-xl backdrop-blur-xl transition-all sm:p-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-start gap-3.5">
              <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-pink-500/25 bg-pink-500/10 text-pink-500">
                <Heart className="h-5 w-5 fill-current" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-foreground text-sm font-bold sm:text-base">
                    Support Free Open-Source Developer Tooling
                  </h2>
                  <span className="bg-frozen-secondary text-frozen-cyan border-frozen-cyan/30 rounded-full border px-2 py-0.5 font-mono text-[10px] font-medium">
                    Community Funded
                  </span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
                  FrozenLab builds tooling like <strong>VetroLog</strong>,{' '}
                  <strong>UI Guard</strong>, and <strong>Image Quality Guard</strong> for
                  everyone at zero cost. Sponsoring our initiative directly supports
                  maintenance, cross-platform testing infrastructure, and new engineering
                  tools.
                </p>
              </div>
            </div>

            <Button
              asChild
              size="sm"
              className="shrink-0 gap-1.5 bg-pink-600 font-semibold text-white shadow-md shadow-pink-500/20 hover:bg-pink-500"
            >
              <Link href={siteConfig.links.sponsor} target="_blank" rel="noreferrer">
                <Heart className="h-3.5 w-3.5 fill-current" />
                <span>Become a Sponsor</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
