import { useState, useEffect } from 'react';
import type { BeefCut } from '../data/types';
import { ToughnessBadge, FatContentBadge, PriceBadge, FlavorBadge } from './AttributeBadge';
import { X, Plus, Search } from 'lucide-react';

interface ComparisonToolProps {
  allCuts: BeefCut[];
  initialCuts?: string[]; // Cut IDs from URL params
}

export const ComparisonTool: React.FC<ComparisonToolProps> = ({
  allCuts,
  initialCuts = []
}) => {
  const [selectedCuts, setSelectedCuts] = useState<BeefCut[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  // Initialize from URL params
  useEffect(() => {
    if (initialCuts.length > 0) {
      const cuts = initialCuts
        .map(id => allCuts.find(c => c.id === id))
        .filter((c): c is BeefCut => c !== undefined)
        .slice(0, 3);
      setSelectedCuts(cuts);
    }
  }, [initialCuts, allCuts]);

  // Update URL when selection changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCuts.length > 0) {
      params.set('cuts', selectedCuts.map(c => c.id).join(','));
      window.history.replaceState({}, '', `?${params.toString()}`);
    } else {
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, [selectedCuts]);

  const addCut = (cut: BeefCut) => {
    if (selectedCuts.length < 3 && !selectedCuts.find(c => c.id === cut.id)) {
      setSelectedCuts([...selectedCuts, cut]);
    }
    setShowSearch(false);
    setSearchQuery('');
  };

  const removeCut = (cutId: string) => {
    setSelectedCuts(selectedCuts.filter(c => c.id !== cutId));
  };

  const filteredCuts = allCuts.filter(cut =>
    !selectedCuts.find(c => c.id === cut.id) &&
    (cut.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     cut.synonyms.usa.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const getBestValue = (attribute: 'toughness' | 'priceRange', cuts: BeefCut[]) => {
    if (attribute === 'toughness') {
      // Lower is better (more tender)
      const min = Math.min(...cuts.map(c => c.toughness));
      return cuts.filter(c => c.toughness === min).map(c => c.id);
    }
    if (attribute === 'priceRange') {
      // Fewer $ is better (cheaper)
      const min = Math.min(...cuts.map(c => c.priceRange.length));
      return cuts.filter(c => c.priceRange.length === min).map(c => c.id);
    }
    return [];
  };

  const CompareRow = ({
    label,
    render,
    highlight = false,
  }: {
    label: string;
    render: (cut: BeefCut) => React.ReactNode;
    highlight?: boolean;
  }) => (
    <tr className={highlight ? 'bg-gray-50' : ''}>
      <td className="py-3 px-4 font-medium text-gray-700 border-r border-gray-200">
        {label}
      </td>
      {selectedCuts.map(cut => (
        <td key={cut.id} className="py-3 px-4 text-center">
          {render(cut)}
        </td>
      ))}
      {selectedCuts.length < 3 && (
        <td className="py-3 px-4" />
      )}
    </tr>
  );

  return (
    <div className="space-y-6">
      {/* Selection Area */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {selectedCuts.map((cut) => (
          <div
            key={cut.id}
            className="relative bg-white rounded-lg shadow-sm border border-gray-200 p-4"
          >
            <button
              onClick={() => removeCut(cut.id)}
              className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 className="font-semibold text-gray-900 pr-6">{cut.name}</h3>
            <p className="text-sm text-gray-500">{cut.primalCut}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {cut.isTokusenAvailable && (
                <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded">
                  Tokusen
                </span>
              )}
              {cut.isWagyuRecommended && (
                <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded">
                  Wagyu
                </span>
              )}
            </div>
          </div>
        ))}

        {/* Add Cut Button */}
        {selectedCuts.length < 3 && (
          <div className="relative">
            {showSearch ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search cuts..."
                    className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
                    autoFocus
                  />
                </div>
                <div className="max-h-48 overflow-y-auto space-y-1">
                  {filteredCuts.slice(0, 10).map(cut => (
                    <button
                      key={cut.id}
                      onClick={() => addCut(cut)}
                      className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded text-sm"
                    >
                      <span className="font-medium">{cut.name}</span>
                      <span className="text-gray-500 ml-2">{cut.primalCut}</span>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setShowSearch(false)}
                  className="mt-2 text-sm text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="w-full h-full min-h-[120px] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors"
              >
                <Plus className="w-8 h-8 mb-2" />
                <span>Add Cut to Compare</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Comparison Table */}
      {selectedCuts.length >= 2 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-gray-900 border-r border-gray-200">
                  Attribute
                </th>
                {selectedCuts.map(cut => (
                  <th key={cut.id} className="py-3 px-4 text-center font-semibold text-gray-900">
                    <a href={`/cuts/${cut.id}`} className="hover:text-red-600">
                      {cut.name}
                    </a>
                  </th>
                ))}
                {selectedCuts.length < 3 && <th className="py-3 px-4" />}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <CompareRow
                label="Primal Cut"
                render={(cut) => cut.primalCut}
              />
              <CompareRow
                label="Tenderness"
                highlight
                render={(cut) => (
                  <div className={getBestValue('toughness', selectedCuts).includes(cut.id) ? 'ring-2 ring-green-500 ring-offset-2 rounded-full inline-block' : ''}>
                    <ToughnessBadge value={cut.toughness} size="sm" />
                  </div>
                )}
              />
              <CompareRow
                label="Fat Content"
                render={(cut) => <FatContentBadge value={cut.fatContent} size="sm" />}
              />
              <CompareRow
                label="Price Range"
                highlight
                render={(cut) => (
                  <div className={getBestValue('priceRange', selectedCuts).includes(cut.id) ? 'ring-2 ring-green-500 ring-offset-2 rounded-full inline-block' : ''}>
                    <PriceBadge value={cut.priceRange} size="sm" />
                  </div>
                )}
              />
              <CompareRow
                label="Flavor"
                render={(cut) => <FlavorBadge value={cut.flavorIntensity} size="sm" />}
              />
              <CompareRow
                label="Marbling (BMS)"
                highlight
                render={(cut) => (
                  <span className="font-medium">{cut.marblingScore || 'N/A'}</span>
                )}
              />
              <CompareRow
                label="Cooking Methods"
                render={(cut) => (
                  <div className="flex flex-wrap justify-center gap-1">
                    {cut.recommendedMethods.slice(0, 3).map(m => (
                      <span key={m} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                        {m}
                      </span>
                    ))}
                  </div>
                )}
              />
              <CompareRow
                label="Best Uses"
                highlight
                render={(cut) => (
                  <span className="text-sm text-gray-600">
                    {cut.bestUses.slice(0, 2).join(', ')}
                  </span>
                )}
              />
              <CompareRow
                label="Tokusen"
                render={(cut) => (
                  cut.isTokusenAvailable
                    ? <span className="text-green-600 font-medium">✓ Available</span>
                    : <span className="text-gray-400">—</span>
                )}
              />
              <CompareRow
                label="Wagyu Recommended"
                render={(cut) => (
                  cut.isWagyuRecommended
                    ? <span className="text-purple-600 font-medium">✓ Yes</span>
                    : <span className="text-gray-400">—</span>
                )}
              />
            </tbody>
          </table>
        </div>
      )}

      {/* Empty State */}
      {selectedCuts.length < 2 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">
            Select at least 2 cuts to compare their attributes side-by-side.
          </p>
        </div>
      )}
    </div>
  );
};

export default ComparisonTool;
