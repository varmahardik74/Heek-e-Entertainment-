import Link from "next/link";
import { navRoutes } from "@/lib/footer-links";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl flex-wrap items-center gap-4 px-4 py-3"
      >
        <Link href="/" className="mr-4 font-semibold">
          Heek-e
        </Link>
        {navRoutes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="text-sm text-gray-700 hover:text-black"
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
