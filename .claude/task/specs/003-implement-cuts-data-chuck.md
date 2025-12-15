# TASK: Populate Chuck Primal Cuts Data
# TYPE: implement
# PRIORITY: high
# TIMEOUT: 15

## Objective
Create beef cuts data for all cuts from the Chuck primal at `src/data/cuts/chuck.ts`.

## Context
Using the BeefCut interface from `src/data/types.ts`. Chuck is the shoulder/neck area, known for rich flavor but more connective tissue.

## Deliverables
Create `/Users/dennyleonardo/Downloads/beef-cuts/src/data/cuts/chuck.ts` with these cuts:

1. **Chuck Roast** (Pot Roast)
2. **Chuck Eye Steak** (Poor Man's Ribeye)
3. **Flat Iron Steak** (Top Blade, trimmed)
4. **Denver Steak**
5. **Top Blade Steak** (with connective tissue)
6. **Shoulder Clod** (Clod Heart)
7. **Chuck Tender** (Mock Tender, Scotch Tender)
8. **Chuck Short Ribs**

For each cut include:
- All synonyms: USA (primary + alternatives), UK (Feather Blade for Flat Iron), Australia (Oyster Blade), Japanese (ミスジ Misuji for Flat Iron, ザブトン Zabuton for Denver), French
- Toughness: 1-10 scale (Flat Iron ~3, Chuck Roast ~7)
- Fat content, marbling score
- Price range (Chuck is generally $-$$)
- Cooking methods (braise for roasts, grill for steaks)
- Best uses
- Accurate descriptions

Example structure:
```typescript
import type { BeefCut } from '../types';

export const chuckCuts: BeefCut[] = [
  {
    id: 'flat-iron',
    name: 'Flat Iron Steak',
    slug: 'flat-iron',
    primalCut: 'Chuck',
    subprimalCut: 'Top Blade',
    anatomicalLocation: 'Shoulder blade area, top blade muscle with central connective tissue removed',
    synonyms: {
      usa: ['Flat Iron Steak', 'Top Blade Steak (trimmed)', 'Butler Steak'],
      uk: ['Feather Blade Steak', 'Feather Steak'],
      australia: ['Oyster Blade Steak'],
      japanese: ['ミスジ (Misuji)'],
      french: ['Paleron (trimmed)'],
      impsNamp: '1114D'
    },
    toughness: 3,
    fatContent: 'Moderate',
    marblingScore: 4,
    flavorIntensity: 'Robust',
    priceRange: '$$',
    pricePerKgUsd: { min: 18, max: 30 },
    recommendedMethods: ['Grill', 'Pan-sear', 'Broil'],
    bestDoneness: ['Medium-Rare', 'Medium'],
    idealThicknessCm: 2.5,
    restingTimeMinutes: 5,
    bestUses: ['Steak', 'Fajitas', 'Stir-fry'],
    agingSuitability: ['Fresh', 'Wet-aged'],
    alternativeCuts: ['ribeye', 'denver-steak'],
    nutritionPer100g: { calories: 190, protein: 22, fat: 11 },
    description: 'The flat iron is cut from the top blade muscle after removing the tough central connective tissue. It rivals tenderloin for tenderness while offering more flavor.',
    characteristics: ['Second most tender cut', 'Uniform thickness', 'Rich beef flavor', 'Good marbling'],
    grainDirection: 'Runs lengthwise, slice against',
    isTokusenAvailable: false,
    isPrimeCut: false,
    isWagyuRecommended: true
  },
  // ... more cuts
];
```

## Success Criteria
- [ ] File created with 8 chuck cuts
- [ ] All required fields populated
- [ ] Comprehensive synonyms for each cut
- [ ] Realistic toughness/fat/price values
- [ ] No TypeScript errors
