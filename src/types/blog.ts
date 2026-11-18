export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: {
    name: string;
    role?: string;
  };
  tags: string[];
  readingTime?: string;
  content: string;
}
