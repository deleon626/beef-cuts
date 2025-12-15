# TASK: Create About Page
# TYPE: implement
# PRIORITY: medium
# TIMEOUT: 8

## Objective
Create the about page explaining the project at `src/pages/about.astro`.

## Context
Educational page explaining data sources, methodology, and how to use the site.

## Deliverables
Create `/Users/dennyleonardo/Downloads/beef-cuts/src/pages/about.astro`:

```astro
---
import Layout from '../layouts/Layout.astro';
import { allCuts } from '../data/cuts';
import { primalCuts } from '../data/primalCuts';

const stats = {
  totalCuts: allCuts.length,
  primals: primalCuts.length,
  tokusenCuts: allCuts.filter(c => c.isTokusenAvailable).length,
  wagyuCuts: allCuts.filter(c => c.isWagyuRecommended).length,
  languages: 6,
};
---

<Layout title="About" description="Learn about the Beef Cuts Index, our data sources, and methodology.">
  <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Header -->
    <header class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">About Beef Cuts Index</h1>
      <p class="text-xl text-gray-600">
        A comprehensive educational resource for understanding beef cuts from around the world.
      </p>
    </header>

    <!-- Mission -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
      <div class="prose prose-lg text-gray-600">
        <p>
          The Beef Cuts Index was created to demystify the world of beef cuts. Whether you're
          a home cook looking for the perfect steak, a culinary professional seeking to expand
          your knowledge, or simply curious about the different names for cuts around the world,
          this resource is for you.
        </p>
        <p>
          We provide comprehensive information on each cut including tenderness, fat content,
          best cooking methods, and international names in multiple languages including Japanese
          (for yakiniku enthusiasts), French (classic butchery), Korean (Korean BBQ cuts),
          and regional variations between USA, UK, and Australia.
        </p>
      </div>
    </section>

    <!-- Statistics -->
    <section class="mb-12 bg-gray-50 rounded-xl p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">By The Numbers</h2>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
        <div>
          <div class="text-3xl font-bold text-red-600">{stats.totalCuts}</div>
          <div class="text-gray-600">Beef Cuts</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-red-600">{stats.primals}</div>
          <div class="text-gray-600">Primal Regions</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-red-600">{stats.languages}</div>
          <div class="text-gray-600">Languages</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-red-600">{stats.tokusenCuts}</div>
          <div class="text-gray-600">Tokusen Cuts</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-red-600">{stats.wagyuCuts}</div>
          <div class="text-gray-600">Wagyu Cuts</div>
        </div>
      </div>
    </section>

    <!-- Data Sources -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Data Sources & Methodology</h2>
      <div class="prose prose-lg text-gray-600">
        <p>Our cut data is compiled from multiple authoritative sources:</p>
        <ul>
          <li><strong>USDA & NAMP</strong> - North American Meat Processors Association standards</li>
          <li><strong>Industry Standards</strong> - Professional butcher guides and meat science resources</li>
          <li><strong>International Sources</strong> - Japanese, French, Korean, UK, and Australian meat industry references</li>
          <li><strong>Tokusen Wagyu</strong> - Product information from Tokusen's Australian Wagyu line</li>
        </ul>
        <p>
          Attributes like toughness, fat content, and pricing are approximations based on typical
          characteristics and market data. Actual values may vary based on grade, aging, and source.
        </p>
      </div>
    </section>

    <!-- How to Use -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">How to Use This Site</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h3 class="font-semibold text-gray-900 mb-2">🗺️ Interactive Diagram</h3>
          <p class="text-gray-600">
            Click on any region of the cow diagram on the home page to explore cuts from that primal.
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h3 class="font-semibold text-gray-900 mb-2">🔍 Search & Filter</h3>
          <p class="text-gray-600">
            Use the search bar to find cuts by name in any language. Filter by attributes like tenderness or cooking method.
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h3 class="font-semibold text-gray-900 mb-2">⚖️ Compare Tool</h3>
          <p class="text-gray-600">
            Select up to 3 cuts to compare side-by-side and find the perfect option for your needs.
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h3 class="font-semibold text-gray-900 mb-2">🌍 International Names</h3>
          <p class="text-gray-600">
            Each cut page shows synonyms in 6 languages - perfect for ordering at specialty butchers or restaurants.
          </p>
        </div>
      </div>
    </section>

    <!-- Glossary -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Glossary</h2>
      <div class="space-y-4">
        <div class="border-b border-gray-200 pb-4">
          <h3 class="font-semibold text-gray-900">Primal Cut</h3>
          <p class="text-gray-600">The 8 major sections a beef carcass is divided into during initial butchering.</p>
        </div>
        <div class="border-b border-gray-200 pb-4">
          <h3 class="font-semibold text-gray-900">Subprimal</h3>
          <p class="text-gray-600">Smaller sections within a primal, like the Short Loin or Tenderloin from the Loin primal.</p>
        </div>
        <div class="border-b border-gray-200 pb-4">
          <h3 class="font-semibold text-gray-900">Marbling (BMS)</h3>
          <p class="text-gray-600">Intramuscular fat that appears as white flecks. Measured on the Beef Marbling Standard (BMS) scale of 1-12.</p>
        </div>
        <div class="border-b border-gray-200 pb-4">
          <h3 class="font-semibold text-gray-900">Tokusen</h3>
          <p class="text-gray-600">A premium Wagyu brand offering Australian Wagyu beef, known for consistent quality and marbling.</p>
        </div>
        <div class="border-b border-gray-200 pb-4">
          <h3 class="font-semibold text-gray-900">IMPS/NAMP</h3>
          <p class="text-gray-600">Institutional Meat Purchase Specifications / North American Meat Processors codes for standardized cut identification.</p>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="bg-gray-900 text-white rounded-xl p-8 text-center">
      <h2 class="text-2xl font-bold mb-4">Questions or Feedback?</h2>
      <p class="text-gray-300 mb-6">
        This is an educational project. If you notice any errors or have suggestions
        for improvements, we'd love to hear from you.
      </p>
      <a
        href="mailto:hello@example.com"
        class="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
      >
        Get in Touch
      </a>
    </section>
  </article>
</Layout>
```

## Success Criteria
- [ ] Mission/purpose section
- [ ] Statistics display
- [ ] Data sources documented
- [ ] How-to-use guide
- [ ] Glossary of terms
