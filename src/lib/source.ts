import { docs } from '../../.source';
import { loader } from 'fumadocs-core/source';

const mdxSource = docs.toFumadocsSource();
const filesResolver = mdxSource.files as unknown;

export const source = loader({
  baseUrl: '/docs',
  source: {
    ...mdxSource,
    files: (typeof filesResolver === 'function'
      ? (filesResolver as () => unknown[])()
      : mdxSource.files) as never,
  },
});
