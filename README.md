# IMG Pro Manual - Local Website

A modern, responsive local website containing the complete IMG Pro indicator manual extracted from Craft.me.

## Project Structure

```
imgpro-manual-site/
├── index.html          # Main HTML file with all content
├── styles.css          # Custom CSS with modern, minimalist design
├── images/             # All extracted images
│   └── getting-started-01.png
└── README.md           # This file
```

## Features

### Design
- **Modern & Clean**: Minimalist design with white background, blue accents (#2563eb), and clean whitespace
- **Responsive**: Fully responsive using Bootstrap 5 grid system, works on mobile, tablet, and desktop
- **Smooth Animations**: Subtle hover effects, transitions, and scroll animations
- **Typography**: Inter font family from Google Fonts for clean, professional look

### Navigation
- **Sticky Navbar**: Always visible navigation with smooth scroll to sections
- **11 Main Sections**: Links to all major content areas (excluding VWAP)
- **Hero Section**: Eye-catching gradient header with call-to-action

### Content Organization
- **Bootstrap Accordions**: Expandable/collapsible content sections for better navigation
- **Structured Cards**: Each major section in a clean card with shadow and hover effects
- **Tables**: For parameter comparisons and examples
- **Alert Boxes**: Highlighted tips, warnings, and important notes

## Content Status

### ✅ Completed Sections (Fully Extracted)

1. **Getting Started**
   - Introduction to IMG Pro
   - Core functions and operations
   - Goal statement
   - YouTube tutorial reference

2. **Basic Settings**
   - HTF Structure
   - Creating Custom Timeframes in TradingView
   - HTF Break Type (MSB vs MSS)
   - Hide Historical
   - Display 50% Range Line
   - Equal Highs/Lows as Pivots
   - Chart TF and Alerts

### ⏳ Pending Sections (Placeholders Added)

The following sections have placeholder cards added to the website but require manual completion due to browser automation quota limitations:

3. Backtest Settings
4. Higher Timeframe (HTF) Points of Interest (POIs)
5. Trade Setups
6. Trade Entries and Exits
7. Unentered Trade Invalidations
8. Risk Management
9. Trading Sessions
10. Market Vs Limit Order Conditions
11. TradingView Alerts, Indicator Labels and Study Errors

## How to View

### Local Viewing
Simply open `index.html` in any modern web browser:
```bash
open index.html
```

Or double-click the `index.html` file in Finder.

### Recommended Browsers
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with modern features (gradients, flexbox, animations)
- **Bootstrap 5.3.2**: Responsive grid, navbar, accordions, cards
- **Google Fonts**: Inter font family
- **JavaScript**: Bootstrap's built-in JS for interactive components

## Design Philosophy

The website follows these design principles:

1. **Minimalism**: Clean, uncluttered interface focusing on content
2. **Consistency**: Uniform spacing, colors, and typography throughout
3. **Accessibility**: Semantic HTML, proper contrast ratios, keyboard navigation
4. **Performance**: Lightweight CSS, optimized images, CDN-hosted libraries
5. **Responsiveness**: Mobile-first approach with breakpoints at 768px and 991px

## Color Palette

```css
Primary Blue:    #2563eb
Primary Dark:    #1e40af
Primary Light:   #60a5fa
Text Dark:       #1f2937
Text Muted:      #6b7280
Background:      #f9fafb
White:           #ffffff
```

## Next Steps for Completion

To complete the manual extraction:

1. **Manual Extraction**: Visit each pending section on the Craft.me page and manually extract:
   - All headings and subheadings
   - All text content, paragraphs, and lists
   - All parameters with descriptions
   - Tips, notes, and examples
   - Screenshot and download all images

2. **Update Content**: Replace placeholder alerts in `index.html` with actual content following the same structure as completed sections

3. **Add Images**: Download images for each section and save to `images/` folder with descriptive names like `section-name-##.png`

4. **Test Thoroughly**: Verify all accordions expand/collapse correctly, all links work, and responsive design functions properly

## Extraction Strategy Used

For completed sections, the following aggressive extraction strategy was employed:

- Clicked each menu item in the left sidebar
- Scrolled to bottom 5 times with 3-second pauses to trigger lazy loading
- Expanded all cards/accordions (nested up to 5 levels deep)
- Scrolled inside each expanded area 3 times with 2-second pauses
- Captured all text, parameters, lists, and image URLs

## Credits

- **Source**: [IMG Pro Manual on Craft.me](https://imgpro.craft.me/eHtQrA8il5jQnX/b/2063CB73-9B07-4401-A7F2-1B8F1E190A25/Price-Action-IMG-Pro)
- **Extraction Date**: February 3, 2026
- **Framework**: Bootstrap 5.3.2
- **Fonts**: Inter (Google Fonts)

---

**Note**: This is a local, offline version of the IMG Pro Manual for convenient reference. All content belongs to the original authors.
