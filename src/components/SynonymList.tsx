import type { CutSynonyms } from '../data/types';

interface SynonymListProps {
  synonyms: CutSynonyms;
  compact?: boolean;
  showAll?: boolean;
}

// Country/region configuration
const regionConfig = {
  usa: { label: 'USA', flag: '🇺🇸', color: 'bg-blue-50 text-blue-800 border-blue-200' },
  uk: { label: 'UK', flag: '🇬🇧', color: 'bg-red-50 text-red-800 border-red-200' },
  australia: { label: 'Australia', flag: '🇦🇺', color: 'bg-green-50 text-green-800 border-green-200' },
  japanese: { label: 'Japanese', flag: '🇯🇵', color: 'bg-pink-50 text-pink-800 border-pink-200' },
  french: { label: 'French', flag: '🇫🇷', color: 'bg-indigo-50 text-indigo-800 border-indigo-200' },
  korean: { label: 'Korean', flag: '🇰🇷', color: 'bg-purple-50 text-purple-800 border-purple-200' },
};

export const SynonymList: React.FC<SynonymListProps> = ({
  synonyms,
  compact = false,
  showAll = true
}) => {
  const regions = ['usa', 'uk', 'australia', 'japanese', 'french', 'korean'] as const;

  if (compact) {
    // Compact view: single line with key synonyms
    return (
      <div className="flex flex-wrap gap-2">
        {regions.map((region) => {
          const names = synonyms[region];
          if (!names || names.length === 0) return null;
          const config = regionConfig[region];

          return (
            <span
              key={region}
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs border ${config.color}`}
            >
              <span>{config.flag}</span>
              <span className="font-medium">{names[0]}</span>
            </span>
          );
        })}
      </div>
    );
  }

  // Full view: grouped by region
  return (
    <div className="space-y-4">
      {regions.map((region) => {
        const names = synonyms[region];
        if (!names || names.length === 0) return null;
        const config = regionConfig[region];

        return (
          <div key={region} className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-lg">{config.flag}</span>
              <span className="text-sm font-semibold text-gray-700">{config.label}</span>
            </div>
            <div className="flex flex-wrap gap-2 ml-7">
              {(showAll ? names : names.slice(0, 3)).map((name, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-lg text-sm border ${config.color}`}
                >
                  {name}
                </span>
              ))}
              {!showAll && names.length > 3 && (
                <span className="px-3 py-1 text-sm text-gray-400">
                  +{names.length - 3} more
                </span>
              )}
            </div>
          </div>
        );
      })}

      {/* IMPS/NAMP Code if available */}
      {synonyms.impsNamp && (
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-lg">📋</span>
            <span className="text-sm font-semibold text-gray-700">IMPS/NAMP Code</span>
          </div>
          <div className="ml-7">
            <span className="px-3 py-1 rounded-lg text-sm bg-gray-100 text-gray-700 font-mono">
              {synonyms.impsNamp}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

// Inline synonym display for cards
interface InlineSynonymsProps {
  synonyms: CutSynonyms;
  maxItems?: number;
}

export const InlineSynonyms: React.FC<InlineSynonymsProps> = ({ synonyms, maxItems = 4 }) => {
  // Collect all unique names, prioritizing non-USA
  const allNames = [
    ...synonyms.uk,
    ...synonyms.australia,
    ...synonyms.japanese,
    ...synonyms.french,
    ...(synonyms.korean || []),
  ].slice(0, maxItems);

  if (allNames.length === 0) return null;

  return (
    <p className="text-sm text-gray-500">
      Also known as: {allNames.join(' • ')}
    </p>
  );
};

export default SynonymList;
