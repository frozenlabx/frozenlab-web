import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { source } from '@/lib/source';
import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { DocFeedback } from '@/components/docs/doc-feedback';
import type { TableOfContents } from 'fumadocs-core/server';

interface DocPageData {
  title: string;
  description?: string;
  body: React.ComponentType<{ components?: Record<string, unknown> }>;
  toc?: TableOfContents;
  full?: boolean;
}

interface DocPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = source.getPage(slug);

  if (!page) {
    return {
      title: 'Documentation Not Found',
    };
  }

  const data = page.data as unknown as DocPageData;

  return {
    title: `${data.title} | FrozenLab Documentation`,
    description: data.description,
  };
}

const mdxComponents = {
  ...defaultMdxComponents,
  img: (props: React.ComponentProps<typeof defaultMdxComponents.img>) => {
    const rawProps = props as Record<string, unknown>;
    const placeholder = rawProps.blurDataURL ? rawProps.placeholder : undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const DefaultImg = defaultMdxComponents.img as React.ComponentType<any>;
    return <DefaultImg {...props} placeholder={placeholder} />;
  },
};

export default async function Page({ params }: DocPageProps) {
  const { slug } = await params;
  const page = source.getPage(slug);

  if (!page) {
    notFound();
  }

  const data = page.data as unknown as DocPageData;
  const MDX = data.body;

  return (
    <DocsPage toc={data.toc} full={data.full}>
      <DocsTitle>{data.title}</DocsTitle>
      {data.description && <DocsDescription>{data.description}</DocsDescription>}
      <DocsBody>
        <MDX components={mdxComponents} />
        <DocFeedback filePath={page.file.path} pageTitle={data.title} />
      </DocsBody>
    </DocsPage>
  );
}
