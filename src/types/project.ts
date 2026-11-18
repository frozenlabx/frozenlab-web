export type ProjectCategory =
  | 'Observability & Logging'
  | 'Asset Processing'
  | 'Testing & UI'
  | 'Developer Tooling'
  | 'Infrastructure';

export interface ProjectReleaseInfo {
  version: string;
  releaseDate?: string;
  status: 'planning' | 'alpha' | 'beta' | 'stable';
  changelogUrl?: string;
}

export interface Project {
  /** Unique project identifier */
  id: string;
  /** URL slug used in routes (/projects/[slug] and /docs/[slug]) */
  slug: string;
  /** Display name of the project */
  name: string;
  /** Short, impactful one or two-sentence description */
  description: string;
  /** Full summary for project detail page */
  summary: string;
  /** Functional category */
  category: ProjectCategory;
  /** Canonical GitHub repository URL */
  githubUrl: string;
  /** Canonical documentation entry route */
  docsUrl: string;
  /** Optional external website or demo URL */
  websiteUrl?: string;
  /** Path to project logo/icon in public directory */
  logo: string;
  /** Technology tags and badges */
  tags: string[];
  /** Whether the project is highlighted on homepage */
  featured: boolean;
  /** Optional release status and versioning metadata */
  releaseInfo?: ProjectReleaseInfo;
  /** Key engineering highlights (unfabricated, factual architecture goals) */
  highlights?: string[];
}
