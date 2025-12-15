# TASK: Create Interactive Cow SVG Diagram
# TYPE: implement
# PRIORITY: high
# TIMEOUT: 15

## Objective
Create a professional SVG cow diagram with 8 clickable primal regions at `public/images/cow-diagram.svg`.

## Context
The SVG will be used as an interactive diagram on the homepage. Each primal region must be a distinct path element that can be targeted with CSS/JS for hover states and click events.

## Deliverables
Create `/Users/dennyleonardo/Downloads/beef-cuts/public/images/cow-diagram.svg`:

### Requirements
1. **Side profile view** of a beef cow (facing left)
2. **8 distinct primal regions** as separate path elements:
   - Chuck (front shoulder area)
   - Rib (upper back behind chuck)
   - Loin (middle-upper back)
   - Round (rear/hind leg area)
   - Flank (belly/abdomen area)
   - Plate (lower middle belly)
   - Brisket (lower chest)
   - Shank (front and rear legs lower portions)

3. **SVG attributes**:
   - viewBox for responsive scaling (e.g., "0 0 800 500")
   - Each primal region as `<path>` with `id` attribute matching primal name lowercase
   - `data-primal` attribute on each path with the primal name
   - Class attribute `primal-region` on each clickable path
   - Fill colors: Use distinct muted colors for each region
   - Stroke: #333 with stroke-width 2

4. **Labels**:
   - Text elements for each primal name positioned within/near the region
   - Font: sans-serif, size appropriate for the region

5. **Outline**:
   - Full cow outline path for visual reference
   - Light background fill for the entire cow shape

### Example Structure
```svg
<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
  <!-- Background cow outline -->
  <path id="cow-outline" d="..." fill="#f5f5f5" stroke="#333" stroke-width="2"/>

  <!-- Primal regions -->
  <path id="chuck" class="primal-region" data-primal="Chuck" d="..." fill="#e8b4b4"/>
  <path id="rib" class="primal-region" data-primal="Rib" d="..." fill="#f4d4a4"/>
  <path id="loin" class="primal-region" data-primal="Loin" d="..." fill="#c4e4c4"/>
  <path id="round" class="primal-region" data-primal="Round" d="..." fill="#a4c4e4"/>
  <path id="flank" class="primal-region" data-primal="Flank" d="..." fill="#d4a4d4"/>
  <path id="plate" class="primal-region" data-primal="Plate" d="..." fill="#f4e4a4"/>
  <path id="brisket" class="primal-region" data-primal="Brisket" d="..." fill="#e4c4a4"/>
  <path id="shank" class="primal-region" data-primal="Shank" d="..." fill="#c4c4c4"/>

  <!-- Labels -->
  <text x="150" y="200" class="primal-label">Chuck</text>
  <!-- ... more labels -->
</svg>
```

### Color Palette (muted, professional)
- Chuck: #e8b4b4 (dusty rose)
- Rib: #f4d4a4 (warm sand)
- Loin: #c4e4c4 (sage green)
- Round: #a4c4e4 (light blue)
- Flank: #d4a4d4 (lavender)
- Plate: #f4e4a4 (pale gold)
- Brisket: #e4c4a4 (tan)
- Shank: #c4c4c4 (light gray)

## Success Criteria
- [ ] All 8 primal regions as separate selectable paths
- [ ] Anatomically approximate positioning
- [ ] Clean, professional appearance
- [ ] Proper SVG structure for JavaScript targeting
- [ ] Responsive viewBox
