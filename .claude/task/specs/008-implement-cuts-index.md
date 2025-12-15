# TASK: Create Cuts Index and Aggregation File
# TYPE: implement
# PRIORITY: high
# TIMEOUT: 10

## Objective
Create the main cuts index file that aggregates all cuts and provides helper functions at `src/data/cuts/index.ts`.

## Context
All individual cut files (chuck.ts, rib.ts, loin.ts, round.ts, other.ts) export arrays of BeefCut. This file combines them.

## Deliverables
Create `/Users/dennyleonardo/Downloads/beef-cuts/src/data/cuts/index.ts`:

```typescript
import type { BeefCut, PrimalCut, CookingMethod, FatContent, PriceRange } from '../types';
import { chuckCuts } from './chuck';
import { ribCuts } from './rib';
import { loinCuts } from './loin';
import { roundCuts } from './round';
import { otherCuts } from './other';

// Aggregate all cuts
export const allCuts: BeefCut[] = [
  ...chuckCuts,
  ...ribCuts,
  ...loinCuts,
  ...roundCuts,
  ...otherCuts,
];

// Re-export individual arrays for direct access
export { chuckCuts, ribCuts, loinCuts, roundCuts, otherCuts };

// ============ HELPER FUNCTIONS ============

/**
 * Get a cut by its slug
 */
export const getCutBySlug = (slug: string): BeefCut | undefined => {
  return allCuts.find(cut => cut.slug === slug);
};

/**
 * Get a cut by its ID
 */
export const getCutById = (id: string): BeefCut | undefined => {
  return allCuts.find(cut => cut.id === id);
};

/**
 * Get all cuts from a specific primal
 */
export const getCutsByPrimal = (primal: PrimalCut): BeefCut[] => {
  return allCuts.filter(cut => cut.primalCut === primal);
};

/**
 * Get all Tokusen-available cuts
 */
export const getTokusenCuts = (): BeefCut[] => {
  return allCuts.filter(cut => cut.isTokusenAvailable);
};

/**
 * Get all prime cuts
 */
export const getPrimeCuts = (): BeefCut[] => {
  return allCuts.filter(cut => cut.isPrimeCut);
};

/**
 * Get cuts by cooking method
 */
export const getCutsByCookingMethod = (method: CookingMethod): BeefCut[] => {
  return allCuts.filter(cut => cut.recommendedMethods.includes(method));
};

/**
 * Get cuts by fat content
 */
export const getCutsByFatContent = (fat: FatContent): BeefCut[] => {
  return allCuts.filter(cut => cut.fatContent === fat);
};

/**
 * Get cuts by price range
 */
export const getCutsByPriceRange = (price: PriceRange): BeefCut[] => {
  return allCuts.filter(cut => cut.priceRange === price);
};

/**
 * Get cuts sorted by toughness (ascending - most tender first)
 */
export const getCutsByTenderness = (): BeefCut[] => {
  return [...allCuts].sort((a, b) => a.toughness - b.toughness);
};

/**
 * Search cuts by name or synonym (case-insensitive)
 */
export const searchCuts = (query: string): BeefCut[] => {
  const lowerQuery = query.toLowerCase();
  return allCuts.filter(cut => {
    // Check name
    if (cut.name.toLowerCase().includes(lowerQuery)) return true;

    // Check all synonyms
    const allSynonyms = [
      ...cut.synonyms.usa,
      ...cut.synonyms.uk,
      ...cut.synonyms.australia,
      ...cut.synonyms.japanese,
      ...cut.synonyms.french,
      ...(cut.synonyms.korean || []),
    ];
    return allSynonyms.some(syn => syn.toLowerCase().includes(lowerQuery));
  });
};

/**
 * Get cuts within a toughness range
 */
export const getCutsByToughnessRange = (min: number, max: number): BeefCut[] => {
  return allCuts.filter(cut => cut.toughness >= min && cut.toughness <= max);
};

/**
 * Get similar/alternative cuts for a given cut
 */
export const getAlternativeCuts = (cutId: string): BeefCut[] => {
  const cut = getCutById(cutId);
  if (!cut) return [];
  return cut.alternativeCuts
    .map(altId => getCutById(altId))
    .filter((c): c is BeefCut => c !== undefined);
};

/**
 * Get total number of cuts
 */
export const getTotalCutsCount = (): number => allCuts.length;

/**
 * Get cuts count by primal
 */
export const getCutsCountByPrimal = (): Record<PrimalCut, number> => {
  const counts = {} as Record<PrimalCut, number>;
  for (const cut of allCuts) {
    counts[cut.primalCut] = (counts[cut.primalCut] || 0) + 1;
  }
  return counts;
};
```

Also create a simple `src/data/index.ts` that re-exports everything:

```typescript
// Main data exports
export * from './types';
export * from './primalCuts';
export * from './cuts';
```

## Success Criteria
- [ ] cuts/index.ts created with all aggregation logic
- [ ] Helper functions for filtering, searching, sorting
- [ ] Main data/index.ts re-exports everything
- [ ] No TypeScript errors
- [ ] Imports all cut files correctly
