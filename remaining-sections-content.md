# IMG Pro Manual - Section 3: Backtest Settings

## Overview
Backtest Settings control how the indicator behaves during historical testing and replay.

## Main Settings

### Enable Backtest Mode
**Function:** Toggles backtest-specific features on/off
- When enabled, indicator shows historical signals
- Alerts are generated for past data
- Position sizing calculations based on historical prices

### Historical Alert Generation
**Options:**
- **ALL Historical Alerts:** Generate alerts for every setup in history
- **Valid Signals Only:** Only alert on confirmed setups
- **Disable All Alerts:** Silent mode for visual backtesting

### Backtest Start Date
- Configure the date range for historical testing
- Format: YYYY-MM-DD
- Useful for testing specific market conditions

### Display Historical Levels
**Toggle Options:**
- Show all POIs from selected timeframe
- Show only active POIs
- Hide invalidated levels

## Notes
- Backtest mode may slow down chart loading on lower timeframes
- Use "Valid Signals Only" to reduce alert spam during backtesting
- Historical data quality depends on TradingView's data feed

---

# IMG Pro Manual - Section 4: HTF Points of Interest (POIs)

## Overview
Higher Timeframe Points of Interest are key levels where the indicator identifies potential trading opportunities.

## POI Types

### 1. Range Extremes
**Description:** High and low points of the current HTF market structure
- **Range High:** The highest point in current bullish structure
- **Range Low:** The lowest point in current bearish structure
- **Usage:** Primary support/resistance levels for entries

### 2. Order Blocks (OBs)
**Description:** Last opposing candle before a strong move
- **Bullish OB:** Last down candle before bullish move
- **Bearish OB:** Last up candle before bearish move
- **Filtering:** Can filter by size, recency, or confluence

**Configuration Parameters:**
- Minimum OB size (pips/points)
- Maximum age (number of candles)
- Show only unmitigated OBs
- Mitigation threshold (% of OB touched)

### 3. Breakers
**Description:** Failed Order Blocks that flip polarity
- **Formation:** OB that gets breached becomes a Breaker
- **Polarity:** Bullish OB → Bearish Breaker (and vice versa)
- **Priority:** Often higher probability than regular OBs

**Settings:**
- Track breaker formation automatically
- Show breaker labels
- Breaker color coding

### 4. Fair Value Gaps (FVGs)
**Description:** Imbalances/inefficiencies in price action
- **Bullish FVG:** Gap down that gets filled from below
- **Bearish FVG:** Gap up that gets filled from above
- **3-Candle Formation:** Required for valid FVG

**Filtering Options:**
- Minimum FVG size
- FVG + OB confluence
- FVG + Breaker confluence
- Auto-invalidate on full mitigation

### 5. Internal Liquidity
**Description:** Swing highs/lows within the current range
- **Buy-Side Liquidity:** Swing highs (stops above)
- **Sell-Side Liquidity:** Swing lows (stops below)
- **Sweeps:** When price takes liquidity then reverses

**Configuration:**
- Number of internal swings to track
- Minimum swing significance
- Show liquidity labels
- Highlight swept liquidity

## Display Settings

### POI Labels
- Show POI names on chart
- Customizable label text
- Label position (above/below/inside)

### POI Colors
- Order Blocks: Blue (bullish), Red (bearish)
- Breakers: Purple (bullish), Orange (bearish)
- FVGs: Cyan (bullish), Pink (bearish)
- Range: Green (high), Red (low)

### POI Extension
- Extend POI boxes to current candle
- Show historical POIs
- Auto-hide mitigated POIs

---

# IMG Pro Manual - Section 5: Trade Setups

## Overview
Trade setups are specific conditions that signal potential entry opportunities.

## Setup Types

### 1. HTF SFP + LTF MSB
**Description:** Higher Timeframe Swing Failure Pattern followed by Lower Timeframe Market Structure Break

**Conditions:**
1. HTF POI must be present (OB, Breaker, FVG, or Range Extreme)
2. Price creates SFP at HTF POI (false break/wick rejection)
3. Price breaks LTF structure in favor direction
4. Entry zone is established within the POI

**Example:**
- HTF Bullish OB at 100
- Price wicks below 100 to 99.80 (SFP)
- Price breaks above LTF high creating MSB
- Entry zone: 100-100.20

