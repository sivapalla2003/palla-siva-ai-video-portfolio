import React from 'react';
import { TOOLKIT_CATEGORIES } from '../data/portfolioData';
import { Wrench } from 'lucide-react';

export const Toolkit: React.FC = () => {
  return (
    <section id="toolkit" className="py-20 lg:py-24 relative" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest mb-2 flex items-center gap-2 font-bold" style={{ color: 'var(--accent)' }}>
            <Wrench className="w-4 h-4" />
            HARDWARE, MODELS & SOFTWARE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            PRODUCTION TOOLKIT
          </h2>
          <p className="text-sm sm:text-base mt-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            The multi-model software ecosystem and physical filming gear leveraged across AI generation, visual development, editing, and distribution.
          </p>
        </div>

        {/* Categories Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOOLKIT_CATEGORIES.map((category) => (
            <div
              key={category.category}
              className="p-5 rounded-2xl border transition-all flex flex-col justify-between shadow-sm"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
              }}
            >
              <div>
                <div 
                  className="text-xs font-mono font-bold uppercase tracking-wider mb-3 pb-2 border-b"
                  style={{
                    color: 'var(--accent)',
                    borderColor: 'var(--border-subtle, var(--border-color))',
                  }}
                >
                  {category.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-xl border text-xs font-mono transition-colors"
                      style={{
                        backgroundColor: 'var(--badge-bg)',
                        borderColor: 'var(--badge-border)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
