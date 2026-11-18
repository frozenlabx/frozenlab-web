import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { BlogPost } from '@/types/blog';

const BLOG_DIRECTORY = path.join(process.cwd(), 'content/blog');

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIRECTORY)) {
    return [];
  }

  const fileNames = fs.readdirSync(BLOG_DIRECTORY);
  const posts: BlogPost[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md') && !fileName.endsWith('.mdx')) {
      continue;
    }

    const slug = fileName.replace(/\.mdx?$/, '');
    const fullPath = path.join(BLOG_DIRECTORY, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const words = content.trim().split(/\s+/).length;
    const readingTime = `${Math.ceil(words / 200)} min read`;

    posts.push({
      slug,
      title: data.title ?? 'Untitled Post',
      description: data.description ?? '',
      date: data.date ? String(data.date) : new Date().toISOString().split('T')[0]!,
      author: {
        name: data.author?.name ?? 'FrozenLab Engineering',
        role: data.author?.role ?? 'Core Initiative',
      },
      tags: Array.isArray(data.tags) ? data.tags : [],
      readingTime,
      content,
    });
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllBlogPosts();
  return posts.find((post) => post.slug === slug);
}
