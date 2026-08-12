import type { Metadata } from 'next';
import { DollarSign, Gem, Award } from 'lucide-react';
import { UNIT_VALUE_DATA } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Anime Defenders Unit Value List (August 2026) — Trade Values',
  description: 'Trading market values for Shiny Secret units, Evolved Mythics, and Wish Pearls in Roblox Anime Defenders.',
};

export default function UnitValueListPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Anime Defenders <span className="text-amber-400">Unit Value List</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Community trading prices in Gems and Wish Pearls for Shiny and Secret units.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {UNIT_VALUE_DATA.map((item) => (
          <div key={item.name} className="glass-panel p-6 rounded-2xl border border-amber-900/60 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-amber-950 pb-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Gem className="w-5 h-5 text-amber-400" />
                <span>{item.name}</span>
              </h2>
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-amber-950 text-amber-300 border border-amber-800/60">
                {item.rarity}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-950">
                <span className="text-slate-400 block">Gem Price:</span>
                <span className="font-mono font-extrabold text-amber-300 text-sm">{item.gemValue}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-950">
                <span className="text-slate-400 block">Wish Pearls:</span>
                <span className="font-mono font-extrabold text-rose-300 text-sm">{item.wishPearlValue}</span>
              </div>
            </div>

            <div className="text-xs text-slate-400 flex items-center justify-between">
              <span>Market Demand:</span>
              <strong className="text-emerald-400">{item.demand}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