### 2. LTF SFP + LTF MSB (OBs/Breakers/FVGs only)
**Description:** Lower Timeframe SFP at a specific POI type

**Conditions:**
1. Must be at OB, Breaker, or FVG (Range Extremes excluded)
2. LTF SFP at the POI level
3. LTF MSB in favor direction
4. Tighter risk parameters than HTF setups

**Priority Order:**
1. Breakers (highest)
2. OB + FVG confluence
3. Breakers + FVG confluence
4. Large OBs
5. Large FVGs

## Setup Parameters

### SFP Detection Sensitivity
- **Conservative:** Larger wicks required (>50% of POI)
- **Moderate:** Medium wicks (>25% of POI)
- **Aggressive:** Small wicks acceptable (>10% of POI)

### MSB Confirmation
- **Strict:** Wait for close beyond structure
- **Moderate:** Break high/low is enough
- **Aggressive:** Wick beyond structure

### Setup Invalidation
- Opposite structure break
- POI fully mitigated
- Time-based expiration
- Distance from POI exceeded

## Alert Settings

### Setup Formation Alerts
- Alert when conditions align
- Alert only on confirmed MSB
- Alert on entry zone touch

### Alert Filtering
- Minimum setup score
- Require multiple confluences
- Trading session filter
- Minimum risk-reward ratio

---

# IMG Pro Manual - Section 6: Trade Entries and Exits

## Overview
Automated calculation of optimal entry points, stop losses, and take profit targets.

## Entry Calculation

### Entry Methods

**1. Market Entry**
- Enter immediately at market price when setup confirms
- Fastest execution
- May result in worse fill due to slippage

**2. Limit Entry**
- Place limit order at optimal entry level within POI
- Better fills
- Risk of missing the move

**3. Scaled Entry**
- Multiple entries at different levels
- Average into position
- Reduces single-point risk

### Entry Zone Placement
- **Conservative:** Deep within POI (75%-100%)
- **Moderate:** Mid-POI (50%-75%)
- **Aggressive:** POI boundary (25%-50%)

## Stop Loss Placement

### SL Methods

**1. Beyond POI**
- Stop loss beyond opposite side of POI
- Standard approach
- Accounts for full POI invalidation

**2. Fixed Pips/Points**
- Set distance from entry (e.g., 20 pips)
- Consistent risk per trade
- May not account for volatility

**3. ATR-Based**
- Stop based on Average True Range
- Adapts to market volatility
- Multiplier: 1x, 1.5x, 2x ATR

**4. Structure-Based**
- Stop beyond nearest swing point
- Most logical placement
- Variable risk per trade

## Take Profit Targets

### TP Calculation Methods

**1. Risk-Reward Ratio**
- Multiple of risk distance (1:1, 1:2, 1:3, etc.)
- Simple and consistent
- Default: 1:2 ratio

**2. Fibonacci Levels**
- Target key Fib extensions
- Common: 1.272, 1.618, 2.618
- Based on structure leg

**3. Opposite Range Target**
- Target opposite side of HTF range
- Maximum potential per setup
- May take longer to hit

**4. Partial Profit Zones**
- TP1: 1:1 (close 50%)
- TP2: 1:2 (close 30%)
- TP3: 1:3+ (close remaining 20%)
- Risk-free stop after TP1

## Position Sizing

### Account-Based Sizing
- Input total account balance
- Set risk percentage per trade (default: 1-2%)
- Automatic position size calculation
- Units = (Account × Risk%) / (Entry - Stop) 

### Fixed Lot Sizing
- Manual position size
- Same size every trade
- Ignores account percentage

### Kelly Criterion (Advanced)
- Optimal sizing based on win rate and avg R:R
- Requires historical data
- Can be aggressive

## Exit Alerts

### Take Profit Alerts
- Alert when price hits TP1, TP2, TP3
- Visual + audio notification
- Auto-close option (not executed by indicator)

### Stop Loss Alerts
- Alert when stop is hit
- Includes trade summary
- Shows P/L for the trade

### Trailing Stop Options
- Move stop to break-even after TP1
- Trail stop by ATR
- Trail stop by structure

---

# IMG Pro Manual - Section 7: Unentered Trade Invalidations

## Overview
Conditions that invalidate a potential setup before entry is taken.

## Invalidation Triggers

