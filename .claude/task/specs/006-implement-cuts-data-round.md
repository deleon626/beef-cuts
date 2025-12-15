# TASK: Populate Round Primal Cuts Data
# TYPE: implement
# PRIORITY: high
# TIMEOUT: 15

## Objective
Create beef cuts data for all cuts from the Round primal at `src/data/cuts/round.ts`.

## Context
Using the BeefCut interface from `src/data/types.ts`. Round is from the rear leg - lean, economical, needs proper cooking.

## Deliverables
Create `/Users/dennyleonardo/Downloads/beef-cuts/src/data/cuts/round.ts` with these cuts:

1. **Top Round** (Inside Round, London Broil)
2. **Bottom Round** (Outside Round)
3. **Eye of Round** (similar to tenderloin shape but tougher)
4. **Sirloin Tip** (Knuckle, Ball Tip)
5. **Rump Roast** (Bottom Round Rump)

Key characteristics:
- Very lean, low fat
- Toughness: 5-7 range
- Price: $ to $$
- Best cooking: Roast, braise, slice thin
- Marinating recommended for steaks

Synonyms:
- Top Round: USA (Top Round, Inside Round, London Broil steak), UK (Topside), AU (Topside), JP (内モモ Uchimomo), FR (Tende de tranche)
- Eye of Round: USA (Eye Round), UK (Silverside cap), AU (Girello), JP (シンタマ Shintama)

Note: Tokusen offers Topside and Silverside as secondary cuts.

```typescript
import type { BeefCut } from '../types';

export const roundCuts: BeefCut[] = [
  {
    id: 'top-round',
    name: 'Top Round',
    slug: 'top-round',
    primalCut: 'Round',
    subprimalCut: 'Inside Round',
    anatomicalLocation: 'Inner portion of the rear leg, relatively tender for round cuts',
    synonyms: {
      usa: ['Top Round', 'Inside Round', 'London Broil'],
      uk: ['Topside', 'Top Rump'],
      australia: ['Topside'],
      japanese: ['内モモ (Uchimomo)'],
      french: ['Tende de tranche', 'Gîte à la noix'],
      impsNamp: '1168'
    },
    toughness: 5,
    fatContent: 'Low',
    marblingScore: 2,
    flavorIntensity: 'Moderate',
    priceRange: '$',
    pricePerKgUsd: { min: 12, max: 22 },
    recommendedMethods: ['Roast', 'Braise', 'Slice thin'],
    bestDoneness: ['Medium-Rare', 'Medium'],
    // ... complete all fields
    isTokusenAvailable: true,  // Tokusen offers Topside
    isPrimeCut: false,
    isWagyuRecommended: false
  },
  // ... more cuts
];
```

## Success Criteria
- [ ] File created with 5 round cuts
- [ ] Lean characteristics reflected
- [ ] Economical pricing
- [ ] Topside/Silverside marked Tokusen available
- [ ] No TypeScript errors
