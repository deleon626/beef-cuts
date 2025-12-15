# TASK: Create Cuts Grid Page
# TYPE: implement
# PRIORITY: high
# TIMEOUT: 12

## Objective
Create the all cuts grid page with filtering at `src/pages/cuts/index.astro`.

## Context
This page displays all cuts in a filterable/searchable grid using the FilterBar and SearchBar components.

## Deliverables
Create `/Users/dennyleonardo/Downloads/beef-cuts/src/pages/cuts/index.astro`:

```astro
---
import Layout from '../../layouts/Layout.astro';
import CutCard from '../../components/CutCard';
import FilterBar from '../../components/FilterBar';
import SearchBar from '../../components/SearchBar';
import { allCuts } from '../../data/cuts';
---

<Layout title="All Cuts" description="Browse all beef cuts with filters for primal cut, tenderness, fat content, price, and cooking methods.">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">All Beef Cuts</h1>
      <p class="text-gray-600">
        Explore our collection of {allCuts.length} cuts from all primal regions.
      </p>
    </div>

    <!-- Search and Filters (React Island) -->
    <div class="mb-8 space-y-4" id="filter-container">
      <SearchBar
        client:load
        cuts={allCuts}
        onSelect={(cut) => window.location.href = `/cuts/${cut.id}`}
        onSearch={() => {}}
      />
      <FilterBar
        client:load
        filters={{
          primalCuts: [],
          toughnessRange: [1, 10],
          fatContent: [],
          priceRange: [],
          cookingMethods: [],
          tokusenOnly: false,
          wagyuOnly: false,
        }}
        onChange={() => {}}
      />
    </div>

    <!-- Cuts Grid -->
    <div id="cuts-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {allCuts.map((cut) => (
        <div data-cut-id={cut.id} data-primal={cut.primalCut} data-toughness={cut.toughness} data-fat={cut.fatContent} data-price={cut.priceRange} data-tokusen={cut.isTokusenAvailable} data-wagyu={cut.isWagyuRecommended} data-methods={cut.recommendedMethods.join(',')}>
          <a href={`/cuts/${cut.id}`}>
            <CutCard cut={cut} client:load />
          </a>
        </div>
      ))}
    </div>

    <!-- No Results Message -->
    <div id="no-results" class="hidden text-center py-12">
      <p class="text-gray-500 text-lg">No cuts match your filters.</p>
      <button id="clear-filters" class="mt-4 text-red-600 hover:text-red-800 font-medium">
        Clear all filters
      </button>
    </div>
  </div>

  <script>
    // Client-side filtering logic
    document.addEventListener('DOMContentLoaded', () => {
      const grid = document.getElementById('cuts-grid');
      const noResults = document.getElementById('no-results');
      const cards = grid?.querySelectorAll('[data-cut-id]');

      // Filter state (sync with FilterBar component via custom events)
      let filters = {
        primalCuts: [],
        toughnessRange: [1, 10],
        fatContent: [],
        priceRange: [],
        cookingMethods: [],
        tokusenOnly: false,
        wagyuOnly: false,
        searchQuery: '',
      };

      function applyFilters() {
        let visibleCount = 0;

        cards?.forEach((card) => {
          const primal = card.getAttribute('data-primal');
          const toughness = parseInt(card.getAttribute('data-toughness') || '5');
          const fat = card.getAttribute('data-fat');
          const price = card.getAttribute('data-price');
          const tokusen = card.getAttribute('data-tokusen') === 'true';
          const wagyu = card.getAttribute('data-wagyu') === 'true';
          const methods = card.getAttribute('data-methods')?.split(',') || [];

          let visible = true;

          // Primal filter
          if (filters.primalCuts.length > 0 && !filters.primalCuts.includes(primal)) {
            visible = false;
          }

          // Toughness range
          if (toughness < filters.toughnessRange[0] || toughness > filters.toughnessRange[1]) {
            visible = false;
          }

          // Fat content
          if (filters.fatContent.length > 0 && !filters.fatContent.includes(fat)) {
            visible = false;
          }

          // Price range
          if (filters.priceRange.length > 0 && !filters.priceRange.includes(price)) {
            visible = false;
          }

          // Cooking methods
          if (filters.cookingMethods.length > 0 && !filters.cookingMethods.some(m => methods.includes(m))) {
            visible = false;
          }

          // Tokusen only
          if (filters.tokusenOnly && !tokusen) {
            visible = false;
          }

          // Wagyu only
          if (filters.wagyuOnly && !wagyu) {
            visible = false;
          }

          (card as HTMLElement).style.display = visible ? 'block' : 'none';
          if (visible) visibleCount++;
        });

        // Show/hide no results message
        if (noResults) {
          noResults.classList.toggle('hidden', visibleCount > 0);
        }
        if (grid) {
          grid.classList.toggle('hidden', visibleCount === 0);
        }
      }

      // Listen for filter changes from React components
      window.addEventListener('filterChange', ((e: CustomEvent) => {
        filters = { ...filters, ...e.detail };
        applyFilters();
      }) as EventListener);

      // Clear filters button
      document.getElementById('clear-filters')?.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('clearFilters'));
      });
    });
  </script>
</Layout>
```

## Success Criteria
- [ ] Grid layout with all cuts
- [ ] SearchBar integration
- [ ] FilterBar integration
- [ ] Client-side filtering
- [ ] No results state
