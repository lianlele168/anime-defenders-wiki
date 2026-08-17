export interface CodeItem {
  code: string;
  reward: string;
  status: 'Active' | 'Expired';
  addedDate?: string;
}

export interface UnitItem {
  name: string;
  tier: 'S+' | 'S' | 'A' | 'B';
  rarity: 'Secret' | 'Mythic' | 'Legendary';
  element: 'Fire' | 'Ice' | 'Dark' | 'Lightning' | 'Holy';
  dps: string;
  placementCost: string;
  bestTrait: string;
  description: string;
}

export interface TraitItem {
  name: string;
  tier: 'S+' | 'S' | 'A' | 'B';
  rerollChance: string;
  statBuffs: string;
  bestUnits: string;
  recommendationReason: string;
}

export interface EvolutionRecipe {
  baseUnit: string;
  evolvedUnit: string;
  starCrystalNeeded: string;
  materialsNeeded: string[];
  goldCost: string;
  statBonus: string;
}

export interface UnitValueItem {
  name: string;
  rarity: 'Secret Shiny' | 'Evolved Mythic' | 'Secret' | 'Mythic';
  gemValue: string;
  wishPearlValue: string;
  demand: 'Very High' | 'High' | 'Medium';
}

export const ACTIVE_CODES: CodeItem[] = [
  { code: 'REDONE', reward: 'Exclusive Wish Ticket', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'ELEMENTS', reward: '1,000 Ancient Relics', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'SKILLTREES', reward: '5x Divine Trait Crystals', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'incredibilli', reward: '800 Free Gems', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'MEMBEREREBREWRERES', reward: '400 Free Gems', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'subcool', reward: '50 Free Gems', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'sub2toadboigaming', reward: '50 Free Gems', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'sub2jonaslyz', reward: '50 Free Gems', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'sub2riktime', reward: '50 Free Gems', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'sub2mozking', reward: '50 Free Gems', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'sub2nagblox', reward: '50 Free Gems', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'sub2karizmaqt', reward: '50 Free Gems', status: 'Active', addedDate: 'August 17, 2026' },
];

export const EXPIRED_CODES: CodeItem[] = [
  { code: 'SUMMER2026', reward: '1,000 Free Gems', status: 'Expired' },
  { code: 'DRAGONQUEEN', reward: '500 Gems', status: 'Expired' },
  { code: 'SHADOWUPDATE', reward: '800 Gems', status: 'Expired' },
  { code: 'RELEASE500', reward: '500 Gems', status: 'Expired' },
  { code: 'UPDATE1GEMS', reward: '300 Gems', status: 'Expired' },
  { code: 'THANKYOU100K', reward: '1,000 Gems', status: 'Expired' },
];

export const UNIT_TIER_DATA: UnitItem[] = [
  {
    name: 'Dragon Mage (Evolved)',
    tier: 'S+',
    rarity: 'Secret',
    element: 'Fire',
    dps: '42,500 DPS',
    placementCost: '$1,200',
    bestTrait: 'Almighty',
    description: 'Massive full-screen Fire DoT (Damage over Time) meteor shower. Solves End-game Infinite mode single-handedly.',
  },
  {
    name: 'Shadow Dragon',
    tier: 'S+',
    rarity: 'Secret',
    element: 'Dark',
    dps: '38,000 DPS',
    placementCost: '$1,500',
    bestTrait: 'Precision',
    description: 'Fires dark void lasers that slow down boss movement speeds by 50% while inflicting high critical damage.',
  },
  {
    name: 'Divine Sorcerer (Domain)',
    tier: 'S+',
    rarity: 'Mythic',
    element: 'Holy',
    dps: '35,200 DPS',
    placementCost: '$1,000',
    bestTrait: 'Almighty',
    description: 'Domain Expansion stuns all enemies in range for 4 seconds every 15 seconds. Mandatory for Hall of Mirrors.',
  },
  {
    name: 'Almighty Warrior',
    tier: 'S',
    rarity: 'Mythic',
    element: 'Fire',
    dps: '28,000 DPS',
    placementCost: '$800',
    bestTrait: 'Swiftness III',
    description: 'High attack speed physical sword slash unit with 360-degree AoE cleave around placement zone.',
  },
  {
    name: 'Flame Slayer',
    tier: 'S',
    rarity: 'Mythic',
    element: 'Fire',
    dps: '24,500 DPS',
    placementCost: '$750',
    bestTrait: 'Precision',
    description: 'Burns targets and stackable fire armor-shredding debuff.',
  },
  {
    name: 'Thunder Sovereign',
    tier: 'A',
    rarity: 'Mythic',
    element: 'Lightning',
    dps: '19,000 DPS',
    placementCost: '$650',
    bestTrait: 'Range III',
    description: 'Chain lightning attacks up to 8 targets per hit with rapid attack animation.',
  },
];

