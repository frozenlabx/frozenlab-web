import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';
import { navigationConfig } from '@/config/navigation';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="border-border/80 bg-background/60 w-full border-t backdrop-blur-sm">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2.5">
              <Image
                src="/images/branding/logo-mark.svg"
                alt="FrozenLab emblem"
                width={28}
                height={28}
              />
              <span className="text-foreground text-lg font-bold">
                Frozen<span className="text-frozen-cyan">Lab</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              {siteConfig.tagline} Building open-source developer tools, reusable
              libraries, and practical engineering solutions.
            </p>
            <div className="text-muted-foreground flex items-center space-x-3 pt-2 text-xs">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground flex items-center gap-1.5 transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                <span>github.com/frozenlabx</span>
              </Link>
            </div>
          </div>

          {/* Navigation Categories */}
          {navigationConfig.footerNav.map((col) => (
            <div key={col.category} className="flex flex-col space-y-3">
              <span className="text-foreground text-xs font-semibold tracking-wider uppercase">
                {col.category}
              </span>
              <ul className="space-y-2 text-sm">
                {col.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noreferrer' : undefined}
                      className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
                    >
                      <span>{item.title}</span>
                      {item.external && <ExternalLink className="h-3 w-3 opacity-60" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-border/60 text-muted-foreground mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 text-xs sm:flex-row">
          <p>
            FrozenLab open-source initiative. Licensed under{' '}
            <Link
              href="https://github.com/frozenlabx/frozenlab-web/blob/main/LICENSE"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground underline"
            >
              MIT License
            </Link>
            .
          </p>
          <p className="text-muted-foreground/80 font-mono text-[11px]">
            statically generated &middot; zero runtime server
          </p>
        </div>
      </div>
    </footer>
  );
}
