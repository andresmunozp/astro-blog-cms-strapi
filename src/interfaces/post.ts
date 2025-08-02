export default interface Post {
  id: number;
  Title: string;
  Description: string;
  slug: string;
  Content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  FeaturedImage: FeaturedImage[];
}

export interface FeaturedImage {
  id: number;
  url: string;
}