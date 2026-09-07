import React, { useState } from 'react';
import {
  Menu,
  X as CloseIcon,
  ArrowRight,
  Sun,
  Moon,
  Sparkles
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenCollabModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCollabModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      id="main-navbar"
      className="sticky top-0 z-30 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300 shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              {/* 
                LOGO CONTAINER:
                Drop your logo file into /public/logo.png (or change the src below).
                If logo.png is not found, it gracefully falls back to the Sparkles icon.
              */}
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-600 p-[1.5px] shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
                <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[14px] flex items-center justify-center transition-colors overflow-hidden">
                  {!logoError ? (
                    <img
                      src="/logo.png"
                      alt="DecentralMindz DAO Logo"
                      onError={() => setLogoError(true)}
                      className="w-full h-full object-cover rounded-[14px]"
                    />
                  ) : (
                    <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-bold text-base text-slate-900 dark:text-white tracking-tight">
                    DecentralMindz
                  </span>
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-1.5 py-0.2 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/80">
                    DAO
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 tracking-normal hidden sm:block">
                  NFT Marketing & Alpha Syndicate
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <a
              href="#about"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-1"
            >
              About
            </a>

            <a
              href="#collaborations"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-1 flex items-center gap-1.5"
            >
              <span>Collaborations</span>
              <span className="px-1.5 py-0.2 text-[10px] font-mono font-bold rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                Active WLs
              </span>
            </a>
            <a
              href="#airdrops"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-1"
            >
              Airdrops & Grinds
            </a>
            <a
              href="#team"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-1"
            >
              Team & CMs
            </a>
          </div>

          {/* Right Action Controls: Theme Switcher + Socials + Collab CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors flex items-center justify-center cursor-pointer shadow-xs"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-once" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* X / Twitter Link */}
            <a
              href="https://x.com/DecentralMindz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DecentralMindz DAO on X / Twitter"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors flex items-center"
              title="Follow DecentralMindz on X"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Discord Link */}
            <a
              href="https://discord.gg/XQwbED8Yc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DecentralMindz Discord Server"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors flex items-center"
              title="Join DecentralMindz Discord"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>

            {/* Collab CTA */}
            <button
              onClick={onOpenCollabModal}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-bold text-xs shadow-sm hover:shadow flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>
            <button
              onClick={onOpenCollabModal}
              className="px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs shadow-xs"
            >
              Collab
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            >
              {mobileMenuOpen ? <CloseIcon className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400"
          >
            About
          </a>
          <a
            href="#collaborations"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400"
          >
            Collaborations & Tweets
          </a>
          <a
            href="#airdrops"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400"
          >
            Airdrops & Grinds
          </a>
          <a
            href="#team"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400"
          >
            Team & CMs
          </a>
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href="https://x.com/DecentralMindz"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2"
              >
                <span>X / Twitter</span>
              </a>
              <a
                href="https://discord.gg/decentralmindz"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2"
              >
                <span>Discord</span>
              </a>
            </div>
            <button
              onClick={toggleTheme}
              className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-600" />}
              <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
