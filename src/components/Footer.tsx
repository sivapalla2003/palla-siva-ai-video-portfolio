import React from 'react';
import { ArrowUp, Linkedin, Youtube, Instagram, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="py-12 border-t relative transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderColor: 'var(--border-color)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b" style={{ borderColor: 'var(--border-subtle, var(--border-color))' }}>
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-display font-extrabold tracking-tight uppercase" style={{ color: 'var(--text-primary)' }}>
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-xs font-mono mt-1 font-bold" style={{ color: 'var(--accent)' }}>
              {PERSONAL_INFO.primaryTitle} · {PERSONAL_INFO.secondaryTitle}
            </p>
            <p className="text-xs mt-1 max-w-md" style={{ color: 'var(--text-secondary)' }}>
              "Prompting ideas into cinematic reality."
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2.5 rounded-xl border transition-colors shadow-sm"
              style={{
                backgroundColor: 'var(--badge-bg)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-primary)',
              }}
            >
              <Linkedin className="w-4 h-4 text-sky-500" />
            </a>

            <a
              href={PERSONAL_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube channel"
              className="p-2.5 rounded-xl border transition-colors shadow-sm"
              style={{
                backgroundColor: 'var(--badge-bg)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-primary)',
              }}
            >
              <Youtube className="w-4 h-4 text-red-500" />
            </a>

            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="p-2.5 rounded-xl border transition-colors shadow-sm"
              style={{
                backgroundColor: 'var(--badge-bg)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-primary)',
              }}
            >
              <Instagram className="w-4 h-4 text-pink-500" />
            </a>

            <a
              href={PERSONAL_INFO.socials.emailMailto}
              aria-label="Send Email"
              className="p-2.5 rounded-xl border transition-colors shadow-sm"
              style={{
                backgroundColor: 'var(--badge-bg)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-primary)',
              }}
            >
              <Mail className="w-4 h-4 text-emerald-500" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl border transition-all cursor-pointer shadow-sm ml-1"
              style={{
                backgroundColor: 'var(--accent-bg)',
                borderColor: 'var(--accent)',
                color: 'var(--accent)',
              }}
              title="Return to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono gap-3" style={{ color: 'var(--text-muted)' }}>
          <div>
            © 2026 Palla Siva. All rights reserved.
          </div>
          <div className="text-[11px] text-center sm:text-right">
            AI Video Prompt Engineering · Independent Filmmaking · Generative Media
          </div>
        </div>

      </div>
    </footer>
  );
};
