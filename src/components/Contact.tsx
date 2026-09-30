import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Send, Linkedin, Youtube, Instagram, MessageSquare, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendDraft = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formSubject || 'Inquiry: AI Video Production / Prompt Engineering');
    const body = encodeURIComponent(
      `Hello Palla Siva,\n\nName: ${formName || 'Collaborator'}\n\n${formMessage || 'I would like to discuss an AI video or creative storytelling project.'}\n\nBest regards,`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-page)' }}>
      {/* Background Cinematic Gradient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[500px] bg-gradient-to-t from-emerald-500/15 via-teal-500/5 to-transparent blur-[160px]" />
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Destinations */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest flex items-center gap-2 font-bold" style={{ color: 'var(--accent)' }}>
              <Sparkles className="w-4 h-4" />
              GET IN TOUCH
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight" style={{ color: 'var(--text-primary)' }}>
              LET'S CREATE SOMETHING CINEMATIC
            </h2>

            <div className="space-y-3 text-sm sm:text-base leading-relaxed max-w-xl" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Have a story, product, campaign, educational concept or creative idea that needs to become a visual experience?
              </p>
              <p className="font-semibold text-lg" style={{ color: 'var(--accent)' }}>
                Let's turn the idea into motion.
              </p>
            </div>

            {/* Direct Email Action Box */}
            <div 
              className="p-5 sm:p-6 rounded-3xl border space-y-3 max-w-md shadow-xl"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
              }}
            >
              <span className="text-[11px] font-mono uppercase tracking-wider block font-bold" style={{ color: 'var(--text-muted)' }}>
                Direct Electronic Mail
              </span>
              <div 
                className="flex items-center justify-between gap-3 p-3 rounded-2xl border"
                style={{
                  backgroundColor: 'var(--bg-card-inner)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <span className="font-mono text-xs sm:text-sm select-all truncate font-bold" style={{ color: 'var(--accent)' }}>
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-xl transition-colors flex items-center gap-1.5 text-xs font-mono shrink-0 shadow-sm border cursor-pointer"
                  style={{
                    backgroundColor: 'var(--badge-bg)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Primary Email CTA button */}
              <a
                href={PERSONAL_INFO.socials.emailMailto}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-black font-display font-bold text-sm tracking-wide transition-all shadow-lg hover:scale-[1.01] cursor-pointer"
                style={{
                  background: 'var(--accent-gradient, #10b981)',
                }}
              >
                EMAIL ME <Send className="w-4 h-4" />
              </a>
            </div>

            {/* Exact Social Destinations */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider block mb-3 font-bold" style={{ color: 'var(--text-muted)' }}>
                Official Channels
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl border text-xs font-mono transition-all inline-flex items-center gap-2 shadow-sm"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <Linkedin className="w-4 h-4 text-sky-500" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl border text-xs font-mono transition-all inline-flex items-center gap-2 shadow-sm"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <Youtube className="w-4 h-4 text-red-500" />
                  <span>YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl border text-xs font-mono transition-all inline-flex items-center gap-2 shadow-sm"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span>Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-6 w-full">
            <div 
              className="p-5 sm:p-8 rounded-3xl border shadow-xl"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-display font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                  <MessageSquare className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                  Direct Project Inquiry
                </h3>
                <span className="text-[11px] font-mono" style={{ color: 'var(--text-muted)' }}>Direct Collaboration</span>
              </div>

              <form onSubmit={handleSendDraft} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono mb-1 font-semibold" style={{ color: 'var(--text-secondary)' }}>
                    YOUR NAME OR ORGANIZATION
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Maya Sharma / Studio Horizon"
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors shadow-inner"
                    style={{
                      backgroundColor: 'var(--input-bg)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-brief" className="block text-xs font-mono mb-1 font-semibold" style={{ color: 'var(--text-secondary)' }}>
                    PROJECT FOCUS OR INQUIRY TYPE
                  </label>
                  <input
                    id="contact-brief"
                    type="text"
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    placeholder="e.g. AI Short Film / Commercial / Visual Direction"
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors shadow-inner"
                    style={{
                      backgroundColor: 'var(--input-bg)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono mb-1 font-semibold" style={{ color: 'var(--text-secondary)' }}>
                    BRIEF NARRATIVE / SCOPE
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Describe your story, concept, timeline, or objectives..."
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors resize-none shadow-inner"
                    style={{
                      backgroundColor: 'var(--input-bg)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-mono font-bold text-xs tracking-wider transition-all border flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  style={{
                    backgroundColor: 'var(--badge-bg)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <span>COMPOSE VIA EMAIL CLIENT</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
