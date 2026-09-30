import React from 'react';
import { useTheme, ThemeMode } from '../context/ThemeContext';
import { Moon, Sun, Sparkles } from 'lucide-react';

interface ThemeSwitcherProps {
  className?: string;
  isCompact?: boolean;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className = '', isCompact = false }) => {
  const { theme, setTheme } = useTheme();

  const options: { mode: ThemeMode; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { mode: 'dark', label: 'DARK', icon: Moon },
    { mode: 'light', label: 'LIGHT', icon: Sun },
    { mode: 'neon', label: 'NEON', icon: Sparkles },
  ];

  return (
    <div
      role="radiogroup"
      aria-label="Theme selector"
      className={`inline-flex items-center p-1 rounded-xl bg-zinc-900/80 theme-light:bg-zinc-200/80 border border-white/10 theme-light:border-zinc-300 shadow-sm backdrop-blur-md ${className}`}
    >
      {options.map((opt) => {
        const Icon = opt.icon;
        const isActive = theme === opt.mode;

        return (
          <button
            key={opt.mode}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => setTheme(opt.mode)}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-mono font-bold transition-all duration-200 select-none cursor-pointer ${
              isActive
                ? opt.mode === 'neon'
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30'
                  : opt.mode === 'light'
                  ? 'bg-white text-zinc-900 shadow-md ring-1 ring-zinc-950/10'
                  : 'bg-zinc-800 text-white shadow-md ring-1 ring-white/10'
                : 'text-zinc-400 theme-light:text-zinc-600 hover:text-zinc-200 theme-light:hover:text-zinc-900 hover:bg-white/[0.05] theme-light:hover:bg-zinc-300/50'
            }`}
            title={`Switch to ${opt.label} theme`}
          >
            <Icon className={`w-3.5 h-3.5 ${isActive && opt.mode === 'neon' ? 'text-black' : ''}`} />
            {!isCompact && <span>{opt.label}</span>}
          </button>
        );
      })}
    </div>
  );
};
