import { EditorialCta, EditorialPage, ReplaceableVisual } from "@/components/EditorialPage";
import { caseStudies } from "@/lib/case-studies";

export default function CaseStudiesPage() {
  return <EditorialPage eyebrow="SELECTED WORK / 04" title={<>Ideas that<br /><em>move markets.</em></>} intro="A growing index of work we are proud of. New projects are added as they are completed."><section className="container-shell editorial-section"><div className="editorial-cards">{caseStudies.length ? caseStudies.map((study) => <article className="editorial-card" key={study.slug}><ReplaceableVisual label="CASE STUDY IMAGE" /><p className="section-kicker">{study.slug}</p><h2>{study.title}</h2><p>{study.summary}</p></article>) : <article className="editorial-card editorial-empty"><ReplaceableVisual label="PORTFOLIO IMAGE" /><p className="section-kicker">PORTFOLIO UPDATE</p><h2>Selected case studies are being prepared for launch.</h2><p>We are shaping this index with the work that best represents how we think, make, and move.</p></article>}</div></section><EditorialCta /></EditorialPage>;
}
