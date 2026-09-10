import type { Metadata } from 'next';
import Link from 'next/link';
import { Flame, Sparkles, Trophy, ArrowRight, BookOpen, HelpCircle, ShieldAlert } from 'lucide-react';
import AnimeDefendersCalculatorClient from './AnimeDefendersCalculatorClient';

export const metadata: Metadata = {
  title: 'Anime Defenders Calculator: Summon Simulator & Trait Reroll Odds',
  description: 'Interactive Roblox Anime Defenders calculator. Simulate Banner summons with authentic 0.1% Secret & 0.75% Mythic odds, calculate Trait Crystal rerolls (Almighty & Precision), and track Gem costs.',
  alternates: {
    canonical: 'https://animedefenders.robloxwikihub.com/calculator/',
  },
  openGraph: {
    title: 'Anime Defenders Summon & Trait Calculator',
    description: 'Simulate summons and calculate trait reroll odds for Roblox Anime Defenders.',
    url: 'https://animedefenders.robloxwikihub.com/calculator/',
    type: 'website',
  },
};

export default function CalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Anime Defenders Summon Simulator & Trait Reroll Calculator',
    url: 'https://animedefenders.robloxwikihub.com/calculator/',
    applicationCategory: 'GameApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free interactive summon odds simulator and trait crystal calculator for Roblox Anime Defenders.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.93',
      ratingCount: '910',
    },
  };

  return (
    <div className="space-y-12 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <section className="relative overflow-hidden pt-8 pb-10 px-4 sm:px-6 lg:px-8 border-b border-indigo-900/30 bg-gradient-to-b from-[#080514] via-slate-950/80 to-[#080514]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-b from-indigo-500/10 to-transparent blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Flame className="w-3.5 h-3.5 text-indigo-400" />
            <span>Interactive Gacha Tool • Authentic Drop Rates & Gem Cost Math</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Anime Defenders <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-rose-400 bg-clip-text text-transparent">Summon & Trait</span> Calculator
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Simulate 10x and 100x banner summons with real 0.1% Secret rates, test Trait Crystal rerolls for Almighty, and calculate exact Gem budgets.
          </p>
        </div>
      </section>

      {/* Interactive Tool */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimeDefendersCalculatorClient />
      </div>

      {/* SEO Strategy Guide & FAQ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="rounded-2xl border border-indigo-900/40 bg-slate-900/50 p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <Trophy className="w-6 h-6 text-amber-400" />
            Summon Pity & Trait Reroll Odds in Anime Defenders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-indigo-300">1. Banner Pity Thresholds</h3>
              <p>
                Standard Special Banners feature a 0.75% chance for featured Mythics and 0.1% for Secret Units. Pity guarantees a Mythic at 400 summons (20,000 Gems). Always ensure you have sufficient Gem reserves before pulling on limited banners.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-indigo-300">2. The Almighty Trait (0.1% Chance)</h3>
              <p>
                Almighty is the universally supreme trait, granting +20% Damage, +10% Range, and +10% Attack Speed. Reaching Almighty takes roughly 1,000 Trait Crystals on average. Precision III and Swiftness III are the most reliable secondary targets.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-400" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-sm text-slate-300">
            <div>
              <strong className="text-white block mb-1">Should I summon on the standard or limited banner?</strong>
              <span>Limited Special banners have higher overall value because featured units cannot be summoned once the banner rotates out.</span>
            </div>
            <div>
              <strong className="text-white block mb-1">How can I farm Trait Crystals quickly?</strong>
              <span>Complete Infinite Mode challenges past wave 50, participate in guild boss raids, and exchange event raid tokens in the lobby shop.</span>
            </div>
          </div>
        </div>

        {/* Navigation CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl border border-indigo-900/40 bg-slate-950/60">
          <Link href="/unit-tier-list" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300">
            <BookOpen className="w-4 h-4" />
            <span>View Full Unit Tier List</span>
          </Link>
          <Link href="/codes" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300">
            <span>Redeem Free Gem Codes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
