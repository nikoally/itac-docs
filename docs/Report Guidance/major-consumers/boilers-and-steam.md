---
hide:
  - toc
---

# Boilers and Steam

Boilers convert fuel into steam or hot water for process use, space heating, or both. As combustion equipment, they carry a distinct set of measured outputs that drive recommendations, and the paragraph should make those outputs and the load factor easy to find. This page follows the [universal spine](index.md#the-universal-spine).

## Characterization

Describe the boiler plant and what it does:

- Number and type of boilers, and the fuel each burns.

- Input capacity (the fuel input rating, not the steam output).

- What the boiler serves: process steam, space heat, or both. This determines whether the load is seasonal, continuous, or a mix.

- Steam pressure or hot-water supply setpoint.

- Condensate return arrangement, since returned condensate is recovered energy and water.

- Blowdown practice, which is a steady energy and water loss.

- Whether the boiler modulates or cycles, which affects part-load efficiency.

## Combustion analysis outputs

As combustion equipment, boilers are characterized by a combustion analysis, and several of its outputs drive recommendations directly. Name them in the body:

- Stack (flue gas) temperature.

- Excess air, or measured O2.

- CO.

- Computed combustion efficiency.

These are the numbers a heat-recovery or tune-up recommendation will cite, so they belong in the body, with the full combustion data set in the appendix.

## Anchor values

The anchors are combustion efficiency, input capacity, load factor, and operating hours.

Document the load-factor method explicitly, because there are two ways to get it and they should agree:

- From fuel purchases: divide the fuel actually attributed to the boilers by what they could have burned at full fire over the operating hours.

- From operating hours times input capacity: estimate full-fire fuel and compare to actual.

The load factor itself is the ratio of fuel actually attributed to the boilers to the fuel they would have burned at full fire over the operating hours:

$$
\text{LF} = \frac{\text{Fuel}_{\text{actual}}}{\text{CAP}_{\text{input}} \times H}
$$

where:

- $\text{LF}$ = boiler load factor (dimensionless)

- $\text{Fuel}_{\text{actual}}$ = fuel attributed to the boilers over the period (MMBtu/yr)

- $\text{CAP}_{\text{input}}$ = boiler fuel input capacity (MMBtu/hr)

- $H$ = annual operating hours (hrs/yr)

Present this as a reconciliation check, not just a calculation. Operating hours times input capacity times load factor should land near the fuel attributed to the boilers in the [Utility Analysis](../utility-analysis.md). If the two are far apart, the load factor, the hours, or the fuel allocation is off, and that is worth resolving before the section is final.

When the plant has more than one boiler, do not average the combustion efficiencies directly. Weight each boiler's efficiency by its share of fuel input so the plant figure reflects how the load is actually distributed:

$$
\eta_{\text{plant}} = \frac{\sum_i \eta_i \times \text{Fuel}_i}{\sum_i \text{Fuel}_i}
$$

where:

- $\eta_{\text{plant}}$ = plant weighted-average combustion efficiency (dimensionless)

- $\eta_i$ = combustion efficiency of boiler $i$ (dimensionless)

- $\text{Fuel}_i$ = fuel input attributed to boiler $i$ over the period (MMBtu/yr)

A small, lightly loaded boiler should not pull the plant efficiency around as much as the lead boiler carrying most of the load.

## Body versus appendix

Body: the characterization, the named combustion outputs, and the anchors with the load-factor method stated.

Appendix: the full combustion analysis data and the complete nameplate detail.

## Appendix contents

The plant combustion efficiency and the load factor quoted in the body are both *computed* in the appendix from the per-boiler data. The plant efficiency is the fuel-input-weighted average of the individual boiler efficiencies (the $\eta_{\text{plant}}$ equation above), not a plain average; the load factor is the reconciliation of attributed fuel against full-fire fuel (the $\text{LF}$ equation above). The body states the single figures; the appendix shows the per-boiler inputs and both calculations, including the reconciliation against the fuel attributed to the boilers in the [Utility Analysis](../utility-analysis.md). Before the section is "done," the appendix must contain:

- A per-boiler table with the full nameplate and the complete combustion analysis data set (see the template below).

- The worked plant weighted-average combustion efficiency, showing each boiler's fuel share so the weighting is visible.

- The worked load factor and the reconciliation check ($\text{CAP}_{\text{input}} \times H \times \text{LF}$ against attributed fuel).

### Table template

Columns are individual boilers; rows are attributes. Boilers carry enough combustion and nameplate detail per unit that the per-unit-as-column layout reads better than one row each.

| Attribute | Boiler 1 | Boiler 2 | … |
|---|---|---|---|
| Type | | | |
| Fuel | | | |
| Input capacity (MMBtu/hr) | | | |
| Serves (process steam / space heat / both) | | | |
| Steam pressure / HW supply setpoint | | | |
| Modulates or cycles | | | |
| Condensate return arrangement | | | |
| Blowdown practice | | | |
| Stack temperature (°F) | | | |
| Excess air / O₂ (%) | | | |
| CO (ppm) | | | |
| Combustion efficiency (%) | | | |
| Fuel attributed (MMBtu/yr) | | | |
| Load factor — *derived* | | | |

## Watch for

- Input capacity, not output. Load-factor math depends on the fuel input rating; mixing it with steam output throws the reconciliation off.

- The load factor is a reconciliation check. Use it to confirm the fuel attributed to the boilers, and chase any large mismatch.

- Condensate return and blowdown are easy to omit and both move energy. Note the practice even when no recommendation follows.
