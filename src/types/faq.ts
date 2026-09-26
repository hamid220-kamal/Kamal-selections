export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'Store' | "Women's Wear" | "Kids Wear" | 'Website / Online Presence';
}

export interface FAQCategoryGroup {
  categoryName: string;
  items: FAQItem[];
}
