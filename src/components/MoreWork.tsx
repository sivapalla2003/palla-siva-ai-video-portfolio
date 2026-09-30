import React from 'react';
import { ExternalLink, Youtube, Linkedin, Instagram, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const MoreWork: React.FC = () => {
  const cards = [
    {
      platform: 'LINKEDIN',
      handle: 'pallasiva',
      url: PERSONAL_INFO.socials.linkedin,
      icon: Linkedin,
      tagline: 'Professional profile and creative work',
      description: 'Case study breakdowns, generative video methodologies, workflow observations, and professional networking.',
      accent: 'text-sky-500',
      badgeColor: 'bg-sky-500/10 text-sky-500 border-sky-500/20',
    },
    {
      platform: 'YOUTUBE',
      handle: '@virtualvorld',
      url: PERSONAL_INFO.socials.youtube,
      icon: Youtube,
      tagline: 'AI films, short films and video projects',
      description: 'Full-length cinematic AI short films, documentary explorations, educational series, and experimental visual motion.',
      accent: 'text-red-500',
      badgeColor: 'bg-red-500/10 text-red-500 border-red-500/20',
    },
    {
      platform: 'INSTAGRAM',
      handle: '@virtualvorld',
      url: PERSONAL_INFO.socials.instagram,
      icon: Instagram,
      tagline: 'AI video experiments, anime series and visual storytelling',
      description: 'Rapid video generation reels, the Into the Vibe anime series, aesthetic camera studies, and behind-the-scenes visual experiments.',
      accent: 'text-pink-500',
      badgeColor: 'bg-pink-500/10 text-pink-500 border-pink-500/20',
    },
  ];

  return (
    <section id="more-work" className="py-20 lg:py-28 relative border-t border-b" style={{ backgroundColor: 'var(--bg-page)', borderColor: 'var(--border-color)' }}>
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/5 blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-mono uppercase tracking-widest mb-2 flex items-center gap-2 font-bold" style={{ color: 'var(--accent)' }}>
            <Sparkles className="w-4 h-4" />
            EXPANDED CHANNELS & MEDIA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            MORE WORK
          </h2>
          <p className="text-sm sm:text-base mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Explore more AI films, anime projects, cultural stories, educational content and creative experiments.
          </p>
        </div>

        {/* 3 Large Cards: 1 col mobile, 3 cols tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card) => (
            <a
              key={card.platform}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-8 rounded-3xl border hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-lg"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
              }}
            >
              <div>
                {/* Platform Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-2xl border ${card.accent}`} style={{ backgroundColor: 'var(--bg-card-inner)', borderColor: 'var(--border-color)' }}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border font-bold ${card.badgeColor}`}>
                    {card.platform}
                  </span>
                </div>

                <div className="text-xs font-mono mb-1" style={{ color: 'var(--text-muted)' }}>
                  {card.handle}
                </div>
                <h3 className="text-xl font-display font-bold tracking-tight mb-2 group-hover:text-emerald-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {card.tagline}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {card.description}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="pt-6 mt-6 border-t flex items-center justify-between text-xs font-mono font-bold" style={{ borderColor: 'var(--border-subtle, var(--border-color))', color: 'var(--text-primary)' }}>
                <span>VISIT CHANNEL</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Anime Series Note */}
        <div 
          className="mt-12 p-4 rounded-2xl border text-center text-xs font-mono max-w-2xl mx-auto shadow-sm"
          style={{
            backgroundColor: 'var(--badge-bg)',
            borderColor: 'var(--border-color)',
            color: 'var(--text-secondary)',
          }}
        >
          Notice: Additional AI video experiments and the <span className="font-bold" style={{ color: 'var(--accent)' }}>Into the Vibe anime series</span> are regularly updated through my social channels.
        </div>

      </div>
    </section>
  );
};
