'use client';
import React, { useEffect, useRef } from 'react';

interface BlogPost {
  date: string;
  readTime: string;
  heading: string;
  excerpt: string;
  href: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    date: 'July 2026',
    readTime: '5 min read',
    heading: 'Hyper-scalable Backend Engines with Go & Docker',
    excerpt:
      'Exploring deterministic runtime optimization and strict structural patterns for high-throughput cloud environments.',
    href: '#',
  },
  {
    date: 'June 2026',
    readTime: '4 min read',
    heading: 'The Art of Editorial UI: Breaking the Component Box',
    excerpt:
      'Rejecting rigid CSS libraries to build unique layouts balanced by natural kinetics and typographic grids.',
    href: '#',
  },
  {
    date: 'May 2026',
    readTime: '6 min read',
    heading: 'LLM Inference Layers Inside React Applications',
    excerpt:
      'A practical guide to embedding lightweight AI inference directly into client-side Next.js apps without losing performance.',
    href: '#',
  },
];

export default function WritingsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const articleRefs = useRef<(HTMLElement | null)[]>([]);

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
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );
    articleRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="writings"
      ref={sectionRef}
      className="relative"
      style={{ paddingBlock: 'clamp(5rem, 10vw, 9rem)' }}
    >
      <div
        className="px-[var(--edge)]"
        style={{ maxWidth: 'var(--container)', margin: '0 auto' }}
      >
        {/* Header */}
        <div className="flex flex-col gap-2 mb-10">
          <div className="flex items-center gap-3">
            <div className="section-divider" />
            <span
              className="text-xs uppercase tracking-[0.1em]"
              style={{ fontFamily: 'var(--font-mono), monospace', color: 'var(--wine)' }}
            >
              04 / Writings
            </span>
          </div>
          <h2 className="sec-head" style={{ color: 'var(--ink)' }}>
            Architectural Thoughts
          </h2>
        </div>

        {/* Blog list */}
        <div style={{ borderTop: '1px solid var(--paper-line)' }}>
          {BLOG_POSTS.map((post, i) => (
            <article
              key={post.heading}
              ref={(el) => { articleRefs.current[i] = el; }}
              className="blog-card-hover blog-card-bg reveal-hidden relative overflow-hidden"
              style={{
                borderBottom: '1px solid var(--paper-line)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <a
                href={post.href}
                className="block"
                style={{ padding: '2rem 0' }}
              >
                <div
                  className="grid items-center gap-4"
                  style={{ gridTemplateColumns: '180px minmax(0, 1fr)' }}
                >
                  {/* Meta */}
                  <div
                    className="flex flex-col gap-1"
                    style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: '0.72rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--ink-soft)',
                    }}
                  >
                    <span>{post.date}</span>
                    <span style={{ color: 'var(--ink-faint)' }}>{post.readTime}</span>
                  </div>

                  {/* Content wrapper with slide-on-hover */}
                  <div className="blog-content-wrapper">
                    <div className="blog-front" style={{ flex: 1, paddingRight: '3rem' }}>
                      <h3
                        className="mb-2"
                        style={{
                          fontFamily: 'var(--font-fraunces), serif',
                          fontSize: 'clamp(1.4rem, 2.2vw, 2rem)',
                          fontWeight: 500,
                          letterSpacing: '-0.02em',
                          lineHeight: 1.05,
                          color: 'var(--ink)',
                        }}
                      >
                        {post.heading}
                      </h3>
                      <p
                        style={{
                          fontSize: '0.95rem',
                          color: 'var(--ink-soft)',
                          lineHeight: 1.65,
                          maxWidth: '60ch',
                        }}
                      >
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Reveal arrow */}
                    <div className="blog-reveal">
                      <span
                        className="inline-flex items-center gap-2 font-semibold text-xs uppercase tracking-[0.12em]"
                        style={{
                          fontFamily: 'var(--font-mono), monospace',
                          color: 'var(--wine)',
                        }}
                      >
                        Read Article
                        <span
                          className="arrow inline-block transition-transform duration-300"
                          style={{ transition: 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)' }}
                        >
                          ⟶
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Mobile view — always show read link */}
              <div className="md:hidden pb-4">
                <span
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] font-semibold"
                  style={{
                    fontFamily: 'var(--font-mono), monospace',
                    color: 'var(--wine)',
                  }}
                >
                  Read Article ⟶
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}