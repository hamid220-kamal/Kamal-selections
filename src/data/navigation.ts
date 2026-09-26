import { NavigationConfig } from "@/types/navigation";

export const navigationData: NavigationConfig = {
  primary: [
    { label: "Home", href: "/" },
    { label: "Women's Wear", href: "/women" },
    { label: "Kids Wear", href: "/kids" },
    { label: "About Us", href: "/about" },
    { label: "Our Store", href: "/store" },
    { label: "Contact", href: "/contact" },
  ],
  secondary: [
    { label: "Why Us", href: "/why-kamal-selections" },
    { label: "FAQ", href: "/faq" },
    { label: "Size Guide", href: "/size-guide" },
  ],
  footer: {
    explore: [
      { label: "Home", href: "/" },
      { label: "Women's Wear", href: "/women" },
      { label: "Kids Wear", href: "/kids" },
      { label: "About Us", href: "/about" },
      { label: "Why Kamal Selections", href: "/why-kamal-selections" },
    ],
    visit: [
      { label: "Our Store", href: "/store" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Size Guide", href: "/size-guide" },
    ],
    womens: [
      { label: "Dresses", href: "/women#dresses" },
      { label: "Kurtis", href: "/women#kurtis" },
      { label: "Tops", href: "/women#tops" },
      { label: "Leggings", href: "/women#leggings" },
      { label: "Burqa", href: "/women#burqa" },
      { label: "3-Piece Sets", href: "/women#3piece-sets" },
      { label: "Party Wear", href: "/women#party-wear" },
    ],
    kids: [
      { label: "Girls Wear", href: "/kids#girls-wear" },
      { label: "Boys Wear", href: "/kids#boys-wear" },
      { label: "Frocks", href: "/kids#frocks" },
      { label: "Kids Sets", href: "/kids#kids-sets" },
    ],
  },
};