### 1. Structure Break Against Setup
**Condition:** Market structure breaks in the opposite direction before entry
- Bullish setup: LTF creates lower low
- Bearish setup: LTF creates higher high
- **Action:** Cancel entry, wait for new setup

### 2. POI Full Mitigation
**Condition:** Entire POI has been touched/consumed
- Price moves through 100% of POI
- No untouched zone remaining
- **Action:** Setup invalidated

### 3. Time-Based Expiration
**Condition:** Too much time passes without entry
- Default: X candles after setup (configurable)
- Stale setups less reliable
- **Action:** Auto-invalidate after expiration

### 4. Distance From POI
**Condition:** Price moves too far from POI before entry triggers
- Exceeded risk threshold
- Entry would violate risk management
- **Action:** Skip trade

### 5. Opposite Setup Formation
**Condition:** Conflicting setup appears at different POI
- Bearish setup while bullish setup pending
- Creates uncertainty
- **Action:** Invalidate or reduce position size

## Invalidation Settings

### Auto-Cancel Pending Orders
- Automatically remove limit orders on invalidation
- Prevent accidental fills
- Manual override option

### Invalidation Alerts
- Alert when setup invalidates
- Show reason for invalidation
- Helps track missed opportunities

### Invalidation Logging
- Track all invalidated setups
- Review patterns
- Improve strategy understanding

## Partial Invalidations

### Reduced Confidence Scenarios
- Partial POI mitigation (>50% but <100%)
- Extended time since setup (beyond ideal but not expired)
- Market condition changes

**Options:**
1. Skip trade entirely
2. Reduce position size by 50%
3. Require additional confirmation

---

# IMG Pro Manual - Section 8: Risk Management

## Overview
Built-in risk management tools to protect capital and optimize position sizing.

## Account Settings

### Account Balance Input
- Enter total trading capital
- Updates automatically with trades (manual tracking)
- Used for percentage-based risk

### Currency Settings
- Account currency
- Pip value calculation
- Cross-pair adjustments

## Risk Per Trade

### Percentage-Based Risk
**Default:** 1-2% per trade
- Conservative: 0.5-1%
- Moderate: 1-2%
- Aggressive: 2-5%
- **Never exceed 5% per trade**

### Fixed Dollar Risk
- Risk same dollar amount per trade
- Example: $100 per trade regardless of account size
- Simpler but less adaptive

## Position Size Calculation

### Automatic Calculation
Formula: `Position Size = (Account Balance × Risk%) / Stop Loss Distance`

**Example:**
- Account: $10,000
- Risk: 2% ($200)
- Entry: 1.2000
- Stop: 1.1950 (50 pips)
- Position Size = $200 / $50 = 4 mini lots

### Maximum Position Limits
- Max position size per trade
- Max total exposure (all open trades)
- Prevents over-leveraging

## Risk-Reward Requirements

### Minimum R:R Filter
- Don't take trades below minimum R:R
- Default: 1:1.5 or 1:2
- Ensures positive expectancy

### Dynamic R:R Adjustment
- Better setups = higher targets
- Breaker setups: minimum 1:3
- Regular OB setups: minimum 1:2

## Correlation Management

### Same-Direction Setups
- Multiple correlated pairs moving together
- Reduce position size if taking multiple
- Total risk shouldn't exceed single trade limit

### Opposite-Direction Hedge
- Conflicting signals on related pairs
- May indicate consolidation
- Skip or reduce both positions

## Drawdown Protection

### Maximum Drawdown Limit
- Stop trading after X% account drawdown
- Default: 10-15%
- Forces break and strategy review

### Recovery Mode
- Reduce risk after drawdown
- Example: After 10% DD, risk only 0.5% per trade
- Gradual return to normal when profitable

## Trade Logging

### Performance Tracking
- Win rate tracking
- Average R:R achieved
- Best/worst trades
- Helps refine strategy

---

# IMG Pro Manual - Section 9: Trading Sessions

## Overview
Filter trades based on time of day and trading sessions.

## Session Types

### 1. London Session
- **Time:** 08:00 - 16:00 GMT
- **Characteristics:** High volatility, strong trends
- **Best for:** Breakout trades, GBP pairs
- **Toggle:** Enable/Disable London session trades

### 2. New York Session
- **Time:** 13:00 - 21:00 GMT  
- **Characteristics:** Overlap with London (high volume), USD strength
- **Best for:** USD pairs, reversals
- **Toggle:** Enable/Disable New York session trades

