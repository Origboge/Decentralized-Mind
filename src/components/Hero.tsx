import React from 'react';
import {
  ArrowRight,
  Award,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Users
} from 'lucide-react';
import { DAO_STATS } from '../data/mockData';

interface HeroProps {
  onOpenCollabModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCollabModal }) => {
  const statIcons = [TrendingUp, Users, Award, ShieldCheck];

  return (
    <section id="about" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Identifier Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold mb-6 shadow-xs hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
            <span className="tracking-wide">DecentralMindz DAO · Web3 Marketing & Alpha Syndicate</span>
            <span className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.2 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300">
              Community Flywheel
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white mb-6 leading-[1.12]">
            Powering NFT Drops.{' '}
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 dark:from-purple-400 dark:via-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Securing Alpha
            </span>{' '}
            for Contributors.
          </h1>

          {/* Official DAO Motto in Liquid Glass Card */}
          <div className="relative mx-auto max-w-3xl mb-8 p-6 sm:p-7 rounded-3xl liquid-card liquid-gloss text-left shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-3xl font-serif text-purple-400 select-none leading-none mt-1">“</span>
              <p className="font-heading text-base sm:text-xl font-semibold text-slate-900 dark:text-slate-100 tracking-normal leading-relaxed">
                Forging the future of NFTs & Web3 by connecting builders, contributors, and alpha minds in a collaborative ecosystem.
              </p>

            </div>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">DecentralMindz Core Principle</span>
              </div>

            </div>
          </div>

          {/* Mission Explanation */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            We partner with upcoming NFT projects to drive organic marketing, viral X raids, and community engagement.
            In return, we bag <strong className="text-slate-950 dark:text-white font-semibold">exclusive Whitelist allocations</strong> for our members, while grinding for high-yield <strong className="text-slate-950 dark:text-white font-semibold">airdrops</strong> and early <strong className="text-slate-950 dark:text-white font-semibold">meme token gems</strong>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-16">
            <button
              id="hero-request-collab-btn"
              onClick={onOpenCollabModal}
              className="px-6 py-3.5 rounded-2xl bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-bold text-sm shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer transition-all active:scale-95"
            >
              <span>Partner With DecentralMindz</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#collaborations"
              className="px-5 py-3.5 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-2 transition-all hover:border-slate-300 dark:hover:border-slate-700"
            >
              <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Inspect Bagged Collabs</span>
            </a>

            <a
              href="https://discord.gg/decentralmindz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-semibold text-sm border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-2 transition-all hover:border-slate-300 dark:hover:border-slate-700"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <span>Join Discord</span>
            </a>
          </div>

          {/* DAO Verified Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {DAO_STATS.map((stat, idx) => {
              const IconComp = statIcons[idx % statIcons.length];
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl liquid-card text-left transition-all relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-2">
                    <IconComp className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 font-bold uppercase">
                      VERIFIED
                    </span>
                  </div>
                  <div className="font-mono text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {stat.detail}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
