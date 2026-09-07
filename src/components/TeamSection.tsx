import React, { useState } from 'react';
import { 
  Users, 
  ShieldCheck,
  Award
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/mockData';

export const TeamSection: React.FC = () => {
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  return (
    <section id="team" className="py-16 sm:py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-3 shadow-xs">
            <Users className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>The Minds Behind DecentralMindz</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight mb-4">
            Meet the Core Team & Community Managers
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            From strategic founders and partnership negotiators to 24/7 Community Managers and relentless alpha grinders.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member) => {
            return (
              <div
                key={member.id}
                className="rounded-3xl liquid-card p-6 sm:p-7 flex flex-col justify-between transition-all shadow-sm hover:shadow-md group relative overflow-hidden"
              >
                <div>
                  {/* Top Row: Avatar & Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="relative">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-14 h-14 rounded-2xl object-cover border border-slate-200 dark:border-slate-700 shadow-xs"
                      />
                      <div className="absolute -bottom-1 -right-1 p-0.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400 shadow-xs">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {member.badge}
                    </span>
                  </div>

                  {/* Name, Handle, Role */}
                  <h3 className="font-heading text-lg font-bold text-slate-950 dark:text-white">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono text-purple-600 dark:text-purple-400 font-semibold mb-1">
                    {member.handle}
                  </div>
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-3">
                    {member.role}
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {member.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Socials Icons */}
                <div className="pt-4 border-t border-slate-150 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* X / Twitter icon */}
                    {member.socials.x && (
                      <a
                        href={member.socials.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on X`}
                        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        title="Follow on X"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    )}

                    {/* Discord icon / handle */}
                    {member.socials.discord && (
                      member.socials.discord.startsWith('http') ? (
                        <a
                          href={member.socials.discord}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on Discord`}
                          className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                          title="Discord Profile"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                          </svg>
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText(member.socials.discord);
                            setCopiedHandle(member.id);
                            setTimeout(() => setCopiedHandle(null), 2000);
                          }}
                          className="relative p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                          title={`Discord: ${member.socials.discord} (Click to copy)`}
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                          </svg>
                          {copiedHandle === member.id && (
                            <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-950 text-white text-[9px] font-mono whitespace-nowrap shadow-lg">
                              Copied!
                            </span>
                          )}
                        </button>
                      )
                    )}
                  </div>

                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/80">
                    DAO Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
