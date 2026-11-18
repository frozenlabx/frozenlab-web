import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BookOpen, Layers, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center py-20">
        <div className="container max-w-lg text-center">
          <div className="border-border bg-card/60 rounded-2xl border p-8 shadow-xl backdrop-blur-md md:p-12">
            <span className="text-frozen-cyan font-mono text-xs tracking-widest uppercase">
              Error 404
            </span>
            <h1 className="text-foreground mt-2 mb-3 text-3xl font-extrabold tracking-tight">
              Page Not Found
            </h1>
            <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
              The documentation page, project asset, or route you requested does not exist
              or may have moved.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="default" className="w-full gap-2 sm:w-auto">
                <Link href="/">
                  <Home className="h-4 w-4" />
                  <span>Return Home</span>
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="default"
                className="w-full gap-2 sm:w-auto"
              >
                <Link href="/docs">
                  <BookOpen className="text-frozen-cyan h-4 w-4" />
                  <span>Docs Portal</span>
                </Link>
              </Button>
            </div>

            <div className="border-border text-muted-foreground mt-6 flex items-center justify-center gap-4 border-t pt-6 text-xs">
              <Link
                href="/projects"
                className="hover:text-foreground inline-flex items-center gap-1"
              >
                <Layers className="h-3 w-3" />
                <span>All Projects</span>
              </Link>
              <span>&middot;</span>
              <Link href="/blog" className="hover:text-foreground">
                Engineering Blog
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
