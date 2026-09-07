import React from 'react';
import { 
  BadgeCheck, 
  MessageCircle, 
  Repeat, 
  Heart, 
  TrendingUp, 
  ExternalLink
} from 'lucide-react';
import { CollabTweet } from '../../types';

interface TwitterCardProps {
  tweet: CollabTweet;
  isLiked?: boolean;
  isRetweeted?: boolean;
  onToggleLike?: () => void;
  onToggleRetweet?: () => void;
}

export const TwitterCard: React.FC<TwitterCardProps> = ({
  tweet,
  isLiked = false,
  isRetweeted = false,
  onToggleLike,
  onToggleRetweet,
}) => {
  const likesCount = tweet.metrics.likes + (isLiked ? 1 : 0);
  const retweetsCount = tweet.metrics.retweets + (isRetweeted ? 1 : 0);

  // Format mentions and hashtags in CT style
  const renderTweetText = (text: string) => {
    const parts = text.split(/(\s+)/);
    return parts.map((part, i) => {
      if (part.startsWith('@')) {
        return (
          <span key={i} className="text-[#1d9bf0] font-semibold hover:underline cursor-pointer">
            {part}
          </span>
        );
      }
      if (part.startsWith('#')) {
        return (
          <span key={i} className="text-[#1d9bf0] font-semibold hover:underline cursor-pointer">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <article 
      id={`tweet-card-twitter-${tweet.id}`}
      className="rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all p-5 sm:p-6 flex flex-col justify-between text-slate-900 dark:text-slate-100 shadow-sm hover:shadow-md relative group backdrop-blur-sm"
    >
      {/* Author Bar */}
      <div className="flex items-start gap-3 mb-3">
        <img
          src={tweet.avatarUrl}
          alt={tweet.projectName}
          className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700 shrink-0 shadow-xs"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 min-w-0">
              <span className="font-bold text-slate-950 dark:text-white text-[15px] hover:underline cursor-pointer truncate">
                {tweet.projectName}
              </span>
              {tweet.verified && (
                <BadgeCheck className="w-4 h-4 text-[#1d9bf0] fill-[#1d9bf0] text-white shrink-0" />
              )}
              <span className="text-slate-500 dark:text-slate-400 text-sm truncate">
                @{tweet.projectHandle}
              </span>
              <span className="text-slate-400 dark:text-slate-600 text-sm">·</span>
              <span className="text-slate-400 dark:text-slate-500 text-xs shrink-0 font-medium">
                {tweet.date.split('·')[0]}
              </span>
            </div>

            {/* X Logo */}
            <a
              href={tweet.tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors p-1"
              title="Open tweet on X"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Tweet Body */}
      <div className="text-[14px] leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line mb-3 font-normal">
        {renderTweetText(tweet.tweetContent)}
      </div>

      {/* Tweet Media Image if present */}
      {tweet.mediaImage && (
        <div className="mb-3 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xs max-h-72 bg-slate-100 dark:bg-slate-950">
          <img
            src={tweet.mediaImage}
            alt={tweet.projectName}
            className="w-full h-full object-cover hover:scale-101 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      )}

      {/* Allocation & Chain Tags */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        {tweet.wlAllocated && (
          <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/80">
            {tweet.wlAllocated}
          </span>
        )}
        {tweet.chain && (
          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            {tweet.chain}
          </span>
        )}
      </div>

      {/* Tweet Metrics Bar */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 select-none font-medium">
        {/* Reply */}
        <button
          className="flex items-center gap-1.5 hover:text-[#1d9bf0] transition-colors cursor-pointer"
          title="Reply"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{tweet.metrics.replies}</span>
        </button>

        {/* Retweet */}
        <button
          onClick={onToggleRetweet}
          className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
            isRetweeted ? 'text-[#00ba7c] font-bold' : 'hover:text-[#00ba7c]'
          }`}
          title="Retweet"
        >
          <Repeat className="w-4 h-4" />
          <span>{retweetsCount}</span>
        </button>

        {/* Like */}
        <button
          onClick={onToggleLike}
          className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
            isLiked ? 'text-[#f91880] font-bold' : 'hover:text-[#f91880]'
          }`}
          title="Like"
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-[#f91880] text-[#f91880]' : ''}`} />
          <span>{likesCount}</span>
        </button>

        {/* Views */}
        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
          <TrendingUp className="w-4 h-4" />
          <span>{tweet.metrics.views}</span>
        </div>

        {/* Action Link */}
        <a
          href={tweet.tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[11px] font-bold text-[#1d9bf0] hover:underline"
        >
          <span>Proof</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </article>
  );
};
