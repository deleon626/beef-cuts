# TASK: Create Primal Cuts Data
# TYPE: implement
# PRIORITY: high
# TIMEOUT: 10

## Objective
Create the 8 primal cuts data file at `src/data/primalCuts.ts` with comprehensive information about each primal section of beef.

## Context
The 8 primal cuts are the major sections a beef carcass is divided into. Each primal has unique characteristics that affect all cuts derived from it.

## Deliverables
Create `/Users/dennyleonardo/Downloads/beef-cuts/src/data/primalCuts.ts` with:

```typescript
import type { PrimalCut } from './types';

export interface PrimalCutInfo {
  id: PrimalCut;
  name: string;
  slug: string;
  location: string;              // Where on the cow
  description: string;           // 2-3 sentences
  characteristics: string[];     // Key traits
  typicalToughness: string;      // General toughness level
  typicalFatContent: string;     // General fat level
  commonCookingMethods: string[];
  percentOfCarcass: number;      // Approximate %
  svgPathId: string;             // For interactive diagram
  color: string;                 // Hex color for diagram
}

export const primalCuts: PrimalCutInfo[] = [
  {
    id: 'Chuck',
    name: 'Chuck',
    slug: 'chuck',
    location: 'Shoulder and neck area, forequarter',
    description: 'The chuck comes from the shoulder and neck region. It contains a lot of connective tissue due to the muscles being heavily used, making it flavorful but requiring slow cooking methods.',
    characteristics: ['Rich beef flavor', 'High collagen content', 'Good marbling potential', 'Versatile for ground beef'],
    typicalToughness: 'Moderate to Tough',
    typicalFatContent: 'Moderate to High',
    commonCookingMethods: ['Braise', 'Slow-cook', 'Smoke', 'Grill (certain cuts)'],
    percentOfCarcass: 26,
    svgPathId: 'primal-chuck',
    color: '#8B4513'
  },
  {
    id: 'Rib',
    name: 'Rib',
    slug: 'rib',
    location: 'Upper back, between 6th and 12th ribs',
    description: 'The rib section produces some of the most prized and tender cuts. The muscles here do less work, resulting in excellent marbling and tenderness.',
    characteristics: ['Exceptional marbling', 'Very tender', 'Rich, beefy flavor', 'Premium cuts'],
    typicalToughness: 'Very Tender',
    typicalFatContent: 'High',
    commonCookingMethods: ['Grill', 'Pan-sear', 'Roast', 'Smoke'],
    percentOfCarcass: 9,
    svgPathId: 'primal-rib',
    color: '#DC143C'
  },
  {
    id: 'Loin',
    name: 'Loin',
    slug: 'loin',
    location: 'Back of the cow, behind the rib section',
    description: 'The loin is where the most tender and expensive cuts come from. It includes the short loin, sirloin, and tenderloin subprimals.',
    characteristics: ['Most tender cuts', 'Lower fat than rib', 'Premium steaks', 'Includes tenderloin'],
    typicalToughness: 'Very Tender',
    typicalFatContent: 'Low to Moderate',
    commonCookingMethods: ['Grill', 'Pan-sear', 'Roast', 'Broil'],
    percentOfCarcass: 17,
    svgPathId: 'primal-loin',
    color: '#FF6347'
  },
  {
    id: 'Round',
    name: 'Round',
    slug: 'round',
    location: 'Rear leg and rump area, hindquarter',
    description: 'The round comes from the rear leg and is quite lean with less marbling. These muscles are well-exercised, making the meat flavorful but requiring careful cooking.',
    characteristics: ['Very lean', 'Less marbling', 'Economical', 'Best when sliced thin'],
    typicalToughness: 'Moderate to Tough',
    typicalFatContent: 'Low',
    commonCookingMethods: ['Roast', 'Braise', 'Slow-cook', 'Slice thin for sandwiches'],
    percentOfCarcass: 22,
    svgPathId: 'primal-round',
    color: '#CD853F'
  },
  {
    id: 'Flank',
    name: 'Flank',
    slug: 'flank',
    location: 'Abdominal area, below the loin',
    description: 'The flank is a lean, flat cut from the abdominal muscles. It has long muscle fibers and is known for its intense beef flavor.',
    characteristics: ['Lean and flat', 'Intense flavor', 'Long muscle fibers', 'Must slice against grain'],
    typicalToughness: 'Moderate',
    typicalFatContent: 'Low',
    commonCookingMethods: ['Grill', 'Stir-fry', 'Braise', 'Marinate and grill'],
    percentOfCarcass: 5,
    svgPathId: 'primal-flank',
    color: '#DEB887'
  },
  {
    id: 'Plate',
    name: 'Short Plate',
    slug: 'plate',
    location: 'Below the rib section, belly area',
    description: 'The plate is a fatty, flavorful section from the belly. It includes short ribs and skirt steak, known for their rich taste.',
    characteristics: ['High fat content', 'Very flavorful', 'Contains short ribs', 'Great for fajitas'],
    typicalToughness: 'Moderate',
    typicalFatContent: 'High',
    commonCookingMethods: ['Braise', 'Grill', 'Smoke', 'Stir-fry'],
    percentOfCarcass: 8,
    svgPathId: 'primal-plate',
    color: '#B8860B'
  },
  {
    id: 'Brisket',
    name: 'Brisket',
    slug: 'brisket',
    location: 'Chest area, below the chuck',
    description: 'The brisket comes from the breast section and is one of the toughest cuts due to the heavy use of chest muscles. Proper slow cooking transforms it into incredibly tender meat.',
    characteristics: ['Tough but flavorful', 'Iconic for BBQ', 'Two distinct muscles', 'Requires low and slow cooking'],
    typicalToughness: 'Tough',
    typicalFatContent: 'Moderate to High',
    commonCookingMethods: ['Smoke', 'Braise', 'Slow-cook'],
    percentOfCarcass: 8,
    svgPathId: 'primal-brisket',
    color: '#A0522D'
  },
  {
    id: 'Shank',
    name: 'Shank',
    slug: 'shank',
    location: 'Upper portion of legs (front and rear)',
    description: 'The shank is the leg portion and is extremely tough due to constant use. Rich in collagen, it becomes incredibly tender and flavorful when braised.',
    characteristics: ['Very tough', 'Rich in collagen', 'Exceptional for stocks', 'Osso buco cut'],
    typicalToughness: 'Very Tough',
    typicalFatContent: 'Low',
    commonCookingMethods: ['Braise', 'Slow-cook', 'Stocks and soups'],
    percentOfCarcass: 5,
    svgPathId: 'primal-shank',
    color: '#8B0000'
  }
];

// Helper function to get primal by ID
export const getPrimalCut = (id: PrimalCut): PrimalCutInfo | undefined => {
  return primalCuts.find(p => p.id === id);
};

// Helper function to get primal by slug
export const getPrimalBySlug = (slug: string): PrimalCutInfo | undefined => {
  return primalCuts.find(p => p.slug === slug);
};
```

## Success Criteria
- [ ] File created at src/data/primalCuts.ts
- [ ] All 8 primal cuts defined with comprehensive data
- [ ] Helper functions included
- [ ] Imports types from types.ts correctly
- [ ] No TypeScript errors
