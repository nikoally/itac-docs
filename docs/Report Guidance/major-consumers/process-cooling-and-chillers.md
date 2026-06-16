---
hide:
  - toc
---

# Process Cooling and Chillers

Process cooling covers chillers and the equipment that rejects heat from a process or a chilled-water loop. The central characterization challenge is efficiency at the operating condition, and the central bookkeeping challenge is keeping comfort cooling from being counted twice. This page follows the [universal spine](index.md#the-universal-spine).

## Characterization

Describe the cooling plant:

- Number and type of chillers: centrifugal, screw, or scroll, and air cooled versus water cooled.

- Total tonnage.

- What the chillers serve: process load, comfort cooling, or both.

- Condenser type, and whether a cooling tower comes with the plant (a load and a water user in its own right).

- Chilled-water supply temperature setpoint, which strongly affects efficiency.

- Operating schedule, including seasonal operation and any process-driven year-round base load.

## Anchor value

The anchor is efficiency expressed as kW/ton at full load, and at part load where that data is available. Part-load efficiency often matters more than full-load for chillers that rarely run at capacity, so report it when you have it and state its basis.

## The boundary with HVAC

Comfort cooling can be served by a chiller or by packaged HVAC, and it is easy to count it under both headings. Decide where the comfort load lives and state it, consistent with the [HVAC](hvac.md) page, so the cooling load is neither double counted nor dropped. If the chillers serve only process load, say so; if they also serve comfort cooling, make clear that the HVAC section excludes it.

## Body versus appendix

Body: the characterization, the boundary statement, and the kW/ton anchor with its basis.

Appendix: nameplate data and full efficiency tables, including the part-load curves behind the anchor.

## Appendix contents

The total tonnage and the kW/ton anchor quoted in the body come *out of* the appendix tables. Total tonnage is the column sum; the kW/ton anchor is read from the full efficiency tables and part-load curves, which is where the part-load figure — often the one that matters most for a chiller that rarely runs at capacity — actually lives. Before the section is "done," the appendix must contain:

- A per-chiller table with nameplate data, the full- and part-load efficiency figures, and a totals row giving summed tonnage (the body's capacity anchor).

- The part-load efficiency curves or IPLV/IEER points behind the kW/ton anchor, with the basis stated (nameplate versus measured).

- The cooling tower fans and pumps as their own load line — the tower is a load and a water user in its own right, not part of the chiller nameplate.

### Table template

Columns are individual chillers; rows are attributes. Chillers carry enough per-unit detail (and part-load curves) that the per-unit-as-column layout keeps each unit's data together.

| Attribute | Chiller 1 | Chiller 2 | … |
|---|---|---|---|
| Type (centrifugal / screw / scroll) | | | |
| Air- or water-cooled | | | |
| Tonnage (tons) | | | |
| Serves (process / comfort / both) | | | |
| Condenser type / cooling tower | | | |
| Chilled-water supply setpoint (°F) | | | |
| Full-load efficiency (kW/ton) | | | |
| Part-load efficiency (kW/ton or IPLV) | | | |
| Operating schedule | | | |
| Cooling tower fans / pumps load (kW) | | | |

## Watch for

- The cooling tower is its own load. Account for the tower fans and pumps, not just the chiller.

- Part-load matters. A chiller sized for a peak it rarely sees runs most of its hours at part load, so full-load kW/ton alone can mislead.
