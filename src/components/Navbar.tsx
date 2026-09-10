'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Shield, Gift, Sparkles, Flame, DollarSign, Dna, BookOpen, ExternalLink, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Calculator', href: '/calculator', icon: Sparkles },
    { name: 'Codes', href: '/codes', icon: Gift },
    { name: 'Unit Tier List', href: '/unit-tier-list', icon: Sparkles },
    { name: 'Traits Guide', href: '/traits-guide', icon: Flame },
    { name: 'Unit Values', href: '/unit-value-list', icon: DollarSign },
    { name: 'Evolutions', href: '/evolution-guide', icon: Dna },
    { name: 'Strategy Guide', href: '/beginner-guide', icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#08040d]/85 backdrop-blur-md border-b border-amber-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center shadow-lg shadow-amber-950/80 group-hover:scale-105 transition-transform border border-amber-400/30">
              <Shield className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white group-hover:text-amber-300 transition-colors">
                ANIME DEFENDERS <span className="text-amber-400">WIKI</span>
              </span>
              <span className="block text-[10px] text-amber-400/80 font-mono -mt-1 uppercase tracking-widest">
                Tower Defense Guides
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-amber-950/50 border border-transparent hover:border-amber-800/50 transition-all"
                >
                  <Icon className="w-3.5 h-3.5 text-amber-400" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Play Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.roblox.com/games/17017769292/ANIME-DEFENDERS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-lg shadow-amber-950/80 border border-amber-300 hover:scale-[1.02] transition-all"
            >
              <span>Play on Roblox</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-amber-950/50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08040d]/95 border-b border-amber-900/40 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-200 hover:bg-amber-950/60 hover:text-white"
              >
                <Icon className="w-4 h-4 text-amber-400" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
