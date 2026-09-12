export type SiteRoute = {
  href: string;
  label: string;
};

export const navRoutes: SiteRoute[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const legalRoutes: SiteRoute[] = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/fulfillment-policy", label: "Fulfillment Policy" },
];
