import React from 'react';
import { WORKFLOW_STEPS } from '../data/portfolioData';
import { Clock, CheckCircle } from 'lucide-react';

export const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-20 lg:py-28 relative border-t border-b" style={{ backgroundColor: 'var(--bg-page)', borderColor: 'var(--border-color)' }}>
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-mono uppercase tracking-widest mb-2 flex items-center gap-2 font-bold" style={{ color: 'var(--accent)' }}>
            <Clock className="w-4 h-4" />
            END-TO-END PRODUCTION PIPELINE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            AI VIDEO WORKFLOW
          </h2>
          <p className="text-sm sm:text-base mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            A 10-stage disciplined production pipeline ensuring cinematic coherence, character continuity, and meticulous post-production polish from concept to final cut.
          </p>
        </div>

        {/* 10-Step Timeline Layout */}
        <div className="relative">
          {/* Subtle vertical center connector line on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-emerald-500/40 via-emerald-500/10 to-transparent -translate-x-1/2 pointer-events-none" />

          <div className="space-y-6 sm:space-y-8">
            {WORKFLOW_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.step}
                  className={`flex flex-col lg:flex-row items-center gap-4 lg:gap-8 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Card */}
                  <div className="w-full lg:w-[calc(50%-2rem)]">
                    <div 
                      className="p-6 rounded-2xl sm:rounded-3xl border transition-all duration-300 group shadow-md"
                      style={{
                        backgroundColor: 'var(--bg-card)',
                        borderColor: 'var(--border-color)',
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span 
                          className="font-mono text-xs font-bold px-2 py-0.5 rounded border"
                          style={{
                            backgroundColor: 'var(--accent-bg)',
                            borderColor: 'var(--accent)',
                            color: 'var(--accent)',
                          }}
                        >
                          STAGE {step.step}
                        </span>
                        <span className="text-[11px] font-mono flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
                          <CheckCircle className="w-3 h-3 text-emerald-500" /> Milestone
                        </span>
                      </div>

                      <h3 className="text-lg font-display font-bold tracking-tight mb-2 group-hover:text-emerald-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                        {step.description}
                      </p>

                      <div className="pt-3 border-t flex items-center justify-between text-xs font-mono" style={{ borderColor: 'var(--border-subtle, var(--border-color))' }}>
                        <span className="uppercase text-[10px]" style={{ color: 'var(--text-muted)' }}>Deliverable</span>
                        <span className="font-semibold text-[11px]" style={{ color: 'var(--accent)' }}>{step.deliverable}</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Node Indicator */}
                  <div 
                    className="hidden lg:flex w-8 h-8 rounded-full border-2 items-center justify-center text-[11px] font-mono font-bold shadow-md z-10 shrink-0"
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderColor: 'var(--accent)',
                      color: 'var(--accent)',
                    }}
                  >
                    {step.step}
                  </div>

                  {/* Empty Spacer on other half */}
                  <div className="hidden lg:block w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Workflow Note on Tool Selectivity */}
        <div 
          className="mt-14 p-4 rounded-2xl border text-center text-xs font-mono max-w-2xl mx-auto shadow-sm"
          style={{
            backgroundColor: 'var(--badge-bg)',
            borderColor: 'var(--border-color)',
            color: 'var(--text-secondary)',
          }}
        >
          Production Note: Tools are selected specifically per brief requirements. Not every tool is utilized in every individual project.
        </div>

      </div>
    </section>
  );
};
