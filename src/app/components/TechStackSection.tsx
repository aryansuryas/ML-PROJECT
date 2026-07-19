'use client';
import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const DEV = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
const SI = 'https://cdn.simpleicons.org/';

interface StackItem {
  n: string;
  l: string;
}

interface StackCategory {
  name: string;
  icon: string;
  desc: string;
  items: StackItem[];
}

const STACK_DATA: StackCategory[] = [
  {
    name: 'Frontend',
    icon: '🎨',
    desc: 'Interfaces, motion, and responsive layouts.',
    items: [
      { n: 'TypeScript', l: DEV + 'typescript/typescript-original.svg' },
      { n: 'JavaScript', l: DEV + 'javascript/javascript-original.svg' },
      { n: 'HTML5', l: DEV + 'html5/html5-original.svg' },
      { n: 'CSS3', l: DEV + 'css3/css3-original.svg' },
    ],
  },
  {
    name: 'Backend',
    icon: '🧩',
    desc: 'Server-side logic and API plumbing.',
    items: [
      { n: 'Node.js', l: DEV + 'nodejs/nodejs-original.svg' },
      { n: 'Express', l: DEV + 'express/express-original.svg' },
      { n: 'REST API', l: '' },
      { n: 'Testing', l: DEV + 'jest/jest-plain.svg' },
    ],
  },
  {
    name: 'Languages',
    icon: '⚡',
    desc: 'Core programming languages across projects.',
    items: [
      { n: 'Java', l: DEV + 'java/java-original.svg' },
      { n: 'C', l: DEV + 'c/c-original.svg' },
      { n: 'Python', l: DEV + 'python/python-original.svg' },
      { n: 'C++', l: DEV + 'cplusplus/cplusplus-original.svg' },
    ],
  },
  {
    name: 'Database',
    icon: '🗄️',
    desc: 'Structured and document data storage.',
    items: [
      { n: 'SQL', l: DEV + 'mysql/mysql-original.svg' },
      { n: 'MongoDB', l: DEV + 'mongodb/mongodb-original.svg' },
    ],
  },
  {
    name: 'Version Control',
    icon: '🌿',
    desc: 'Tracking changes and collaborating safely.',
    items: [
      { n: 'Git', l: DEV + 'git/git-original.svg' },
      { n: 'GitHub', l: SI + 'github' },
    ],
  },
  {
    name: 'API & Web',
    icon: '🔗',
    desc: 'Request/response flows and testing tools.',
    items: [
      { n: 'REST API', l: '' },
      { n: 'JSON API', l: DEV + 'json/json-original.svg' },
      { n: 'Postman', l: DEV + 'postman/postman-original.svg' },
    ],
  },
  {
    name: 'Platforms',
    icon: '🚀',
    desc: 'Where I practice, build, and ship.',
    items: [
      { n: 'GitHub', l: SI + 'github' },
      { n: 'LeetCode', l: SI + 'leetcode' },
      { n: 'roadmap.sh', l: SI + 'roadmapdotsh' },
    ],
  },
  {
    name: 'AI Tools',
    icon: '🤖',
    desc: 'Models, assistants, and creative workflows.',
    items: [
      { n: 'ChatGPT', l: SI + 'openai' },
      { n: 'GitHub Copilot', l: SI + 'githubcopilot' },
      { n: 'Claude', l: SI + 'claude' },
      { n: 'Gemini', l: SI + 'googlegemini' },
      { n: 'Perplexity', l: SI + 'perplexity' },
      { n: 'Hugging Face', l: SI + 'huggingface' },
      { n: 'LangChain', l: SI + 'langchain' },
      { n: 'n8n', l: SI + 'n8n' },
      { n: 'Cursor', l: '' },
      { n: 'Replit', l: SI + 'replit' },
    ],
  },
];

function fallbackText(name: string): string {
  const compact = name.replace(/[^A-Za-z0-9]/g, '');
  if (!compact) return '•';
  return compact.length > 2 ? compact.slice(0, 2).toUpperCase() : compact[0].toUpperCase();
}

