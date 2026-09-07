import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-500"
    >
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-60 dark:opacity-40" />

      {/* Radiant Ambient Gradient Orbs */}
      <div 
        className="absolute -top-40 -left-40 w-96 sm:w-[540px] h-96 sm:h-[540px] rounded-full bg-purple-400/15 dark:bg-purple-600/15 blur-[100px] sm:blur-[140px] animate-pulse"
        style={{ animationDuration: '9s' }}
      />
      <div 
        className="absolute top-1/3 -right-40 w-96 sm:w-[500px] h-96 sm:h-[500px] rounded-full bg-cyan-400/15 dark:bg-cyan-500/12 blur-[100px] sm:blur-[140px] animate-pulse"
        style={{ animationDuration: '11s' }}
      />
      <div 
        className="absolute bottom-10 left-1/4 w-80 sm:w-[480px] h-80 sm:h-[480px] rounded-full bg-indigo-400/10 dark:bg-indigo-600/15 blur-[120px] sm:blur-[160px] animate-pulse"
        style={{ animationDuration: '13s' }}
      />

      {/* Top vignette glow */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-purple-500/5 dark:from-purple-500/10 to-transparent" />
    </div>
  );
};
