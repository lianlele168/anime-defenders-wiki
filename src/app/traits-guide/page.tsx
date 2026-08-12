import type { Metadata } from 'next';
import { Flame, Sparkles, CheckCircle2 } from 'lucide-react';
import { TRAIT_TIER_DATA } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Anime Defenders Trait Tier List (August 2026) — Almighty & Precision',
  description: 'Ranking for all unit traits in Anime Defenders including Almighty (0.1%), Precision III, and Swiftness III.',
};

export default function TraitsGuidePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Anime Defenders <span className="text-amber-400">Trait Tier List</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Traits boost your unit's damage, range, and attack speed significantly. Learn the exact reroll chances and best traits for each meta unit.
        </p>
      </div>

      {/* Grid */}
      <div className="space-y-6">
        {TRAIT_TIER_DATA.map((trait) => (
          <div key={trait.name} className="glass-panel p-6 rounded-2xl border border-amber-900/60 space-y-3 shadow-xl">
            <div className="flex items-center justify-between border-b border-amber-950 pb-3">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Flame className="w-6 h-6 text-amber-400" />
                <span>{trait.name} Trait</span>
              </h2>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-amber-300 font-bold">Odds: {trait.rerollChance}</span>
                <span className="px-3 py-1 rounded-full text-xs font-black bg-rose-500/20 text-rose-300 border border-rose-500/40">
                  {trait.tier} Tier
                </span>
              </div>
            </div>

            <div className="text-sm font-semibold text-amber-200">
              Stat Buffs: <span className="text-white font-normal">{trait.statBuffs}</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{trait.recommendationReason}</p>

            <div className="pt-2 border-t border-amber-950 text-xs text-amber-400">
              Best on: <strong>{trait.bestUnits}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
