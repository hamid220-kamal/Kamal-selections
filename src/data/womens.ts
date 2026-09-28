import { CategoryItem } from "@/types/category";

export interface EditorialData {
  label: string;
  headline: string;
  subheadline: string;
  image: string;
  altText: string;
}

export interface CollectionGridItem {
  id: string;
  title: string;
  category: string;
  descriptor: string;
  aspect: "portrait" | "tall" | "detail" | "square";
  image: string;
  altText: string;
}

export interface JourneyStage {
  number: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  altText: string;
}

export interface StyleDetailData {
  heading: string;
  subheading: string;
  image: string;
  altText: string;
  highlights: string[];
}

export interface WomensFAQItem {
  question: string;
  answer: string;
}

export interface WomensPageData {
  title: string;
  eyebrow: string;
  description: string;
  categories: CategoryItem[];
  editorial: EditorialData;
  collectionGrid: CollectionGridItem[];
  styleJourney: JourneyStage[];
  styleDetail: StyleDetailData;
  faqs: WomensFAQItem[];
}

export const womensData: WomensPageData = {
  title: "Women's Wear in Shadnagar",
  eyebrow: "KAMAL SELECTIONS · WOMEN'S WEAR",
  description:
    "Explore women's fashion designed for everyday comfort, celebrations and everything in between.",
  categories: [
    {
      id: "dresses",
      name: "Dresses",
      slug: "dresses",
      description: "Everyday & Occasion Styles",
      image: "/images/women/categories/kamal-selections-womens-designer-dresses.jpg",
      altText: "Women's Dresses Style Showcase at Kamal Selections Shadnagar",
      featured: true,
    },
    {
      id: "kurtis",
      name: "Kurtis",
      slug: "kurtis",
      description: "Comfortable Everyday Fashion",
      image: "/images/women/categories/kamal-selections-womens-embroidered-kurtis.jpg",
      altText: "Women's Kurtis Style Showcase in Shadnagar",
      featured: true,
    },
    {
      id: "tops",
      name: "Tops",
      slug: "tops",
      description: "Casual & Trendy Styles",
      image: "/images/women/categories/kamal-selections-womens-casual-trendy-tops.jpg",
      altText: "Women's Tops & Tunics Style Showcase at Kamal Selections",
    },
    {
      id: "leggings",
      name: "Leggings",
      slug: "leggings",
      description: "Everyday Essentials",
      image: "/images/women/categories/kamal-selections-womens-premium-leggings.jpg",
      altText: "Women's Leggings Style Showcase in Shadnagar",
    },
    {
      id: "burqa",
      name: "Burqa",
      slug: "burqa",
      description: "Modest Women's Wear",
      image: "/images/women/categories/kamal-selections-womens-modest-burqa-collection.jpg",
      altText: "Modest Burqa & Abaya Style Showcase at Kamal Selections Shadnagar",
    },
    {
      id: "3piece-sets",
      name: "3-Piece Sets",
      slug: "3piece-sets",
      description: "Coordinated Ethnic Styles",
      image: "/images/women/categories/kamal-selections-womens-three-piece-ethnic-suits.jpg",
      altText: "3-Piece Ethnic Suit Sets Style Showcase at Kamal Selections",
      featured: true,
    },
    {
      id: "party-wear",
      name: "Party Wear",
      slug: "party-wear",
      description: "Special Occasion Looks",
      image: "/images/women/categories/kamal-selections-womens-sequined-partywear.jpg",
      altText: "Women's Party Wear Style Showcase in Shadnagar",
      featured: true,
    },
  ],
  editorial: {
    label: "WOMEN'S COLLECTION",
    headline: "FROM EVERYDAY TO ELEGANT.",
    subheadline: "Styles that fit naturally into the moments that make up your day.",
    image: "/images/women/editorial/featured-editorial.jpg",
    altText: "Kamal Selections Women's Fashion Editorial Showcase",
  },
  collectionGrid: [
    {
      id: "look-1",
      title: "Mustard Embroidered Kurti",
      category: "Kurtis",
      descriptor: "A bright everyday kurti with detailed embroidery",
      aspect: "portrait",
      image: "/images/women/products/garment-001.jpg",
      altText: "Mustard embroidered kurti at Kamal Selections Shadnagar",
    },
    {
      id: "look-2",
      title: "Navy Embellished Lehenga",
      category: "Party Wear",
      descriptor: "A richly detailed look for celebrations and evening events",
      aspect: "tall",
      image: "/images/women/products/garment-002.jpg",
      altText: "Navy embellished lehenga for party wear",
    },
    {
      id: "look-3",
      title: "Floral Occasion Dress",
      category: "Dresses",
      descriptor: "A softly flared dress with an all-over floral print",
      aspect: "tall",
      image: "/images/women/products/garment-005.jpg",
      altText: "Pink floral flared occasion dress",
    },
    {
      id: "look-4",
      title: "Lavender Embroidered Suit",
      category: "3-Piece Sets",
      descriptor: "A coordinated three-piece suit with a matching dupatta",
      aspect: "square",
      image: "/images/women/products/garment-004.jpg",
      altText: "Lavender embroidered three-piece ethnic suit set",
    },
    {
      id: "look-5",
      title: "Embroidered Festive Lehenga",
      category: "Party Wear",
      descriptor: "A deep blue embellished ensemble for special occasions",
      aspect: "portrait",
      image: "/images/women/products/garment-003.jpg",
      altText: "Blue embroidered festive lehenga at Kamal Selections",
    },
    {
      id: "look-6",
      title: "Mustard Three-Piece Suit",
      category: "3-Piece Sets",
      descriptor: "A warm-toned coordinated set with fine embroidery",
      aspect: "tall",
      image: "/images/women/products/garment-006.jpg",
      altText: "Mustard embroidered three-piece suit set",
    },
    {
      id: "look-7",
      title: "Everyday Tops & Tunics",
      category: "Tops",
      descriptor: "Easy-to-style tops and tunics for everyday wear",
      aspect: "portrait",
      image: "/images/women/categories/tops.jpg",
      altText: "Women's tops and tunics collection",
    },
    {
      id: "look-8",
      title: "Comfort Fit Leggings",
      category: "Leggings",
      descriptor: "Stretch-friendly essentials in a range of colors",
      aspect: "portrait",
      image: "/images/women/categories/leggings.jpg",
      altText: "Women's leggings collection",
    },
    {
      id: "look-9",
      title: "Modest Abaya & Burqa",
      category: "Burqa",
      descriptor: "Modest silhouettes with thoughtful finishing details",
      aspect: "portrait",
      image: "/images/women/categories/burqa.jpg",
      altText: "Modest burqa and abaya collection",
    },
  ],
  styleJourney: [
    {
      number: "01",
      tag: "EVERYDAY",
      title: "Comfortable Everyday Styles",
      description: "Soft cotton kurtis, easy tops & stretch leggings designed for effortless daily wear.",
      image: "/images/women/categories/kurtis.jpg",
      altText: "Everyday Women's Wear at Kamal Selections",
    },
    {
      number: "02",
      tag: "ELEVATED",
      title: "Outings & Family Gatherings",
      description: "Flared dresses, printed 3-piece sets, and stylish tunics for weekend outings and get-togethers.",
      image: "/images/women/categories/dresses.jpg",
      altText: "Elevated Outings Women's Fashion",
    },
    {
      number: "03",
      tag: "OCCASION",
      title: "Celebrations & Special Moments",
      description: "Dressier looks, intricate embroidered suits, and festive party wear for memorable occasions.",
      image: "/images/women/categories/party-wear.jpg",
      altText: "Special Occasion Women's Fashion in Shadnagar",
    },
  ],
  styleDetail: {
    heading: "Details Make the Difference.",
    subheading:
      "From fabric textures to thoughtful detailing, discover the elements that bring each look together.",
    image: "/images/women/craftsmanship/detail-fabric.jpg",
    altText: "Macro fashion detail showing embroidery and fabric weave",
    highlights: [
      "Intricate threadwork & neck accents",
      "Soft, breathable cotton & blend fabrics",
      "Thoughtful sleeve cuts & comfortable drapes",
      "Vibrant dye palettes built for lasting wear",
    ],
  },
  faqs: [
    {
      question: "What women's wear does Kamal Selections offer?",
      answer:
        "Kamal Selections offers a comprehensive range of women's clothing in Shadnagar, including daily wear kurtis, casual and flared dresses, tops, stretchable leggings, modest burqas and abayas, complete 3-piece ethnic suit sets, and festive party wear.",
    },
    {
      question: "Do you have dresses and kurtis?",
      answer:
        "Yes, we carry an extensive collection of daily wear cotton kurtis, printed designer kurtis, flared casual dresses, and semi-formal dresses.",
    },
    {
      question: "Do you sell 3-piece sets?",
      answer:
        "Yes, we offer complete 3-piece suit sets with matching kameez/top, trousers/salwar, and dupatta for an effortless ethnic ensemble.",
    },
    {
      question: "Do you have party wear?",
      answer:
        "Yes, our party wear selection features embellished kurtis, festive gowns, and dressy ethnic sets suitable for weddings, functions, and celebrations.",
    },
    {
      question: "Where can I see the collection?",
      answer:
        "You can visit our physical store located at Ibrahim Complex, Main Road, Shadnagar, Telangana to explore and try on our complete women's wear collection.",
    },
  ],
};
