import React, { useState } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Rocket,
  Loader2
} from 'lucide-react';
import { CollabSubmission } from '../types';

interface CollabModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * -----------------------------------------------------------------------------------------
 * SUBMISSION DESTINATION CONFIGURATION:
 * 
 * 1. DISCORD WEBHOOK (Recommended for DAOs):
 *    - In your Discord server: Channel Settings -> Integrations -> Webhooks -> New Webhook
 *    - Copy the Webhook URL and paste it below into DISCORD_WEBHOOK_URL.
 *    - Submissions will instantly ping your Discord staff/collab channel!
 * 
 * 2. TELEGRAM OR CUSTOM API / FORMSPREE:
 *    - You can replace or point the fetch call in `handleSubmit` to your API endpoint
 *      or Formspree/Google Sheets URL.
 * -----------------------------------------------------------------------------------------
 */
const DISCORD_WEBHOOK_URL = ''; // e.g. 'https://discord.com/api/webhooks/YOUR_WEBHOOK_URL'

export const CollabModal: React.FC<CollabModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<CollabSubmission>({
    projectName: '',
    chain: 'Ethereum',
    projectXHandle: '',
    founderOrCmXHandle: '',
    wlOffered: '30 Whitelist Spots',
    launchDate: '',
    pitch: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // If a Discord Webhook URL is configured, send the submission payload
    if (DISCORD_WEBHOOK_URL) {
      try {
        await fetch(DISCORD_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            embeds: [
              {
                title: `⚔️ New Collab Proposal: ${formData.projectName}`,
                color: 0x9333ea, // Purple
                fields: [
                  { name: 'Project Name', value: formData.projectName, inline: true },
                  { name: 'Chain / Network', value: formData.chain, inline: true },
                  { name: 'WL Allocation Offered', value: formData.wlOffered, inline: true },
                  { name: 'Project X Handle', value: formData.projectXHandle, inline: true },
                  { name: "Founder / CM's X Handle", value: formData.founderOrCmXHandle, inline: true },
                  { name: 'Target Launch Date', value: formData.launchDate || 'Not specified', inline: true },
                  { name: 'Pitch / Marketing Goals', value: formData.pitch || 'None provided' },
                ],
                footer: { text: 'DecentralMindz DAO Partnerships Portal' },
                timestamp: new Date().toISOString(),
              },
            ],
          }),
        });
      } catch (error) {
        console.error('Collab webhook submission error:', error);
      }
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 text-slate-900 dark:text-slate-100 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800/80">
                <Rocket className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 font-mono">
                DecentralMindz Partnerships
              </span>
            </div>

            <h3 className="font-heading text-2xl font-extrabold text-slate-950 dark:text-white mb-2">
              Partner & Collab With Us
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Fill out your launch details below. Our Lead Community Managers and Collab Director will review your project and get back to you within 6 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1">
                  Project Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. CyberSamurai Genesis"
                  value={formData.projectName}
                  onChange={(e) =>
                    setFormData({ ...formData, projectName: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1">
                    Blockchain Network *
                  </label>
                  <select
                    value={formData.chain}
                    onChange={(e) =>
                      setFormData({ ...formData, chain: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-xs"
                  >
                    <option value="Ethereum">Ethereum</option>
                    <option value="Solana">Solana</option>
                    <option value="Monad">Monad</option>
                    <option value="Berachain">Berachain</option>
                    <option value="Arbitrum">Arbitrum</option>
                    <option value="Base">Base</option>
                    <option value="Other">Other L1/L2</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1">
                    Whitelist Spots Offered *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 30 Guaranteed / FCFS"
                    value={formData.wlOffered}
                    onChange={(e) =>
                      setFormData({ ...formData, wlOffered: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-xs"
                  />
                </div>
              </div>

              {/* Simplified Handle Inputs: Project X Handle and Founder / CM's X Handle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1">
                    Project X Handle *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="@YourProjectX"
                    value={formData.projectXHandle}
                    onChange={(e) =>
                      setFormData({ ...formData, projectXHandle: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1">
                    Founder / Projects CM's X Handle *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="@FounderOrCM_X"
                    value={formData.founderOrCmXHandle}
                    onChange={(e) =>
                      setFormData({ ...formData, founderOrCmXHandle: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1">
                  Target Mint / Launch Date (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mid Next Month / Q3 2026"
                  value={formData.launchDate}
                  onChange={(e) =>
                    setFormData({ ...formData, launchDate: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1">
                  Brief Pitch / Marketing Goals
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you need: Twitter Spaces, viral raid campaign, Discord AMA, or WL distribution..."
                  value={formData.pitch}
                  onChange={(e) =>
                    setFormData({ ...formData, pitch: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-xs resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-2xl bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-bold text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Submitting Proposal...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Collaboration Proposal</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4 shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-extrabold text-slate-950 dark:text-white mb-2">
              Proposal Received!
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto mb-6 leading-relaxed">
              Thank you for reaching out to <strong>DecentralMindz DAO</strong>. Our Head CM and Collab Lead have been notified. We will reach out via X: <span className="text-purple-600 dark:text-purple-400 font-mono font-bold">{formData.founderOrCmXHandle}</span> shortly.
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-left text-xs mb-6 space-y-1.5 shadow-xs">
              <div className="text-slate-600 dark:text-slate-400">
                Project: <span className="text-slate-950 dark:text-white font-bold">{formData.projectName}</span>
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                Project X: <span className="text-slate-950 dark:text-white font-mono font-semibold">{formData.projectXHandle}</span>
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                Founder / CM X: <span className="text-purple-600 dark:text-purple-400 font-mono font-semibold">{formData.founderOrCmXHandle}</span>
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                Network: <span className="text-slate-950 dark:text-white font-bold">{formData.chain}</span>
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                WL Allocation: <span className="text-purple-700 dark:text-purple-400 font-bold">{formData.wlOffered}</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-2xl bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-bold transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
