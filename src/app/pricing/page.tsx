import Link from "next/link";
import { EditorialCta, EditorialPage } from "@/components/EditorialPage";

const principles = ["Scope around the real goal", "Keep the plan clear and useful", "Build momentum, not busywork"];

export default function PricingPage() {
  return <EditorialPage eyebrow="WORKING TOGETHER / 03" title={<>The right scope<br />for the <em>real goal.</em></>} intro="Every brand is different, so we do not publish fixed price lists or one-size-fits-all tiers. We scope each engagement around your goals, channels, and timeline."><section className="container-shell editorial-section pricing-grid"><div><p className="section-kicker accent-text">OUR APPROACH</p><h2 className="display-heading">Clear from<br /><em>day one.</em></h2></div><div className="principles">{principles.map((item, index) => <div className="principle" key={item}><span>0{index + 1}</span><h3>{item}</h3><p>A tailored proposal shaped around what will make the biggest difference.</p></div>)}</div></section><div className="container-shell pricing-callout"><p className="section-kicker">CUSTOM PROJECTS</p><h2>Bring us the brief.<br /><em>We will bring the shape.</em></h2><Link className="hero-cta" href="/contact">Book a call <span aria-hidden>↗</span></Link></div><EditorialCta label="Talk through your project" /></EditorialPage>;
}
