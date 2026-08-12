import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Anime Defenders Codes & Secret Unit Tier List (August 2026) — Roblox Wiki',
  description: 'Updated Roblox Anime Defenders (AD) codes for free Gems and Trait Crystals. Explore Secret unit DPS tier lists, Almighty trait rerolls, and evolution recipes.',
  keywords: [
    'anime defenders codes',
    'anime defenders tier list',
    'anime defenders secret units',
    'anime defenders trait tier list',
    'anime defenders dragon mage',
    'anime defenders codes august 2026'
  ],
  authors: [{ name: 'Anime Defenders Wiki Team' }],
  openGraph: {
    title: 'Anime Defenders Codes & Unit Tier List — Roblox AD Wiki',
    description: 'Get active Anime Defenders codes for Gems & Trait Crystals, unit tier lists, and trade values.',
    url: 'https://anime-defenders-wiki.vercel.app',
    siteName: 'Anime Defenders Wiki',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anime Defenders Codes & Secret Unit Tier List — Roblox Wiki',
    description: 'Get verified Anime Defenders codes and Secret unit DPS rankings.',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'K0YFUdYGQH2cucEllkbzoEcKAZoFJ7rGguAERbz2ZGM',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#08040d] text-amber-50 min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
