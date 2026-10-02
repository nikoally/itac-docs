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

- Maintenance history, which conditions both current efficiency and the credibility of any efficiency estimate.

## Anchor values

The anchors are total heating and cooling capacity and system efficiency, expressed as SEER, IEER, or COP as appropriate to the equipment. State the basis: nameplate ratings describe the equipment when new, while age and condition argue for derating, so note which you are reporting.

Nameplate efficiency overstates aged equipment, so the estimated in-service efficiency is the nameplate rating derated for age. Apply a 1% per year degradation:

$$
\eta_{\text{est}} = \eta_{\text{rated}} \times 0.99^{\,n}
$$

where:

- $\eta_{\text{est}}$ = estimated in-service efficiency, on the same basis as the rating (SEER, IEER, EER, or COP)

- $\eta_{\text{rated}}$ = nameplate rated efficiency, on the same basis (SEER, IEER, EER, or COP)

- $n$ = equipment age (yrs)

## The boundary with chillers

Resolve the comfort-cooling boundary with [process cooling](process-cooling-and-chillers.md) the same way it is resolved there. If a chiller serves comfort cooling, decide whether that load is reported under HVAC or under chillers, and state it, so no cooling load is counted twice or dropped between the two sections.

## The boundary with boilers

Heating can be served by packaged HVAC equipment or by a [boiler](boilers-and-steam.md) supplying space heat, and the same double-counting risk applies as on the cooling side. Decide whether the space-heating load lives under HVAC or under Boilers and state it, consistent with the [Boilers and Steam](boilers-and-steam.md) page, so the heating load is neither double counted nor dropped. If a boiler carries the space heat, make clear that the HVAC heating capacity reported here excludes it.