export const TRAIT_TIER_DATA: TraitItem[] = [
  {
    name: 'Almighty',
    tier: 'S+',
    rerollChance: '0.1%',
    statBuffs: '+20% Damage, +10% Range, +10% Attack Speed',
    bestUnits: 'Dragon Mage, Divine Sorcerer, Shadow Dragon',
    recommendationReason: 'The absolute god-tier trait in Anime Defenders. Gives overall stat amplification.',
  },
  {
    name: 'Precision III',
    tier: 'S+',
    rerollChance: '0.5%',
    statBuffs: '+30% Critical Rate, +50% Critical Damage',
    bestUnits: 'Shadow Dragon, Flame Slayer',
    recommendationReason: 'Dramatically scales burst damage output on high-base DPS secret units.',
  },
  {
    name: 'Swiftness III',
    tier: 'S',
    rerollChance: '1.2%',
    statBuffs: '+25% Attack Speed',
    bestUnits: 'Almighty Warrior, Thunder Sovereign',
    recommendationReason: 'Reduces attack interval for faster crowd control and status effect application.',
  },
  {
    name: 'Range III',
    tier: 'A',
    rerollChance: '2.5%',
    statBuffs: '+20% Attack Range',
    bestUnits: 'Divine Sorcerer, Buffer Units',
    recommendationReason: 'Allows domain expansion and aura buffs to cover double the map distance.',
  },
];

export const EVOLUTION_DATA: EvolutionRecipe[] = [
  {
    baseUnit: 'Dragon Mage',
    evolvedUnit: 'Evolved Dragon Mage',
    starCrystalNeeded: 'Red Star Crystal (x1)',
    materialsNeeded: ['3x Fire Essence Orbs', '5x Magma Shards'],
    goldCost: '20,000 Gold',
    statBonus: '+60% Damage, Meteor AoE Radius Expanded by 30%',
  },
  {
    baseUnit: 'Divine Sorcerer',
    evolvedUnit: 'Domain Sorcerer',
    starCrystalNeeded: 'Rainbow Star Crystal (x1)',
    materialsNeeded: ['5x Void Crystals', '2x Sacred Relics'],
    goldCost: '25,000 Gold',
    statBonus: 'Unlocks Domain Expansion Skill + 45% DPS Buff',
  },
  {
    baseUnit: 'Shadow Dragon',
    evolvedUnit: 'Eternal Shadow',
    starCrystalNeeded: 'Dark Star Crystal (x1)',
    materialsNeeded: ['4x Shadow Orbs', '10x Abyss Dust'],
    goldCost: '30,000 Gold',
    statBonus: 'Adds 50% Slow Freeze effect to dark void beam',
  },
];

export const UNIT_VALUE_DATA: UnitValueItem[] = [
  {
    name: 'Shiny Dragon Mage (Evolved)',
    rarity: 'Secret Shiny',
    gemValue: '180,000 Gems',
    wishPearlValue: '45 Wish Pearls',
    demand: 'Very High',
  },
  {
    name: 'Domain Sorcerer (Evolved)',
    rarity: 'Evolved Mythic',
    gemValue: '65,000 Gems',
    wishPearlValue: '15 Wish Pearls',
    demand: 'Very High',
  },
  {
    name: 'Shadow Dragon (Base)',
    rarity: 'Secret',
    gemValue: '40,000 Gems',
    wishPearlValue: '10 Wish Pearls',
    demand: 'Medium',
  },
  {
    name: 'Almighty Warrior',
    rarity: 'Mythic',
    gemValue: '12,000 Gems',
    wishPearlValue: '3 Wish Pearls',
    demand: 'Medium',
  },
];
