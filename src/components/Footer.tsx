import Link from 'next/link';
import { Shield, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#08040d] border-t border-amber-900/40 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center border border-amber-400/30">
              <Shield className="w-4 h-4 text-slate-950" />
            </div>
            <span className="text-lg font-black text-white tracking-tight">
              ANIME DEFENDERS <span className="text-amber-400">WIKI</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-md">
            The ultimate community wiki for Roblox Anime Defenders (AD). Features active codes, Secret unit DPS tier lists, Trait Reroll guides, and evolution recipes.
          </p>
          <div className="text-[11px] text-slate-500">
            Disclaimer: Anime Defenders Wiki is an unofficial fan resource. Roblox and Anime Defenders are registered trademarks of their respective owners.
          </div>
        </div>

        {/* Wiki Links */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-4">AD Guides</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/codes" className="hover:text-amber-300 transition-colors">
                Anime Defenders Codes
              </Link>
            </li>
            <li>
              <Link href="/unit-tier-list" className="hover:text-amber-300 transition-colors">
                Secret Unit Tier List
              </Link>
            </li>
            <li>
              <Link href="/traits-guide" className="hover:text-amber-300 transition-colors">
                Almighty Trait Guide
              </Link>
            </li>
            <li>
              <Link href="/evolution-guide" className="hover:text-amber-300 transition-colors">
                Evolution Recipes
              </Link>
            </li>
          </ul>
        </div>

        {/* Official Links */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-4">Official Links</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <a
                href="https://www.roblox.com/games/17017769292/ANIME-DEFENDERS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
              >
                <span>Play Anime Defenders</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/animedefenders"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
              >
                <span>Official AD Discord</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          </ul>
      <div className="max-w-7xl mx-auto pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>&copy; {new Date().getFullYear()} Anime Defenders Wiki. All rights reserved.</div>
        <div className="flex items-center gap-1">
          <span>Crafted for AD players with</span>
          <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
        </div>
      </div>
    </footer>
  );
}

