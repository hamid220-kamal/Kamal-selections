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
      description: "Everyday silhouettes to occasion-ready styles",
      image: "/images/women/categories/dresses.jpg",
      altText: "Women's Dresses Collection at Kamal Selections Shadnagar",
      featured: true,
    },
    {
      id: "kurtis",
      name: "Kurtis",
      slug: "kurtis",
      description: "Comfortable daily wear kurtis, printed designs & embroidered styles",
      image: "/images/women/categories/kurtis.jpg",
      altText: "Women's Kurtis Collection in Shadnagar",
      featured: true,
    },
    {
      id: "tops",
      name: "Tops",
      slug: "tops",
      description: "Trendy tops, tunics and casual shirts for everyday comfort",
      image: "/images/women/categories/tops.jpg",
      altText: "Women's Tops & Tunics Collection at Kamal Selections",
    },
    {
      id: "leggings",
      name: "Leggings",
      slug: "leggings",
      description: "Premium stretchable leggings in vibrant colors and perfect fits",
      image: "/images/women/categories/leggings.jpg",
      altText: "Women's Leggings Collection in Shadnagar",
    },
    {
      id: "burqa",
      name: "Burqa",
      slug: "burqa",
      description: "Modest, comfortable and high-quality burqas and abayas",
      image: "/images/women/categories/burqa.jpg",
      altText: "Burqa and Abaya Collection at Kamal Selections Shadnagar",
    },
    {
      id: "3piece-sets",
      name: "3-Piece Sets",
      slug: "3piece-sets",
      description: "Complete 3-piece ethnic suit sets with matching dupatta",
      image: "/images/women/categories/three-piece-sets.jpg",
      altText: "3-Piece Ethnic Suit Sets Collection at Kamal Selections",
      featured: true,
    },
    {
      id: "party-wear",
      name: "Party Wear",
      slug: "party-wear",
      description: "Special occasion gowns, heavy designer kurtis and festive outfits",
      image: "/images/women/categories/party-wear.jpg",
      altText: "Women's Party Wear Collection in Shadnagar",
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
      title: "Embroidered Kurti Set",
      category: "Kurtis",
      descriptor: "Soft cotton with delicate neckline detailing",
      aspect: "portrait",
      image: "/images/women/products/garment-001.jpg",
      altText: "Embroidered Kurti Set at Kamal Selections Shadnagar",
    },
    {
      id: "look-2",
      title: "Flared Occasion Dress",
      category: "Dresses",
      descriptor: "Comfortable silhouette with graceful drape",
      aspect: "tall",
      image: "/images/women/products/garment-005.jpg",
      altText: "Flared Occasion Dress in Shadnagar",
    },
    {
      id: "look-3",
      title: "Texture & Weave Appreciation",
      category: "Detail",
      descriptor: "Close-up of intricate threadwork and fabric quality",
      aspect: "detail",
      image: "/images/women/craftsmanship/detail-fabric.jpg",
      altText: "Close-up textile embroidery detail",
    },
    {
      id: "look-4",
      title: "Complete 3-Piece Ethnic Suit",
      category: "3-Piece Sets",
      descriptor: "Matching kameez, pants & dupatta ensemble",
      aspect: "square",
      image: "/images/women/products/garment-004.jpg",
      altText: "Complete 3-Piece Ethnic Suit Set",
    },
    {
      id: "look-5",
      title: "Festive Party Wear Gown",
      category: "Party Wear",
      descriptor: "Rich color tones for special celebrations",
      aspect: "portrait",
      image: "/images/women/products/garment-003.jpg",
      altText: "Festive Party Wear Gown at Kamal Selections",
    },
    {
      id: "look-6",
      title: "Contemporary Casual Top",
      category: "Tops",
      descriptor: "Breathable fabric suited for warm daily routines",
      aspect: "tall",
      image: "/images/women/products/garment-002.jpg",
      altText: "Contemporary Casual Top in Shadnagar",
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
