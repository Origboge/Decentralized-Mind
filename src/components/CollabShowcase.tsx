import React, { useState } from 'react';
import { 
  Search, 
  Flame, 
  ArrowRight, 
  ShieldCheck 
} from 'lucide-react';
import { COLLAB_TWEETS } from '../data/mockData';
import { TwitterCard } from './cards/TwitterCard';

interface CollabShowcaseProps {
  onOpenCollabModal: () => void;
}

type TabType = 'previous' | 'active_campaign';

export const CollabShowcase: React.FC<CollabShowcaseProps> = ({ 
  onOpenCollabModal
}) => {
  const [selectedTab, setSelectedTab] = useState<TabType>('previous');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [likedTweets, setLikedTweets] = useState<Record<string, boolean>>({});
  const [retweetedTweets, setRetweetedTweets] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedTweets((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleRetweet = (id: string) => {
    setRetweetedTweets((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredTweets = COLLAB_TWEETS.filter((tweet) => {
    const matchesTab =
      selectedTab === 'active_campaign'
        ? tweet.category === 'active_campaign'
        : tweet.category !== 'active_campaign';
    const matchesSearch =
      tweet.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tweet.projectHandle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tweet.tweetContent.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const tabs: { id: TabType; label: string; count: number }[] = [
    {
      id: 'previous',
      label: 'Previous Collaborations',
      count: COLLAB_TWEETS.filter((t) => t.category !== 'active_campaign').length,
    },
    {
      id: 'active_campaign',
      label: 'Active Campaigns',
      count: COLLAB_TWEETS.filter((t) => t.category === 'active_campaign').length,
    },
  ];

  return (
    <section id="collaborations" className="py-16 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-3 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>Proof of Work & Community Collaborations</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              Collaborations & Campaign Tweets
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Explore our verified collaboration track record. Live tweets from NFT projects we’ve bagged whitelists with, alongside real-time marketing campaigns actively in flight.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCollabModal}
              className="px-5 py-2.5 rounded-2xl bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-bold shadow-sm flex items-center gap-2 cursor-pointer transition-all active:scale-95"
            >
              <span>Submit Your Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Filter Controls: 2 Tabs + Search Bar */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* 2 Tabs: Active Campaigns & Previous Collaborations */}
            <div className="inline-flex p-1 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    selectedTab === tab.id
                      ? 'bg-white dark:bg-slate-800 text-slate-950 dark:text-white shadow-xs border border-slate-200/80 dark:border-slate-700'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                      selectedTab === tab.id
                        ? 'bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-bold'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects or tweets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-xs rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-xs"
              />
            </div>
          </div>
        </div>

        {/* Tweets Grid Rendered as Authentic X/Twitter CT Cards */}
        {filteredTweets.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
            <p className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1">
              {selectedTab === 'active_campaign'
                ? 'No Active Campaigns Right Now'
                : 'No matching collaboration tweets found'}
            </p>
            <p className="text-xs max-w-md mx-auto leading-relaxed mb-4">
              {selectedTab === 'active_campaign'
                ? 'Upcoming campaign raids and WL quest drops will appear here. In the meantime, explore our verified Previous Collaborations below!'
                : 'Try adjusting your search query or switching tabs.'}
            </p>
            {selectedTab === 'active_campaign' && (
              <button
                onClick={() => setSelectedTab('previous')}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
              >
                View Previous Collaborations
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTweets.map((tweet) => (
              <TwitterCard
                key={tweet.id}
                tweet={tweet}
                isLiked={!!likedTweets[tweet.id]}
                isRetweeted={!!retweetedTweets[tweet.id]}
                onToggleLike={() => toggleLike(tweet.id)}
                onToggleRetweet={() => toggleRetweet(tweet.id)}
              />
            ))}
          </div>
        )}

        {/* Bottom Pitch Box for New Projects */}
        <div className="mt-12 rounded-3xl liquid-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/80 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-slate-950 dark:text-white">
                Are you an NFT or Web3 Founder Launching Soon?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
                Collaborate with DecentralMindz DAO. We market your drop, run viral raids, and bring verified holders in exchange for whitelist allocation for our community.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenCollabModal}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-bold text-xs shrink-0 shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
          >
            <span>Request Collaboration</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
