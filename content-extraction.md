# IMG Pro Manual - Extracted Content

## Section 1: Getting Started

### Introduction to IMG Pro

The primary function of this indicator is to serve as a **time-saving tool** for those who follow Trader Mayne and TraderZS1's ICT-based price action trading system.

**Core Functions:**
- Identify Higher Timeframe Points of Interest (POIs)
- Look for potential Trade Setups at HTF POIs
- Identify Targets
- Calculate Position Size / Manage Risk

**At its core, the Indicator operates in a structured manner to:**

1. **Identify HTF POIs:**
   - Range Extremes
   - Order Blocks (OBs)
   - Breakers
   - Fair Value Gaps (FVGs) / OBs+FVGs / Breakers+FVGs
   - Internal Liquidity Levels

2. **Provide Potential Trade Setup Alerts:**
   - HTF SFP followed by a LTF MSB
   - LTF SFP followed by a LTF MSB (OBs / Breakers / FVGs only)

3. **Automatically Calculate and Alert to:** Entries, Stops, Targets, and Position Sizes

4. **Issue Exit Alerts (TP / SL)**

**Goal Statement:**
The primary goal of this indicator is to reduce the time traders spend analyzing charts by providing alerts to potential setups in real-time, following the rules outlined above. Over and above this, additional features and options are available in the PRO tier. The system can be used with various timeframe combinations (Weekly-H12 / H12-H1 / H4-M15 / H1-M5, etc.), making it suitable for different trading styles like scalping, swing trading, or investing.

**Media:**
- YouTube Video: "How to use the IMG Indicator" by Trader Mayne
- Image: getting-started-01.png (YouTube thumbnail)

---

## Section 2: Basic Settings

### Overview
The Basic Settings section controls the fundamental behavior of the IMG Pro indicator, including timeframe selection, structure break logic, and visual clutter management.

### HTF Structure
**Description:** This dropdown allows users to select the **Market Structure (MS)** timeframe. The indicator will display the structure (Bullish/Bearish) as Green/Red.

**Timeframe Note:** Users should ensure the selected HTF is added as a "Favourite" in their TradingView timeframe bar for proper functionality.

**Custom Timeframes:** Users can create custom timeframes (e.g., 12 hours) if not available by default.

**Structure Limitations:**
- Maximum selectable timeframe in the dropdown is **One Week**
- To access higher ranges, use multiples of the Weekly timeframe:
  - **Monthly Range:** Select 4 Weeks
  - **Yearly Range:** Select 52 Weeks

**Example Image:** H12 Market Structure highs and lows displayed on a H1 chart for BTCUSDT.P Bybit

### Creating a Custom Timeframe in Tradingview
**Step 1:** Select the timeframe dropdown above the chart
**Step 2:** Scroll to the bottom of the list, enter the value (e.g., 12), select the unit (e.g., hours), and click **"Add"**
**Step 3:** Hover over the new timeframe and click the **Star** to add it to your favourites bar

### HTF Break Type

**Option 1: MSB (Market Structure Break) - Conservative**
- Calculates structure based on three-bar pivots
- **Bearish Structure:**
  - (a) Structure High: The three-bar pivot high that caused the previous structure break
  - (b) Structure Low: The first three-bar pivot low that forms after a structure break
- **Bullish Structure:**
  - (a) Structure High: The first three-bar pivot high that forms after a structure break
  - (b) Structure Low: The three-bar pivot low that caused the previous structure break
- Includes a detailed diagram showing pivot sequence 1 through 6 for MSB logic

**Option 2: First Opposite Pivot (MSS) - Aggressive**
- A more proactive approach to calculating structure breaks based on the immediate opposite pivot

### Hide Historical
**Function:** Toggling this ON will hide all past Market Structures and Points of Interest. Only the **current** HTF Market Structure and its associated information will be visible.

**Visuals:** Used to declutter the chart and focus only on the active trading range

### Display 50% Range Line
**Function:** Displays the mid-point of the HTF Structure as a horizontal dashed line

**Visuals:** Helps identify premium vs. discount zones within the current structure range

### Equal Highs / Lows as Pivots
**Function:** Allows the system to identify up to three sequential equal highs (or lows) as a single pivot point if they are preceded and superseded by lower highs (or higher lows)

**Case Examples (Price Points):**
- **Case 1 (Simple Pivot):** 104, 100, **103**, 100, 102 (Pivot is bar 3)
- **Case 2 (Eq Pivot Left):** 100, 103, **103**, 100, 101 (Pivot is bar 3)
- **Case 3 (Eq Pivot Right):** 100, 101, 103, **103**, 101 (Pivot is bar 4)
- **Case 4 (Eq Pivot Center):** 100, 103, 103, **103**, 100 (Pivot is bar 4)

### Chart TF and Alerts
**Hide Signals if Chart TF = HTF Structure TF:** 
- If the chart timeframe matches the selected HTF structure timeframe, the indicator will hide all trade setups, signals, and invalidations to clean up the view

**Alert Options:**
- **ALL:** Notifies on every alert event (Setups, Stop Losses, Take Profits, Invalidations)
- **Valid Signals Only:** Exclusively notifies when a legitimate trade setup is formed or a Take Profit level is reached

---

## Remaining Sections (To Be Extracted)

3. Backtest Settings
4. Higher Timeframe (HTF) Points of Interest (POIs)
5. Trade Setups
6. Trade Entries and Exits
7. Unentered Trade Invalidations
8. Risk Management
9. Trading Sessions
10. Market Vs Limit Order Conditions
11. Tradingview Alerts, Indicator Labels and Study Errors
