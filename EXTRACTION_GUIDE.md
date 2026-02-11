# IMG Pro Manual - Content Extraction Guide

This guide helps you complete the manual extraction for the remaining 9 sections.

## ✅ COMPLETED SECTIONS

### 1. Getting Started
- Full Introduction to IMG Pro
- YouTube video embedded (**updated!**)
- Core functions listed
- 4 indicator operations with accordions
- Goal statement

### 2. Basic Settings  
- HTF Structure settings
- Custom timeframe creation (3 steps)
- HTF Break Type (MSB vs MSS)
- Hide Historical toggle
- Display 50% Range Line
- Equal Highs/Lows as Pivots (with 4 case examples)
- Chart TF and Alerts options

## 🔄 UI IMPROVEMENTS COMPLETED

✅ **Left Sidebar Navigation** - Menu now on left side (280px wide)
✅ **YouTube Video Embed** - Responsive iframe player with 16:9 aspect ratio
✅ **Gradient Sidebar Header** - Purple to violet gradient
✅ **Hover Effects** - Smooth transitions on sidebar links
✅ **Responsive Design** - Mobile/tablet breakpoints added

---

## ⏳ SECTIONS REQUIRING EXTRACTION

### 3. Backtest Settings
**URL**: https://imgpro.craft.me/eHtQrA8il5jQnX/b/D842F8F3-5CCC-48A4-97E3-5D08F0AB3E80/Backtest-Settings

**What to Extract**:
- All backtest configuration parameters
- Alert settings for historical testing
- Any limitations or notes
- Screenshot images

### 4. Higher Timeframe (HTF) Points of Interest (POIs)
**URL**: https://imgpro.craft.me/eHtQrA8il5jQnX/b/8EB3E57B-4F45-402B-A59C-05D8C79E88BE/Higher-Timeframe-HTF-Points-of-Interest-POIs

**What to Extract**:
- Types of POIs (Range Extremes, Order Blocks, Breakers, FVGs)
- Configuration for each POI type
- Visual examples and screenshots
- Any special notes or tips

### 5. Trade Setups
**Main page URL**: https://imgpro.craft.me/eHtQrA8il5jQnX/b/2063CB73-9B07-4401-A7F2-1B8F1E190A25/Price-Action-IMG-Pro

**What to Extract**:
- Setup criteria and conditions
- HTF SFP + LTF MSB setups
- LTF SFP + LTF MSB setups
- Examples with charts
- All parameters and thresholds

### 6. Trade Entries and Exits
**What to Extract**:
- Entry calculation methods
- Stop loss placement rules
- Take profit targets
- Position sizing formulas
- Any automation settings

### 7. Unentered Trade Invalidations
**What to Extract**:
- Conditions that invalidate setups
- When NOT to enter trades
- Invalidation alerts
- Examples

### 8. Risk Management
**What to Extract**:
- Risk per trade settings
- Account balance inputs
- Position size calculations
- Risk-reward ratios
- Any safety features

### 9. Trading Sessions
**What to Extract**:
- Session time configurations
- Active trading hours
- Session-based filters
- Timezone settings

### 10. Market Vs Limit Order Conditions
**What to Extract**:
- Criteria for market orders
- Criteria for limit orders
- Configuration parameters
- Any automation logic

### 11. TradingView Alerts, Indicator Labels and Study Errors
**What to Extract**:
- Alert setup instructions
- Common error messages
- Troubleshooting steps
- Study limit considerations
- Label display settings

---

## 📋 MANUAL EXTRACTION STEPS

For each section above:

1. **Visit the Craft.me page**
   - Click the section in the left sidebar
   - Wait 3-5 seconds for full load

2. **Aggressive Scrolling**
   - Scroll to bottom of page
   - Repeat 5 times with 3-second pauses
   - This triggers lazy-loaded content

3. **Expand All Content**
   - Click every expandable card/accordion
   - After expanding, scroll down 3 more times
   - Check for nested cards and expand those too

4. **Capture Text**
   - Copy all headings (note the hierarchy: H1, H2, H3...)
   - Copy all body text and lists
   - Copy all parameter names and descriptions
   - Note any special formatting (bold, italic, code)

