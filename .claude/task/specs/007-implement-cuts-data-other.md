# TASK: Populate Flank, Plate, Brisket, Shank Cuts Data
# TYPE: implement
# PRIORITY: high
# TIMEOUT: 15

## Objective
Create beef cuts data for Flank, Plate, Brisket, and Shank primals at `src/data/cuts/other.ts`.

## Context
Using the BeefCut interface from `src/data/types.ts`. These are working muscles with distinct characteristics.

## Deliverables
Create `/Users/dennyleonardo/Downloads/beef-cuts/src/data/cuts/other.ts` with:

### Flank (2 cuts):
1. **Flank Steak** (London Broil, Jiffy Steak)
2. **Bavette** (Sirloin Flap)

### Plate (4 cuts):
3. **Skirt Steak - Outside** (Fajita meat)
4. **Skirt Steak - Inside** (Fajita meat)
5. **Hanger Steak** (Butcher's Steak, Onglet)
6. **Plate Short Ribs** (Dino Ribs)

### Brisket (2 cuts):
7. **Brisket Flat** (First Cut, Lean)
8. **Brisket Point** (Second Cut, Deckle)

### Shank (2 cuts):
9. **Shank Cross-Cut** (Osso Buco beef)
10. **Beef Shank** (Whole)

Critical synonyms:
- Skirt: JP (ハラミ Harami - actually diaphragm), FR (Onglet for hanger)
- Hanger: USA (Butcher's Steak, Hanging Tender), FR (Onglet), JP (サガリ Sagari)
- Flank: JP (ともバラ Tomobara), FR (Bavette)
- Short Ribs: JP (カルビ Karubi), KR (갈비 Galbi)

Tokusen offers: Flank, Brisket Navel End (plate area)

```typescript
import type { BeefCut } from '../types';

export const otherCuts: BeefCut[] = [
  {
    id: 'skirt-steak-outside',
    name: 'Outside Skirt Steak',
    slug: 'outside-skirt',
    primalCut: 'Plate',
    subprimalCut: 'Diaphragm (outside)',
    anatomicalLocation: 'Diaphragm muscle, outer portion, attached to ribs',
    synonyms: {
      usa: ['Outside Skirt', 'Skirt Steak', 'Fajita Meat'],
      uk: ['Skirt', 'Thin Skirt'],
      australia: ['Skirt Steak'],
      japanese: ['ハラミ (Harami)', 'アウトサイドスカート'],
      french: ['Hampe'],
      korean: ['안창살 (Anchangsal)'],
      impsNamp: '121C'
    },
    toughness: 4,
    fatContent: 'Moderate',
    marblingScore: 4,
    flavorIntensity: 'Intense',
    priceRange: '$$',
    pricePerKgUsd: { min: 25, max: 45 },
    recommendedMethods: ['Grill', 'Pan-sear', 'Stir-fry'],
    bestDoneness: ['Medium-Rare', 'Medium'],
    idealThicknessCm: 1.5,
    restingTimeMinutes: 5,
    bestUses: ['Fajitas', 'Tacos', 'Stir-fry', 'Carne asada'],
    agingSuitability: ['Fresh'],
    alternativeCuts: ['flank-steak', 'hanger-steak'],
    nutritionPer100g: { calories: 175, protein: 23, fat: 8 },
    description: 'The outside skirt is prized for fajitas and has more fat than inside skirt. It has intense beef flavor and should be sliced against the grain.',
    characteristics: ['Intense beefy flavor', 'Fibrous texture', 'Must slice against grain', 'Best at high heat'],
    grainDirection: 'Runs across the width, slice perpendicular',
    isTokusenAvailable: true,  // Tokusen has flank area cuts
    isPrimeCut: false,
    isWagyuRecommended: true
  },
  // ... more cuts including brisket, shank
];
```

## Success Criteria
- [ ] File created with 10 cuts from 4 primals
- [ ] Japanese yakiniku names included (Harami, Karubi, Sagari)
- [ ] BBQ favorites properly documented (brisket)
- [ ] Cooking methods appropriate (braise for shank)
- [ ] No TypeScript errors
