'use client';

import { useState, useMemo } from 'react';
import { Flame, Sparkles, Dices, Shield, Check, Copy, Trophy, RefreshCw, Zap } from 'lucide-react';

interface SummonLog {
  unit: string;
  rarity: 'Secret' | 'Mythic' | 'Legendary' | 'Rare';
}

const TRAITS = [
  { name: '🔥 Almighty', rate: 0.1, desc: '+20% DMG, +10% Range, +10% Speed', rarity: 'Mythical' },
  { name: '✨ Precision III', rate: 0.6, desc: '+30% Crit Rate, +50% Crit DMG', rarity: 'Legendary' },
  { name: '⚡ Swiftness III', rate: 1.5, desc: '+25% Attack Speed', rarity: 'Legendary' },
  { name: '🎯 Range III', rate: 3.5, desc: '+20% Attack Range', rarity: 'Rare' },
  { name: '⚔️ Damage III', rate: 5.0, desc: '+15% Base Damage', rarity: 'Rare' },
  { name: '⚪ Common Trait', rate: 89.3, desc: '+3% to +5% Minor Stat', rarity: 'Common' },
];

export default function AnimeDefendersCalculatorClient() {
  const [activeTab, setActiveTab] = useState<'summon' | 'trait'>('summon');

  // Summon Simulator State
  const [totalSummons, setTotalSummons] = useState(0);
  const [gemsSpent, setGemsSpent] = useState(0);
  const [secretCount, setSecretCount] = useState(0);
  const [mythicCount, setMythicCount] = useState(0);
  const [legendaryCount, setLegendaryCount] = useState(0);
  const [summonHistory, setSummonHistory] = useState<SummonLog[]>([]);
  const [isSummoning, setIsSummoning] = useState(false);

  // Trait Reroll State
  const [crystalsSpent, setCrystalsSpent] = useState(0);
  const [almightyCount, setAlmightyCount] = useState(0);
  const [currentTrait, setCurrentTrait] = useState<string | null>(null);
  const [traitHistory, setTraitHistory] = useState<string[]>([]);
  const [isRerolling, setIsRerolling] = useState(false);

  const [copied, setCopied] = useState(false);

  const handleSummon = (count: number) => {
    setIsSummoning(true);
    setTimeout(() => {
      let newSecrets = 0;
      let newMythics = 0;
      let newLegs = 0;
      const history: SummonLog[] = [];

      for (let i = 0; i < count; i++) {
        const rand = Math.random() * 100;
        if (rand < 0.1) {
          newSecrets++;
          if (history.length < 5) history.push({ unit: 'Dragon Mage (Secret)', rarity: 'Secret' });
        } else if (rand < 0.85) {
          newMythics++;
          if (history.length < 5) history.push({ unit: 'Divine Sorcerer (Mythic)', rarity: 'Mythic' });
        } else if (rand < 15) {
          newLegs++;
          if (history.length < 5) history.push({ unit: 'Thunder Sovereign (Legendary)', rarity: 'Legendary' });
        } else {
          if (history.length < 5) history.push({ unit: 'Swordsman (Rare)', rarity: 'Rare' });
        }
      }

      setTotalSummons((prev) => prev + count);
      setGemsSpent((prev) => prev + count * 50);
      setSecretCount((prev) => prev + newSecrets);
      setMythicCount((prev) => prev + newMythics);
      setLegendaryCount((prev) => prev + newLegs);
      setSummonHistory((prev) => [...history, ...prev.slice(0, 5)]);
      setIsSummoning(false);
    }, 200);
  };

  const handleRerollTrait = (count: number) => {
    setIsRerolling(true);
    setTimeout(() => {
      let newAlmighty = 0;
      let lastTrait = '';
      const rollLogs: string[] = [];

      for (let i = 0; i < count; i++) {
        const rand = Math.random() * 100;
        let cumulative = 0;
        let picked = TRAITS[TRAITS.length - 1];

        for (const t of TRAITS) {
          cumulative += t.rate;
          if (rand < cumulative) {
            picked = t;
            break;
          }
        }

        if (picked.name.includes('Almighty')) newAlmighty++;
        lastTrait = `${picked.name} (${picked.desc})`;
        if (rollLogs.length < 4) rollLogs.push(lastTrait);
      }

      setCrystalsSpent((prev) => prev + count);
      setAlmightyCount((prev) => prev + newAlmighty);
      setCurrentTrait(lastTrait);
      setTraitHistory((prev) => [...rollLogs, ...prev.slice(0, 4)]);
      setIsRerolling(false);
    }, 200);
  };

  const copyStats = () => {
    const text = `Anime Defenders Gacha Simulation:\n• Total Summons: ${totalSummons} (${gemsSpent.toLocaleString()} Gems Spent)\n• Secret Units (0.1%): ${secretCount}\n• Mythic Units (0.75%): ${mythicCount}\n• Trait Crystals Spent: ${crystalsSpent} (Almighty Rolled: ${almightyCount})\nCalculated on https://animedefenders.robloxwikihub.com/calculator/`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Tab Switcher */}
      <div className="flex rounded-xl bg-slate-900 border border-slate-800 p-1 max-w-md mx-auto">
        <button
          type="button"
          onClick={() => setActiveTab('summon')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'summon'
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Dices className="w-4 h-4" />
          <span>Summon Simulator</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('trait')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'trait'
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Trait Crystal Reroll</span>
        </button>
      </div>

      {/* 1. Summon Simulator Tab */}
      {activeTab === 'summon' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Flame className="w-5 h-5 text-indigo-400" />
                <span>Simulate Special Banner Summons</span>
              </h2>
              <span className="text-xs text-slate-400">50 Gems per Summon</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                disabled={isSummoning}
                onClick={() => handleSummon(10)}
                className="py-3 px-4 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all active:scale-95 disabled:opacity-50"
              >
                Summon 10x (500 Gems)
              </button>
              <button
                disabled={isSummoning}
                onClick={() => handleSummon(50)}
                className="py-3 px-4 rounded-xl font-bold text-sm bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-400 shadow-md shadow-indigo-600/30 transition-all active:scale-95 disabled:opacity-50"
              >
                Summon 50x (2,500 Gems)
              </button>
              <button
                disabled={isSummoning}
                onClick={() => handleSummon(200)}
                className="py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-md shadow-purple-600/20 transition-all active:scale-95 disabled:opacity-50"
              >
                Summon 200x Speed (10K)
              </button>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold text-slate-400">Banner Drop Rates</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[11px] text-rose-400 block font-semibold">Secret Units</span>
                  <span className="font-bold text-white">0.10%</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[11px] text-purple-400 block font-semibold">Mythic Units</span>
                  <span className="font-bold text-white">0.75%</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[11px] text-yellow-400 block font-semibold">Legendary</span>
                  <span className="font-bold text-white">14.0%</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[11px] text-slate-400 block font-semibold">Rare Units</span>
                  <span className="font-bold text-white">85.15%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 bg-gradient-to-b from-slate-900 to-slate-950 border border-indigo-900/40 p-6 rounded-2xl">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Summon Results</span>
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Total Summons</span>
                <span className="text-xl font-black text-white">{totalSummons}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-rose-400 block">Secrets Pulled</span>
                <span className="text-xl font-black text-rose-300">{secretCount}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-purple-400 block">Mythics Pulled</span>
                <span className="text-xl font-black text-purple-300">{mythicCount}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-amber-400 block">Gems Spent</span>
                <span className="text-xl font-black text-amber-300">{gemsSpent.toLocaleString()}</span>
              </div>
            </div>

            {summonHistory.length > 0 && (
              <div className="space-y-1.5 pt-2">
                <span className="text-xs font-semibold text-slate-400">Recent Units:</span>
                <div className="space-y-1">
                  {summonHistory.map((h, idx) => (
                    <div key={idx} className="text-xs p-2 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-200 font-medium">{h.unit}</span>
                      <span className={`text-[11px] font-bold ${h.rarity === 'Secret' ? 'text-rose-400' : h.rarity === 'Mythic' ? 'text-purple-400' : 'text-slate-500'}`}>
                        {h.rarity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. Trait Reroll Tab */}
      {activeTab === 'trait' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span>Trait Crystal Reroll Simulator</span>
              </h2>
              <span className="text-xs text-slate-400">Almighty: 0.1% | Precision III: 0.6%</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                disabled={isRerolling}
                onClick={() => handleRerollTrait(1)}
                className="py-3 px-4 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all active:scale-95 disabled:opacity-50"
              >
                Reroll 1x Crystal
              </button>
              <button
                disabled={isRerolling}
                onClick={() => handleRerollTrait(10)}
                className="py-3 px-4 rounded-xl font-bold text-sm bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-400 shadow-md shadow-indigo-600/30 transition-all active:scale-95 disabled:opacity-50"
              >
                Reroll 10x Crystals
              </button>
              <button
                disabled={isRerolling}
                onClick={() => handleRerollTrait(100)}
                className="py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black shadow-md shadow-amber-500/20 transition-all active:scale-95 disabled:opacity-50"
              >
                Reroll 100x Speed
              </button>
            </div>

            {currentTrait && (
              <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-700/60 space-y-1">
                <span className="text-[11px] text-indigo-300 font-semibold block uppercase">Current Rolled Trait</span>
                <span className="text-lg font-black text-white">{currentTrait}</span>
              </div>
            )}

            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold text-slate-400">Trait Probabilities</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {TRAITS.map((t) => (
                  <div key={t.name} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white block">{t.name}</span>
                      <span className="text-[10px] text-slate-400">{t.desc}</span>
                    </div>
                    <span className="font-bold text-indigo-300 pl-2">{t.rate}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 bg-gradient-to-b from-slate-900 to-slate-950 border border-indigo-900/40 p-6 rounded-2xl">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Trait Stats</span>
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Crystals Used</span>
                <span className="text-xl font-black text-white">{crystalsSpent}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-amber-400 block">Almighty Hits</span>
                <span className="text-xl font-black text-amber-300">{almightyCount}</span>
              </div>
            </div>

            {traitHistory.length > 0 && (
              <div className="space-y-1.5 pt-2">
                <span className="text-xs font-semibold text-slate-400">Recent Rolls:</span>
                <div className="space-y-1">
                  {traitHistory.map((h, idx) => (
                    <div key={idx} className="text-xs p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200">
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
