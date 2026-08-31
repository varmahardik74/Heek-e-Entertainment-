import Link from "next/link";
import { services } from "@/lib/services";
import { EditorialCta, EditorialPage } from "@/components/EditorialPage";

export default function ServicesPage() {
  return <EditorialPage eyebrow="CAPABILITIES / 01" title={<>The work behind<br /><em>the wow.</em></>} intro="A focused set of capabilities to take a brand from unknown to unmissable. Choose the piece you need, or bring us the whole brief."><section className="container-shell editorial-section"><div className="service-list editorial-service-list">{services.map((service, index) => <Link key={service.slug} href={`/services/${service.slug}`} className="service-row"><span className="service-number">0{index + 1}</span><div><h2>{service.title}</h2><p>{service.shortDescription}</p></div><span className="service-arrow" aria-hidden>↗</span></Link>)}</div></section><EditorialCta /></EditorialPage>;
}
