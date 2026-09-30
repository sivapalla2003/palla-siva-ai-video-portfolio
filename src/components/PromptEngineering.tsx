import React, { useState } from 'react';
import { PROMPT_ARCHITECTURE } from '../data/portfolioData';
import { Sparkles, Terminal, Code2, ArrowRight } from 'lucide-react';

export const PromptEngineering: React.FC = () => {
  const [activeDimension, setActiveDimension] = useState<string>(PROMPT_ARCHITECTURE[0].key);

  const pipeline = [
    'IDEA',
    'STORY',
    'SCENE',
    'SUBJECT',
    'ENVIRONMENT',
    'CAMERA',
    'LENS',
    'LIGHTING',
    'MOTION',
    'MOOD',
    'STYLE',
    'CONTINUITY',
    'GENERATION',
    'EDITING',
    'FINAL VIDEO',
  ];

  const currentItem = PROMPT_ARCHITECTURE.find((item) => item.key === activeDimension) || PROMPT_ARCHITECTURE[0];

  return (
    <section id="prompting" className="py-20 lg:py-28 relative border-t border-b" style={{ backgroundColor: 'var(--bg-page)', borderColor: 'var(--border-color)' }}>
      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[700px] h-[500px] bg-emerald-500/5 blur-[170px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest mb-2 flex items-center gap-2 font-bold" style={{ color: 'var(--accent)' }}>
            <Terminal className="w-4 h-4" />
            METHODOLOGY & COGNITIVE FRAMEWORK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            HOW I THINK IN PROMPTS
          </h2>
          <p className="text-sm sm:text-base mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Prompt engineering is not about typing long, arbitrary paragraphs. It is the architectural discipline of multi-axis parameter control — decomposing human emotion and film grammar into structured optical, kinetic, and continuity tokens.
          </p>
        </div>

        {/* 15-Stage Visual Pipeline Ribbon */}
        <div 
          className="mb-14 p-5 sm:p-6 rounded-3xl border shadow-xl backdrop-blur-xl relative overflow-hidden"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-color)',
          }}
        >
          <div className="flex items-center justify-between mb-4 text-xs font-mono">
            <span className="flex items-center gap-2 font-bold" style={{ color: 'var(--accent)' }}>
              <Sparkles className="w-4 h-4" /> THE 15-STAGE VISUAL PROMPT PIPELINE
            </span>
            <span className="text-[11px] hidden sm:inline" style={{ color: 'var(--text-muted)' }}>From Concept to Master Video</span>
          </div>

          <div className="overflow-x-auto pb-2 scrollbar-thin">
            <div className="flex items-center gap-2 min-w-max py-1">
              {pipeline.map((stage, idx) => (
                <React.Fragment key={stage}>
                  <div 
                    className="px-3.5 py-2 rounded-xl border text-xs font-mono font-medium flex items-center gap-2 shadow-sm transition-all"
                    style={{
                      backgroundColor: 'var(--bg-card-inner)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <span className="text-[10px] font-bold" style={{ color: 'var(--accent)' }}>{String(idx + 1).padStart(2, '0')}</span>
                    <span className="tracking-wide font-semibold">{stage}</span>
                  </div>
                  {idx < pipeline.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--text-muted)' }} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Prompt Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 12 Architecture Dimension Buttons */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {PROMPT_ARCHITECTURE.map((dim) => {
              const isSelected = activeDimension === dim.key;
              return (
                <button
                  key={dim.key}
                  onClick={() => setActiveDimension(dim.key)}
                  className="p-3.5 rounded-2xl text-left border transition-all duration-200 cursor-pointer shadow-sm"
                  style={{
                    backgroundColor: isSelected ? 'var(--accent-bg)' : 'var(--bg-card)',
                    borderColor: isSelected ? 'var(--accent)' : 'var(--border-color)',
                    color: 'var(--text-primary)',
                    transform: isSelected ? 'scale(1.02)' : 'none',
                  }}
                >
                  <span className="text-[10px] font-mono block mb-1 font-bold" style={{ color: isSelected ? 'var(--accent)' : 'var(--text-muted)' }}>
                    DIMENSION //
                  </span>
                  <div className="font-mono font-bold text-xs tracking-wider" style={{ color: 'var(--text-primary)' }}>
                    {dim.key}
                  </div>
                  <div className="text-[11px] truncate mt-1" style={{ color: 'var(--text-secondary)' }}>
                    {dim.question}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Dimension Deep Dive Panel */}
          <div className="lg:col-span-6">
            <div 
              className="p-6 sm:p-8 rounded-3xl border shadow-xl relative overflow-hidden"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-hover)',
              }}
            >
              <div 
                className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none font-mono text-8xl font-black"
                style={{ color: 'var(--text-primary)' }}
              >
                {currentItem.key}
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                <span className="text-xs font-mono uppercase tracking-wider font-bold" style={{ color: 'var(--accent)' }}>
                  STRUCTURED PROMPT CONTROL
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                {currentItem.key}
              </h3>
              <p className="text-sm font-mono mt-1 mb-4 font-semibold" style={{ color: 'var(--accent)' }}>
                "{currentItem.question}"
              </p>

              <div className="space-y-4 pt-2">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider mb-1 font-bold" style={{ color: 'var(--text-muted)' }}>
                    Engine Purpose & Execution
                  </h4>
                  <p 
                    className="text-sm leading-relaxed p-4 rounded-2xl border"
                    style={{
                      backgroundColor: 'var(--bg-card-inner)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {currentItem.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider mb-1.5 flex items-center gap-1.5 font-bold" style={{ color: 'var(--accent)' }}>
                    <Code2 className="w-3.5 h-3.5" /> Structured Prompt Implementation Example
                  </h4>
                  <div 
                    className="p-4 rounded-2xl border font-mono text-xs leading-relaxed overflow-x-auto shadow-inner"
                    style={{
                      backgroundColor: 'var(--bg-card-inner)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <code>{currentItem.example}</code>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t flex items-center justify-between text-xs font-mono" style={{ borderColor: 'var(--border-subtle, var(--border-color))', color: 'var(--text-muted)' }}>
                <span>Active Parameter: #{currentItem.key.toLowerCase()}_control</span>
                <span className="font-bold" style={{ color: 'var(--accent)' }}>Structured Prompt Architecture</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
