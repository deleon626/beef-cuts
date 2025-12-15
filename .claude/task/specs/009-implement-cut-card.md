# TASK: Create CutCard React Component
# TYPE: implement
# PRIORITY: high
# TIMEOUT: 10

## Objective
Create a reusable card component for displaying beef cut summary at `src/components/CutCard.tsx`.

## Context
This card will be used in grid views to show cut previews. Uses Tailwind CSS and Lucide icons.

## Deliverables
Create `/Users/dennyleonardo/Downloads/beef-cuts/src/components/CutCard.tsx`:

```tsx
import type { BeefCut } from '../data/types';
import { Flame, DollarSign, Beef } from 'lucide-react';

interface CutCardProps {
  cut: BeefCut;
  onClick?: () => void;
  showPrimal?: boolean;
}

export const CutCard: React.FC<CutCardProps> = ({ cut, onClick, showPrimal = true }) => {
  // Toughness indicator (1-10 scale visualized)
  const getToughnessColor = (t: number) => {
    if (t <= 3) return 'bg-green-500';
    if (t <= 5) return 'bg-yellow-500';
    if (t <= 7) return 'bg-orange-500';
    return 'bg-red-500';
  };

  // Price range display
  const getPriceDisplay = (price: string) => {
    const count = price.length; // $, $$, $$$, $$$$
    return Array(count).fill('$').join('');
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-100 overflow-hidden"
      onClick={onClick}
    >
      {/* Header with primal badge */}
      <div className="p-4 border-b border-gray-100">
        {showPrimal && (
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            {cut.primalCut}
          </span>
        )}
        <h3 className="text-lg font-semibold text-gray-900 mt-1">{cut.name}</h3>

        {/* Synonyms preview */}
        <p className="text-sm text-gray-500 mt-1 truncate">
          {cut.synonyms.usa.slice(0, 2).join(' • ')}
        </p>
      </div>

      {/* Attributes */}
      <div className="p-4 space-y-3">
        {/* Toughness bar */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 w-20">Tenderness</span>
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${getToughnessColor(cut.toughness)} transition-all`}
              style={{ width: `${(10 - cut.toughness) * 10}%` }}
            />
          </div>
        </div>

        {/* Fat content */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 w-20">Fat</span>
          <span className="text-sm font-medium text-gray-700">{cut.fatContent}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 w-20">Price</span>
          <span className="text-sm font-medium text-amber-600">
            {getPriceDisplay(cut.priceRange)}
          </span>
        </div>
      </div>

      {/* Footer with badges */}
      <div className="px-4 pb-4 flex flex-wrap gap-2">
        {cut.isTokusenAvailable && (
          <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full font-medium">
            Tokusen
          </span>
        )}
        {cut.isPrimeCut && (
          <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full font-medium">
            Prime
          </span>
        )}
        {cut.isWagyuRecommended && (
          <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
            Wagyu
          </span>
        )}
      </div>

      {/* Cooking methods preview */}
      <div className="px-4 pb-4">
        <div className="flex flex-wrap gap-1">
          {cut.recommendedMethods.slice(0, 3).map((method) => (
            <span
              key={method}
              className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
            >
              {method}
            </span>
          ))}
          {cut.recommendedMethods.length > 3 && (
            <span className="text-xs text-gray-400">
              +{cut.recommendedMethods.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CutCard;
```

## Success Criteria
- [ ] Component created with proper TypeScript types
- [ ] Visual indicators for toughness, fat, price
- [ ] Badges for Tokusen, Prime, Wagyu
- [ ] Hover effects and transitions
- [ ] Responsive design with Tailwind
