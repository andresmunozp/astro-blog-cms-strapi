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
  categories?: Category[];
}
export interface FeaturedImage {
  id: number;
  url: string;
  alternativeText?: string;
}
export interface Category {
  id: number;
  documentId?: string;
  Name: string; // Strapi field name as provided
}
