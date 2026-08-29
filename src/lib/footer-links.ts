export type SiteRoute = {
  href: string;
  label: string;
};

export const navRoutes: SiteRoute[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/admin", label: "Admin" },
];

export const footerRoutes: SiteRoute[] = [
  ...navRoutes,
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/fulfillment-policy", label: "Fulfillment Policy" },
  { href: "/services/example", label: "Service Detail" },
  { href: "/admin/login", label: "Admin Login" },
];
