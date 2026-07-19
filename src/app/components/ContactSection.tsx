'use client';
import React, { useRef, useEffect, useState } from 'react';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const SOCIAL_LINKS = [
    { label: 'GitHub', href: 'https://github.com/aryansuryas', icon: '⌥' },
    { label: 'LinkedIn', href: '#', icon: '↗' },
    { label: 'Email', href: 'mailto:aryan@example.com', icon: '✉' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative reveal-hidden"
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
              style={{ fontFamily: 'var(--font-mono), monospace', color: 'var(--wine)' }}
            >
              05 / Communication
            </span>
          </div>
          <h2 className="sec-head" style={{ color: 'var(--ink)' }}>
            Initiate Connection
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          className="grid gap-16 items-start"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
        >
          {/* Left — info block */}
          <div>
            <p
              className="mb-8 leading-relaxed"
              style={{ fontSize: '1.1rem', color: 'var(--ink-soft)', fontWeight: 300, maxWidth: '40ch' }}
            >
              Currently open to internships, freelance projects, and interesting
              collaborations. Response time: under 24 hours.
            </p>

            {/* Availability badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: 'rgba(30, 25, 18, 0.04)',
                border: '1px solid var(--paper-line)',
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#22c55e', display: 'block' }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-mono), monospace', color: 'var(--ink-soft)' }}
              >
                Available for work
              </span>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-3 transition-colors duration-200 group"
                  style={{ color: 'var(--ink-soft)' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--wine)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--ink-soft)')}
                >
                  <span
                    className="w-8 h-8 flex items-center justify-center rounded-full border text-sm transition-all duration-200"
                    style={{
                      border: '1px solid var(--paper-line)',
                      background: 'rgba(30,25,18,0.03)',
                    }}
                  >
                    {s.icon}
                  </span>
                  <span className="text-sm font-medium">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div
                className="p-10 rounded-xl text-center"
                style={{
                  background: 'var(--paper-panel)',
                  border: '1px solid var(--paper-line)',
                }}
              >
                <div className="text-4xl mb-4">✓</div>
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: 'var(--font-fraunces), serif',
                    fontSize: '1.5rem',
                    color: 'var(--ink)',
                  }}
                >
                  Signal Transmitted
                </h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: '0.95rem' }}>
                  I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Name + Email row */}
                <div
                  className="grid gap-8"
                  style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
                >
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-xs uppercase tracking-[0.1em]"
                      style={{ fontFamily: 'var(--font-mono), monospace', color: 'var(--brass)' }}
                    >
                      Designation Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Jane Doe"
                      required
                      className="input-underline"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-xs uppercase tracking-[0.1em]"
                      style={{ fontFamily: 'var(--font-mono), monospace', color: 'var(--brass)' }}
                    >
                      Electronic Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g., jane@company.com"
                      required
                      className="input-underline"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label
                    className="text-xs uppercase tracking-[0.1em]"
                    style={{ fontFamily: 'var(--font-mono), monospace', color: 'var(--brass)' }}
                  >
                    Project Scope & Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Detail the technical ambitions..."
                    className="input-underline resize-none"
                    style={{ resize: 'none' }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="magnetic-btn self-start inline-flex items-center gap-3 px-9 py-4 rounded font-semibold text-sm uppercase tracking-[0.05em] transition-all duration-300"
                  style={{ background: 'var(--wine)', color: 'var(--paper)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--wine-dark)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 20px var(--wine-glow)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--wine)';
                    (e.currentTarget as HTMLElement).style.transform = '';
                    (e.currentTarget as HTMLElement).style.boxShadow = '';
                  }}
                >
                  Transmit Signal
                  <span>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}