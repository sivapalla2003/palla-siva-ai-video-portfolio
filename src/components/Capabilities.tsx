import React from 'react';
import { CAPABILITIES } from '../data/portfolioData';
import { Sparkles, Layers } from 'lucide-react';

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-20 lg:py-28 relative" style={{ backgroundColor: 'var(--bg-page)' }}>
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-500/5 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-mono uppercase tracking-widest mb-2 flex items-center gap-2 font-bold" style={{ color: 'var(--accent)' }}>
            <Layers className="w-4 h-4" />
            COMPREHENSIVE EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            WHAT I CAN BUILD
          </h2>
          <p className="text-sm sm:text-base mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            From technical camera control and prompt architecture to character continuity and independent live-action direction.
          </p>
        </div>

        {/* 16 Capabilities Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              className="p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group shadow-md"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
              }}
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-3 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                  <span className="font-bold" style={{ color: 'var(--accent)' }}>
                    // {cap.number}
                  </span>
                  <Sparkles className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--accent)' }} />
                </div>

                {/* Title */}
                <h3 className="text-base font-display font-bold tracking-tight mb-2 group-hover:text-emerald-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {cap.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-3 border-t flex flex-wrap gap-1.5" style={{ borderColor: 'var(--border-subtle, var(--border-color))' }}>
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded border"
                    style={{
                      backgroundColor: 'var(--badge-bg)',
                      borderColor: 'var(--badge-border)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
