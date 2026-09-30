import React from 'react';
import { DriveVideoPlayer } from './DriveVideoPlayer';
import { Film, Video, ArrowRight, Award, Compass, Sparkles } from 'lucide-react';

export const Filmmaking: React.FC = () => {
  const filmDriveId = '13ibmN1rafCrFNmPBpDTLyQcjPD_ahB7z';

  const pipeline = [
    'STORY',
    'DIRECTION',
    'SHOOT',
    'EDIT',
    'EFFECTS',
    'MUSIC',
    'FINAL FILM',
  ];

  const credits = [
    { label: 'DIRECTED BY', name: 'Palla Siva' },
    { label: 'STORY', name: 'Palla Siva' },
    { label: 'CINEMATOGRAPHY', name: 'Palla Siva' },
    { label: 'EDITING', name: 'Palla Siva' },
    { label: 'EFFECTS', name: 'CapCut' },
    { label: 'MUSIC & SCORE', name: 'Palla Siva' },
    { label: 'CAMERA', name: 'Mobile Camera' },
    { label: 'SUPPORT', name: 'Selfie Stick' },
  ];

  const focusPoints = [
    'Original Story Development on Digital Stress & Nature Healing',
    'Creative Direction & Actor Performance Management',
    'Mobile Cinematography using Natural Sunlight & Reflections',
    'Dynamic Tracking & Dolly-simulation using a Selfie Stick',
    'Pacing & Rhythmic Montage Editing in CapCut',
    'Visual Atmosphere & Harmonized Acoustic Soundscape',
    'Independent Resourcefulness on a Zero-Dollar Budget',
  ];

  return (
    <section id="filmmaking" className="py-20 lg:py-28 relative border-t border-b" style={{ backgroundColor: 'var(--bg-page)', borderColor: 'var(--border-color)' }}>
      {/* Background Amber Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[500px] bg-amber-500/5 blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-mono uppercase tracking-widest mb-2 flex items-center gap-2 font-bold text-amber-500">
            <Video className="w-4 h-4" />
            LIVE-ACTION CINEMATOGRAPHY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            BEYOND AI
          </h2>
          <p className="text-base sm:text-lg font-medium mt-2 text-amber-600 dark:text-amber-300">
            "Real-world filmmaking experience alongside generative AI."
          </p>
          <p className="text-sm sm:text-base mt-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Directorial intuition cannot be synthesized through algorithms alone. It requires physical understanding of light, camera angles, physical blocking, and human emotion.
          </p>
        </div>

        {/* Feature Spotlight: Into the Vibe Live-Action Short Film */}
        <div 
          className="rounded-3xl border p-5 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'rgba(245, 158, 11, 0.35)',
          }}
        >
          
          {/* Top Banner with Special Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b" style={{ borderColor: 'var(--border-color)' }}>
            <div>
              <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-300 border border-amber-500/30 text-xs font-mono font-bold tracking-wider uppercase inline-flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5" /> LIVE-ACTION ORIGINAL SHORT FILM
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mt-2 tracking-tight" style={{ color: 'var(--text-primary)' }}>
                INTO THE VIBE
              </h3>
              <p className="text-xs sm:text-sm font-mono mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                10-Minute Independent Short Film · Written, Directed & Edited by Palla Siva
              </p>
            </div>

            {/* Creative Ownership Badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-300 text-xs font-mono font-bold">
              <Award className="w-4 h-4" />
              END-TO-END CREATIVE OWNERSHIP
            </div>
          </div>

          {/* Grid: Video Player + Film Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left 7 Cols: Video Player & Filmmaker Quote */}
            <div className="lg:col-span-7 space-y-6">
              <DriveVideoPlayer
                driveFileId={filmDriveId}
                title="Into the Vibe — Original Live-Action Short Film"
                projectNumber="11"
              />

              {/* Filmmaker's Note */}
              <div 
                className="p-5 rounded-2xl border text-sm leading-relaxed relative shadow-inner"
                style={{
                  backgroundColor: 'var(--bg-card-inner)',
                  borderColor: 'rgba(245, 158, 11, 0.25)',
                  color: 'var(--text-secondary)',
                }}
              >
                <span className="text-xs font-mono uppercase block mb-1.5 tracking-wider font-bold text-amber-500 dark:text-amber-400">
                  FILMMAKER'S NOTE
                </span>
                <p className="italic">
                  "I created this short film independently from story to final edit, using a mobile phone camera and selfie stick for production. I handled the direction, cinematography, editing, effects and music myself."
                </p>
                <div className="mt-3 pt-3 border-t flex items-center justify-between text-xs font-mono" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
                  <span>Runtime: ~10 Minutes</span>
                  <span className="text-amber-500 font-semibold">Creative Ownership from Idea to Final Cut</span>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Production Pipeline, Credits, Filmmaking Focus */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Production Pipeline */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-bold" style={{ color: 'var(--text-muted)' }}>
                  <Compass className="w-3.5 h-3.5 text-amber-500" />
                  Independent Production Pipeline
                </h4>
                <div 
                  className="flex flex-wrap items-center gap-1.5 p-2.5 rounded-2xl border font-mono text-xs"
                  style={{
                    backgroundColor: 'var(--bg-card-inner)',
                    borderColor: 'var(--border-color)',
                  }}
                >
                  {pipeline.map((stage, idx) => (
                    <React.Fragment key={stage}>
                      <span className="font-bold text-amber-600 dark:text-amber-300">{stage}</span>
                      {idx < pipeline.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-zinc-500 shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Full Credits Grid */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider mb-2.5 font-bold" style={{ color: 'var(--text-muted)' }}>
                  Production Credits
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {credits.map((c) => (
                    <div
                      key={c.label}
                      className="p-2.5 rounded-xl border text-xs"
                      style={{
                        backgroundColor: 'var(--bg-card-inner)',
                        borderColor: 'var(--border-color)',
                      }}
                    >
                      <span className="text-[10px] font-mono block" style={{ color: 'var(--text-muted)' }}>
                        {c.label}
                      </span>
                      <span className="font-bold" style={{ color: 'var(--text-primary)' }}>{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Filmmaking Focus */}
              <div 
                className="p-4 rounded-2xl border"
                style={{
                  backgroundColor: 'var(--bg-card-inner)',
                  borderColor: 'rgba(245, 158, 11, 0.25)',
                }}
              >
                <h4 className="text-xs font-mono uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-bold text-amber-500 dark:text-amber-300">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Filmmaking Dimensions Demonstrated
                </h4>
                <ul className="space-y-1.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
                  {focusPoints.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
