import Link from 'next/link';
import { Shield, Gift, Sparkles, Flame, DollarSign, Dna, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ACTIVE_CODES } from '@/data/wikiData';
import CopyButton from '@/components/CopyButton';
import SummonSimulator from '@/components/SummonSimulator';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the active Anime Defenders codes for August 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Active Anime Defenders codes include SUMMER2026, DRAGONQUEEN, SHADOWUPDATE, and SECRETUNIT. Redeem them for free Gems, Trait Crystals, and Wish Pearls.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best Secret Unit in Anime Defenders?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dragon Mage (Evolved) is currently the #1 Secret Unit in Anime Defenders with 42,500 DPS and full-screen meteor burn AoE damage.',
        },
      },
    ],
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Inject Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-amber-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/30 via-slate-950/80 to-[#08040d] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-amber-900/40 text-amber-300 border border-amber-700/50 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Updated for August 2026 Update 4</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Anime Defenders <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-rose-400 bg-clip-text text-transparent">
              Codes & Secret Unit Tier List
            </span>
          </h1>

          <p className="text-amber-100/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            The ultimate strategy guide for <strong className="text-amber-300">Roblox Anime Defenders (AD)</strong>. Redeem free Gems & Trait Crystals, check Secret unit DPS rankings, and simulate gacha pulls.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4">
            <div className="glass-panel p-3.5 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-amber-300">500K+</div>
              <div className="text-[11px] text-slate-400">Monthly Searches</div>
            </div>
            <div className="glass-panel p-3.5 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-emerald-400">6 Active</div>
              <div className="text-[11px] text-slate-400">Gem Codes</div>
            </div>
            <div className="glass-panel p-3.5 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-rose-400">0.1% Odds</div>
              <div className="text-[11px] text-slate-400">Secret Units</div>
            </div>
            <div className="glass-panel p-3.5 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-yellow-300">42K DPS</div>
              <div className="text-[11px] text-slate-400">Dragon Mage</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/codes"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-xl shadow-amber-950/80 hover:scale-[1.02] transition-all"
            >
              <Gift className="w-4 h-4" />
              <span>Get Active Codes (6)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/unit-tier-list"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-amber-800/40 hover:border-amber-600 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Secret Unit Tier List</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Tool Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SummonSimulator />
      </section>

      {/* Codes Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Gift className="w-6 h-6 text-amber-400" />
              <span>Active Anime Defenders Codes</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">Copy free Gems and Trait Crystals</p>
          </div>
          <Link href="/codes" className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1">
            <span>View All Codes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACTIVE_CODES.slice(0, 6).map((item) => (
            <div
              key={item.code}
              className="glass-panel p-4 rounded-xl flex items-center justify-between border border-amber-900/50 hover:border-amber-600/60 transition-all shadow-md"
            >
              <div className="space-y-1">
                <div className="font-mono text-base font-extrabold text-amber-200 tracking-wide flex items-center gap-2">
                  <span>{item.code}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-sans border border-emerald-500/30">
                    Active
                  </span>
                </div>
                <div className="text-xs text-slate-300 leading-tight">{item.reward}</div>
              </div>
              <CopyButton textToCopy={item.code} />
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/unit-tier-list" className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                Unit Tier List
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Rankings for Dragon Mage, Shadow Dragon, and Divine Sorcerer.
              </p>
            </div>
          </Link>

          <Link href="/traits-guide" className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Flame className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                Traits Guide
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Almighty, Precision III, and Swiftness reroll chances and stat buffs.
              </p>
            </div>
          </Link>

          <Link href="/unit-value-list" className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <DollarSign className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                Unit Value List
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Trade values in Gems and Wish Pearls for Shiny & Secret units.
              </p>
            </div>
          </Link>

          <Link href="/evolution-guide" className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Dna className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                Evolution Guide
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Star Crystals, essence materials, and Gold cost recipes.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
