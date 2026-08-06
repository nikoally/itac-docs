---
hide:
  - toc
---

# Replace Chiller with a More Efficient Unit

Chillers that are older or were not selected for part-load performance consume more electricity per ton of cooling than current high-efficiency models. Replacing an existing chiller with a unit rated for a lower Integrated Part-Load Value (IPLV) reduces electrical consumption across the range of loads the chiller actually sees in operation, rather than only at full load.

**ARC Code(s):**

- 2.7232 (Replace with Higher-Efficiency Unit)

---

## Savings Calculation

IPLV expresses chiller efficiency in kW/ton, weighted across the part-load points (100%, 75%, 50%, 25%) at which a chiller typically operates, making it a better basis for annual savings than a full-load efficiency rating. Because IPLV is already a per-ton rate, the annual consumption of a chiller at a given IPLV is the product of its rated capacity, that IPLV, its load factor, and its annual operating hours.

### Annual Energy Savings

$$
\Delta \text{kWh} = \text{CAP} \times (\text{IPLV}_{\text{baseline}} - \text{IPLV}_{\text{new}}) \times \text{LF} \times H
$$

where:

- $\Delta \text{kWh}$ = annual energy savings (kWh/yr)

- $\text{CAP}$ = rated chiller capacity (tons)

- $\text{IPLV}_{\text{baseline}}$ = existing chiller's Integrated Part-Load Value (kW/ton)

- $\text{IPLV}_{\text{new}}$ = replacement chiller's Integrated Part-Load Value (kW/ton)

- $\text{LF}$ = load factor (decimal); use 0.6 if facility-specific data is unavailable

- $H$ = annual operating hours (hrs/yr)

!!! note "Assumptions"

    - $\text{IPLV}_{\text{baseline}}$ and $\text{IPLV}_{\text{new}}$ should come from AHRI-certified performance data for the existing and proposed units; do not substitute a full-load kW/ton rating for IPLV.

    - The load factor represents the chiller's average loading relative to its rated capacity across the operating season, not its instantaneous peak loading. Obtain it from trend data (average tons served ÷ rated tons) where available.

    - Operating hours should reflect the actual months and hours per day the chiller runs, not calendar hours in the cooling season.

### Peak Demand Savings

$$
\Delta \text{kW} = \text{CAP} \times (\text{IPLV}_{\text{baseline}} - \text{IPLV}_{\text{new}}) \times \text{LF}
$$

where $\Delta \text{kW}$ is the instantaneous demand reduction (kW) at the assumed load factor.

$$
\Delta \text{kW-months} = \Delta \text{kW} \times (\text{CF}_{\text{summer}} \times 3 + \text{CF}_{\text{winter}} \times 9)
$$

where:

- $\text{CF}_{\text{summer}}$ = summer coincidence factor (1.0 for chillers serving comfort or process cooling that operate during summer billing months)

- $\text{CF}_{\text{winter}}$ = winter coincidence factor (0 for comfort-cooling-only chillers that are shut down in winter; 1.0 for process chillers that run year-round)

??? note "Determining the winter coincidence factor"
    Whether $\text{CF}_{\text{winter}}$ is 0 or 1.0 depends entirely on the chiller's duty. A chiller serving only comfort cooling is typically idle outside the summer billing months, so its winter demand savings are zero. A chiller serving a year-round process load (e.g., cooling injection molds or process water) runs in winter too, so the full instantaneous demand reduction should be carried into both terms. Confirm the duty cycle with facility staff before assuming either value.

## Anticipated Costs

**Equipment:** Chiller costs scale with tonnage, compressor type (scroll, screw, or centrifugal), and refrigerant. Obtain quotes sized to match the existing unit's capacity unless a separate capacity study justifies resizing.

**Installation:** Budget for rigging and crane time to remove the old chiller and set the new one, refrigerant charge, piping and electrical reconnection, controls integration, and commissioning. Costs vary significantly with chiller location (rooftop vs. mechanical room) and accessibility.

Many utilities offer prescriptive or custom rebates for high-efficiency chiller replacements. Check with the local utility for current offerings, required IPLV thresholds, and pre-approval requirements before finalizing cost estimates.

## Report Requirements

In addition to the [typical report requirements](../how-to.md) and the recommendation-specific savings and costs, the recommendation should include a table documenting the chiller(s) being replaced. The table should follow this structure:

- **Column 1:** Chiller ID or location description

- **Column 2:** Rated capacity (tons)

- **Column 3:** Baseline IPLV (kW/ton)

- **Column 4:** New IPLV (kW/ton)

- **Column 5:** Load factor (decimal)

- **Column 6:** Annual operating hours (hrs/yr)

- **Column 7:** Annual energy savings (kWh/yr)

- **Column 8:** Annual demand savings (kW-months)

If multiple chillers are being replaced, include a totals row at the bottom.

```latex
\begin{table}[H]
\centering
\caption{High Efficiency Chiller Replacement Summary}
\label{tab:high-eff-chillers}
\begin{tabular}{lcccccccc}
\toprule
Chiller Location & Capacity (tons) & Baseline IPLV & New IPLV & Load Factor & Operating Hours & Energy Savings & Demand Savings \\
 & & (kW/ton) & (kW/ton) & & (hrs/yr) & (kWh/yr) & (kW-months) \\
\midrule
Chiller 1 & & & & & & & \\
\midrule
\textbf{Total} & \textbf{} & \textbf{--} & \textbf{--} & \textbf{--} & \textbf{--} & \textbf{} & \textbf{} \\
\bottomrule
\end{tabular}
\end{table}
```
