# TASK: Create Base Layout Component
# TYPE: implement
# PRIORITY: high
# TIMEOUT: 10

## Objective
Create the base Astro layout with navigation and footer at `src/layouts/Layout.astro`.

## Context
This layout will be used by all pages. Includes responsive header with navigation and footer.

## Deliverables
Create `/Users/dennyleonardo/Downloads/beef-cuts/src/layouts/Layout.astro`:

```astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description = "Interactive guide to beef cuts with international synonyms, cooking methods, and detailed attributes." } = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>{title} | Beef Cuts Index</title>
  </head>
  <body class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <a href="/" class="flex items-center gap-2">
              <span class="text-2xl">🥩</span>
              <span class="font-bold text-xl text-gray-900">Beef Cuts Index</span>
            </a>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-6">
            <a href="/" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Home
            </a>
            <a href="/cuts" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              All Cuts
            </a>
            <a href="/compare" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Compare
            </a>
            <a href="/about" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              About
            </a>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button
              id="mobile-menu-button"
              class="text-gray-600 hover:text-gray-900 p-2"
              aria-label="Toggle menu"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="hidden md:hidden pb-4">
          <div class="flex flex-col gap-2">
            <a href="/" class="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors">
              Home
            </a>
            <a href="/cuts" class="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors">
              All Cuts
            </a>
            <a href="/compare" class="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors">
              Compare
            </a>
            <a href="/about" class="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors">
              About
            </a>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-400 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- About -->
          <div>
            <h3 class="text-white font-semibold mb-4">Beef Cuts Index</h3>
            <p class="text-sm">
              A comprehensive guide to beef cuts from around the world, including international names,
              cooking methods, and detailed attributes.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-white font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="/cuts" class="hover:text-white transition-colors">All Cuts</a></li>
              <li><a href="/primal/rib" class="hover:text-white transition-colors">Rib Cuts</a></li>
              <li><a href="/primal/loin" class="hover:text-white transition-colors">Loin Cuts</a></li>
              <li><a href="/compare" class="hover:text-white transition-colors">Compare Tool</a></li>
            </ul>
          </div>

          <!-- Primal Cuts -->
          <div>
            <h3 class="text-white font-semibold mb-4">Primal Cuts</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="/primal/chuck" class="hover:text-white transition-colors">Chuck</a></li>
              <li><a href="/primal/rib" class="hover:text-white transition-colors">Rib</a></li>
              <li><a href="/primal/loin" class="hover:text-white transition-colors">Loin</a></li>
              <li><a href="/primal/round" class="hover:text-white transition-colors">Round</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Beef Cuts Index. Educational resource.</p>
        </div>
      </div>
    </footer>

    <!-- Mobile menu script -->
    <script>
      const menuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');

      menuButton?.addEventListener('click', () => {
        mobileMenu?.classList.toggle('hidden');
      });
    </script>
  </body>
</html>
```

## Success Criteria
- [ ] Responsive header with navigation
- [ ] Mobile hamburger menu
- [ ] Footer with links
- [ ] Proper meta tags and SEO
- [ ] Slot for page content
