import React, { useState } from 'react';
import { featuredProjects } from '../data/projectsData';
import { Project } from '../types';
import { DriveVideoPlayer } from './DriveVideoPlayer';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, CheckCircle2, Film } from 'lucide-react';

export const FeaturedWork: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterCategories = [
    { id: 'all', label: 'All Projects (12)' },
    { id: 'films', label: 'AI Short Films & Narrative' },
    { id: 'docs', label: 'Documentary & Exploration' },
    { id: 'edu', label: 'Education & Commercial' },
    { id: 'live-action', label: 'Live-Action Original' },
  ];

  const filteredProjects = featuredProjects.filter((p) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'live-action') return p.isLiveAction;
    if (selectedCategory === 'films') return p.category.includes('SHORT FILM') || p.category.includes('NARRATIVE') || p.category.includes('EXPERIMENT');
    if (selectedCategory === 'docs') return p.category.includes('DOCUMENTARY') || p.category.includes('WORLD BUILDING') || p.category.includes('CULTURAL');
    if (selectedCategory === 'edu') return p.category.includes('EDUCATION') || p.category.includes('BRANDING') || p.category.includes('PRODUCT');
    return true;
  });

  return (
    <section id="work" className="py-20 lg:py-28 relative" style={{ backgroundColor: 'var(--bg-page)' }}>
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[160px]" />
        <div className="absolute bottom-1/3 left-[-5%] w-[500px] h-[500px] bg-blue-500/5 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest mb-2 flex items-center gap-2 font-bold" style={{ color: 'var(--accent)' }}>
              <Film className="w-4 h-4" />
              PORTFOLIO SHOWCASE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              FEATURED WORK
            </h2>
            <p className="text-sm sm:text-base mt-2 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
              12 selected projects demonstrating prompt engineering, cinematic visual direction, multi-model workflows, and independent filmmaking.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div 
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl border self-start md:self-auto shadow-md backdrop-blur-md"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-color)',
            }}
          >
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium font-mono transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'text-black shadow-md font-bold'
                    : 'hover:text-emerald-500'
                }`}
                style={{
                  background: selectedCategory === cat.id ? 'var(--accent-gradient, #10b981)' : 'transparent',
                  color: selectedCategory === cat.id ? '#000000' : 'var(--text-secondary)',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 12 Projects Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const isLiveAction = project.isLiveAction;

            return (
              <article
                key={project.id}
                className="group rounded-2xl sm:rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between overflow-hidden relative shadow-lg"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: isLiveAction ? 'rgba(245, 158, 11, 0.4)' : 'var(--border-color)',
                }}
              >
                {/* 3D Border Glow on hover */}
                <div 
                  className={`absolute -inset-px rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm ${
                    isLiveAction ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20' : 'bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-emerald-600/20'
                  }`}
                  aria-hidden="true"
                />

                {/* Video Container Top Section */}
                <div className="p-3 sm:p-3.5 pb-0 relative z-10">
                  <div className="relative">
                    {/* Live action special badge */}
                    {isLiveAction && (
                      <div className="absolute top-2.5 left-2.5 z-20 px-2.5 py-0.5 rounded-full bg-amber-500 text-black text-[10px] font-mono font-extrabold tracking-wider shadow-md">
                        LIVE-ACTION ORIGINAL
                      </div>
                    )}
                    <DriveVideoPlayer
                      driveFileId={project.driveFileId}
                      title={project.title}
                      projectNumber={project.projectNumber}
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between relative z-10">
                  <div className="space-y-3">
                    {/* Clean unboxed metadata with typographic separators */}
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="font-bold" style={{ color: 'var(--accent)' }}>PRJ // {project.projectNumber}</span>
                      <span aria-hidden="true" style={{ color: 'var(--text-muted)' }}>·</span>
                      <span className="truncate font-medium" style={{ color: 'var(--text-secondary)' }}>{project.category}</span>
                    </div>

                    {/* Project Title with subtle hover movement */}
                    <h3 
                      className="text-lg sm:text-xl font-display font-bold tracking-tight transition-all duration-200 group-hover:translate-x-0.5"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm line-clamp-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {project.description}
                    </p>

                    {/* Tools Row */}
                    <div className="pt-1">
                      <span className="text-[10px] font-mono uppercase block mb-1.5" style={{ color: 'var(--text-muted)' }}>
                        Tools Used
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.slice(0, 4).map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md text-[11px] font-mono border"
                            style={{
                              backgroundColor: 'var(--badge-bg)',
                              borderColor: 'var(--badge-border)',
                              color: 'var(--text-secondary)',
                            }}
                          >
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 4 && (
                          <span className="text-[10px] font-mono self-center" style={{ color: 'var(--text-muted)' }}>
                            +{project.tools.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Prompt or Filmmaking Focus Snapshot */}
                    <div className="pt-2 border-t" style={{ borderColor: 'var(--border-subtle, var(--border-color))' }}>
                      <span className="text-[10px] font-mono uppercase block mb-1 flex items-center gap-1.5 font-semibold" style={{ color: 'var(--accent)' }}>
                        <CheckCircle2 className="w-3 h-3" />
                        {isLiveAction ? 'Filmmaking Focus' : 'Prompt Focus'}
                      </span>
                      <p className="text-xs line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                        {project.focusItems.slice(0, 2).join(' · ')}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-5 mt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-color)' }}>
                    <button
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold transition-colors group-hover:translate-x-0.5 cursor-pointer"
                      style={{ color: 'var(--accent)' }}
                    >
                      VIEW CASE STUDY <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] font-mono" style={{ color: 'var(--text-muted)' }}>
                      1080p Preview
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
