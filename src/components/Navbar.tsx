"use client";

import Link from "next/link";
import { useState } from "react";
import { navRoutes } from "@/lib/footer-links";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
      <nav aria-label="Primary" className="container-shell flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="text-xl font-black tracking-[-.08em]" onClick={() => setOpen(false)}>heek<span className="text-primary">-e</span></Link>
        <div className="hidden items-center gap-7 md:flex">
          {navRoutes.map((route) => <Link key={route.href} href={route.href} className="text-sm font-medium text-muted-foreground transition hover:text-foreground">{route.label}</Link>)}
          <Link href="/contact" className="rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5">Start a conversation <span aria-hidden>↗</span></Link>
        </div>
        <button type="button" aria-expanded={open} aria-controls="mobile-nav" className="rounded-full border px-4 py-2 text-sm font-bold md:hidden" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
      </nav>
      {open && <div id="mobile-nav" className="container-shell flex flex-col gap-4 border-t py-5 md:hidden">{navRoutes.map((route) => <Link key={route.href} href={route.href} onClick={() => setOpen(false)} className="font-medium">{route.label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="rounded-full bg-primary px-5 py-3 text-center font-bold text-primary-foreground">Start a conversation</Link></div>}
    </header>
  );
}
