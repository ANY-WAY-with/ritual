/** Shared content types for the Ditto homepage clone. */

export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface BrandLogo {
  name: string;
  src: string;
  /** rendered width in px (from source markup) */
  width?: number;
}

export interface FeatureRow {
  /** brand accent color for the square bullet + card tint */
  color: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  /** side the mockup image sits on at desktop */
  imageSide: "left" | "right";
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
  /** optional second ungrouped link list under the column */
  extraLinks?: FooterLink[];
}

export interface MarqueeItem {
  type: "word" | "icon";
  src: string;
  alt: string;
}
