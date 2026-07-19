import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function SiteFooter() {
  return (
    <footer
      className="relative"
      style={{
        zIndex: 2,
        borderTop: '1px solid var(--paper-line)',
        paddingBlock: '3rem',
      }}
    >
      <div
        className="px-[var(--edge)] flex flex-col sm:flex-row justify-between items-center gap-6"
        style={{ maxWidth: 'var(--container)', margin: '0 auto' }}
      >
        {/* Logo + name */}
        <div className="flex items-center gap-2">
          <AppLogo size={28} />
          <span
            className="brand-name text-base"
            style={{ fontFamily: 'var(--font-fraunces), serif' }}
          >
            Aryan Surya S.
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--ink-soft)' }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--wine)')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--ink-soft)')}
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--ink-soft)' }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--wine)')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--ink-soft)')}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--ink-soft)' }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--wine)')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--ink-soft)')}
          >
            Contact
          </a>
        </div>

        {/* Copyright */}
        <p
          className="text-sm"
          style={{
            fontFamily: 'var(--font-mono), monospace',
            color: 'var(--ink-soft)',
            fontSize: '0.8rem',
            letterSpacing: '0.05em',
          }}
        >
          © 2026{' '}
          <span className="brand-name" style={{ fontFamily: 'var(--font-fraunces), serif' }}>
            Aryan Surya S.
          </span>{' '}
          — Engineered in Bengaluru.
        </p>
      </div>
    </footer>
  );
}