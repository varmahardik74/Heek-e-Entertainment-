import Link from "next/link";
import { services } from "@/lib/services";

export default function ServicesPage() {
  return <div className="container-shell py-20 md:py-28"><div className="max-w-3xl"><p className="eyebrow">Capabilities</p><h1 className="display mt-5 text-6xl font-black md:text-8xl">The work behind the wow.</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">A focused set of capabilities to take a brand from unknown to unmissable. Choose the piece you need, or bring us the whole brief.</p></div><div className="mt-16 grid gap-4 md:grid-cols-2">{services.map((service, index) => <Link key={service.slug} href={`/services/${service.slug}`} className="group rounded-[1.5rem] border bg-card p-7 transition hover:-translate-y-1 hover:border-primary"><div className="flex items-start justify-between"><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span><span className="text-2xl transition group-hover:translate-x-1">↗</span></div><h2 className="mt-16 text-2xl font-bold">{service.title}</h2><p className="mt-3 max-w-md leading-7 text-muted-foreground">{service.shortDescription}</p></Link>)}</div></div>;
}
