import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/blog';
import { formatDate } from '@/lib/utils';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${post.title} — FrozenLab Engineering Blog`,
    description: post.description,
    openGraph: {
      title: `${post.title} | FrozenLab`,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-3xl">
        {/* Back Link */}
        <Link
          href="/blog"
          className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-1.5 text-xs transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to All Articles</span>
        </Link>

        {/* Article Header */}
        <header className="border-border mb-10 border-b pb-8">
          <div className="text-muted-foreground mb-4 flex flex-wrap items-center gap-3 font-mono text-xs">
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
            <span className="text-frozen-cyan flex items-center gap-1">
              <User className="h-3.5 w-3.5" />
              {post.author.name}
            </span>
          </div>

          <h1 className="text-foreground mb-4 text-3xl leading-[1.15] font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {post.title}
          </h1>

          <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
            {post.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="border-border bg-muted/60 text-muted-foreground rounded border px-2.5 py-0.5 font-mono text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content Body */}
        <div className="prose prose-slate dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-frozen-cyan prose-pre:bg-frozen-bg prose-pre:border prose-pre:border-border text-foreground/90 max-w-none font-sans leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </div>
    </div>
  );
}
