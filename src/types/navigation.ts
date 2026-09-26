export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NavSection {
  title: string;
  links: NavLink[];
}

export interface NavigationConfig {
  primary: NavLink[];
  secondary: NavLink[];
  footer: {
    explore: NavLink[];
    visit: NavLink[];
    womens: NavLink[];
    kids: NavLink[];
  };
}
