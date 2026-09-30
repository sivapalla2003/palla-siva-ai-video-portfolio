import React, { useState, useEffect, useRef } from 'react';
import { Camera, Upload, Check } from 'lucide-react';

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
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isSaving, setIsSaving] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Check localStorage and public paths on mount
  useEffect(() => {
    // 1. Check local storage cache
    const cached = localStorage.getItem('palla_siva_portrait_photo');
    if (cached) {
      setImageSrc(cached);
      return;
    }

    // 2. Check if /its-me-siva.png or /profile.png loads successfully
    const testImg = new Image();
    testImg.src = '/its-me-siva.png';
    testImg.onload = () => {
      setImageSrc('/its-me-siva.png');
    };
    testImg.onerror = () => {
      // Try alternate name with spaces
      const testImg2 = new Image();
      testImg2.src = '/its%20me%20Siva.png';
      testImg2.onload = () => setImageSrc('/its%20me%20Siva.png');
    };
  }, []);

  // Listen to cross-component updates
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'palla_siva_portrait_photo' && e.newValue) {
        setImageSrc(e.newValue);
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleFile = async (file: File) => {
    if (!file || !file.type.startsWith('image/')) return;
    setIsSaving(true);

    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        setImageSrc(dataUrl);
        try {
          localStorage.setItem('palla_siva_portrait_photo', dataUrl);
          // Sync with server API to persist to disk
          await fetch('/api/save-portrait', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dataUrl }),
          });
        } catch (err) {
          console.warn('Could not sync to server disk:', err);
        } finally {
          setIsSaving(false);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

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

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      style={tiltStyle}
      className={`relative group preserve-3d w-full ${
        isHero
          ? 'max-w-[340px] sm:max-w-[380px] lg:max-w-[400px]'
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
          {imageSrc ? (
            /* The REAL Original Photograph without modifications */
            <img
              src={imageSrc}
              alt="Palla Siva - AI Video Prompt Engineer & Independent Filmmaker"
              referrerPolicy="no-referrer"
              className={
                isHero
                  ? 'w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]'
                  : 'second-profile-image w-full h-full object-cover object-center block transition-transform duration-700 group-hover:scale-[1.02]'
              }
              style={
                isAbout
                  ? {
                      width: '100%',
                      height: '100%',
                      display: 'block',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      margin: 0,
                      padding: 0,
                    }
                  : undefined
              }
            />
          ) : (
            /* Cinematic Glass Placeholder prompting the user to load the original photograph */
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center relative overflow-hidden"
                 style={{ backgroundColor: 'var(--bg-card-inner)' }}>
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-500 mb-4 shadow-lg shadow-emerald-500/10 group-hover:scale-110 transition-transform">
                <Camera className="w-8 h-8" />
              </div>
              <h4 className="text-sm font-display font-bold tracking-wide" style={{ color: 'var(--text-primary)' }}>
                PALLA SIVA
              </h4>
              <p className="text-xs mt-1 max-w-[220px]" style={{ color: 'var(--text-secondary)' }}>
                Original Professional Portrait
              </p>
              
              <label 
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-black font-semibold text-xs transition-colors cursor-pointer shadow-lg shadow-emerald-500/20"
                style={{
                  background: 'var(--accent-gradient, #10b981)',
                }}
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload 'its me Siva.png'</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              <span className="text-[10px] font-mono mt-2" style={{ color: 'var(--text-muted)' }}>
                Drag & drop or click to select
              </span>
            </div>
          )}

          {/* Layer 4: Cinematic Ambient Glass Glare & Depth Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/5 pointer-events-none" />
          <div className={`absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none ${isHero ? 'rounded-xl sm:rounded-2xl' : 'rounded-2xl sm:rounded-3xl'}`} />

          {/* Quick Change / Upload Icon in corner */}
          <label
            className="absolute top-2.5 right-2.5 p-2 rounded-xl text-white border border-white/20 cursor-pointer transition-all backdrop-blur-md z-10 shadow-lg bg-black/60 hover:bg-black/90"
            title="Update or select profile photo ('its me Siva.png')"
          >
            <Camera className="w-3.5 h-3.5" />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {isSaving && (
            <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-black/80 border border-emerald-500/50 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 backdrop-blur-md z-10">
              <Check className="w-3 h-3" /> Photo Saved
            </div>
          )}
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
