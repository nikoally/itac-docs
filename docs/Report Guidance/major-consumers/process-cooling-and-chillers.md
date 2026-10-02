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

### Overall plant kW/ton

When the plant has more than one chiller, the overall figure is the total chiller compressor power divided by the total cooling delivered, not a plain average of the per-chiller ratings. Weighting by tons keeps a small chiller from carrying the same vote as the lead machine:

$$
\left(\frac{\text{kW}}{\text{ton}}\right)_{\text{overall}} = \frac{\sum_i \text{kW}_i}{\sum_i \text{tons}_i}
$$

where:

- $\text{kW}_i$ = compressor power draw of chiller $i$ at its operating point (kW)

- $\text{tons}_i$ = cooling delivered by chiller $i$ at that point (tons)

This figure is compressor-only. The chilled-water and condenser-water pumps and the cooling-tower fans are real cooling-plant load, but they are reported on their own lines, not folded into the chiller kW/ton.

## The boundary with HVAC

Comfort cooling can be served by a chiller or by packaged HVAC, and it is easy to count it under both headings. Decide where the comfort load lives and state it, consistent with the [HVAC](hvac.md) page, so the cooling load is neither double counted nor dropped. If the chillers serve only process load, say so; if they also serve comfort cooling, make clear that the HVAC section excludes it.
