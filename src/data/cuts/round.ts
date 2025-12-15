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
    recommendedMethods: ['Roast', 'Braise', 'Sous-vide'],
    bestDoneness: ['Medium-Rare', 'Medium'],
    idealThicknessCm: 3,
    restingTimeMinutes: 10,
    bestUses: [
      'Roast beef for sandwiches',
      'Braised dishes',
      'Thinly sliced for stir-fry',
      'London broil steaks (marinated)'
    ],
    agingSuitability: ['Fresh', 'Wet-aged'],
    alternativeCuts: ['Eye of Round', 'Bottom Round', 'Sirloin Tip'],
    nutritionPer100g: {
      calories: 144,
      protein: 26,
      fat: 4
    },
    description: 'Top Round, also known as Inside Round or Topside, is one of the more tender cuts from the round primal. It comes from the inner thigh muscle and is very lean with minimal fat. While not as tender as premium steaks, it offers excellent value and responds well to proper cooking techniques.',
    characteristics: [
      'Very lean with minimal marbling',
      'Fine grain texture',
      'Most tender of the round cuts',
      'Economical and versatile',
      'Benefits from marinating',
      'Best sliced thin against the grain'
    ],
    grainDirection: 'Long fibers running lengthwise, always slice across the grain',
    isTokusenAvailable: true,
    isPrimeCut: false,
    isWagyuRecommended: false
  },
  {
    id: 'bottom-round',
    name: 'Bottom Round',
    slug: 'bottom-round',
    primalCut: 'Round',
    subprimalCut: 'Outside Round',
    anatomicalLocation: 'Outer portion of the rear leg, includes the eye of round and rump',
    synonyms: {
      usa: ['Bottom Round', 'Outside Round', 'Bottom Round Roast'],
      uk: ['Silverside', 'Thick Flank'],
      australia: ['Silverside', 'Outside'],
      japanese: ['外モモ (Sotomomo)'],
      french: ['Gîte à la noix', 'Rond de gîte'],
      impsNamp: '1170'
    },
    toughness: 6,
    fatContent: 'Low',
    marblingScore: 1,
    flavorIntensity: 'Moderate',
    priceRange: '$',
    pricePerKgUsd: { min: 10, max: 20 },
    recommendedMethods: ['Roast', 'Braise', 'Slow-cook'],
    bestDoneness: ['Medium', 'Medium-Well'],
    idealThicknessCm: 4,
    restingTimeMinutes: 15,
    bestUses: [
      'Pot roast',
      'Braised beef',
      'Corned beef',
      'Deli roast beef',
      'Slow cooker meals'
    ],
    agingSuitability: ['Fresh', 'Wet-aged'],
    alternativeCuts: ['Top Round', 'Chuck Roast', 'Rump Roast'],
    nutritionPer100g: {
      calories: 139,
      protein: 27,
      fat: 3
    },
    description: 'Bottom Round, or Outside Round, is a lean and economical cut from the outer thigh. It is tougher than top round due to heavy muscle use but becomes incredibly tender when braised or slow-cooked. Popular for corned beef and deli-style roast beef.',
    characteristics: [
      'Extremely lean, minimal fat',
      'Dense muscle fibers',
      'Tougher than top round',
      'Excellent for braising',
      'Great value for money',
      'Takes well to long, moist cooking'
    ],
    grainDirection: 'Prominent grain, slice thin across the grain after cooking',
    isTokusenAvailable: true,
    isPrimeCut: false,
    isWagyuRecommended: false
  },
  {
    id: 'eye-of-round',
    name: 'Eye of Round',
    slug: 'eye-of-round',
    primalCut: 'Round',
    subprimalCut: 'Bottom Round',
    anatomicalLocation: 'Small cylindrical muscle from the outer leg, sits within the bottom round',
    synonyms: {
      usa: ['Eye of Round', 'Eye Round Roast'],
      uk: ['Silverside Cap', 'Cushion'],
      australia: ['Girello', 'Eye Round'],
      japanese: ['シンタマ (Shintama)'],
      french: ['Rond de gîte', 'Tende de tranche ronde'],
      impsNamp: '1171B'
    },
    toughness: 7,
    fatContent: 'Low',
    marblingScore: 1,
    flavorIntensity: 'Mild',
    priceRange: '$',
    pricePerKgUsd: { min: 11, max: 19 },
    recommendedMethods: ['Roast', 'Sous-vide', 'Braise'],
    bestDoneness: ['Rare', 'Medium-Rare'],
    idealThicknessCm: 5,
    restingTimeMinutes: 15,
    bestUses: [
      'Roast beef (sliced thin)',
      'Deli meat',
      'Carpaccio or beef tataki',
      'Slow-roasted and sliced',
      'Budget-friendly beef Wellington'
    ],
    agingSuitability: ['Fresh'],
    alternativeCuts: ['Top Round', 'Beef Tenderloin (shape-wise)', 'Bottom Round'],
    nutritionPer100g: {
      calories: 130,
      protein: 27,
      fat: 2
    },
    description: 'Eye of Round resembles a tenderloin in shape but is much leaner and tougher. This small, cylindrical roast comes from the outer leg and has almost no marbling. It requires careful cooking to prevent dryness—roast to rare or medium-rare and slice paper-thin for best results.',
    characteristics: [
      'Extremely lean, virtually no fat',
      'Uniform cylindrical shape',
      'Very tough if overcooked',
      'Similar shape to tenderloin but tougher',
      'Ideal for thin slicing',
      'Benefits from low-temperature roasting'
    ],
    grainDirection: 'Even grain running lengthwise, slice very thin perpendicular to grain',
    isTokusenAvailable: false,
    isPrimeCut: false,
    isWagyuRecommended: false
  },
  {
    id: 'sirloin-tip',
    name: 'Sirloin Tip',
    slug: 'sirloin-tip',
    primalCut: 'Round',
    subprimalCut: 'Knuckle',
    anatomicalLocation: 'Front portion of the round, sits between the sirloin and round primals',
    synonyms: {
      usa: ['Sirloin Tip', 'Knuckle', 'Round Tip', 'Ball Tip'],
      uk: ['Thick Flank', 'Knuckle'],
      australia: ['Knuckle', 'Tip'],
      japanese: ['ランプ (Ranpu)'],
      french: ['Tranche grasse', 'Rond de tranche'],
      impsNamp: '1167A'
    },
    toughness: 5,
    fatContent: 'Low',
    marblingScore: 2,
    flavorIntensity: 'Moderate',
    priceRange: '$$',
    pricePerKgUsd: { min: 14, max: 24 },
    recommendedMethods: ['Roast', 'Grill', 'Stir-fry', 'Braise'],
    bestDoneness: ['Medium-Rare', 'Medium'],
    idealThicknessCm: 2.5,
    restingTimeMinutes: 8,
    bestUses: [
      'Kabobs and skewers',
      'Stir-fry strips',
      'Fajitas',
      'Sirloin tip steaks (marinated)',
      'Sandwich meat'
    ],
    agingSuitability: ['Fresh', 'Wet-aged'],
    alternativeCuts: ['Top Sirloin', 'Top Round', 'Tri-Tip'],
    nutritionPer100g: {
      calories: 150,
      protein: 25,
      fat: 5
    },
    description: 'Sirloin Tip, also called Knuckle or Ball Tip, is a versatile cut from the front of the round. Despite its name, it is not from the sirloin. It is relatively tender for a round cut and works well for kabobs, stir-fries, and thin steaks when properly marinated.',
    characteristics: [
      'Leaner than sirloin, more tender than round',
      'Composed of several muscles',
      'Versatile for various preparations',
      'Good value for money',
      'Benefits from marinating',
      'Can be cut into steaks or roasts'
    ],
    grainDirection: 'Multiple muscle groups with varying grain, identify and slice accordingly',
    isTokusenAvailable: false,
    isPrimeCut: false,
    isWagyuRecommended: false
  },
  {
    id: 'rump-roast',
    name: 'Rump Roast',
    slug: 'rump-roast',
    primalCut: 'Round',
    subprimalCut: 'Bottom Round Rump',
    anatomicalLocation: 'Hindquarter rump area, sits above the round and below the sirloin',
    synonyms: {
      usa: ['Rump Roast', 'Round Rump Roast', 'Bottom Round Rump'],
      uk: ['Rump', 'Pointe de culotte'],
      australia: ['Rump', 'Round Rump'],
      japanese: ['ランイチ (Ran-ichi)', 'イチボ (Ichibo)'],
      french: ['Culotte', 'Pointe de culotte'],
      impsNamp: '1171A'
    },
    toughness: 6,
    fatContent: 'Low',
    marblingScore: 2,
    flavorIntensity: 'Moderate',
    priceRange: '$',
    pricePerKgUsd: { min: 13, max: 21 },
    recommendedMethods: ['Roast', 'Braise', 'Slow-cook'],
    bestDoneness: ['Medium', 'Medium-Well'],
    idealThicknessCm: 5,
    restingTimeMinutes: 15,
    bestUses: [
      'Pot roast',
      'Sunday roast',
      'Slow cooker meals',
      'Braised beef dishes',
      'Sliced roast beef'
    ],
    agingSuitability: ['Fresh', 'Wet-aged'],
    alternativeCuts: ['Chuck Roast', 'Bottom Round', 'Top Round'],
    nutritionPer100g: {
      calories: 146,
      protein: 26,
      fat: 4
    },
    description: 'Rump Roast comes from the hip area where the round meets the loin. It is a lean, flavorful cut that benefits from slow, moist cooking methods. While it can be tough if mishandled, proper braising or slow-roasting produces tender, satisfying results at an economical price.',
    characteristics: [
      'Lean with minimal fat cap',
      'Moderate toughness',
      'Good beef flavor',
      'Economical family roast',
      'Best with slow cooking',
      'Holds up well to braising liquids'
    ],
    grainDirection: 'Distinct grain pattern, slice against the grain after resting',
    isTokusenAvailable: false,
    isPrimeCut: false,
    isWagyuRecommended: false
  }
];
