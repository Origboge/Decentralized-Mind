import React, { useEffect, useState } from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

interface LoadingScreenProps {
  onLoaded?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(15);
  const [status, setStatus] = useState('Connecting to DecentralMindz Alpha...');
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Step 1: Smoothly animate progress
    const t1 = setTimeout(() => {
      setProgress(55);
      setStatus('Syncing live crypto feeds & collaborations...');
    }, 180);

    const t2 = setTimeout(() => {
      setProgress(88);
      setStatus('Loading community alpha radar...');
    }, 420);

    const t3 = setTimeout(() => {
      setProgress(100);
      setStatus('Welcome to DecentralMindz DAO');
    }, 680);

    // Step 2: Trigger fade-out animation
    const t4 = setTimeout(() => {
      setIsFadingOut(true);
      if (onLoaded) onLoaded();
    }, 850);

    // Step 3: Remove from DOM completely
    const t5 = setTimeout(() => {
      setIsDone(true);
    }, 1300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onLoaded]);

  if (isDone) return null;

  return (
    <div
      aria-label="Loading DecentralMindz DAO"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 text-white transition-opacity duration-500 ease-out select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-purple-600/20 blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full bg-cyan-500/15 blur-[80px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center px-4 max-w-sm text-center">
        {/* Glowing Logo Frame */}
        <div className="relative mb-6">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 opacity-70 blur-lg animate-pulse" />
          <div className="relative w-20 h-20 rounded-2xl p-[1.5px] bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-2xl">
            <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png"
                alt="DecentralMindz DAO Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="flex items-center gap-2 mb-2">
          <h1 className="font-heading text-xl font-extrabold tracking-tight text-white">
            DecentralMindz
          </h1>
          <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-purple-900/60 text-purple-300 border border-purple-700/60">
            DAO
          </span>
        </div>

        {/* Dynamic Status Text */}
        <p className="text-xs text-slate-400 font-medium tracking-wide mb-6 h-5 transition-all">
          {status}
        </p>

        {/* Cyber Progress Bar */}
        <div className="w-64 h-1.5 bg-slate-800/80 rounded-full overflow-hidden p-[1px] border border-slate-700/40 shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 transition-all duration-300 ease-out shadow-sm"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Indicator & Live Node Badge */}
        <div className="w-64 flex items-center justify-between mt-2.5 text-[11px] font-mono text-slate-500">
          <span className="flex items-center gap-1.5 text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] tracking-wider uppercase text-emerald-400 font-semibold">
              Live Web3
            </span>
          </span>
          <span className="text-purple-300 font-bold">{progress}%</span>
        </div>
      </div>
    </div>
  );
};
