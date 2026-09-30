import React, { useRef, useState } from 'react';
import sivaProfileImg from '../assets/siva-profile.png';

interface ProfilePortraitProps {
  size?: 'hero' | 'about' | 'compact';
  className?: string;
  showStatusBadge?: boolean;
}

export const ProfilePortrait: React.FC<ProfilePortraitProps> = ({
  size = 'hero',
  className = '',
  showStatusBadge = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Subtle 3D Card tilt on hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const isHero = size === 'hero';
  const isAbout = size === 'about';

  // 3D transform style (disabled if user prefers reduced motion)
  const tiltStyle: React.CSSProperties = isHero && isHovered
    ? {
        transform: `perspective(1000px) rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg) translateZ(8px)`,
        transition: 'transform 0.15s ease-out',
      }
    : {
        transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)',
        transition: 'transform 0.5s ease-in-out',
      };

  // Permanent static asset path with fallback to public static folder
  const imageSrc = sivaProfileImg || '/images/siva-profile.png';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      style={tiltStyle}
      className={`relative group preserve-3d w-full ${
        isHero
          ? 'max-w-[320px] sm:max-w-[360px] lg:max-w-[390px]'
          : isAbout
          ? 'max-w-[280px]'
          : 'max-w-[140px]'
      } ${className}`}
    >
      {/* Layer 1: Ambient 3D Rim Glow & Soft Lights */}
      <div
        className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-emerald-500/25 via-teal-400/15 to-emerald-600/25 opacity-70 blur-2xl group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        aria-hidden="true"
      />

      {/* Layer 2: Main 3D Glass Profile Container */}
      <div 
        className={`relative rounded-2xl sm:rounded-3xl border shadow-2xl backdrop-blur-2xl transition-all duration-300 ${
          isHero ? 'p-2.5 sm:p-3' : 'p-0 overflow-hidden'
        }`}
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--border-color)',
        }}
      >
        {/* Subtle Top Metadata Bar (Only in Hero) */}
        {isHero && (
          <div 
            className="flex items-center justify-between px-3 py-2 mb-2 border-b text-[11px] font-mono"
            style={{
              borderColor: 'var(--border-color)',
              color: 'var(--text-secondary)',
            }}
          >
            <span className="flex items-center gap-1.5 font-semibold text-emerald-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              DIRECTOR / PROMPT SPECIALIST
            </span>
            <span className="font-bold tracking-wider" style={{ color: 'var(--text-primary)' }}>PALLA SIVA</span>
          </div>
        )}

        {/* Layer 3: Image Frame with 3:4 Portrait Ratio & Natural Lighting */}
        <div
          className={`relative aspect-[3/4] w-full ${
            isHero
              ? 'overflow-hidden rounded-xl sm:rounded-2xl shadow-inner'
              : 'second-profile-image-wrapper overflow-hidden rounded-2xl sm:rounded-3xl'
          }`}
          style={{ backgroundColor: 'var(--bg-card-inner)' }}
        >
          {/* Permanent Static Profile Photograph - Always loaded, never vanishes */}
          <img
            src={imageSrc}
            alt="Palla Siva - AI Video Prompt Engineer & Independent Filmmaker"
            loading="eager"
            decoding="async"
            onError={(e) => {
              // Fail-safe fallback to static public asset path
              if (e.currentTarget.src !== '/images/siva-profile.png') {
                e.currentTarget.src = '/images/siva-profile.png';
              }
            }}
            className={
              isHero
                ? 'w-full h-full object-cover object-center block transition-transform duration-700 group-hover:scale-[1.02]'
                : 'second-profile-image w-full h-full object-cover object-center block transition-transform duration-700 group-hover:scale-[1.02]'
            }
            style={{
              width: '100%',
              height: '100%',
              display: 'block',
              objectFit: 'cover',
              objectPosition: 'center',
              margin: 0,
              padding: 0,
            }}
          />

          {/* Layer 4: Cinematic Ambient Glass Glare & Depth Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/5 pointer-events-none" />
          <div className={`absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none ${isHero ? 'rounded-xl sm:rounded-2xl' : 'rounded-2xl sm:rounded-3xl'}`} />
        </div>

        {/* Layer 5: Hero Supporting Label Hierarchy */}
        {isHero && showStatusBadge && (
          <div 
            className="mt-3 pt-2.5 border-t flex items-center justify-between text-xs px-1"
            style={{ borderColor: 'var(--border-color)' }}
          >
            <div>
              <div className="font-display font-bold tracking-wide text-sm" style={{ color: 'var(--text-primary)' }}>
                PALLA SIVA
              </div>
              <div className="text-[11px] font-mono tracking-wider font-semibold text-emerald-500">
                AI VIDEO PROMPT ENGINEER
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20 font-bold">
                1.5+ YRS EXP
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