### 3. Asian Session
- **Time:** 00:00 - 08:00 GMT
- **Characteristics:** Lower volatility, range-bound
- **Best for:** Range trades, JPY pairs
- **Toggle:** Enable/Disable Asian session trades

### 4. London-NY Overlap
- **Time:** 13:00 - 16:00 GMT
- **Characteristics:** Highest volume, best liquidity
- **Best for:** All setup types
- **Toggle:** Only trade during overlap

## Session Settings

### Custom Time Windows
- Define your own active hours
- Account for personal timezone
- Multiple windows per day

### Session-Based Parameters
- Different risk per session
- Different R:R targets per session
- Session-specific POI filters

## Timezone Configuration

### Automatic vs Manual
- Auto-detect based on chart timezone
- Manual GMT offset entry
- Daylight Saving Time adjustment

### Display Options
- Show session boxes on chart
- Color-coded session backgrounds
- Session labels

## Weekend/Holiday Filters

### Weekend Disable
- Auto-disable during Saturday/Sunday
- Prevent signals during low liquidity

### Holiday Calendar
- List major holidays to avoid
- Fed announcements
- NFP and high-impact news

---

# IMG Pro Manual - Section 10: Market vs Limit Order Conditions

## Overview
Automatic determination of whether to use market or limit orders based on setup conditions.

## Order Type Selection

### Market Order Conditions
Execute immediately at current price when:
1. **Strong momentum setup** - Quick MSB with large candle
2. **Breakout scenario** - Price is rapidly moving away from POI
3. **High-priority setup** - Breaker or multiple confluence
4. **Thin liquidity** - Better to ensure fill than chase price
5. **User preference override** - Always use market orders setting

**Advantages:**
- Guaranteed execution
- Don't miss strong moves
- Simpler management

**Disadvantages:**
- Potential slippage
- Worse average entry
- Higher spread costs

### Limit Order Conditions
Place limit order when:
1. **Price near POI edge** - Expecting pullback into POI
2. **Weak momentum** - Slow structure break
3. **Standard OB/FVG setup** - Time for better fill
4. **Good liquidity** - Likely to get filled at desired price
5. **User preference** - Always use limits setting

**Advantages:**
- Better entry price
- Defined risk upfront
- Lower spread cost

**Disadvantages:**
- May not fill (miss trade)
- Requires monitoring
- Complexity in management

## Limit Order Placement

### Entry Level Calculation
- **Aggressive:** At POI boundary (25% into POI)
- **Moderate:** Mid-POI (50% into POI)  
- **Conservative:** Deep in POI (75% into POI)

### Limit Order Duration
- **GTC (Good Till Cancelled):** Stays until filled or invalidated
- **Day Order:** Expires end of session
- **Time-Limited:** Expires after X candles

### Multiple Limit Orders
- Scale into position with multiple limits
- Example: 50% at boundary, 50% deeper
- Ensures some fill while optimizing average

## Hybrid Approach

### Partial Market + Limit
- 30-50% at market for quick entry
- Remaining 50-70% via limit for better average
- Balances execution certainty with price improvement

### Conditional Order Type
- If price pulls back X pips → Limit order
- If price continues >Y pips → Market order
- Adaptive based on price action

## Configuration Settings

### Default Order Type
- Set global preference
- Market vs Limit default
- Can override per setup

### Slippage Tolerance
- Maximum acceptable slippage for market orders
- If exceeded, convert to limit
- Prevents bad fills

### Limit Order Expiration
- Auto-cancel limits after X minutes
- Prevents stale orders
- Re-evaluate setup

---

# IMG Pro Manual - Section 11: TradingView Alerts, Labels & Study Errors

## Overview
Setup instructions for TradingView alerts and troubleshooting common issues.

## Creating Alerts

### Alert Setup (Step-by-Step)

**Step 1: Open Alert Dialog**
- Click "Alert" button (clock icon) on toolbar
- Or right-click chart → "Add Alert"
- Shortcut: Alt + A

**Step 2: Configure Condition**
- **Condition:** Select "IMG Pro"
- **Alert Trigger:** Choose specific alert type:
  - All Alerts (Setups, TPs, SLs, Invalidations)
  - Valid Signals Only
  - Specific alert types

