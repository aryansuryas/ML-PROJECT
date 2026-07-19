frequenltly'use client';
import React, { useEffect, useRef } from 'react';

const PHILOSOPHY_CARDS = [
  {
    num: '01',
    title: 'Clean Logic',
    body: 'Writing highly structured, deterministic full-stack applications that emphasize rapid runtime performance and strict database consistency paradigms.',
  },
  {
    num: '02',
    title: 'AI Integration',
    body: 'Embedding smart LLM automation flows and robust inference layers natively inside responsive consumer cloud applications.',
  },
  {
    num: '03',
    title: 'Editorial Design',
    body: 'Rejecting cookie-cutter component libraries in pursuit of striking layouts that respect typographic scaling, grid balance, and natural kinetics.',
  },
];

export default function PhilosophySection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            entry.target.classList.remove('reveal-hidden');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative"
      style={{ paddingBlock: 'clamp(5rem, 10vw, 9rem)' }}
    >
      <div
        className="px-[var(--edge)]"
        style={{ maxWidth: 'var(--container)', margin: '0 auto' }}
      >
        {/* Section meta */}
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex items-center gap-3">
            <div className="section-divider" />
            <span
              className="text-xs uppercase tracking-[0.1em]"
              style={{ fontFamily: 'var(--font-mono-ibm), monospace', color: 'var(--wine)' }}
            >
              01 / Overview
            </span>
          </div>
          <h2 className="sec-head" style={{ color: 'var(--ink)' }}>
            Architectural Philosophy
          </h2>
        </div>

        {/* Brief bio */}
        <p
          className="mb-12 max-w-[65ch] leading-relaxed"
          style={{ fontSize: '1.05rem', color: 'var(--ink-soft)', fontWeight: 400 }}
        >
          A CSE student from Bengaluru building things at the intersection of systems
          performance, AI tooling, and editorial craft. Every project is an exercise
          in keeping the structure lean while making the experience feel premium.
        </p>

        {/* Cards grid */}
        <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {PHILOSOPHY_CARDS.map((card, i) => (
            <div
              key={card.num}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="premium-card reveal-hidden"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span
                className="block mb-4 text-sm"
                style={{ fontFamily: 'var(--font-mono-ibm), monospace', color: 'var(--brass)' }}
              >
                // {card.num}
              </span>
              <h3
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-fraunces), serif',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'var(--ink)',
                }}
              >
                {card.title}
              </h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.65, fontSize: '0.95rem' }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}