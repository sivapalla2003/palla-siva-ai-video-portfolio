import React, { useState } from 'react';
import { ExternalLink, Play, AlertCircle, Maximize2 } from 'lucide-react';
import { getDrivePreviewUrl, getDriveDirectViewUrl } from '../data/projectsData';

interface DriveVideoPlayerProps {
  driveFileId: string;
  title: string;
  projectNumber?: string;
  className?: string;
  autoplay?: boolean;
}

export const DriveVideoPlayer: React.FC<DriveVideoPlayerProps> = ({
  driveFileId,
  title,
  projectNumber,
  className = '',
}) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const previewUrl = getDrivePreviewUrl(driveFileId);
  const directUrl = getDriveDirectViewUrl(driveFileId);

  const handleStartPlay = () => {
    setIsPlaying(true);
  };

  return (
    <div 
      className={`relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden border group ${className}`}
      style={{
        backgroundColor: 'var(--bg-card-inner)',
        borderColor: 'var(--border-color)',
      }}
    >
      {/* If not yet user-initiated play (for performance and crisp preview) or iframe loaded */}
      {!isPlaying ? (
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center cursor-pointer select-none transition-colors"
          style={{
            backgroundColor: 'var(--bg-card-inner)',
          }}
          onClick={handleStartPlay}
        >
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
          
          {/* Ambient center glow */}
          <div className="absolute w-32 h-32 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />

          {/* Project Number Watermark */}
          {projectNumber && (
            <div className="absolute top-3 left-3 text-[11px] font-mono tracking-wider font-semibold" style={{ color: 'var(--text-muted)' }}>
              PRJ // {projectNumber}
            </div>
          )}

          {/* Play Button Trigger */}
          <div 
            className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full border flex items-center justify-center transition-all duration-300 shadow-lg group-hover:scale-110"
            style={{
              backgroundColor: 'var(--accent-bg)',
              borderColor: 'var(--accent)',
              color: 'var(--accent)',
            }}
          >
            <Play className="w-6 h-6 sm:w-7 sm:h-7 translate-x-0.5 fill-current" />
          </div>

          <div className="relative z-10 mt-3.5 max-w-[85%]">
            <h4 className="text-sm font-semibold tracking-wide truncate" style={{ color: 'var(--text-primary)' }}>{title}</h4>
            <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>Click to play Google Drive preview</p>
          </div>

          {/* Direct Drive link helper */}
          <a
            href={directUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-3 right-3 text-[11px] font-mono flex items-center gap-1 transition-colors px-2 py-1 rounded-lg border"
            style={{
              backgroundColor: 'var(--badge-bg)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-secondary)',
            }}
            title="Open in Google Drive"
          >
            Drive <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      ) : hasError ? (
        /* Video Unavailable Fallback */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center" style={{ backgroundColor: 'var(--bg-card-inner)' }}>
          <AlertCircle className="w-10 h-10 text-amber-500 mb-2 opacity-90" />
          <h4 className="text-sm font-semibold uppercase tracking-wider font-mono" style={{ color: 'var(--text-primary)' }}>
            VIDEO UNAVAILABLE IN EMBED
          </h4>
          <p className="text-xs max-w-sm mt-1 mb-4" style={{ color: 'var(--text-secondary)' }}>
            Google Drive preview permissions or third-party cookie restrictions prevented inline playback.
          </p>
          <a
            href={directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-black font-semibold text-xs transition-colors shadow-lg cursor-pointer"
            style={{
              background: 'var(--accent-gradient, #10b981)',
            }}
          >
            OPEN VIDEO <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      ) : (
        /* Google Drive Iframe Preview */
        <div className="relative w-full h-full">
          {/* Loading Skeleton */}
          {!hasLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 animate-pulse" style={{ backgroundColor: 'var(--bg-card-inner)', color: 'var(--text-secondary)' }}>
              <div className="w-8 h-8 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin mb-3" />
              <span className="text-xs font-mono tracking-wider font-semibold">CONNECTING GOOGLE DRIVE STREAM...</span>
            </div>
          )}

          <iframe
            src={previewUrl}
            title={title}
            className="w-full h-full border-0"
            allow="autoplay; fullscreen"
            allowFullScreen
            loading="lazy"
            onLoad={() => setHasLoaded(true)}
            onError={() => setHasError(true)}
          />

          {/* Top Bar Floating Controls */}
          <div className="absolute top-2 right-2 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
            <a
              href={directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border text-xs backdrop-blur-md flex items-center gap-1 shadow-md"
              style={{
                backgroundColor: 'rgba(0,0,0,0.7)',
                borderColor: 'rgba(255,255,255,0.15)',
                color: '#ffffff',
              }}
              title="Open directly in Google Drive"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
