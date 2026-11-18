import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

/**
 * Prepends NEXT_PUBLIC_BASE_PATH (e.g. '/frozenlab-web') to root-relative static asset paths
 * when deployed under a subpath on GitHub Pages with static export.
 */
export function withBasePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!path) return path;
  if (!path.startsWith('/')) return path;
  if (basePath && path.startsWith(basePath)) return path;
  return `${basePath}${path}`;
}
