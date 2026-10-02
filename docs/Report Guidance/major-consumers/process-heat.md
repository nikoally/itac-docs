---
hide:
  - toc
---

# Process Heat

For our purposes, process heat means ovens and furnaces: equipment that applies heat directly to the product rather than producing steam or conditioning space. Many are fuel-fired, and where they are they share the same combustion-analysis outputs as [boilers](boilers-and-steam.md). Others are electric — resistance ovens, induction or arc furnaces — and these have no flue gas, so they are characterized through their electrical load instead. This page follows the [universal spine](index.md#the-universal-spine).

## Characterization

Describe the process-heat equipment and what it does to the product:

- Type and count of ovens or furnaces.

- What they process, and at what stage of production.

- Energy source: fuel type, or electric for resistance, induction, or arc heating.

- Input capacity — fuel input rating for fired equipment, or connected kW for electric.

- Operating temperature setpoints, which often govern both the load and the recoverable loss.

Note the controls and the operating schedule or load factor, since process-heat equipment ranges from continuous furnaces to batch ovens fired a few hours a day, and the energy picture is entirely different between the two.

## Combustion analysis outputs

Where the equipment is fuel-fired, it carries the same combustion-analysis outputs as a [boiler](boilers-and-steam.md), and several of them drive recommendations directly. Name them in the body:

- Stack (flue gas) temperature.

- Computed combustion efficiency.

These are the numbers a heat-recovery or tune-up recommendation will cite, so they belong in the body. If there are multiple fired units, include a range for each of these numbers.

Electric equipment has none of these; characterize it instead through its electrical load — measured kW and operating hours, or connected kW and load factor where a measurement isn't available.

## Anchor values

The anchors are energy intensity and efficiency. The intensity is fuel for fired equipment and electrical (kWh) for electric equipment; either way it ties the equipment back to the fuel or electricity attributed to it in the [Utility Analysis](../utility-analysis.md). Efficiency is what most recommendations act on.

Because a facility's process-heat fleet often mixes fuels and electric heating, report efficiency as a separate figure for each fuel type and one for the electric equipment — do not blend across energy sources. A natural-gas furnace and a propane oven are characterized by different combustion analyses, and electric resistance, induction, or arc heating has no combustion efficiency at all, so a single blended number would not tie back to any one line of the [Utility Analysis](../utility-analysis.md).

### Weighted average efficiency

Within a single fuel type, when more than one fired unit burns it, do not average the combustion efficiencies directly. Weight each unit's efficiency by its share of fuel input so the figure reflects how the load is actually distributed, exactly as on the [boiler](boilers-and-steam.md) side:

$$
\eta_{\text{fuel}} = \frac{\sum_i \eta_i \times \text{Fuel}_i}{\sum_i \text{Fuel}_i}
$$

where:

- $\eta_{\text{fuel}}$ = fuel-input-weighted average combustion efficiency for that fuel type (dimensionless)

- $\eta_i$ = combustion efficiency of fired unit $i$ burning that fuel (dimensionless)

- $\text{Fuel}_i$ = fuel input attributed to unit $i$ over the period (MMBtu/yr)

Electric equipment is reported on a load or measurement basis instead, never folded into a combustion-weighted figure.
