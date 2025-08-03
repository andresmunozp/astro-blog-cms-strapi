export default interface Post {
  id: number;
  title: string;
  description: string;
  slug: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  featuredImage: FeaturedImage;
}
export interface FeaturedImage {
  id: number;
  url: string;
  alternativeText?: string;
}