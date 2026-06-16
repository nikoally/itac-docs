---
hide:
  - toc
---

# HVAC

HVAC conditions the facility's spaces for comfort and, sometimes, for process requirements. The equipment is usually numerous and varied, so the paragraph has to summarize a fleet rather than describe a single machine, while still carrying the capacity and efficiency anchors. This page follows the [universal spine](index.md#the-universal-spine).

## Characterization

Summarize the HVAC fleet:

- Types and counts: rooftop units (RTUs), split systems, air handling units (AHUs), and any others present.

- Total heating and cooling capacity across the fleet.

- Refrigerant types, which bear on both efficiency and replacement decisions.

- Age and condition, expressed as a range rather than a unit-by-unit list.

- Control approach: thermostat scheduling, night and weekend setbacks, and whether they are actually in use.

- Economizer presence

- Maintenance history, which conditions both current efficiency and the credibility of any efficiency estimate.

## Anchor values

The anchors are total heating and cooling capacity and system efficiency, expressed as SEER, IEER, or COP as appropriate to the equipment. State the basis: nameplate ratings describe the equipment when new, while age and condition argue for derating, so note which you are reporting.

## The boundary with chillers

Resolve the comfort-cooling boundary with [process cooling](process-cooling-and-chillers.md) the same way it is resolved there. If a chiller serves comfort cooling, decide whether that load is reported under HVAC or under chillers, and state it, so no cooling load is counted twice or dropped between the two sections.

## Body versus appendix

Body: the fleet summary, the control and economizer picture, and the capacity and efficiency anchors.

Appendix: the unit-by-unit nameplate table and the maintenance records that stand behind the age, condition, and efficiency statements.

## Appendix contents

The total capacity and the fleet efficiency quoted in the body are *derived* from the unit table in the appendix, not stated independently of it. Total heating and cooling capacity is the column sum; the fleet efficiency is a capacity-weighted average, not a plain average, so a single oversized unit does not get the same vote as a small one. Before the section is "done," the appendix must contain:

- The unit-by-unit nameplate table, one row per unit, with a totals row giving summed heating and cooling capacity (the body's capacity anchor).

- The capacity-weighted fleet efficiency, shown as a worked figure so the reader can see which units carry the weight. Report it on the same basis (SEER, IEER, EER, or COP) as the body, and state whether the inputs are nameplate or derated for age and condition.

- The maintenance records that stand behind the age, condition, and any derating applied to the efficiency.

### Table template

One row per unit; close with a totals/weighted-average row.

| Unit ID | Type | Area / Zone Served | Heating Capacity (MBH) | Cooling Capacity (tons) | Refrigerant | Rated Efficiency (SEER / IEER / EER / COP) | Year / Age | Economizer | Controls | Condition |
|---|---|---|---|---|---|---|---|---|---|---|
| *(one row per unit…)* | | | | | | | | | | |
| **Total / weighted avg** | | | *(Σ MBH)* | *(Σ tons)* | | *(cap-weighted)* | | | | |

## Watch for

- Summarize the fleet, do not inventory it in the main report section. "Thirty units ranging from 1996 to 2003" conveys scale and age; the unit-by-unit table belongs in the appendix.

- Nameplate efficiency overstates aged equipment. Note age and condition so the reader can weigh a SEER or EER taken from the nameplate.