**Step 3: Set Options**
- **Trigger:** Once Per Bar Close (recommended)
- **Expiration:** Open-ended or specific date
- **Alert Actions:** 
  - Popup notification
  - Play sound
  - Send email
  - Webhook URL (for automation)

**Step 4: Name & Save**
- Give descriptive name (e.g., "EURUSD H1 - IMG Setups")
- Click "Create"

### Alert Message Customization

**Default Message Format:**
```
{{ticker}} - {{interval}}
Setup Type: {{setup_type}}
Direction: {{direction}}
Entry: {{entry_price}}
Stop: {{stop_price}}
Target: {{tp_price}}
Risk:Reward = {{rr_ratio}}
```

**Custom Variables Available:**
- `{{ticker}}` - Symbol name
- `{{interval}}` - Timeframe
- `{{time}}` - Alert timestamp
- `{{close}}` - Current close price
- `{{volume}}` - Current volume

### Webhook Integration

**For Automated Trading:**
- URL: Your trading bot endpoint
- JSON Message format
- Include authentication token
- Test with small position first

**Example Webhook:**
```json
{
  "symbol": "{{ticker}}",
  "action": "buy",
  "entry": "{{entry_price}}",
  "stop": "{{stop_price}}",
  "target": "{{tp_price}}"
}
```

## Indicator Labels

### On-Chart Labels

**Setup Labels:**
- "🔵 LONG" - Bullish setup formation
- "🔴 SHORT" - Bearish setup formation
- "✅ TP1", "✅ TP2" - Target hits
- "❌ SL" - Stop loss hit
- "⚠️ INV" - Setup invalidated

**Label Settings:**
- Show/hide labels
- Label size (small/normal/large)
- Label position offset
- Custom label text

### Table Display

**Stats Table:**
- Win rate
- Average R:R
- Open positions
- Today's P/L

**Toggle Options:**
- Show/hide table
- Table position (top-left/right, bottom-left/right)
- Table size

## Common Study Errors

### Error: "Too Many Indicators"

**Cause:** TradingView free/pro plans have limits (3-5 indicators)

**Solution:**
1. Remove unused indicators
2. Combine indicators if possible
3. Upgrade TradingView plan
4. Use indicator on fewer charts

### Error: "Script Complexity Exceeded"

**Cause:** Indicator calculation too intensive for timeframe/symbol

**Solution:**
1. Increase chart timeframe (M5→M15, H1→H4)
2. Reduce lookback period in settings
3. Disable some POI types
4. Hide historical levels

### Error: "Study References Too Many Candles"

**Cause:** Historical calculation requires more data than available

**Solution:**
1. Reload chart data (right-click → "Reload")
2. Reduce historical lookback setting
3. Switch to different data feed
4. Contact TradingView support for data issues

### Error: "Alert Limit Reached"

**Cause:** Free plan = 1 alert, Pro = 10, Pro+ = 30, Premium = 400

**Solution:**
1. Delete old/inactive alerts
2. Consolidate alerts (use "All Alerts" instead of multiple specific)
3. Upgrade TradingView plan
4. Rotate alerts for active pairs only

### Labels Not Showing

**Troubleshooting:**
1. Check "Show Labels" toggle in indicator settings
2. Zoom out (labels may be off-screen)
3. Reload indicator (remove + re-add)
4. Clear browser cache
5. Try incognito mode to rule out extension conflicts

### Alerts Not Triggering

**Troubleshooting:**
1. Verify alert is active (click Alert list, check green icon)
2. Check "Trigger" setting - should be "Once Per Bar Close"
3. Ensure indicator is showing signals on chart
4. Check TradingView notifications settings
5. Verify email/webhook URL is correct

## Performance Optimization

### Reduce Calculation Load
- Increase chart timeframe
- Limit POI history (last 100 candles vs 500)
- Disable unused features
- Hide historical structures

### Multiple Chart Setup
- Use indicator on 1-2 key timeframes only
- Clone settings via Templates
- Save layouts for quick switching

## Best Practices

### Alert Management
- Use descriptive names with pair + timeframe
- Group alerts by strategy
- Regularly review and clean up old alerts
- Test new alerts with small sizes first

### Chart Organization
- One indicator instance per chart
- Don't duplicate on same chart
- Use layouts to save configurations
- Export/import settings for backup

---

**End of Manual Content**
