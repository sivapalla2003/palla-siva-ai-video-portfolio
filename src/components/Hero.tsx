import React from 'react';
import { ArrowDown, Mail, Wand2, Film, Eye, Play, Video, Sparkles } from 'lucide-react';
import { ProfilePortrait } from './ProfilePortrait';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const skillBadges = [
    'Prompt Engineering',
    'Generative AI',
    'AI Video',
    'Cinematic Storytelling',
    'Visual Direction',
    'Camera & Motion Direction',
    'Character Consistency',
    'World Building',
    'AI Content Creation',
    'Live-Action Filmmaking',
    'Video Editing',
    'CapCut',
  ];

  const pipelineSteps = [
    { label: 'PROMPT', icon: Wand2, desc: 'Multi-Axis Parameters' },
    { label: 'STORY', icon: Film, desc: 'Beats & Characters' },
    { label: 'VISUAL', icon: Eye, desc: 'Diffusion & Aesthetics' },
    { label: 'MOTION', icon: Play, desc: 'Camera Velocity & Tilt' },
    { label: 'VIDEO', icon: Video, desc: 'Master Cinematic Cut' },
  ];

  return (
    <section id="home" className="relative min-h-[94vh] pt-24 pb-16 sm:pt-28 md:pt-32 lg:pt-36 lg:pb-24 flex items-center overflow-hidden">
      {/* Background Cinematic Lighting: Radial Emerald & Soft Violet/Blue Ambient Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-center ambient glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[85vw] max-w-[800px] h-[500px] bg-gradient-to-b from-emerald-500/15 via-emerald-600/5 to-transparent blur-[140px] opacity-70" />
        {/* Right side subtle blue/violet atmosphere */}
        <div className="absolute top-1/3 right-[-10%] w-[50vw] max-w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* LEFT SIDE: Major Name Hierarchy, Titles, Statements, Skills, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* 1. MAJOR HERO TYPOGRAPHY: PALLA SIVA with Unbroken Word Wrapping */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-2 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{PERSONAL_INFO.experience}</span>
              </div>

              {/* Semantic non-breaking word wrappers: PALLA and SIVA NEVER character-break */}
              <h1 className="hero-name font-display font-extrabold tracking-tight">
                <span 
                  className="name-word bg-clip-text text-transparent drop-shadow-sm"
                  style={{
                    backgroundImage: 'linear-gradient(to bottom, var(--name-grad-start), var(--name-grad-mid), var(--name-grad-end))',
                  }}
                >
                  PALLA
                </span>
                <span className="hero-name-divider"> </span>
                <span 
                  className="name-word bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(to right, var(--name-accent-start), var(--name-accent-end))',
                  }}
                >
                  SIVA
                </span>
              </h1>

              {/* 2. SECONDARY TITLE: AI VIDEO PROMPT ENGINEER */}
              <div className="pt-2">
                <p className="fluid-hero-sub font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                  AI VIDEO PROMPT ENGINEER
                </p>
                <p className="text-xs sm:text-sm font-mono tracking-wider mt-0.5 font-semibold" style={{ color: 'var(--text-muted)' }}>
                  Independent Filmmaker & Creative Technologist
                </p>
              </div>
            </div>

            {/* 3. HEADLINE & SUPPORTING STATEMENTS */}
            <div className="space-y-2.5 max-w-2xl pt-1">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold tracking-tight leading-snug" style={{ color: 'var(--text-primary)' }}>
                "Turning Ideas Into Cinematic Reality."
              </h2>
              <p className="text-sm sm:text-base leading-relaxed font-medium" style={{ color: 'var(--text-secondary)' }}>
                Prompt engineering, generative AI, cinematic storytelling and visual direction — transforming concepts into compelling visual experiences.
              </p>
            </div>

            {/* 4. SKILL BADGES */}
            <div className="pt-1">
              <div className="text-[11px] font-mono uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-bold" style={{ color: 'var(--text-muted)' }}>
                <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                <span>Core Competencies & Capabilities</span>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {skillBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono transition-all duration-200 shadow-sm font-medium border"
                    style={{
                      backgroundColor: 'var(--badge-bg)',
                      borderColor: 'var(--badge-border)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* 5. PRIMARY CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-black font-display font-bold text-sm tracking-wide transition-all shadow-lg hover:scale-[1.02] hover:-translate-y-0.5 cursor-pointer"
                style={{
                  background: 'var(--accent-gradient, linear-gradient(to right, #10b981, #2dd4bf))',
                }}
              >
                VIEW MY WORK <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all border hover:-translate-y-0.5 cursor-pointer shadow-sm"
                style={{
                  backgroundColor: 'var(--badge-bg)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                }}
              >
                CONTACT ME <Mail className="w-4 h-4 text-emerald-500" />
              </a>

              <div className="text-xs font-mono ml-1 hidden sm:block font-medium" style={{ color: 'var(--text-muted)' }}>
                12 Playable Showcase Films
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Real Profile Portrait + Abstract Visual Pipeline */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full mt-4 lg:mt-0">
            
            {/* Visually Integrated Abstract Pipeline Above Card */}
            <div 
              className="w-full max-w-[380px] sm:max-w-[400px] mb-3 p-2 rounded-2xl border backdrop-blur-xl shadow-lg"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-color)',
              }}
            >
              <div 
                className="text-[10px] font-mono uppercase tracking-widest text-center mb-1.5 flex items-center justify-center gap-1.5 font-bold"
                style={{ color: 'var(--accent)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                VISUAL PRODUCTION PIPELINE
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono px-1 font-medium" style={{ color: 'var(--text-secondary)' }}>
                {pipelineSteps.map((step, idx) => (
                  <React.Fragment key={step.label}>
                    <div className="flex flex-col items-center gap-0.5" title={step.desc}>
                      <step.icon className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                      <span className="font-bold tracking-wider" style={{ color: 'var(--text-primary)' }}>{step.label}</span>
                    </div>
                    {idx < pipelineSteps.length - 1 && (
                      <span className="text-zinc-500 text-xs">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Premium 3D Profile Card with Real Photograph */}
            <ProfilePortrait size="hero" />

            {/* Highlight Capsule for Live Action Short Film */}
            <div 
              className="mt-3 w-full max-w-[380px] sm:max-w-[400px] p-2.5 rounded-xl border backdrop-blur-md flex items-center justify-between text-xs shadow-sm"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-color)',
              }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="font-mono text-[11px] font-medium" style={{ color: 'var(--text-secondary)' }}>Original Live-Action Short Film</span>
              </div>
              <span className="font-mono text-[10px] text-amber-600 dark:text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/25 font-bold">
                INTO THE VIBE (10M)
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
