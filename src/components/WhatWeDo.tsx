import React from 'react';
import { 
  Rocket, 
  Users, 
  Megaphone, 
  ShieldCheck, 
  Radio, 
  Coins, 
  Gift, 
  Compass, 
  ArrowRight,
  Layers,
  Sparkles
} from 'lucide-react';

interface WhatWeDoProps {
  onOpenCollabModal: () => void;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onOpenCollabModal }) => {
  return (
    <section id="what-we-do" className="py-16 sm:py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-3 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>The Value Engine</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight mb-4">
            How DecentralMindz Powers Web3 Partnerships
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            We operate a mutual-benefit flywheel: emerging projects obtain authentic, hyper-engaged Web3 marketing and viral reach, while our community gains priority whitelist access, airdrop alphas, and meme token gems.
          </p>
        </div>

        {/* 2-Column Comparative Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: For Launching Projects */}
          <div className="rounded-3xl liquid-card p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/80 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-xs">
                  <Rocket className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 text-[11px] font-mono font-bold uppercase tracking-wider border border-cyan-200 dark:border-cyan-800">
                  For NFT & Web3 Projects
                </span>
              </div>

              <h3 className="font-heading text-2xl font-bold text-slate-950 dark:text-white mb-2">
                What We Deliver For Your Launch
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Skip the generic bot engagement. We deliver real Web3 degens, collectors, and active on-chain wallets ready to mint and hold.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
                  <div className="p-2 rounded-xl bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-700 shrink-0 mt-0.5 shadow-xs">
                    <Megaphone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Coordinated Viral Raids & Quote Retweets
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      Our raid team floods your announcement tweets, generating authentic algorithmic engagement that hits the top of Crypto Twitter feeds.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
                  <div className="p-2 rounded-xl bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 border border-slate-200 dark:border-slate-700 shrink-0 mt-0.5 shadow-xs">
                    <Radio className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Co-Hosted Twitter / X Spaces & Discord AMAs
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      We host your founding team in front of hundreds of live listeners, explaining your project’s lore, utility, and mint roadmap.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
                  <div className="p-2 rounded-xl bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700 shrink-0 mt-0.5 shadow-xs">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Vetted, Bot-Free Whitelist Distribution
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      Every Whitelist spot is awarded to verified, active contributors. Zero bot farms, guaranteed authentic mint demand.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Ready to amplify your mint?
              </span>
              <button
                onClick={onOpenCollabModal}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors cursor-pointer"
              >
                <span>Book Collaboration</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: For DAO Community Members */}
          <div className="rounded-3xl liquid-card p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/80 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-xs">
                  <Users className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 text-[11px] font-mono font-bold uppercase tracking-wider border border-purple-200 dark:border-purple-800">
                  For Community Members
                </span>
              </div>

              <h3 className="font-heading text-2xl font-bold text-slate-950 dark:text-white mb-2">
                What You Gain as a DecentralMindz Member
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                We empower members with direct access to high-conviction tier-1 allocations, early testnet rewards, and vetted meme calls.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
                  <div className="p-2 rounded-xl bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 border border-slate-200 dark:border-slate-700 shrink-0 mt-0.5 shadow-xs">
                    <Gift className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Guaranteed & FCFS Whitelist Spots
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      Participate in exclusive community giveaways, Discord game nights, and raid bounties to win guaranteed NFT mint spots.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
                  <div className="p-2 rounded-xl bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 border border-slate-200 dark:border-slate-700 shrink-0 mt-0.5 shadow-xs">
                    <Coins className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Organized Airdrop Grinding Playbooks
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      Step-by-step guides for farming the most lucrative testnets and L1/L2 ecosystems before snapshots take place.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
                  <div className="p-2 rounded-xl bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700 shrink-0 mt-0.5 shadow-xs">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Early Meme Token & Micro-Cap Alpha Calls
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      Audited on-chain callouts with risk grades, developer wallet tracking, and liquidity lock verifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Want in on the alpha?
              </span>
              <a
                href="https://discord.gg/decentralmindz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
              >
                <span>Join Alpha Discord</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
