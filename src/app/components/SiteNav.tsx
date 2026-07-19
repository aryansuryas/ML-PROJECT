'use client';
import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#tech-stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Writings', href: '#writings' },
  { label: 'Contact', href: '#contact' }
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-[100] transition-all duration-500"
        style={{
          borderBottom: '1px solid var(--paper-line)',
          background: scrolled ?
            'rgba(251, 247, 236, 0.92)' :
            'rgba(251, 247, 236, 0.75)',
          backdropFilter: 'blur(20px)'
        }}>

        <div
          className="flex justify-between items-center px-[var(--edge)] gap-4"
          style={{ height: 'var(--nav-h)', maxWidth: 'var(--container)', margin: '0 auto' }}>

          {/* Logo — name only, no icon */}
          <a href="#" onClick={closeMenu}>
            <span
              style={{
                fontFamily: 'var(--font-fraunces), serif',
                fontWeight: 700,
                fontSize: '1.1rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--ink)'
              }}>PORTFOLIO
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 list-none items-center">
            {NAV_LINKS.map((link) =>
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link-underline font-medium text-sm transition-colors"
                  style={{ color: 'var(--ink-soft)' }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--wine)'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--ink-soft)'}>
                  {link.label}
                </a>
              </li>
            )}
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-200"
            style={{
              border: '1px solid var(--paper-line)',
              background: 'rgba(251, 247, 236, 0.9)',
              color: 'var(--ink)'
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}>

            <span className="text-base leading-none select-none">
              {menuOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[110] flex flex-col justify-center items-center md:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`
        }
        style={{
          background: 'rgba(251, 247, 236, 0.98)',
          backdropFilter: 'blur(24px)',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease'
        }}>

        <button
          className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center rounded-full border text-2xl"
          style={{ border: '1px solid var(--paper-line)', color: 'var(--ink)' }}
          onClick={closeMenu}
          aria-label="Close navigation">
          ✕
        </button>
        <nav className="flex flex-col gap-8 text-center">
          {NAV_LINKS.map((link) =>
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-3xl font-light transition-colors"
              style={{
                fontFamily: 'var(--font-fraunces), serif',
                color: 'var(--ink-soft)'
              }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--wine)'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--ink-soft)'}>
              {link.label}
            </a>
          )}
        </nav>
      </div>
    </>
  );
}