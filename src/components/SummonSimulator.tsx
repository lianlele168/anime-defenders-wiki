'use client';

import { useState } from 'react';
import { Sparkles, Dices, RotateCcw, Flame, ShieldAlert, Award } from 'lucide-react';

export default function SummonSimulator() {
  const [summonLogs, setSummonLogs] = useState<string[]>([]);
  const [gemsSpent, setGemsSpent] = useState(0);
  const [secretCount, setSecretCount] = useState(0);
  const [mythicCount, setMythicCount] = useState(0);
  const [traitResult, setTraitResult] = useState<string | null>(null);

  const handleSummonTen = () => {
    let newSecrets = 0;
    let newMythics = 0;
    const newLogs: string[] = [];

    for (let i = 0; i < 10; i++) {
      const rand = Math.random() * 100;
      if (rand < 0.1) {
        newSecrets++;
        newLogs.push('🔥 SECRET UNIT: Dragon Mage (0.1% Chance!)');
      } else if (rand < 0.75) {
        newMythics++;
        newLogs.push('✨ MYTHIC UNIT: Divine Sorcerer (0.75% Chance!)');
      } else if (rand < 15) {
        newLogs.push('⭐ Legendary Unit: Thunder Sovereign');
      } else {
        newLogs.push('🔹 Rare Unit: Swordsman');
      }
    }

    setGemsSpent((prev) => prev + 500);
    setSecretCount((prev) => prev + newSecrets);
    setMythicCount((prev) => prev + newMythics);
    setSummonLogs(newLogs);
  };

  const handleRerollTrait = () => {
    const rand = Math.random() * 100;
    if (rand < 0.1) {
      setTraitResult('🔥 ALMIGHTY TRAIT (+20% Dmg, +10% Range, +10% Speed)!');
    } else if (rand < 0.6) {
      setTraitResult('✨ Precision III (+30% Crit Rate, +50% Crit Dmg)');
    } else if (rand < 2.0) {
      setTraitResult('⚡ Swiftness III (+25% Attack Speed)');
    } else if (rand < 5.0) {
      setTraitResult('🎯 Range III (+20% Range)');
    } else {
      setTraitResult('⚪ Damage I (+5% Dmg)');
    }
  };

  const handleReset = () => {
    setGemsSpent(0);
    setSecretCount(0);
    setMythicCount(0);
    setSummonLogs([]);
    setTraitResult(null);
  };

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-900/40 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Gacha & Trait Tool</span>
          </div>
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <span>Anime Defenders Summon & Trait Reroll Simulator</span>
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Test the official 0.1% Secret Unit summon odds and Almighty Trait rerolls before spending real in-game gems!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleSummonTen}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-lg shadow-amber-950/80 border border-amber-300 flex items-center gap-1.5 transition-all hover:scale-105"
          >
            <Dices className="w-4 h-4" />
            <span>Summon 10x (500 Gems)</span>
          </button>

          <button
            onClick={handleRerollTrait}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-500 hover:to-red-600 shadow-lg shadow-rose-950/80 border border-rose-400/40 flex items-center gap-1.5 transition-all hover:scale-105"
          >
            <Flame className="w-4 h-4" />
            <span>Reroll Trait</span>
          </button>

          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl text-xs text-slate-400 hover:text-white bg-slate-950/80 border border-amber-900/40"
            title="Reset Simulator"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Simulator Results Display Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stats */}
        <div className="p-5 rounded-2xl bg-slate-950/80 border border-amber-900/40 space-y-4">
          <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider">Simulator Stats</h3>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between items-center text-slate-300">
              <span>Gems Spent:</span>
              <span className="font-mono font-bold text-amber-300">{gemsSpent.toLocaleString()} Gems</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span>Secret Units (0.1%):</span>
              <span className="font-mono font-bold text-rose-400">{secretCount}</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span>Mythic Units (0.75%):</span>
              <span className="font-mono font-bold text-amber-400">{mythicCount}</span>
            </div>
          </div>
        </div>

        {/* Summon Pull Log */}
        <div className="p-5 rounded-2xl bg-slate-950/80 border border-amber-900/40 space-y-3 md:col-span-2">
          <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center justify-between">
            <span>Recent 10x Pull Results</span>
            {traitResult && <span className="text-[11px] text-rose-300 font-mono">Trait: {traitResult}</span>}
          </h3>

          <div className="h-36 overflow-y-auto space-y-1.5 pr-2 font-mono text-xs">
            {summonLogs.length === 0 ? (
              <div className="text-slate-500 text-center py-8 italic">Click "Summon 10x" above to start gacha test...</div>
            ) : (
              summonLogs.map((log, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded-lg border text-xs ${
                    log.includes('SECRET')
                      ? 'bg-rose-950/80 border-rose-500 text-rose-200 font-bold'
                      : log.includes('MYTHIC')
                      ? 'bg-amber-950/80 border-amber-500 text-amber-200'
                      : 'bg-slate-900/80 border-amber-950 text-slate-300'
                  }`}
                >
                  {log}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
