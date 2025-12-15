# TASK: Create Home Page
# TYPE: implement
# PRIORITY: high
# TIMEOUT: 10

## Objective
Create the home page with hero section and interactive cow diagram at `src/pages/index.astro`.

## Context
The home page showcases the interactive cow diagram and provides entry points to explore cuts.

## Deliverables
Create `/Users/dennyleonardo/Downloads/beef-cuts/src/pages/index.astro`:

```astro
---
import Layout from '../layouts/Layout.astro';
import CowDiagram from '../components/CowDiagram';
import { allCuts, getTokusenCuts, getCutsByPrimal } from '../data/cuts';
import { primalCuts } from '../data/primalCuts';
---

<Layout title="Home">
  <!-- Hero Section -->
  <section class="bg-gradient-to-b from-red-900 to-red-800 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        The Complete Beef Cuts Guide
      </h1>
      <p class="text-xl text-red-100 max-w-2xl mx-auto mb-8">
        Explore {allCuts.length}+ cuts with international names, cooking methods, and detailed attributes.
        Click any region on the cow to discover cuts.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a
          href="/cuts"
          class="px-6 py-3 bg-white text-red-900 font-semibold rounded-lg hover:bg-red-50 transition-colors"
        >
          Browse All Cuts
        </a>
        <a
          href="/compare"
          class="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
        >
          Compare Cuts
        </a>
      </div>
    </div>
  </section>

  <!-- Interactive Diagram Section -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-4">
        Interactive Beef Diagram
      </h2>
      <p class="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Click on any region to explore cuts from that primal. Hover for details.
      </p>
      <CowDiagram client:load />
    </div>
  </section>

  <!-- Primal Cuts Overview -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
        8 Primal Cuts
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        {primalCuts.map((primal) => (
          <a
            href={`/primal/${primal.slug}`}
            class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <div class="text-4xl mb-3">{primal.icon || '🥩'}</div>
            <h3 class="font-semibold text-gray-900 mb-1">{primal.name}</h3>
            <p class="text-sm text-gray-500">
              {getCutsByPrimal(primal.name).length} cuts
            </p>
          </a>
        ))}
      </div>
    </div>
  </section>

  <!-- Featured: Tokusen Cuts -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <span class="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">
          Premium Selection
        </span>
        <h2 class="text-3xl font-bold text-gray-900 mt-4 mb-4">
          Tokusen Available Cuts
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          These premium cuts are available through Tokusen Wagyu, featuring exceptional
          marbling and quality from Australian Wagyu cattle.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {getTokusenCuts().slice(0, 6).map((cut) => (
          <a
            href={`/cuts/${cut.id}`}
            class="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
          >
            <h3 class="font-semibold text-gray-900 mb-2">{cut.name}</h3>
            <p class="text-sm text-gray-500 mb-3">{cut.primalCut}</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">
                Tokusen
              </span>
              {cut.isWagyuRecommended && (
                <span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                  Wagyu
                </span>
              )}
            </div>
          </a>
        ))}
      </div>
      <div class="text-center mt-8">
        <a
          href="/cuts?tokusen=true"
          class="text-red-600 hover:text-red-800 font-medium"
        >
          View all Tokusen cuts →
        </a>
      </div>
    </div>
  </section>

  <!-- Quick Stats -->
  <section class="py-16 bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div class="text-4xl font-bold text-red-400">{allCuts.length}+</div>
          <div class="text-gray-400 mt-1">Beef Cuts</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-red-400">8</div>
          <div class="text-gray-400 mt-1">Primal Regions</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-red-400">6</div>
          <div class="text-gray-400 mt-1">Languages</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-red-400">9</div>
          <div class="text-gray-400 mt-1">Cooking Methods</div>
        </div>
      </div>
    </div>
  </section>
</Layout>
```

## Success Criteria
- [ ] Hero section with CTAs
- [ ] Interactive cow diagram integration
- [ ] Primal cuts grid with counts
- [ ] Tokusen featured section
- [ ] Quick stats section
