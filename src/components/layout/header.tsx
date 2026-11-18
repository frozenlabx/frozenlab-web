'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GithubIcon, LogoMark } from '@/components/ui/icons';
import { navigationConfig } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { MobileNav } from '@/components/layout/mobile-nav';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-border/80 bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur-md transition-colors">
      <div className="container flex h-16 items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center space-x-2.5 transition-opacity hover:opacity-90"
            aria-label="FrozenLab Home"
          >
            <LogoMark className="text-foreground h-7 w-auto" />
            <div className="flex flex-col">
              <span className="text-foreground text-lg font-bold tracking-tight">
                Frozen<span className="text-frozen-cyan">Lab</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-1 pl-4 md:flex"
            aria-label="Main Navigation"
          >
            {navigationConfig.mainNav.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                    active
                      ? 'bg-frozen-secondary/70 text-frozen-cyan font-semibold'
                      : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground',
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Action Icons & Organization Links */}
        <div className="flex items-center gap-2.5">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground hidden gap-1.5 text-xs font-medium sm:inline-flex"
          >
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="FrozenLab GitHub Organization"
            >
              <GithubIcon className="h-4 w-4" />
              <span>frozenlabx</span>
            </Link>
          </Button>

          <ThemeToggle />

          <Button
            asChild
            variant="default"
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hidden h-8 px-3.5 text-xs font-semibold lg:inline-flex"
          >
            <Link href="/docs">Docs Portal</Link>
          </Button>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