function StackItemCard({ item }: { item: StackItem }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="flex items-center gap-3 p-3 rounded-xl transition-all duration-250 cursor-default"
      style={{
        background: 'rgba(30, 25, 18, 0.03)',
        border: '1px solid rgba(30, 25, 18, 0.06)',
        borderRadius: '13px',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px) scale(1.02)';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(122, 18, 32, 0.18)';
        (e.currentTarget as HTMLElement).style.background = 'rgba(122, 18, 32, 0.05)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = '';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30, 25, 18, 0.06)';
        (e.currentTarget as HTMLElement).style.background = 'rgba(30, 25, 18, 0.03)';
      }}
    >
      {item.l && !imgError ? (
        <AppImage
          src={item.l}
          alt={`${item.n} logo`}
          width={28}
          height={28}
          className="object-contain"
          style={{ width: 28, height: 28 }}
          onError={() => setImgError(true)}
          unoptimized
        />
      ) : (
        <div
          className="flex items-center justify-center rounded-lg text-xs font-bold"
          style={{
            width: 28,
            height: 28,
            background: 'linear-gradient(135deg, var(--wine), var(--brass))',
            color: 'var(--paper)',
            borderRadius: 8,
            fontSize: '0.75rem',
            fontWeight: 800,
            flexShrink: 0,
          }}
        >
          {fallbackText(item.n)}
        </div>
      )}
      <span className="text-sm font-semibold" style={{ color: 'var(--ink)', fontSize: '0.88rem' }}>
        {item.n}
      </span>
    </div>
  );
}

function StackCard({ cat, index }: { cat: StackCategory; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

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
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className="stack-card-3d reveal-hidden"
      style={{ transitionDelay: `${index * 60}ms` }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger row — no count badge */}
      <div
        className="flex items-center gap-3 p-5 cursor-default"
        aria-expanded={isOpen}
      >
        {/* Icon */}
        <div
          className="flex items-center justify-center rounded-xl text-xl flex-shrink-0"
          style={{
            width: 42,
            height: 42,
            background: 'linear-gradient(135deg, rgba(122,18,32,.12), rgba(166,129,63,.12))',
            border: '1px solid rgba(122,18,32,.08)',
            transform: isOpen ? 'rotate(-8deg) scale(1.06)' : 'none',
            transition: 'transform 0.35s ease',
          }}
        >
          {cat.icon}
        </div>

        {/* Title + desc */}
        <div className="flex-1 min-w-0">
          <strong
            className="block text-base font-bold"
            style={{ color: 'var(--ink)', fontSize: '1rem' }}
          >
            {cat.name}
          </strong>
          <span
            className="block mt-0.5 text-sm"
            style={{ color: 'var(--ink-soft)', fontSize: '0.875rem' }}
          >
            {cat.desc}
          </span>
        </div>

        {/* Chevron only — no count */}
        <span
          className="text-sm transition-transform duration-300 flex-shrink-0"
          style={{
            color: 'var(--ink-soft)',
            transform: isOpen ? 'rotate(90deg)' : 'none',
          }}
        >
          ➜
        </span>
      </div>

      {/* Expandable body — 2 items per row */}
      <div className={isOpen ? 'stack-body-open' : 'stack-body-closed'}>
        <div
          className="overflow-hidden"
          style={{ padding: isOpen ? '0.75rem 1.2rem 1.2rem' : '0 1.2rem' }}
        >
          {cat.items.length > 0 ? (
            <div
              className="grid gap-2"
              style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}
            >
              {cat.items.map((item) => (
                <StackItemCard key={item.n} item={item} />
              ))}
            </div>
          ) : (
            <p className="text-sm py-1" style={{ color: 'var(--ink-soft)' }}>
              This category is intentionally left open.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function TechStackSection() {
  return (
    <section
      id="tech-stack"
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
              03 / Stack
            </span>
          </div>
          <h2 className="sec-head" style={{ color: 'var(--ink)' }}>
            Tools & Technologies
          </h2>
          <p
            className="mt-2 max-w-[55ch] text-sm leading-relaxed"
            style={{ color: 'var(--ink-soft)' }}
          >
            Hover any category to explore the tools inside.
          </p>
        </div>

        {/* 2-col grid on desktop */}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(2, 1fr)', perspective: '1400px' }}
        >
          {STACK_DATA.map((cat, i) => (
            <StackCard key={cat.name} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}