import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Shield, Sparkles, Zap, Trophy, HelpCircle, Coins, Flame, Crosshair } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Anime Defenders Strategy Guide — Infinite Mode Wave 100+ & Farm Economy',
  description: 'Pro strategy guide for Roblox Anime Defenders. Master early-game farm economy, Divine Sorcerer stun rotations, Almighty trait synergies, and Hall of Mirrors wave defense.',
  keywords: ['anime defenders guide', 'anime defenders infinite mode', 'anime defenders wave 100', 'anime defenders farm placement', 'anime defenders best team']
};

export default function BeginnerGuidePage() {
  const tacticalPillars = [
    {
      step: '1',
      title: 'Economy Scaling: The Three-Farm Golden Ratio (Waves 1-12)',
      desc: 'Never over-invest in offensive DPS units during the earliest waves of Infinite Mode. Place a single cost-effective starter DPS unit (such as Pink Demon or Bloomer) at the premier track corner to eliminate initial creeps. Simultaneously, invest all subsequent wave earnings into placing and maxing out three economic Farm units (such as Pink Demon Witch or Celestial Merchant). Achieving maximum tier cash generation prior to Wave 15 ensures millions in late-game gold reserves to upgrade expensive Secret units.'
    },
    {
      step: '2',
      title: 'Staggered Stun Lock Rotations & Crowd Control',
      desc: 'Raw damage output alone cannot defeat high-speed Boss and Regeneration waves past Wave 70. You must establish an unbroken crowd-control chain. Deploy at least two Divine Sorcerers or Ice Dragons with staggered timing. By offsetting their placement by 3.5 seconds, their respective Domain Expansion freeze fields trigger alternatingly, locking bosses permanently in place while your high-DPS Dragon Mage incinerates their health pools.'
    },
    {
      step: '3',
      title: 'Trait Prioritization: Almighty & Precision III Multipliers',
      desc: 'Traits represent the single largest multiplicative boost to unit efficiency. The Almighty trait grants a permanent +280% damage bonus alongside global range and a 20% cooldown reduction. Prioritize rolling Almighty or Precision III (guaranteed 100% critical rate) onto your primary Secret units (Dragon Mage, Shadow Dragon, Divine Sorcerer) before attempting nightmare-difficulty raids.'
    },
    {
      step: '4',
      title: 'Corner Clustered vs Hill Elevation Positioning',
      desc: 'Always place high-AoE cone and circle attackers at acute track corners where enemies must loop around multiple times. This maximizes projectile contact duration. Ensure hill sniper units are elevated on perimeter rocks with unobstructed line-of-sight to the spawn portal, allowing them to strip boss shielding before they enter the main kill funnel.'
    }
  ];

  const teamComps = [
    { comp: 'Meta Infinite Mode (Wave 100+)', units: 'Dragon Mage (Almighty) + Divine Sorcerer + Pink Demon (Farm) + Shadow Dragon', rating: 'S+ Tier' },
    { comp: 'Speed Raid Speedrun Team', units: 'Bloomer (Farm) + Flame Dragon King + Warrior God + Cursed Fighter', rating: 'S Tier' },
    { comp: 'F2P Accessible Progression Team', units: 'Demon Hunter + Water Swordsman + Esper + Chef (Farm)', rating: 'A Tier' },
  ];

  const faqs = [
    {
      q: 'What is the fastest way to get Gems in Anime Defenders?',
      a: 'The highest free gem yield comes from clearing Story Mode challenges on Nightmare difficulty, completing Daily & Weekly Battle Pass tasks, and redeeming active promotional codes.'
    },
    {
      q: 'How rare is the Almighty trait in Anime Defenders?',
      a: 'The Almighty trait is the rarest enhancement in the game, possessing a 0.1% base reroll probability (1 in 1,000 rolls). Using Trait Crystals during 2x Trait Weekends effectively doubles the roll rate.'
    },
    {
      q: 'How many farm units should you place in Infinite Mode?',
      a: 'The competitive meta strictly mandates placing exactly 3 maxed-out Farm units. This provides the optimal balance between high cash compounding and preserving unit placement slots for defensive towers.'
    },
    {
      q: 'What are Secret Units and how do you get them?',
      a: 'Secret Units (like Dragon Mage and Chance Taker) have a 0.01% drop rate from Limited Summon Banners and cannot be targeted through standard pity counters. They provide the highest DPS ceilings in Update 3.'
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="space-y-4 border-b border-amber-900/50 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-300 text-xs font-semibold">
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span>High-Wave Defense Masterclass</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Anime Defenders <span className="text-amber-400">Strategy & Placement Guide</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          The definitive guide for conquering Infinite Mode Wave 100+ and nightmare raid dungeons. Master optimal farm economy curves, Divine Sorcerer freeze rotations, Almighty trait rolling, and corner kill-funnel engineering.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Open Summon & Trait Reroll Calculator</span>
          </Link>
          <Link
            href="/codes"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-amber-800/40 text-slate-200 font-bold rounded-xl text-xs hover:bg-amber-950/50 transition-colors"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Claim Free Gem & Trait Codes</span>
          </Link>
        </div>
      </div>

      {/* 4 Pillars of Defense */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-extrabold text-white">4 Mandatory Tenets of Infinite Survival</h2>
          <p className="text-xs text-slate-400 mt-1">
            Apply these tactical placement rules to ensure zero leakages during high-velocity boss waves:
          </p>
        </div>

        <div className="space-y-6">
          {tacticalPillars.map((p) => (
            <div key={p.step} className="glass-panel p-6 sm:p-8 rounded-2xl border border-amber-900/40 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-extrabold text-lg shrink-0">
                  {p.step}
                </div>
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Team Compositions */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-extrabold text-white">Top-Tier Meta Loadout Blueprints</h2>
          <p className="text-xs text-slate-400 mt-1">
            Pre-assembled 4-unit combinations for pushing max wave leaderboards:
          </p>
        </div>

        <div className="glass-panel rounded-2xl overflow-x-auto border border-amber-900/40">
          <table className="w-full text-left text-xs">
            <thead className="bg-amber-950/80 uppercase text-[10px] font-bold text-slate-300 tracking-wider border-b border-amber-900/60">
              <tr>
                <th className="p-4">Strategy Archetype</th>
                <th className="p-4">Recommended Unit Loadout</th>
                <th className="p-4">Power Tier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-900/40 text-slate-300">
              {teamComps.map((c) => (
                <tr key={c.comp} className="hover:bg-amber-950/30 transition-colors">
                  <td className="p-4 font-bold text-white text-sm">{c.comp}</td>
                  <td className="p-4 text-amber-300">{c.units}</td>
                  <td className="p-4 font-bold text-emerald-400">{c.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="space-y-6">
        <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-amber-400" />
          <span>Frequently Asked Questions (Anime Defenders FAQ)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((f, i) => (
            <div key={i} className="glass-panel p-5 rounded-xl border border-amber-900/40 space-y-2">
              <h3 className="text-sm font-bold text-white">{f.q}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
