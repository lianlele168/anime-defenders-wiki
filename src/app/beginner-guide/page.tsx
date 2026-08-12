import type { Metadata } from 'next';
import { BookOpen, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Anime Defenders Infinite Mode & Placement Strategy Guide (August 2026)',
  description: 'Pro placement strategy, wave defense tips, and farm unit management for Roblox Anime Defenders.',
};

export default function BeginnerGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Anime Defenders <span className="text-amber-400">Strategy Guide</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          How to beat Infinite Mode Wave 100+ and conquer Hall of Mirrors.
        </p>
      </div>

      <div className="space-y-6">
        <section className="glass-panel p-6 rounded-2xl space-y-3 border border-amber-900/50">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <CoinsIcon className="w-5 h-5 text-amber-400" />
            <span>1. Maximize Farm Units Early (Waves 1-10)</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Place 1 cheap starter DPS unit at the map corner, then max out 3 Farm units to build up cash reserves before Wave 15 boss spawns.
          </p>
        </section>

        <section className="glass-panel p-6 rounded-2xl space-y-3 border border-amber-900/50">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>2. Overlap Divine Sorcerer Stun Domains</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Stagger 2 Divine Sorcerer placements so their Domain Expansion stun triggers every 7 seconds, keeping fast speed bosses permanently frozen in your Dragon Mage burn zone.
          </p>
        </section>
      </div>
    </div>
  );
}

function CoinsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
