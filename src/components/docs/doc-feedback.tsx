import * as React from 'react';
import Link from 'next/link';
import { Edit3, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface DocFeedbackProps {
  filePath?: string;
  pageTitle?: string;
}

export function DocFeedback({ filePath, pageTitle }: DocFeedbackProps) {
  const editUrl = filePath
    ? `${siteConfig.links.repo}/blob/main/content/docs/${filePath}`
    : `${siteConfig.links.repo}/blob/main/content/docs`;

  const issueUrl = `${siteConfig.links.repo}/issues/new?title=${encodeURIComponent(
    `[Doc Issue] ${pageTitle ?? 'Documentation feedback'}`,
  )}&labels=documentation`;

  return (
    <div className="border-border text-muted-foreground mt-12 flex flex-wrap items-center justify-between gap-4 border-t pt-6 text-xs">
      <Link
        href={editUrl}
        target="_blank"
        rel="noreferrer"
        className="hover:text-frozen-cyan inline-flex items-center gap-1.5 transition-colors"
      >
        <Edit3 className="h-3.5 w-3.5" />
        <span>Edit this page on GitHub</span>
      </Link>

      <Link
        href={issueUrl}
        target="_blank"
        rel="noreferrer"
        className="hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
      >
        <AlertCircle className="h-3.5 w-3.5" />
        <span>Report a documentation issue</span>
      </Link>
    </div>
  );
}
