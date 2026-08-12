import type { Metadata } from 'next';
import { Sparkles, Flame, Zap, Shield } from 'lucide-react';
import { UNIT_TIER_DATA } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Anime Defenders Secret Unit Tier List (August 2026) — Best DPS Units',
  description: 'Rankings for all Secret and Mythic units in Anime Defenders including Dragon Mage, Shadow Dragon, and Divine Sorcerer.',
};

export default function UnitTierListPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Anime Defenders <span className="text-amber-400">Unit Tier List</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          DPS rankings and placement costs for all Secret and Evolved Mythic units in Anime Defenders.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {UNIT_TIER_DATA.map((unit) => (
          <div
            key={unit.name}
            className="glass-panel p-6 rounded-2xl border border-amber-900/60 hover:border-amber-500/80 transition-all space-y-4 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>{unit.name}</span>
              </h2>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold border ${
                  unit.tier === 'S+'
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/50'
                    : unit.tier === 'S'
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                }`}
              >
                {unit.tier} Tier ({unit.rarity})
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{unit.description}</p>

            <div className="pt-3 border-t border-amber-950 grid grid-cols-3 gap-2 text-xs">
              <div className="text-slate-400">
                <span>DPS:</span> <strong className="text-amber-300 font-mono block">{unit.dps}</strong>
              </div>
              <div className="text-slate-400">
                <span>Cost:</span> <strong className="text-emerald-400 font-mono block">{unit.placementCost}</strong>
              </div>
              <div className="text-slate-400">
                <span>Best Trait:</span> <strong className="text-rose-300 block">{unit.bestTrait}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
