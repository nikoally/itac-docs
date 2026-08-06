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

- $\text{CF}_{\text{summer}}$ = summer coincidence factor (0.70)

- $\text{CF}_{\text{winter}}$ = winter coincidence factor (0.03 for space-conditioning chillers; 0.70 for chillers serving a year-round process load)

??? note "Determining the winter coincidence factor"
    Whether $\text{CF}_{\text{winter}}$ is 0.03 or 0.70 depends on the chiller's duty. A chiller serving space conditioning is largely idle outside the summer billing months, so its winter coincidence factor is 0.03. A chiller serving a year-round process load (e.g., cooling injection molds or process water) runs in winter too, so it carries the same 0.70 coincidence factor in both terms. Confirm the duty cycle with facility staff before assuming either value.

## Anticipated Costs

**Equipment:** Chiller costs scale with tonnage, compressor type (scroll, screw, or centrifugal), and refrigerant. Obtain quotes sized to match the existing unit's capacity unless a separate capacity study justifies resizing.

**Installation:** Budget for rigging and crane time to remove the old chiller and set the new one, refrigerant charge, piping and electrical reconnection, controls integration, and commissioning. Costs vary significantly with chiller location (rooftop vs. mechanical room) and accessibility.

Many utilities offer prescriptive or custom rebates for high-efficiency chiller replacements. Check with the local utility for current offerings, required IPLV thresholds before finalizing cost estimates.