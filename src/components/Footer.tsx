import React, { useState } from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenCollabModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCollabModal }) => {
  const [logoError, setLogoError] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="ecosystem" className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-600 p-[1.5px] shadow-xs shrink-0 overflow-hidden">
                <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[14px] flex items-center justify-center overflow-hidden">
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
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-lg text-slate-950 dark:text-white">
                  DecentralMindz
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/80">
                  DAO
                </span>
              </div>
            </div>

            {/* Official Motto in Footer */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 max-w-md shadow-xs">
              <p className="text-slate-900 dark:text-slate-100 font-semibold italic text-xs leading-relaxed">
                “Forging the future of NFTs & Web3 by connecting builders, contributors, and alpha minds in a collaborative ecosystem.”
              </p>

            </div>

            <p className="text-slate-500 dark:text-slate-400 text-xs max-w-md leading-relaxed">
              DecentralMindz DAO is an organic Web3 marketing syndicate. We collaborate with upcoming NFT drops to drive viral reach and active collectors in exchange for guaranteed whitelists, airdrop alphas, and meme token gems.
            </p>

            {/* Little font icons and links for X, Discord, Telegram */}
            <div className="flex items-center gap-2.5 pt-2">
              {/* X / Twitter Link */}
              <a
                href="https://x.com/DecentralMindz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DecentralMindz on X / Twitter"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shadow-xs"
                title="Follow @DecentralMindz on X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Discord Link */}
              <a
                href="https://discord.gg/XQwbED8Yc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DecentralMindz Discord Server"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shadow-xs"
                title="Join DecentralMindz Discord"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>

              {/* Telegram Link */}
              {/* <a
                href="https://t.me/decentralmindz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DecentralMindz Telegram Announcements"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shadow-xs"
                title="Join Telegram Announcements"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a> */}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-slate-950 dark:text-white tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  About DecentralMindz
                </a>
              </li>
              <li>
                <a href="#collaborations" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Collaborations & Tweets
                </a>
              </li>
              <li>
                <a href="#airdrops" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Airdrops & Grinding
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Core Team & CMs
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-slate-950 dark:text-white tracking-wide">
              For Project Builders
            </h4>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
              Launching an NFT collection or Web3 token? Apply for a joint campaign with our community.
            </p>
            <button
              onClick={onOpenCollabModal}
              className="w-full py-3 px-4 rounded-2xl bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-bold text-xs cursor-pointer transition-all shadow-xs"
            >
              Submit Pitch / Collaboration
            </button>
          </div>
        </div>

        {/* Copyright and back to top */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <p>
              © {new Date().getFullYear()} DecentralMindz DAO. All rights reserved.
            </p>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">·</span>
            <p>
              Built &amp; designed by{' '}
              <a
                href="https://origboge.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 font-semibold transition-colors hover:underline"
              >
                Origboge
              </a>
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer text-xs font-bold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
