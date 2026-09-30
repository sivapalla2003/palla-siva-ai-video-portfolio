import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedWork } from './components/FeaturedWork';
import { PromptEngineering } from './components/PromptEngineering';
import { Capabilities } from './components/Capabilities';
import { Workflow } from './components/Workflow';
import { Filmmaking } from './components/Filmmaking';
import { Toolkit } from './components/Toolkit';
import { MoreWork } from './components/MoreWork';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] font-sans selection:bg-emerald-500/30 selection:text-white transition-colors duration-300">
        {/* Top sticky navigation */}
        <Navbar />

        <main>
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Selected Work (12 projects) */}
          <FeaturedWork />

          {/* Prompt Engineering Methodology */}
          <PromptEngineering />

          {/* Capabilities (16 cards) */}
          <Capabilities />

          {/* AI Video Production Workflow (10 steps) */}
          <Workflow />

          {/* Beyond AI: Independent Live-Action Filmmaking */}
          <Filmmaking />

          {/* Production Software & Hardware Toolkit */}
          <Toolkit />

          {/* More Work: Social Channels & Media */}
          <MoreWork />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
