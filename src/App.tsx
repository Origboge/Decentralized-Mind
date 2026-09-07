import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AmbientBackground } from './components/AmbientBackground';
import { PriceTicker } from './components/PriceTicker';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatWeDo } from './components/WhatWeDo';
import { CollabShowcase } from './components/CollabShowcase';
import { AirdropTracker } from './components/AirdropTracker';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';
import { CollabModal } from './components/CollabModal';

function AppContent() {
  const [collabModalOpen, setCollabModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col antialiased selection:bg-purple-500 selection:text-white relative overflow-x-hidden transition-colors duration-300">
      {/* Dynamic Ambient Background with soft orbs & cyber grid (works in light & dark mode) */}
      <AmbientBackground />

      {/* 1. Live Moving Crypto Prices Ticker */}
      <PriceTicker />

      {/* 2. Main Navigation Bar with Theme Switcher, Discord, X, & Collab CTA */}
      <Navbar onOpenCollabModal={() => setCollabModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {/* 3. Hero Section featuring Motto & DAO Value proposition */}
        <Hero onOpenCollabModal={() => setCollabModalOpen(true)} />

        {/* 4. Value Flywheel: For Projects & For Community Members */}
        <WhatWeDo onOpenCollabModal={() => setCollabModalOpen(true)} />

        {/* 5. Core Proof of Work: Bagged Collaborations & Current Active Project Tweets */}
        <CollabShowcase onOpenCollabModal={() => setCollabModalOpen(true)} />

        {/* 6. Airdrop Grinding & Meme Tokens Alpha Radar */}
        <AirdropTracker />

        {/* 7. Core Team & Community Managers (Founder, CMs, Grinders) */}
        <TeamSection />
      </main>

      {/* 8. Footer with DAO motto recap, Discord, X font icons and links */}
      <Footer onOpenCollabModal={() => setCollabModalOpen(true)} />

      {/* 9. Interactive Collaboration Pitch Modal */}
      <CollabModal
        isOpen={collabModalOpen}
        onClose={() => setCollabModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
