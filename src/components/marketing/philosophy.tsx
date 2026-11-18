import * as React from 'react';
import { Cpu, ShieldCheck, FileCode, GitPullRequest } from 'lucide-react';

const PRINCIPLES = [
  {
    icon: Cpu,
    title: 'Deterministic & Low-Overhead',
    description:
      'Utilities designed to run with predictable resource consumption. Zero hidden threads, minimal memory allocations, and fast execution paths.',
  },
  {
    icon: ShieldCheck,
    title: 'Dependency Minimalism',
    description:
      'We favor runtime standard library primitives over fragile cascades of external micro-packages, defending against supply-chain risk and install bloat.',
  },
  {
    icon: FileCode,
    title: 'Documentation As Core Software',
    description:
      'Tooling is only as strong as its documentation. We build documentation with the same rigorous CI checks, type safety, and version control as code.',
  },
  {
    icon: GitPullRequest,
    title: 'Transparent Contribution Workflows',
    description:
      'Every repository is developed out in the open. External engineers can improve docs, patch defects, and discuss architectural decisions through GitHub PRs.',
  },
];

export function Philosophy() {
  return (
    <section className="border-border/60 border-b py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-frozen-cyan font-mono text-xs tracking-wider uppercase">
            Our Standard
          </span>
          <h2 className="text-foreground mt-2 text-3xl font-bold tracking-tight">
            Engineering Philosophy
          </h2>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
            We build open-source tools with the same discipline, architecture, and rigor
            demanded by mission-critical systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {PRINCIPLES.map((principle) => {
            const Icon = principle.icon;
            return (
              <div
                key={principle.title}
                className="border-border bg-card/40 hover:border-frozen-cyan/40 rounded-xl border p-6 backdrop-blur-sm transition-all md:p-8"
              >
                <div className="border-frozen-cyan/30 bg-frozen-secondary text-frozen-cyan mb-5 flex h-10 w-10 items-center justify-center rounded-lg border">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
