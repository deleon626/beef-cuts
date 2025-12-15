# TASK: Create CowDiagram React Component
# TYPE: implement
# PRIORITY: high
# TIMEOUT: 10

## Objective
Create an interactive React wrapper for the cow SVG diagram at `src/components/CowDiagram.tsx`.

## Context
This component wraps the SVG and adds interactivity: hover states, click handling, and visual feedback for selected primal regions.

## Deliverables
Create `/Users/dennyleonardo/Downloads/beef-cuts/src/components/CowDiagram.tsx`:

```tsx
import { useState, useEffect, useRef } from 'react';
import type { PrimalCut } from '../data/types';

interface CowDiagramProps {
  onPrimalSelect?: (primal: PrimalCut | null) => void;
  selectedPrimal?: PrimalCut | null;
  highlightedPrimals?: PrimalCut[];
  showLabels?: boolean;
  colorMode?: 'default' | 'tenderness' | 'price';
}

const PRIMAL_COLORS = {
  default: {
    Chuck: '#e8b4b4',
    Rib: '#f4d4a4',
    Loin: '#c4e4c4',
    Round: '#a4c4e4',
    Flank: '#d4a4d4',
    Plate: '#f4e4a4',
    Brisket: '#e4c4a4',
    Shank: '#c4c4c4',
  },
  tenderness: {
    Chuck: '#f87171', // tough - red
    Rib: '#4ade80',   // tender - green
    Loin: '#22c55e',  // very tender - bright green
    Round: '#fbbf24', // moderate - yellow
    Flank: '#f97316', // tough - orange
    Plate: '#ef4444', // tough - red
    Brisket: '#dc2626', // very tough - dark red
    Shank: '#b91c1c', // very tough - dark red
  },
  price: {
    Chuck: '#22c55e', // budget - green
    Rib: '#ef4444',   // expensive - red
    Loin: '#dc2626',  // very expensive - dark red
    Round: '#4ade80', // budget - light green
    Flank: '#fbbf24', // moderate - yellow
    Plate: '#22c55e', // budget - green
    Brisket: '#fbbf24', // moderate - yellow
    Shank: '#22c55e', // budget - green
  },
};

export const CowDiagram: React.FC<CowDiagramProps> = ({
  onPrimalSelect,
  selectedPrimal = null,
  highlightedPrimals = [],
  showLabels = true,
  colorMode = 'default',
}) => {
  const [hoveredPrimal, setHoveredPrimal] = useState<PrimalCut | null>(null);
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = svgRef.current;
    if (!container) return;

    // Load and inject SVG
    fetch('/images/cow-diagram.svg')
      .then(res => res.text())
      .then(svgContent => {
        container.innerHTML = svgContent;

        // Add event listeners to primal regions
        const regions = container.querySelectorAll('.primal-region');
        regions.forEach((region) => {
          const primalName = region.getAttribute('data-primal') as PrimalCut;

          // Set initial colors based on color mode
          const colors = PRIMAL_COLORS[colorMode];
          (region as SVGPathElement).style.fill = colors[primalName];
          (region as SVGPathElement).style.cursor = 'pointer';
          (region as SVGPathElement).style.transition = 'all 0.2s ease';

          region.addEventListener('mouseenter', () => {
            setHoveredPrimal(primalName);
            (region as SVGPathElement).style.filter = 'brightness(1.1)';
            (region as SVGPathElement).style.transform = 'scale(1.02)';
            (region as SVGPathElement).style.transformOrigin = 'center';
          });

          region.addEventListener('mouseleave', () => {
            setHoveredPrimal(null);
            (region as SVGPathElement).style.filter = 'none';
            (region as SVGPathElement).style.transform = 'scale(1)';
          });

          region.addEventListener('click', () => {
            if (onPrimalSelect) {
              onPrimalSelect(selectedPrimal === primalName ? null : primalName);
            }
          });
        });

        // Toggle labels visibility
        const labels = container.querySelectorAll('.primal-label');
        labels.forEach((label) => {
          (label as SVGTextElement).style.display = showLabels ? 'block' : 'none';
        });
      });
  }, [colorMode, showLabels]);

  // Update selected state styling
  useEffect(() => {
    const container = svgRef.current;
    if (!container) return;

    const regions = container.querySelectorAll('.primal-region');
    regions.forEach((region) => {
      const primalName = region.getAttribute('data-primal') as PrimalCut;
      const isSelected = selectedPrimal === primalName;
      const isHighlighted = highlightedPrimals.includes(primalName);

      if (isSelected) {
        (region as SVGPathElement).style.strokeWidth = '4';
        (region as SVGPathElement).style.stroke = '#1f2937';
      } else if (isHighlighted) {
        (region as SVGPathElement).style.strokeWidth = '3';
        (region as SVGPathElement).style.stroke = '#ef4444';
      } else {
        (region as SVGPathElement).style.strokeWidth = '2';
        (region as SVGPathElement).style.stroke = '#333';
      }
    });
  }, [selectedPrimal, highlightedPrimals]);

  return (
    <div className="relative">
      {/* SVG Container */}
      <div
        ref={svgRef}
        className="w-full max-w-3xl mx-auto"
        aria-label="Interactive beef cow diagram showing primal cuts"
      />

      {/* Hover tooltip */}
      {hoveredPrimal && (
        <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900">{hoveredPrimal}</p>
          <p className="text-sm text-gray-500">Click to explore cuts</p>
        </div>
      )}

      {/* Color mode legend */}
      {colorMode !== 'default' && (
        <div className="mt-4 flex justify-center gap-4 text-sm">
          {colorMode === 'tenderness' && (
            <>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded bg-green-500"></span> Tender
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded bg-yellow-500"></span> Moderate
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded bg-red-500"></span> Tough
              </span>
            </>
          )}
          {colorMode === 'price' && (
            <>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded bg-green-500"></span> Budget
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded bg-yellow-500"></span> Moderate
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded bg-red-500"></span> Premium
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CowDiagram;
```

## Success Criteria
- [ ] SVG loaded dynamically and interactive
- [ ] Hover states with visual feedback
- [ ] Click to select/deselect primal
- [ ] Multiple color modes (default, tenderness, price)
- [ ] Tooltip showing hovered primal
- [ ] Highlighted primals for filter feedback
