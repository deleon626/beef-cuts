# TASK: Create SearchBar Component
# TYPE: implement
# PRIORITY: high
# TIMEOUT: 10

## Objective
Create a search component with autocomplete for finding cuts at `src/components/SearchBar.tsx`.

## Context
Searches cut names and all synonyms (USA, UK, AU, JP, FR, KR). Shows autocomplete suggestions.

## Deliverables
Create `/Users/dennyleonardo/Downloads/beef-cuts/src/components/SearchBar.tsx`:

```tsx
import { useState, useEffect, useRef, useCallback } from 'react';
import { Search, X } from 'lucide-react';
import type { BeefCut } from '../data/types';

interface SearchBarProps {
  cuts: BeefCut[];
  onSelect: (cut: BeefCut) => void;
  onSearch: (query: string) => void;
  placeholder?: string;
}

interface SearchResult {
  cut: BeefCut;
  matchedName: string;
  matchSource: string; // 'name' | 'usa' | 'uk' | 'australia' | 'japanese' | 'french' | 'korean'
}

export const SearchBar: React.FC<SearchBarProps> = ({
  cuts,
  onSelect,
  onSearch,
  placeholder = "Search cuts (ribeye, scotch fillet, ミスジ...)"
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Search function
  const performSearch = useCallback((searchQuery: string): SearchResult[] => {
    if (!searchQuery.trim()) return [];

    const lowerQuery = searchQuery.toLowerCase();
    const matches: SearchResult[] = [];

    for (const cut of cuts) {
      // Check main name
      if (cut.name.toLowerCase().includes(lowerQuery)) {
        matches.push({ cut, matchedName: cut.name, matchSource: 'name' });
        continue;
      }

      // Check all synonyms
      const synonymSources = [
        { key: 'usa', names: cut.synonyms.usa },
        { key: 'uk', names: cut.synonyms.uk },
        { key: 'australia', names: cut.synonyms.australia },
        { key: 'japanese', names: cut.synonyms.japanese },
        { key: 'french', names: cut.synonyms.french },
        { key: 'korean', names: cut.synonyms.korean || [] },
      ];

      for (const { key, names } of synonymSources) {
        const match = names.find(n => n.toLowerCase().includes(lowerQuery));
        if (match) {
          matches.push({ cut, matchedName: match, matchSource: key });
          break;
        }
      }
    }

    return matches.slice(0, 8); // Limit results
  }, [cuts]);

  // Update results when query changes
  useEffect(() => {
    const searchResults = performSearch(query);
    setResults(searchResults);
    setSelectedIndex(-1);
    onSearch(query);
  }, [query, performSearch, onSearch]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleSelect(results[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  const handleSelect = (result: SearchResult) => {
    setQuery('');
    setIsOpen(false);
    onSelect(result.cut);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    inputRef.current?.focus();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getSourceLabel = (source: string): string => {
    const labels: Record<string, string> = {
      name: '',
      usa: '🇺🇸',
      uk: '🇬🇧',
      australia: '🇦🇺',
      japanese: '🇯🇵',
      french: '🇫🇷',
      korean: '🇰🇷',
    };
    return labels[source] || '';
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors text-gray-900 placeholder-gray-400"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          {results.map((result, index) => (
            <button
              key={`${result.cut.id}-${result.matchSource}`}
              onClick={() => handleSelect(result)}
              className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 ${
                index === selectedIndex ? 'bg-gray-100' : ''
              }`}
            >
              <div>
                <div className="font-medium text-gray-900">
                  {result.cut.name}
                </div>
                {result.matchSource !== 'name' && (
                  <div className="text-sm text-gray-500">
                    {getSourceLabel(result.matchSource)} {result.matchedName}
                  </div>
                )}
              </div>
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                {result.cut.primalCut}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* No results */}
      {isOpen && query && results.length === 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-4 text-center text-gray-500">
          No cuts found for "{query}"
        </div>
      )}
    </div>
  );
};

export default SearchBar;
```

## Success Criteria
- [ ] Search by name and all synonym languages
- [ ] Autocomplete dropdown with results
- [ ] Keyboard navigation (arrows, enter, escape)
- [ ] Show matched synonym with flag
- [ ] Clear button and focus management
