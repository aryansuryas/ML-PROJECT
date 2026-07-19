'use client';
import React, { useEffect, useRef } from 'react';

interface Project {
  num: string;
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
}

const PROJECTS: Project[] = [
  {
    num: '/ 01',
    title: 'Hand-Frame',
    description:
      'A focused project centered on gesture recognition, interaction design, and frame-based control. Computer vision pipeline built with real-time hand tracking — presented in the same refined visual language as the rest of the portfolio.',
    tags: ['Computer Vision', 'OpenCV', 'Interaction', 'UI'],
    links: [
      { label: 'Open GitHub', href: 'https://github.com/aryansuryas/Hand-Frame' },
    ],
  },
  {
    num: '/ 02',
    title: 'World-Map',
    description:
      'A world visualization project designed to present geography and location data with clarity, clean spacing, and a polished presentation layer. Focuses on data density without visual clutter.',
    tags: ['Visualization', 'Maps', 'Web', 'D3.js'],
    links: [
      { label: 'Open GitHub', href: 'https://github.com/aryansuryas/World-Map' },
    ],
  },
  {
    num: '/ 03',
    title: 'Portfolio System',
    description:
      'This portfolio itself — a layout focused on strong editorial typography, scroll-driven motion, and a lightweight structure deployable in minutes. Three.js TorusKnot shatter as the defining visual.',
    tags: ['Next.js', 'TypeScript', 'Three.js', 'CSS'],
    links: [],
  },
];

export default function ProjectsSection() {
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

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
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    cardRefs.current.forEach((c) => { if (c) observer.observe(c); });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="relative"
      style={{ paddingBlock: 'clamp(5rem, 10vw, 9rem)' }}
    >
      <div
        className="px-[var(--edge)]"
        style={{ maxWidth: 'var(--container)', margin: '0 auto' }}
      >
        {/* Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-3">
            <div className="section-divider" />
            <span
              className="text-xs uppercase tracking-[0.1em]"
              style={{ fontFamily: 'var(--font-mono-ibm), monospace', color: 'var(--wine)' }}
            >
              02 / Selected Work
            </span>
          </div>
          <h2 className="sec-head" style={{ color: 'var(--ink)' }}>
            Projects
          </h2>
        </div>

        {/* Projects grid */}
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
        >
          {PROJECTS.map((project, i) => (
            <article
              key={project.num}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="premium-card reveal-hidden flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Number */}
              <div className="mb-4">
                <span
                  style={{ fontFamily: 'var(--font-mono-ibm), monospace', color: 'var(--brass)', fontSize: '0.85rem' }}
                >
                  {project.num}
                </span>
              </div>

              {/* Title */}
              <h3
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-fraunces), serif',
                  fontSize: '1.55rem',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2,
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="mb-5 flex-1"
                style={{ color: 'var(--ink-soft)', lineHeight: 1.65, fontSize: '0.95rem' }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="proj-tag" style={{ color: 'var(--ink-soft)' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              {project.links.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: '1px solid var(--paper-line)' }}>
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="project-link-pill"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}