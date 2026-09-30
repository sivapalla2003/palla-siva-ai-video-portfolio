import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'FEATURED WORK', href: '#work' },
    { label: 'CAPABILITIES', href: '#capabilities' },
    { label: 'WORKFLOW', href: '#workflow' },
    { label: 'FILMMAKING', href: '#filmmaking' },
    { label: 'MORE WORK', href: '#more-work' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-xl border-b shadow-lg py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
      style={{
        backgroundColor: isScrolled ? 'var(--nav-bg)' : 'transparent',
        borderColor: isScrolled ? 'var(--nav-border)' : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Zone 1: Single element brand wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="text-lg sm:text-xl font-display font-extrabold tracking-tight transition-colors uppercase whitespace-nowrap cursor-pointer hover:text-emerald-500"
          style={{ color: 'var(--text-primary)' }}
        >
          PALLA SIVA
        </a>

        {/* Zone 2: Navigation links */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-mono tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="transition-colors relative py-1 hover:underline underline-offset-4 decoration-emerald-500 whitespace-nowrap cursor-pointer hover:text-emerald-500 font-medium"
              style={{ color: 'var(--text-secondary)' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Theme Switcher & Primary Action & Mobile Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Theme Switcher on Desktop */}
          <div className="hidden sm:block">
            <ThemeSwitcher />
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-black font-semibold text-xs transition-all shadow-md hover:scale-[1.02] whitespace-nowrap cursor-pointer"
            style={{
              background: 'var(--accent-gradient, #10b981)',
            }}
          >
            LET'S CREATE <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl border transition-colors cursor-pointer"
            style={{
              backgroundColor: 'var(--badge-bg)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)',
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="xl:hidden fixed inset-x-0 top-[60px] border-b backdrop-blur-2xl px-6 py-6 shadow-2xl transition-all"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-color)',
          }}
        >
          <div className="flex flex-col space-y-3.5">
            {/* Theme switcher on mobile */}
            <div className="pb-3 border-b flex items-center justify-between" style={{ borderColor: 'var(--border-color)' }}>
              <span className="text-xs font-mono font-bold" style={{ color: 'var(--text-secondary)' }}>APPEARANCE</span>
              <ThemeSwitcher />
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-mono tracking-wider transition-colors py-1.5 border-b flex items-center justify-between cursor-pointer hover:text-emerald-500"
                style={{
                  borderColor: 'var(--border-subtle, var(--border-color))',
                  color: 'var(--text-primary)',
                }}
              >
                <span>{link.label}</span>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>→</span>
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-black font-semibold text-sm transition-colors cursor-pointer"
                style={{
                  background: 'var(--accent-gradient, #10b981)',
                }}
              >
                LET'S CREATE <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
