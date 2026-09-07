import React from 'react';
import {
  ArrowRight,
  Layers,
  Terminal,
  Coins
} from 'lucide-react';
import { AIRDROP_GRINDS } from '../data/mockData';

export const AirdropTracker: React.FC = () => {
  return (
    <section id="airdrops" className="py-16 sm:py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-3 shadow-xs">
              <Coins className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>Alpha Operations & Community Grinds</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              Airdrop Grinds & Meme Token Radar
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Beyond NFT whitelists, our alpha minds grind retroactive testnets, run nodes, and screen early meme gems with audited safety checks.
            </p>
          </div>

          <a
            href="https://discord.gg/8GeBJ8Nj9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-900 dark:text-white text-xs font-bold shadow-xs hover:shadow transition-all shrink-0"
          >
            <span>Full Grinding Guides on Discord</span>
            <ArrowRight className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
          </a>
        </div>

        {/* Grinds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AIRDROP_GRINDS.map((grind) => {
            const isSnapshot = grind.status === 'Snapshot Imminent';

            return (
              <div
                key={grind.id}
                className="rounded-3xl liquid-card p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                        {grind.chain}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                        {grind.type}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1.5 ${isSnapshot
                          ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/80'
                          : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80'
                        }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {grind.status}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-slate-950 dark:text-white mb-2">
                    {grind.protocol}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {grind.description}
                  </p>

                  {/* Alpha Tip Box */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 mb-4">
                    <div className="flex items-start gap-2.5">
                      <Terminal className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-mono font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wide">
                          ALPHA_STRATEGY:
                        </span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 mt-0.5 leading-relaxed font-medium">
                          {grind.alphaTip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-medium">
                    <Layers className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>{grind.daoParticipation}</span>
                  </div>

                  <div className="font-mono font-bold text-purple-700 dark:text-purple-300 text-xs bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/80 px-3 py-1 rounded-full">
                    {grind.estReward}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
