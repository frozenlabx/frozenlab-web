import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';
import { formatDate } from '@/lib/utils';
import { Newspaper, Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering Blog',
  description:
    'Engineering notes, architecture decisions, and project updates from FrozenLab.',
};

export default function BlogListingPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <div className="text-frozen-cyan mb-2 inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase">
            <Newspaper className="h-3.5 w-3.5" />
            <span>FrozenLab Dispatches</span>
          </div>
          <h1 className="text-foreground text-3xl font-extrabold tracking-tight sm:text-4xl">
            Engineering Blog
          </h1>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed sm:text-base">
            In-depth architectural post-mortems, tooling design decisions, and practical
            software engineering principles.
          </p>
        </div>

        {/* Post List */}
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group border-border bg-card/50 hover:border-frozen-cyan/40 hover:bg-frozen-secondary/30 rounded-xl border p-6 backdrop-blur-sm transition-all md:p-8"
            >
              <div className="text-muted-foreground mb-3 flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </span>
                {post.readingTime && (
                  <>
                    <span>&middot;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readingTime}
                    </span>
                  </>
                )}
                <span>&middot;</span>
                <span className="text-frozen-cyan">{post.author.name}</span>
              </div>

              <h2 className="text-foreground group-hover:text-frozen-cyan mb-3 text-xl font-bold tracking-tight transition-colors sm:text-2xl">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                {post.description}
              </p>

              <div className="border-border/60 flex items-center justify-between gap-4 border-t pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted/60 text-muted-foreground rounded px-2 py-0.5 font-mono text-[11px]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-frozen-cyan inline-flex shrink-0 items-center gap-1 text-xs font-semibold hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
