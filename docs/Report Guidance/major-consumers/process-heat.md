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

Where the equipment is fuel-fired, capture the same combustion-analysis outputs as for [boilers](boilers-and-steam.md), to the extent they apply:

- Stack temperature.

- Excess air, or O2.

- CO.

- Computed efficiency.

These drive heat-recovery and tune-up recommendations the same way they do on the boiler side. Electric equipment has none of these; characterize it instead through its electrical load — measured kW and operating hours, or connected kW and load factor where a measurement isn't available.

## Anchor values

The anchors are energy intensity and efficiency. The intensity is fuel for fired equipment and electrical (kWh) for electric equipment; either way it ties the equipment back to the fuel or electricity attributed to it in the [Utility Analysis](../utility-analysis.md). Efficiency is what most recommendations act on.

## Body versus appendix

Body: the characterization, temperature setpoints, the named combustion outputs, and the anchors.

Appendix: nameplate detail and the full combustion data set.

## Appendix contents

The energy intensity and efficiency quoted in the body are *worked out* in the appendix from the per-unit data. For fired equipment the efficiency comes from the combustion analysis and the intensity ties to attributed fuel; for electric equipment there is no combustion data, so the intensity comes from measured kWh (or connected kW times load factor) and ties to attributed electricity. Either way the body states the figure and the appendix shows the basis. Before the section is "done," the appendix must contain:

- A per-unit table with nameplate detail, operating setpoints and schedule, and — for fired units only — the full combustion data set (see the template below).

- The worked energy intensity for each unit, tied back to the fuel or electricity attributed to it in the [Utility Analysis](../utility-analysis.md).

- The efficiency basis: combustion efficiency for fired units, or the load/measurement basis for electric units. Leave the combustion rows blank for electric equipment rather than forcing flue-gas fields onto it.

### Table template

Columns are individual ovens or furnaces; rows are attributes. The combustion rows apply only to fired units; leave them blank for electric equipment.

| Attribute | Unit 1 | Unit 2 | … |
|---|---|---|---|
| Type | | | |
| What it processes / stage | | | |
| Energy source (fuel type / electric) | | | |
| Input capacity (MMBtu/hr or kW) | | | |
| Operating temperature setpoint (°F) | | | |
| Controls | | | |
| Schedule / load factor | | | |
| Stack temperature (°F) — *fired only* | | | |
| Excess air / O₂ (%) — *fired only* | | | |
| CO (ppm) — *fired only* | | | |
| Combustion efficiency (%) — *fired only* | | | |
| Energy intensity — *derived* | | | |

## Watch for

- Setpoints and schedule together set the load. A high-temperature furnace fired continuously and a moderate oven fired per batch can carry very different intensities; capture both the temperature and the hours.

- Apply the combustion outputs only where they fit. Electric process heat has no flue gas; do not force combustion fields onto it.

- Keep the boundary with [boilers](boilers-and-steam.md) clean. Direct-fired product heating belongs here; steam or hot-water generation belongs with boilers.
