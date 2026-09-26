export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  altText: string;
  featured?: boolean;
}

export interface CollectionData {
  title: string;
  eyebrow: string;
  description: string;
  categories: CategoryItem[];
}
