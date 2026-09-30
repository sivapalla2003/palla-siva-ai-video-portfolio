import React, { useEffect } from 'react';
import { X, ExternalLink, Film, Sparkles, CheckCircle2, Video } from 'lucide-react';
import { Project } from '../types';
import { DriveVideoPlayer } from './DriveVideoPlayer';
import { getDriveDirectViewUrl } from '../data/projectsData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isLiveAction = project.isLiveAction;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-[96vw] sm:max-w-3xl lg:max-w-4xl max-h-[92vh] flex flex-col rounded-2xl sm:rounded-3xl border shadow-2xl text-left overflow-hidden my-auto"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--border-color)',
          color: 'var(--text-primary)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div 
          className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b sticky top-0 z-20 backdrop-blur-md"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-color)',
          }}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <span 
              className="font-mono text-xs px-2 py-0.5 rounded border font-bold"
              style={{
                backgroundColor: 'var(--badge-bg)',
                borderColor: 'var(--badge-border)',
                color: 'var(--accent)',
              }}
            >
              PRJ // {project.projectNumber}
            </span>
            {isLiveAction ? (
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-amber-500/15 text-amber-500 dark:text-amber-300 border border-amber-500/30 font-bold tracking-wide">
                LIVE-ACTION ORIGINAL
              </span>
            ) : (
              <span className="text-xs font-mono hidden sm:inline" style={{ color: 'var(--text-muted)' }}>
                AI CINEMATIC PRODUCTION
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl transition-colors cursor-pointer border"
            style={{
              backgroundColor: 'var(--badge-bg)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)',
            }}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-6">
          {/* Title & Category */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider mb-1 font-bold" style={{ color: 'var(--accent)' }}>
              {project.category}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              {project.title}
            </h2>
            <p className="text-sm sm:text-base mt-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {project.description}
            </p>
          </div>

          {/* Full Video Embed: Responsive 16:9 */}
          <div className="w-full">
            <DriveVideoPlayer
              driveFileId={project.driveFileId}
              title={project.title}
              projectNumber={project.projectNumber}
            />
            <div className="flex justify-between items-center mt-2 text-xs" style={{ color: 'var(--text-muted)' }}>
              <span className="font-mono">Resolution: 1080p / 16:9 Aspect</span>
              <a
                href={getDriveDirectViewUrl(project.driveFileId)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1 font-mono transition-colors"
                style={{ color: 'var(--accent)' }}
              >
                Open in Google Drive <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Character Profile if available */}
          {project.character && (
            <div 
              className="p-4 rounded-xl border"
              style={{
                backgroundColor: 'var(--bg-card-inner)',
                borderColor: 'var(--border-color)',
              }}
            >
              <h4 className="text-xs font-mono uppercase tracking-wider mb-1 flex items-center gap-2 font-bold" style={{ color: 'var(--accent)' }}>
                <Sparkles className="w-3.5 h-3.5" /> Character Profile
              </h4>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{project.character}</p>
            </div>
          )}

          {project.story && (
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider mb-2 flex items-center gap-2 font-semibold" style={{ color: 'var(--text-muted)' }}>
                <Film className="w-4 h-4" style={{ color: 'var(--accent)' }} /> Narrative & Context
              </h3>
              <p 
                className="text-sm leading-relaxed p-4 rounded-xl border"
                style={{
                  backgroundColor: 'var(--bg-card-inner)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-secondary)',
                }}
              >
                {project.story}
              </p>
            </div>
          )}

          {/* Story Beats */}
          {project.storyBeats && project.storyBeats.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider mb-2 font-semibold" style={{ color: 'var(--text-muted)' }}>
                Narrative Progression
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {project.storyBeats.map((beat, idx) => (
                  <div 
                    key={idx} 
                    className="p-2.5 rounded-lg border text-xs"
                    style={{
                      backgroundColor: 'var(--bg-card-inner)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {beat}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Live Action Credits if Project 11 */}
          {isLiveAction && project.credits && (
            <div 
              className="p-5 rounded-xl border space-y-4"
              style={{
                backgroundColor: 'var(--bg-card-inner)',
                borderColor: 'rgba(245, 158, 11, 0.3)',
              }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-mono uppercase tracking-wider text-amber-500 dark:text-amber-300 flex items-center gap-2 font-bold">
                  <Video className="w-4 h-4" /> End-to-End Production Credits
                </h3>
                <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>Independent Production</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.credits.map((c, i) => (
                  <div key={i} className="text-xs">
                    <span className="block uppercase font-mono text-[10px]" style={{ color: 'var(--text-muted)' }}>{c.role}</span>
                    <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{c.person}</span>
                  </div>
                ))}
              </div>
              {project.filmmakerNote && (
                <div className="pt-3 border-t text-xs italic" style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>
                  "{project.filmmakerNote}"
                </div>
              )}
            </div>
          )}

          {/* Tools Used */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider mb-2 font-semibold" style={{ color: 'var(--text-muted)' }}>
              Production Toolkit
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg border text-xs font-mono"
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

          {/* Prompt Engineering Focus OR Filmmaking Focus */}
          <div 
            className="p-5 rounded-2xl border"
            style={{
              backgroundColor: 'var(--bg-card-inner)',
              borderColor: 'var(--border-color)',
            }}
          >
            <h3 className="text-sm font-mono uppercase tracking-wider mb-3 flex items-center gap-2 font-bold" style={{ color: 'var(--accent)' }}>
              <CheckCircle2 className="w-4 h-4" />
              {isLiveAction ? 'FILMMAKING FOCUS' : 'PROMPT ENGINEERING FOCUS'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {project.focusItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-2 p-2.5 rounded-lg border"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: 'var(--accent)' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div 
          className="px-4 sm:px-6 py-3.5 border-t flex items-center justify-between"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-color)',
          }}
        >
          <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
            Palla Siva · Portfolio
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl border text-xs font-medium transition-colors cursor-pointer"
            style={{
              backgroundColor: 'var(--badge-bg)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)',
            }}
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