5. **Download Images**
   - Right-click → Save As
   - Name descriptively: `section-name-##.png`
   - Save to `/Users/arjunsingh/IMG User Manual /imgpro-manual-site/images/`

6. **Update HTML**
   - Open `index.html`
   - Find the section placeholder (e.g., `id="backtest-settings"`)
   - Replace the `<div class="alert alert-secondary">` with actual content
   - Follow the structure from completed sections (Getting Started / Basic Settings)

---

## 📝 HTML STRUCTURE TO FOLLOW

```html
<section id="section-name" class="content-section">
    <div class="section-header">
        <h2 class="section-title">Section Title</h2>
        <p class="section-subtitle">Brief description</p>
    </div>

    <!-- Sub-section Card -->
    <div class="card content-card">
        <div class="card-body">
            <h4 class="card-title">Sub-section Title</h4>
            <p>Description text...</p>
            
            <!-- For lists -->
            <ul class="feature-list">
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>

            <!-- For numbered steps -->
            <ol class="setup-steps">
                <li><strong>Step 1:</strong> Description</li>
                <li><strong>Step 2:</strong> Description</li>
            </ol>

            <!-- For expandable content -->
            <div class="accordion" id="uniqueAccordionId">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#uniqueId">
                            Accordion Title
                        </button>
                    </h2>
                    <div id="uniqueId" class="accordion-collapse collapse show">
                        <div class="accordion-body">
                            Content here...
                        </div>
                    </div>
                </div>
            </div>

            <!-- For parameters -->
            <div class="param-box">
                <h6 class="text-primary">Parameter Name</h6>
                <p class="mb-0">Parameter description</p>
            </div>

            <!-- For important notes -->
            <div class="alert alert-info" role="alert">
                <h6 class="alert-heading"><strong>Note</strong></h6>
                <p class="mb-0">Important information...</p>
            </div>

            <!-- For warnings -->
            <div class="alert alert-warning" role="alert">
                <strong>Warning:</strong> Critical information
            </div>

            <!-- For images -->
            <img src="images/section-name-01.png" alt="Description" 
                 class="img-fluid rounded shadow-sm">

            <!-- For tables -->
            <table class="table table-sm table-hover">
                <thead class="table-light">
                    <tr>
                        <th>Column 1</th>
                        <th>Column 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Value 1</td>
                        <td>Value 2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
```

---

## 🎨 AVAILABLE CSS CLASSES

### Text & Typography
- `.section-title` - Large section heading with underline
- `.section-subtitle` - Muted subtitle text
- `.card-title` - Card heading in primary color
- `.text-primary` - Primary blue color
- `.text-muted` - Gray muted text
- `.fw-bold` - Bold font weight

### Lists
- `.feature-list` - Checkmarks instead of bullets
- `.setup-steps` - Numbered circles with left border

### Containers
- `.content-card` - Card with shadow and hover effect
- `.param-box` - Parameter box with left border
- `.video-wrapper` - Responsive 16:9 iframe container

### Components
- `.accordion` - Bootstrap accordion
- `.alert.alert-info` - Blue info box
- `.alert.alert-warning` - Orange warning box
- `.alert.alert-secondary` - Gray note box
- `.table.table-hover` - Hoverable table

---

## ✨ TIPS FOR SUCCESS

1. **Preserve Structure**: Keep the same heading hierarchy as the original
2. **Use Accordions**: For nested content that can be expanded/collapsed
3. **Add Images**: Visual examples greatly improve understanding
4. **Consistent Naming**: Use descriptive, kebab-case IDs
5. **Test As You Go**: Open index.html in browser after each section
6. **Cross-Reference**: Look at Getting Started/Basic Settings for examples

---

## 🚀 NEXT STEPS

1. Start with **Backtest Settings** (likely smallest section)
2. Work through remaining sections in order
3. Test website after every 2-3 sections
4. Verify all accordions expand/collapse correctly
5. Check responsive design on mobile view

---

**Current Website Location**: `/Users/arjunsingh/IMG User Manual /imgpro-manual-site/index.html`

**Estimated Time**: ~3-4 hours for all 9 sections (depending on content volume)

Good luck with the extraction! The website framework is fully ready - you just need to add the content. 🎉
