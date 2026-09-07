export interface CryptoPriceItem {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  sparkline?: number[];
}

export type CollabCategory = 'all' | 'bagged' | 'active_campaign' | 'airdrop_grind';

export type CardStyleType = 'twitter' | 'terminal' | 'editorial';

export interface CollabTweet {
  id: string;
  projectName: string;
  projectHandle: string;
  avatarUrl: string;
  bannerGradient: string;
  verified: boolean;
  date: string;
  tweetContent: string;
  mediaImage?: string;
  category: 'bagged' | 'active_campaign' | 'airdrop_grind';
  wlAllocated: string;
  chain: 'Ethereum' | 'Solana' | 'Monad' | 'Berachain' | 'Arbitrum' | 'Base' | 'Robinhood Chain' | string;
  metrics: {
    replies: number;
    retweets: number;
    likes: number;
    views: string;
  };
  highlightBadge?: string;
  tweetUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  handle: string;
  role: string;
  badge: string;
  badgeColor: string;
  avatar: string;
  avatarBg: string;
  bio: string;
  socials: {
    x: string;
    discord: string;
    telegram?: string;
  };
  specialties: string[];
}

export interface AirdropGrind {
  id: string;
  protocol: string;
  type: 'Testnet' | 'Mainnet Alpha' | 'Meme Token' | 'Node Runner';
  chain: string;
  estReward: string;
  difficulty: 'Easy' | 'Medium' | 'Grinder';
  status: 'Live & Grinding' | 'Snapshot Imminent' | 'Upcoming';
  description: string;
  alphaTip: string;
  daoParticipation: string;
}

export interface CollabSubmission {
  projectName: string;
  chain: string;
  projectXHandle: string;
  founderOrCmXHandle: string;
  wlOffered: string;
  launchDate: string;
  pitch: string;
}

