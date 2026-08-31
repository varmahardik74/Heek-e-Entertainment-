import Link from "next/link";
import { navRoutes } from "@/lib/footer-links";

export default function Footer() {
  return <footer className="bg-primary text-primary-foreground"><div className="container-shell grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:py-20"><div><Link href="/" className="text-2xl font-black tracking-[-.08em]">heek-e</Link><p className="mt-5 max-w-xs leading-6 text-primary-foreground/70">Strategy, creative, and campaigns for brands ready to be remembered.</p></div><div><p className="eyebrow text-primary-foreground/50">Explore</p><div className="mt-4 flex flex-col gap-3">{navRoutes.map((route) => <Link key={route.href} href={route.href} className="text-sm text-primary-foreground/75 hover:text-primary-foreground">{route.label}</Link>)}</div></div><div><p className="eyebrow text-primary-foreground/50">Let&apos;s talk</p><Link href="/contact" className="mt-4 inline-block text-xl font-semibold underline decoration-accent decoration-2 underline-offset-4">Start a project ↗</Link><p className="mt-10 text-xs text-primary-foreground/50">© {new Date().getFullYear()} Heek-E. All rights reserved.</p></div></div></footer>;
}
