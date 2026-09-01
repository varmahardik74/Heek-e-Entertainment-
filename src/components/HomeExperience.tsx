"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { services } from "@/lib/services";
import { caseStudies } from "@/lib/case-studies";

const faqs = [
  ["What kind of SaaS brands do you work with?", "We partner with ambitious SaaS teams that need a sharper influencer strategy, better creative, or a reliable growth engine."],
  ["Can we start with a single campaign?", "Yes. A focused first campaign is a practical way to build momentum and find the right rhythm together."],
  ["How do you measure a program?", "We connect the creative work to your growth goals, from qualified awareness through signups and pipeline."],
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { node.classList.add("is-visible"); observer.disconnect(); }
    }, { threshold: 0.15 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function Count({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let frame = 0; const start = performance.now();
      const tick = (now: number) => { const progress = Math.min((now - start) / 1100, 1); setCount(Math.round(value * (1 - Math.pow(1 - progress, 3)))); if (progress < 1) frame = requestAnimationFrame(tick); };
      frame = requestAnimationFrame(tick); observer.disconnect();
      return () => cancelAnimationFrame(frame);
    }, { threshold: 0.4 });
    observer.observe(node); return () => observer.disconnect();
  }, [value]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function HomeExperience() {
  return <div className="home-page">
    <section className="hero-stage">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" />
      <div className="container-shell hero-content">
        <p className="eyebrow hero-eyebrow">HEEK-E / INFLUENCER MARKETING</p>
        <h1 className="hero-title"><span className="hero-line hero-line-yellow">The Influencer Marketing</span><span className="hero-line hero-line-cyan">Agency For SaaS Brands</span></h1>
        <p className="hero-copy">Scale your MRR, drive high-quality leads — by building an influencer marketing program from the ground up.</p>
        <Link href="/contact" className="hero-cta">Get in touch <span aria-hidden>↗</span></Link>
        <div className="hero-sketch" aria-hidden="true"><span>✧</span><i /><b>◌</b><small>people<br />power</small></div>
      </div>
      <div className="hero-scroll" aria-hidden="true">SCROLL TO EXPLORE <span>↓</span></div>
    </section>

    <section className="trust-strip"><Reveal className="container-shell"><p className="section-kicker">BUILT FOR BRANDS READY TO BE REMEMBERED</p><div className="logo-marquee"><div className="logo-track"><span>STRATEGY</span><span>CREATIVE</span><span>CAMPAIGNS</span><span>CONTENT</span><span>DISTRIBUTION</span><span>STRATEGY</span><span>CREATIVE</span><span>CAMPAIGNS</span><span>CONTENT</span><span>DISTRIBUTION</span></div></div></Reveal></section>

    <section className="expert-section"><Reveal className="container-shell expert-layout"><div><p className="section-kicker accent-text">WHY HEEK-E</p><h2 className="display-heading">The SaaS<br /><em>Influencer</em><br />Experts</h2></div><div className="expert-note"><span className="marker">↳</span><p>We specialize in building influencer strategies that align with your growth goals. Whether you&apos;re looking to go viral, build awareness, get more signups, or add qualified leads to your pipeline.</p><Link href="/about" className="text-link">More about us <span>↗</span></Link></div></Reveal><div className="container-shell signal-row" aria-hidden="true"><span>STRATEGY</span><span>CREATIVE</span><span>DISTRIBUTION</span><span>RESULTS</span></div></section>

    <section className="services-section"><Reveal className="container-shell"><div className="split-heading"><div><p className="section-kicker">OUR SERVICES</p><h2 className="display-heading">How we help you<br /><em>win bigger deals</em></h2></div><p>From strategy to distribution, we build the system behind your next growth story.</p></div><div className="service-list">{services.map((service, index) => <Link href={`/services/${service.slug}`} className="service-row" key={service.slug}><span className="service-number">0{index + 1}</span><h3>{service.title}</h3><span className="service-description">{service.shortDescription}</span><span className="service-arrow" aria-hidden>↗</span></Link>)}</div></Reveal></section>

    <section className="work-section"><Reveal className="container-shell"><div className="split-heading"><div><p className="section-kicker accent-text">SELECTED WORK</p><h2 className="display-heading">Ideas that<br /><em>move markets.</em></h2></div><Link href="/case-studies" className="text-link light-link">View case studies <span>↗</span></Link></div><div className="work-grid">{caseStudies.length ? caseStudies.slice(0, 3).map((study) => <article className="work-card" key={study.slug}><div className="work-art"><span>{study.title}</span><i aria-hidden>↗</i></div><p>CASE STUDY</p><h3>{study.title}</h3></article>) : <article className="work-card work-empty"><div className="work-art"><span>YOUR NEXT<br />BIG IDEA</span><i aria-hidden>✦</i></div><p>PORTFOLIO UPDATE</p><h3>Selected case studies are being prepared for launch.</h3></article>}</div></Reveal></section>

    <section className="metrics-section"><Reveal className="container-shell"><p className="section-kicker">THE SIGNAL IS CLEAR</p><div className="metrics-grid"><div><strong><Count value={5} suffix="+" /></strong><p>ways to make your brand impossible to ignore</p></div><div><strong><Count value={1} /></strong><p>focused partner for strategy, content and growth</p></div><div><strong>∞</strong><p>room to turn the right idea into momentum</p></div></div></Reveal></section>

    <section className="faq-section"><Reveal className="container-shell faq-layout"><div><p className="section-kicker accent-text">FAQ</p><h2 className="display-heading">Let&apos;s make it<br /><em>simple.</em></h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden>+</span></summary><p>{answer}</p></details>)}</div></Reveal></section>

    <section className="final-cta"><Reveal className="container-shell"><p className="section-kicker">READY WHEN YOU ARE</p><h2 className="display-heading">Have a good problem?<br /><em>Let&apos;s solve it well.</em></h2><Link href="/contact" className="hero-cta">Start a conversation <span aria-hidden>↗</span></Link></Reveal></section>
  </div>;
}
