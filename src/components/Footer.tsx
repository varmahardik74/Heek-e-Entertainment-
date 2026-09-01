import Link from "next/link";
import { legalRoutes, navRoutes } from "@/lib/footer-links";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.25fr_1fr_1fr] md:py-24">
        <div className="flex flex-col justify-between gap-12">
          <div>
            <Link href="/" className="text-2xl font-black tracking-[-.08em] transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">heek-e</Link>
            <p className="mt-5 max-w-xs leading-6 text-muted-foreground">Strategy, creative, and campaigns for brands ready to be remembered.</p>
          </div>
          <p className="eyebrow text-muted-foreground">Independent. Intentional. In motion.</p>
        </div>
        <div>
          <p className="eyebrow text-accent">Explore</p>
          <nav aria-label="Footer navigation" className="mt-5 flex flex-col items-start gap-3">
            {navRoutes.map((route) => <Link key={route.href} href={route.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{route.label}</Link>)}
          </nav>
        </div>
        <div className="flex flex-col items-start">
          <p className="eyebrow text-accent">Let&apos;s talk</p>
          <p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">Have a sharp idea, a stuck brand, or a story worth making louder?</p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-3 rounded-full border border-primary/60 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Start a project <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="container-shell flex flex-col gap-3 border-t border-border py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Heek-E. All rights reserved.</p>
        <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {legalRoutes.map((route) => <Link key={route.href} href={route.href} className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{route.label}</Link>)}
        </nav>
        <p>Built for brands ready to be remembered.</p>
      </div>
    </footer>
  );
}
