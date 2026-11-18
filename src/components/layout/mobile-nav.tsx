'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { navigationConfig } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground hover:text-foreground h-9 w-9"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {open && (
        <div className="animate-in slide-in-from-top-2 border-border bg-background/95 fixed inset-x-0 top-16 z-50 border-b p-6 shadow-2xl backdrop-blur-xl duration-200">
          <nav className="flex flex-col space-y-4">
            {navigationConfig.mainNav.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex flex-col rounded-lg p-2.5 transition-colors',
                    active
                      ? 'bg-frozen-secondary text-frozen-cyan font-semibold'
                      : 'text-foreground/80 hover:bg-muted hover:text-foreground',
                  )}
                >
                  <span className="text-base font-medium">{item.title}</span>
                  {item.description && (
                    <span className="text-muted-foreground mt-0.5 text-xs">
                      {item.description}
                    </span>
                  )}
                </Link>
              );
            })}

            <div className="border-border flex flex-col space-y-3 border-t pt-4">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground flex items-center justify-between p-2 text-sm"
              >
                <span className="flex items-center gap-2">
                  <GithubIcon className="h-4 w-4" />
                  GitHub Organization
                </span>
                <ExternalLink className="h-3.5 w-3.5 opacity-60" />
              </Link>
              <Button asChild variant="default" className="w-full">
                <Link href="/docs">Explore Documentation</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
