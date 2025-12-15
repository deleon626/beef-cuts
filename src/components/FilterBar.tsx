import { useState, useCallback, useEffect } from 'react';
import type { PrimalCut, FatContent, PriceRange, CookingMethod } from '../data/types';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

export interface FilterState {
  primalCuts: PrimalCut[];
  toughnessRange: [number, number];
  fatContent: FatContent[];
  priceRange: PriceRange[];
  cookingMethods: CookingMethod[];
  tokusenOnly: boolean;
  wagyuOnly: boolean;
}

const defaultFilters: FilterState = {
  primalCuts: [],
  toughnessRange: [1, 10],
  fatContent: [],
  priceRange: [],
  cookingMethods: [],
  tokusenOnly: false,
  wagyuOnly: false,
};

const PRIMAL_OPTIONS: PrimalCut[] = ['Chuck', 'Rib', 'Loin', 'Round', 'Flank', 'Plate', 'Brisket', 'Shank'];
const FAT_OPTIONS: FatContent[] = ['Low', 'Moderate', 'High', 'Very High'];
const PRICE_OPTIONS: PriceRange[] = ['$', '$$', '$$$', '$$$$'];
const COOKING_OPTIONS: CookingMethod[] = ['Grill', 'Pan-sear', 'Braise', 'Roast', 'Smoke', 'Sous-vide', 'Stir-fry', 'Broil', 'Slow-cook'];

interface FilterBarProps {
  filters?: FilterState;
  resultCount?: number;
}

// Dispatch filter changes directly to the DOM
const dispatchFilterChange = (filters: FilterState) => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('filterChange', { detail: filters }));
  }
};

export const FilterBar: React.FC<FilterBarProps> = ({ filters: initialFilters, resultCount: initialResultCount }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [resultCount, setResultCount] = useState(initialResultCount);

  // Internal state - this is the key fix!
  const [filters, setFilters] = useState<FilterState>(initialFilters || defaultFilters);

  // Listen for external events
  useEffect(() => {
    const handleClearFilters = () => {
      setFilters(defaultFilters);
      dispatchFilterChange(defaultFilters);
    };

    const handleSetFilters = ((e: CustomEvent) => {
      const newFilters = { ...filters, ...e.detail };
      setFilters(newFilters);
      dispatchFilterChange(newFilters);
    }) as EventListener;

    const handleResultCount = ((e: CustomEvent) => {
      setResultCount(e.detail);
    }) as EventListener;

    window.addEventListener('clearFilters', handleClearFilters);
    window.addEventListener('setFilters', handleSetFilters);
    window.addEventListener('resultCount', handleResultCount);

    return () => {
      window.removeEventListener('clearFilters', handleClearFilters);
      window.removeEventListener('setFilters', handleSetFilters);
      window.removeEventListener('resultCount', handleResultCount);
    };
  }, [filters]);

  // Update internal state AND dispatch event to vanilla JS
  const updateFilter = useCallback(<K extends keyof FilterState>(
    key: K,
    value: FilterState[K]
  ) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    dispatchFilterChange(newFilters);
  }, [filters]);

  const toggleArrayFilter = useCallback(<T extends string>(
    key: keyof FilterState,
    value: T,
    currentArray: T[]
  ) => {
    const newArray = currentArray.includes(value)
      ? currentArray.filter(v => v !== value)
      : [...currentArray, value];
    updateFilter(key, newArray as FilterState[typeof key]);
  }, [updateFilter]);

  const clearAllFilters = () => {
    setFilters(defaultFilters);
    dispatchFilterChange(defaultFilters);
  };

  const activeFilterCount = [
    filters.primalCuts.length,
    filters.fatContent.length,
    filters.priceRange.length,
    filters.cookingMethods.length,
    filters.tokusenOnly ? 1 : 0,
    filters.wagyuOnly ? 1 : 0,
    (filters.toughnessRange[0] !== 1 || filters.toughnessRange[1] !== 10) ? 1 : 0,
  ].reduce((a, b) => a + b, 0);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
        >
          <SlidersHorizontal className="w-5 h-5" />
          <span className="font-medium">Filters</span>
          {activeFilterCount > 0 && (
            <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full">
              {activeFilterCount}
            </span>
          )}
          <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>

        <div className="flex items-center gap-4">
          {resultCount !== undefined && (
            <span className="text-sm text-gray-500">{resultCount} cuts</span>
          )}
          {activeFilterCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-red-600 hover:text-red-800"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      {/* Expanded filters */}
      {isExpanded && (
        <div className="p-4 space-y-4">
          {/* Primal Cuts */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Primal Cut</label>
            <div className="flex flex-wrap gap-2">
              {PRIMAL_OPTIONS.map((primal) => (
                <button
                  key={primal}
                  onClick={() => toggleArrayFilter('primalCuts', primal, filters.primalCuts)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    filters.primalCuts.includes(primal)
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {primal}
                </button>
              ))}
            </div>
          </div>

          {/* Toughness Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tenderness: {11 - filters.toughnessRange[1]} - {11 - filters.toughnessRange[0]} (10 = most tender)
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="10"
                value={filters.toughnessRange[0]}
                onChange={(e) => updateFilter('toughnessRange', [parseInt(e.target.value), filters.toughnessRange[1]])}
                className="flex-1"
              />
              <input
                type="range"
                min="1"
                max="10"
                value={filters.toughnessRange[1]}
                onChange={(e) => updateFilter('toughnessRange', [filters.toughnessRange[0], parseInt(e.target.value)])}
                className="flex-1"
              />
            </div>
          </div>

          {/* Fat Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Fat Content</label>
            <div className="flex flex-wrap gap-2">
              {FAT_OPTIONS.map((fat) => (
                <button
                  key={fat}
                  onClick={() => toggleArrayFilter('fatContent', fat, filters.fatContent)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    filters.fatContent.includes(fat)
                      ? 'bg-amber-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {fat}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
            <div className="flex flex-wrap gap-2">
              {PRICE_OPTIONS.map((price) => (
                <button
                  key={price}
                  onClick={() => toggleArrayFilter('priceRange', price, filters.priceRange)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    filters.priceRange.includes(price)
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {price}
                </button>
              ))}
            </div>
          </div>

          {/* Cooking Methods */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cooking Method</label>
            <div className="flex flex-wrap gap-2">
              {COOKING_OPTIONS.map((method) => (
                <button
                  key={method}
                  onClick={() => toggleArrayFilter('cookingMethods', method, filters.cookingMethods)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    filters.cookingMethods.includes(method)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>

          {/* Toggles */}
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.tokusenOnly}
                onChange={(e) => updateFilter('tokusenOnly', e.target.checked)}
                className="rounded text-red-600"
              />
              <span className="text-sm text-gray-700">Tokusen Available Only</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.wagyuOnly}
                onChange={(e) => updateFilter('wagyuOnly', e.target.checked)}
                className="rounded text-purple-600"
              />
              <span className="text-sm text-gray-700">Wagyu Recommended Only</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export { defaultFilters };
export default FilterBar;
