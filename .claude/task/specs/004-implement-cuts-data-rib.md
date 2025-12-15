# TASK: Populate Rib Primal Cuts Data
# TYPE: implement
# PRIORITY: high
# TIMEOUT: 15

## Objective
Create beef cuts data for all cuts from the Rib primal at `src/data/cuts/rib.ts`.

## Context
Using the BeefCut interface from `src/data/types.ts`. Rib section produces premium, well-marbled cuts. Tokusen Wagyu offers Ribeye.

## Deliverables
Create `/Users/dennyleonardo/Downloads/beef-cuts/src/data/cuts/rib.ts` with these cuts:

1. **Ribeye Steak** (Delmonico, Scotch Fillet AU)
2. **Prime Rib** (Standing Rib Roast)
3. **Cowboy Steak** (Bone-in Ribeye, short bone)
4. **Tomahawk Steak** (Bone-in Ribeye, long frenched bone)
5. **Rib Cap** (Spinalis Dorsi, Deckle)
6. **Back Ribs** (Beef Back Ribs)
7. **Short Ribs** (Rib portion)

For each cut include comprehensive synonyms:
- Ribeye: USA (Ribeye, Rib Eye, Delmonico, Beauty Steak), UK (Rib Eye), AU (Scotch Fillet), JP (リブロース Riburosu, リブアイ Ribuai), FR (Entrecôte)
- Tomahawk: Same as ribeye + Tomahawk variants
- Rib Cap: USA (Spinalis, Deckle, Ribeye Cap), JP (リブ芯 Ribushin)

Key attributes:
- Toughness: Very tender (2-3)
- Fat content: High to Very High
- Marbling: 5-8+ for wagyu
- Price: $$$ to $$$$
- Cooking: Grill, Pan-sear, Roast

Mark `isTokusenAvailable: true` for Ribeye.

Example structure:
```typescript
import type { BeefCut } from '../types';

export const ribCuts: BeefCut[] = [
  {
    id: 'ribeye',
    name: 'Ribeye Steak',
    slug: 'ribeye',
    primalCut: 'Rib',
    subprimalCut: 'Ribeye Roll',
    anatomicalLocation: 'Longissimus dorsi muscle from the rib section, ribs 6-12',
    synonyms: {
      usa: ['Ribeye', 'Rib Eye Steak', 'Delmonico Steak', 'Beauty Steak', 'Market Steak', 'Spencer Steak'],
      uk: ['Rib Eye Steak', 'Entrecôte'],
      australia: ['Scotch Fillet', 'Boneless Rib Eye'],
      japanese: ['リブロース (Riburosu)', 'リブアイ (Ribuai)'],
      french: ['Entrecôte', 'Côte de bœuf (bone-in)'],
      korean: ['등심 (Deungsim)'],
      impsNamp: '1112A'
    },
    toughness: 2,
    fatContent: 'High',
    marblingScore: 6,
    flavorIntensity: 'Intense',
    priceRange: '$$$',
    pricePerKgUsd: { min: 40, max: 80 },
    // ... complete all fields
    isTokusenAvailable: true,
    isPrimeCut: true,
    isWagyuRecommended: true
  },
  // ... more cuts
];
```

## Success Criteria
- [ ] File created with 7 rib cuts
- [ ] Ribeye marked as Tokusen available
- [ ] Premium pricing reflected
- [ ] Japanese/French synonyms included
- [ ] No TypeScript errors
