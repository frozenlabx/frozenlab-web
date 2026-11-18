import Image, { type ImageProps } from 'next/image';
import { withBasePath } from '@/lib/utils';

/**
 * Custom Next.js Image wrapper that ensures root-relative public asset paths
 * correctly include `basePath` under Next.js static exports (`output: 'export'`)
 * where `unoptimized: true` generates direct `<img>` tags.
 */
export function AppImage({ src, alt, ...props }: ImageProps) {
  const resolvedSrc = typeof src === 'string' ? withBasePath(src) : src;
  return <Image src={resolvedSrc} alt={alt} {...props} />;
}

export default AppImage;
