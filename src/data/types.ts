// Enums
export type PrimalCut = 'Chuck' | 'Rib' | 'Loin' | 'Round' | 'Flank' | 'Plate' | 'Brisket' | 'Shank';
export type FatContent = 'Low' | 'Moderate' | 'High' | 'Very High';
export type FlavorIntensity = 'Mild' | 'Moderate' | 'Robust' | 'Intense';
export type PriceRange = '$' | '$$' | '$$$' | '$$$$';
export type CookingMethod = 'Grill' | 'Pan-sear' | 'Braise' | 'Roast' | 'Smoke' | 'Sous-vide' | 'Stir-fry' | 'Broil' | 'Slow-cook';
export type Doneness = 'Rare' | 'Medium-Rare' | 'Medium' | 'Medium-Well' | 'Well-Done';
export type AgingType = 'Fresh' | 'Wet-aged' | 'Dry-aged';

// Synonyms structure
export interface CutSynonyms {
  usa: string[];
  uk: string[];
  australia: string[];
  japanese: string[];      // Romaji and/or kanji
  french: string[];
  korean?: string[];
  impsNamp?: string;       // Industry standard code
}

// Price range in USD per kg
export interface PricePerKg {
  min: number;
  max: number;
}

// Nutrition per 100g
export interface NutritionInfo {
  calories: number;
  protein: number;        // grams
  fat: number;            // grams
}

// Main BeefCut interface
export interface BeefCut {
  id: string;
  name: string;
  slug: string;           // URL-friendly name

  // Location
  primalCut: PrimalCut;
  subprimalCut?: string;
  anatomicalLocation: string;

  // Synonyms
  synonyms: CutSynonyms;

  // Attributes (1-10 scale where applicable)
  toughness: number;
  fatContent: FatContent;
  marblingScore: number;  // 1-12 BMS scale
  flavorIntensity: FlavorIntensity;

  // Pricing
  priceRange: PriceRange;
  pricePerKgUsd: PricePerKg;

  // Cooking
  recommendedMethods: CookingMethod[];
  bestDoneness: Doneness[];
  idealThicknessCm?: number;
  restingTimeMinutes?: number;

  // Additional
  bestUses: string[];
  agingSuitability: AgingType[];
  alternativeCuts: string[];
  nutritionPer100g: NutritionInfo;

  // Visual/Description
  description: string;
  characteristics: string[];
  grainDirection?: string;

  // Flags
  isTokusenAvailable: boolean;
  isPrimeCut: boolean;
  isWagyuRecommended: boolean;
}

// Helper type for partial cuts during creation
export type PartialBeefCut = Partial<BeefCut> & Pick<BeefCut, 'id' | 'name' | 'primalCut'>;
