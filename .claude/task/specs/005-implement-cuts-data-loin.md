# TASK: Populate Loin Primal Cuts Data
# TYPE: implement
# PRIORITY: high
# TIMEOUT: 15

## Objective
Create beef cuts data for all cuts from the Loin primal at `src/data/cuts/loin.ts`.

## Context
Using the BeefCut interface from `src/data/types.ts`. Loin produces the most tender, premium cuts. Tokusen offers Tenderloin and Sirloin.

## Deliverables
Create `/Users/dennyleonardo/Downloads/beef-cuts/src/data/cuts/loin.ts` with these cuts:

1. **Tenderloin** (Filet, Whole)
2. **Filet Mignon** (Tenderloin steak portion)
3. **Chateaubriand** (Center-cut tenderloin roast)
4. **Striploin** (NY Strip, Sirloin)
5. **T-Bone Steak**
6. **Porterhouse Steak**
7. **Top Sirloin** (Sirloin Cap)
8. **Bottom Sirloin**
9. **Tri-Tip** (Triangle Roast)

Critical synonyms to include:
- Tenderloin: USA (Tenderloin, Filet, Beef Fillet), UK (Fillet), AU (Eye Fillet), JP (ヒレ Hire, フィレ Fire, テンダーロイン), FR (Filet)
- Striploin: USA (NY Strip, Strip Steak, Kansas City Strip), UK (Sirloin - DIFFERENT from US), AU (Porterhouse, Sirloin), JP (サーロイン Sāroin), FR (Faux-Filet, Contre-filet)
- Porterhouse: Note AU uses this for striploin!

Key attributes:
- Toughness: 1-2 (most tender)
- Fat: Low (tenderloin) to Moderate (striploin)
- Price: $$$$ for tenderloin, $$$ for others
- Doneness: Rare to Medium-Rare preferred

Mark `isTokusenAvailable: true` for Tenderloin and Striploin (as Sirloin).

```typescript
import type { BeefCut } from '../types';

export const loinCuts: BeefCut[] = [
  {
    id: 'tenderloin',
    name: 'Tenderloin',
    slug: 'tenderloin',
    primalCut: 'Loin',
    subprimalCut: 'Tenderloin',
    anatomicalLocation: 'Psoas major muscle running along the spine, beneath the ribs',
    synonyms: {
      usa: ['Beef Tenderloin', 'Filet', 'Whole Fillet', 'Chateaubriand (center)'],
      uk: ['Fillet of Beef', 'Beef Fillet'],
      australia: ['Eye Fillet', 'Fillet'],
      japanese: ['ヒレ (Hire)', 'フィレ (Fire)', 'テンダーロイン (Tendāroin)'],
      french: ['Filet de bœuf'],
      impsNamp: '1189A'
    },
    toughness: 1,
    fatContent: 'Low',
    marblingScore: 3,
    flavorIntensity: 'Mild',
    priceRange: '$$$$',
    pricePerKgUsd: { min: 60, max: 150 },
    recommendedMethods: ['Pan-sear', 'Grill', 'Roast', 'Sous-vide'],
    bestDoneness: ['Rare', 'Medium-Rare'],
    // ... complete all fields
    isTokusenAvailable: true,
    isPrimeCut: true,
    isWagyuRecommended: true
  },
  // ... more cuts
];
```

## Success Criteria
- [ ] File created with 9 loin cuts
- [ ] Tenderloin and Striploin marked Tokusen available
- [ ] Correct synonym mapping (UK Sirloin ≠ US Sirloin)
- [ ] Premium pricing for tenderloin
- [ ] No TypeScript errors
