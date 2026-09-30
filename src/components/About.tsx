import React from 'react';
import { Film, Wand2, Compass, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { ProfilePortrait } from './ProfilePortrait';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Wand2,
      title: 'Prompt Architecture',
      description: 'Structured multi-axis prompt design covering optical focal lengths, volumetric illumination, physical momentum, and negative constraint boundaries.',
    },
    {
      icon: Layers,
      title: 'Generative Consistency',
      description: 'Mastery over character facial lock, wardrobe continuity, environmental persistence, and camera angle choreography across scene cuts.',
    },
    {
      icon: Film,
      title: 'Independent Filmmaking',
      description: 'Hands-on live-action direction, mobile cinematography, physical shot planning, pacing, editing, sound curation, and visual effects.',
    },
    {
      icon: Compass,
      title: 'Visual Direction',
      description: 'Translating narrative themes, cultural stories, and complex educational concepts into compelling cinematic visual languages.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative border-t border-b" style={{ backgroundColor: 'var(--bg-page)', borderColor: 'var(--border-color)' }}>
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/5 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-mono uppercase tracking-widest mb-2 flex items-center gap-2 font-bold" style={{ color: 'var(--accent)' }}>
            <Sparkles className="w-4 h-4" />
            ABOUT PALLA SIVA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-balance" style={{ color: 'var(--text-primary)' }}>
            FROM IMAGINATION TO EXECUTION
          </h2>
        </div>

        {/* Featured Brand Statement Card */}
        <div 
          className="mb-14 p-6 sm:p-8 rounded-3xl border shadow-2xl backdrop-blur-xl relative overflow-hidden group"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-hover)',
          }}
        >
          <div className="absolute top-0 right-0 p-8 text-emerald-500/10 pointer-events-none font-serif text-8xl leading-none">
            “
          </div>
          <p className="text-lg sm:text-2xl font-display font-semibold leading-snug tracking-tight max-w-4xl" style={{ color: 'var(--text-primary)' }}>
            "{PERSONAL_INFO.brandStatement}"
          </p>
          <p className="text-xs sm:text-sm font-mono mt-4 flex items-center gap-2 font-bold" style={{ color: 'var(--accent)' }}>
            <span className="w-3 h-0.5" style={{ backgroundColor: 'var(--accent)' }} />
            {PERSONAL_INFO.supportingStatement}
          </p>
        </div>

        {/* Main Content Grid: Story & Smaller Real Photograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Portrait & Details */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start space-y-6 w-full">
            <ProfilePortrait size="about" showStatusBadge={false} />
            
            <div 
              className="w-full max-w-[280px] p-4 rounded-2xl border space-y-3 font-mono text-xs shadow-md"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
              }}
            >
              <div className="flex justify-between items-center" style={{ color: 'var(--text-secondary)' }}>
                <span>EXPERIENCE</span>
                <span className="font-bold" style={{ color: 'var(--text-primary)' }}>{PERSONAL_INFO.experience}</span>
              </div>
              <div className="flex justify-between items-center border-t pt-2" style={{ borderColor: 'var(--border-subtle, var(--border-color))', color: 'var(--text-secondary)' }}>
                <span>PRIMARY TITLE</span>
                <span className="font-bold" style={{ color: 'var(--accent)' }}>AI Video Prompt Engineer</span>
              </div>
              <div className="flex justify-between items-center border-t pt-2" style={{ borderColor: 'var(--border-subtle, var(--border-color))', color: 'var(--text-secondary)' }}>
                <span>DIRECTED FILM</span>
                <span className="font-bold" style={{ color: 'var(--text-primary)' }}>Into the Vibe (10m)</span>
              </div>
              <div className="flex justify-between items-center border-t pt-2" style={{ borderColor: 'var(--border-subtle, var(--border-color))', color: 'var(--text-secondary)' }}>
                <span>LOCATION</span>
                <span className="font-bold" style={{ color: 'var(--text-primary)' }}>India</span>
              </div>
            </div>
          </div>

          {/* Right Column: In-depth Editorial Prose & Pillars */}
          <div className="lg:col-span-8 space-y-6 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <p>
              <strong className="font-bold text-base sm:text-lg" style={{ color: 'var(--text-primary)' }}>Palla Siva</strong> is an AI Video Prompt Engineer with 1.5+ years of hands-on experience exploring and building with generative AI and AI-powered creative workflows.
            </p>

            <p>
              His work combines creative ideation, script development, prompt engineering, visual storytelling, camera direction, character consistency, environment building, AI video generation and post-production.
            </p>

            <div 
              className="p-5 rounded-2xl border shadow-sm"
              style={{
                backgroundColor: 'var(--bg-card-inner)',
                borderColor: 'var(--border-color)',
              }}
            >
              <span className="font-mono text-xs uppercase block mb-1 font-bold" style={{ color: 'var(--accent)' }}>
                Directorial Ownership & Real-World Craft
              </span>
              Beyond AI-generated content, Palla Siva has independently directed and produced a 10-minute live-action short film, demonstrating hands-on experience in storytelling, mobile cinematography, direction, editing, effects and music.
            </div>

            {/* 4 Pillars Grid */}
            <div className="pt-4">
              <h3 className="text-xs font-mono uppercase tracking-wider mb-4 flex items-center gap-2 font-bold" style={{ color: 'var(--text-muted)' }}>
                <ShieldCheck className="w-4 h-4" style={{ color: 'var(--accent)' }} /> Core Methodology
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-2xl border transition-all shadow-sm group"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-color)',
                    }}
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-1.5 rounded-lg text-emerald-500" style={{ backgroundColor: 'var(--accent-bg)' }}>
                        <pillar.icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold font-display" style={{ color: 'var(--text-primary)' }}>
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs leading-normal" style={{ color: 'var(--text-secondary)' }}>
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
