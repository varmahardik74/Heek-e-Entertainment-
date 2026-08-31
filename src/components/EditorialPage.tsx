import Link from "next/link";

export function EditorialPage({ eyebrow, title, intro, children }: { eyebrow: string; title: React.ReactNode; intro: string; children: React.ReactNode }) {
  return <main className="editorial-page"><div className="container-shell editorial-hero"><p className="section-kicker accent-text">{eyebrow}</p><h1 className="display-heading editorial-title">{title}</h1><p className="editorial-intro">{intro}</p></div>{children}</main>;
}

export function EditorialCta({ label = "Start a conversation" }: { label?: string }) {
  return <div className="container-shell editorial-cta"><div><p className="section-kicker">READY WHEN YOU ARE</p><h2 className="display-heading">Make the next move<br /><em>the right one.</em></h2></div><Link className="hero-cta" href="/contact">{label} <span aria-hidden>↗</span></Link></div>;
}

export function ReplaceableVisual({ label }: { label: string }) {
  return <div className="replaceable-visual" aria-label={`${label} visual placeholder`}><span>{label}</span><i aria-hidden>✦</i></div>;
}
