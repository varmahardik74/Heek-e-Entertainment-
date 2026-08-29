import Link from "next/link";
import { navRoutes } from "@/lib/footer-links";

const serviceLinks = [
  { href: "/services/ppc-advertising", label: "PPC Advertising" },
  { href: "/services/poster-design", label: "Poster Design" },
  { href: "/services/content-creation", label: "Content Creation" },
  { href: "/services/video-marketing", label: "Video Marketing" },
  { href: "/services/brand-identity", label: "Brand Identity" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/fulfillment-policy", label: "Fulfillment Policy" },
  { href: "/admin/login", label: "Admin Login" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200">
      <div className="mx-auto flex max-w-5xl flex-wrap gap-4 px-4 py-6">
        {navRoutes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="text-sm text-gray-600 hover:text-black"
          >
            {route.label}
          </Link>
        ))}
        {serviceLinks.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="text-sm text-gray-600 hover:text-black"
          >
            {route.label}
          </Link>
        ))}
        {legalLinks.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="text-sm text-gray-600 hover:text-black"
          >
            {route.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
