'use client';
import React from 'react';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import ProjectsSection from './components/ProjectsSection';
import TechStackSection from './components/TechStackSection';
import WritingsSection from './components/WritingsSection';
import ContactSection from './components/ContactSection';
import SocialSection from './components/SocialSection';
import SiteNav from './components/SiteNav';
import SiteFooter from './components/SiteFooter';
import ThreeCanvas from './components/ThreeCanvas';

export default function HomePage() {
  return (
    <>
      {/* Fixed atmospheric layers */}
      <div className="blueprint-grid" aria-hidden="true" />
      <div className="grain-overlay" aria-hidden="true" />

      {/* Three.js TorusKnot — fixed, fills the hero frame */}
      <ThreeCanvas />

      {/* Navigation */}
      <SiteNav />

      {/* Main content — z-index above canvas */}
      <main className="relative" style={{ zIndex: 2 }}>
        <HeroSection />
        <PhilosophySection />
        <ProjectsSection />
        <TechStackSection />
        <WritingsSection />
        <SocialSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
