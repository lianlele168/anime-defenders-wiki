import type { Metadata } from 'next';
import { Gift, ShieldCheck, AlertCircle, HelpCircle } from 'lucide-react';
import { ACTIVE_CODES, EXPIRED_CODES } from '@/data/wikiData';
import CopyButton from '@/components/CopyButton';

export const metadata: Metadata = {
  title: 'Anime Defenders Codes (August 2026) — Free Gems & Trait Crystals',
  description: 'All active Roblox Anime Defenders (AD) codes for free Gems, Trait Crystals, and Wish Pearls. Tested and verified for August 2026.',
};

export default function CodesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I redeem codes in Roblox Anime Defenders?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Spawn into the main lobby in Anime Defenders, click the top-left menu gear icon, select Codes, paste an active code and press Redeem to claim free rewards.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is my Anime Defenders code not working?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Anime Defenders codes are case-sensitive and expire quickly. Ensure you type the code exactly as shown and meet any level requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'How to get more free Gems and Trait Crystals in AD?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Besides redeeming active codes daily, you can earn free Gems by completing daily quests, farming Infinite Tower waves, and claiming battle pass rewards.',
        },
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-inner">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Verified Active in Roblox AD: August 17, 2026</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Anime Defenders Codes <span className="text-amber-400">(August 2026)</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Redeem these official Roblox Anime Defenders (AD) codes to unlock thousands of free Gems, Trait Crystals, and Wish Pearls.
        </p>
      </div>

      {/* Active Codes */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-amber-900/40 pb-3">
          <Gift className="w-5 h-5 text-amber-400" />
          <span>Active Redeem Codes ({ACTIVE_CODES.length})</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACTIVE_CODES.map((item) => (
            <div
              key={item.code}
              className="glass-panel p-4 rounded-xl flex items-center justify-between border border-amber-900/60 hover:border-amber-500/80 transition-all shadow-lg"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-base font-extrabold text-amber-200">{item.code}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-sans border border-emerald-500/30">
                    Active
                  </span>
                </div>
                <div className="text-xs text-slate-300">{item.reward}</div>
                {item.addedDate && <div className="text-[10px] text-slate-500">Added: {item.addedDate}</div>}
              </div>
              <CopyButton textToCopy={item.code} />
            </div>
          ))}
        </div>
      </section>

      {/* How to Redeem */}
      <section className="glass-panel p-8 rounded-2xl space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-amber-900/40 pb-4">
          <HelpCircle className="w-6 h-6 text-amber-400" />
          <span>How to Redeem Codes in Anime Defenders</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-900/50 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-900/80 text-amber-300 font-bold flex items-center justify-center text-sm">
              1
            </div>
            <h3 className="text-sm font-bold text-white">Join Main Lobby</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Launch Roblox Anime Defenders and spawn into the main hub area.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-900/50 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-900/80 text-amber-300 font-bold flex items-center justify-center text-sm">
              2
            </div>
            <h3 className="text-sm font-bold text-white">Open Codes Menu</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Click the top-left gear / 3-dots menu button and select "Codes".
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-900/50 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-900/80 text-amber-300 font-bold flex items-center justify-center text-sm">
              3
            </div>
            <h3 className="text-sm font-bold text-white">Type Code & Redeem</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Paste your active code into the text field and hit Redeem for free Gems!
            </p>
          </div>
        </div>
      </section>

      {/* Expired Codes */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-400 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-slate-500" />
          <span>Expired Codes ({EXPIRED_CODES.length})</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {EXPIRED_CODES.map((item) => (
            <div key={item.code} className="p-3 rounded-lg bg-slate-950/60 border border-slate-900 flex justify-between items-center text-xs opacity-60">
              <span className="font-mono text-slate-400 line-through">{item.code}</span>
              <span className="text-[10px] text-rose-400/80">Expired</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

