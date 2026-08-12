import type { Metadata } from 'next';
import { Dna, Sparkles, Coins } from 'lucide-react';
import { EVOLUTION_DATA } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Anime Defenders Evolution Guide (August 2026) — Star Crystals & Recipes',
  description: 'How to evolve Dragon Mage, Divine Sorcerer, and Shadow Dragon in Roblox Anime Defenders with Star Crystals and Gold recipes.',
};

export default function EvolutionGuidePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Anime Defenders <span className="text-amber-400">Evolution Guide</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Evolving Mythic and Secret units boosts their DPS by up to 60% and unlocks Domain Expansion abilities.
        </p>
      </div>

      <div className="space-y-6">
        {EVOLUTION_DATA.map((evo, idx) => (
          <div key={idx} className="glass-panel p-6 rounded-2xl border border-amber-900/60 space-y-4 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-950 pb-3">
              <div className="flex items-center gap-2 text-xl font-bold text-white">
                <span className="text-slate-300">{evo.baseUnit}</span>
                <span className="text-amber-400">➔</span>
                <span className="text-amber-300">{evo.evolvedUnit}</span>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-950 text-amber-300 border border-amber-800/60">
                {evo.goldCost}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-950 space-y-1">
                <span className="text-amber-400 font-bold block">Required Star Crystal:</span>
                <span className="text-slate-200">{evo.starCrystalNeeded}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-950 space-y-1">
                <span className="text-amber-400 font-bold block">Essence Materials:</span>
                <span className="text-slate-200">{evo.materialsNeeded.join(', ')}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-900/50 text-xs text-amber-200">
              ⚡ <strong>Evolved Stat Bonus:</strong> {evo.statBonus}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
