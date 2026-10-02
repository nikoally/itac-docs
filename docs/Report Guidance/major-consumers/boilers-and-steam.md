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

- Steam temperature and pressure or hot-water supply setpoint.

- Condensate return arrangement, since returned condensate is recovered energy and water.

## Combustion analysis outputs

As combustion equipment, boilers are characterized by a combustion analysis, and several of its outputs drive recommendations directly. Name them in the body:

- Stack (flue gas) temperature.

- Computed combustion efficiency.

These are the numbers a heat-recovery or tune-up recommendation will cite, so they belong in the body. If there are multiple boilers, include a range for each of these numbers.

## Anchor values

The anchors are combustion efficiency, load factor, input capacity, and operating hours. Calculations for the first two are described below. Calculations for the input capacity is simply summation and the operating hours are based on what the facilities personnel at the plant describe. 

### Load Factor

The load factor itself is the ratio of fuel actually attributed to the boilers to the fuel they would have burned at full fire over the operating hours:

$$
\text{LF} = \frac{\text{Fuel}_{\text{actual}}}{\text{CAP}_{\text{input}} \times H}
$$

where:

- $\text{LF}$ = boiler load factor (dimensionless)

- $\text{Fuel}_{\text{actual}}$ = fuel attributed to the boilers over the period (MMBtu/yr)

- $\text{CAP}_{\text{input}}$ = boiler fuel input capacity (MMBtu/hr)

- $H$ = annual operating hours (hrs/yr)

### Average Combustion Efficiency

When the plant has more than one boiler, do not average the combustion efficiencies directly. Weight each boiler's efficiency by its share of fuel input so the plant figure reflects how the load is actually distributed:

$$
\eta_{\text{plant}} = \frac{\sum_i \eta_i \times \text{Fuel}_i}{\sum_i \text{Fuel}_i}
$$

where:

- $\eta_{\text{plant}}$ = plant weighted-average combustion efficiency (dimensionless)

- $\eta_i$ = combustion efficiency of boiler $i$ (dimensionless)

- $\text{Fuel}_i$ = fuel input attributed to boiler $i$ over the period (MMBtu/yr)

A small, lightly loaded boiler should not pull the plant efficiency around as much as the lead boiler carrying most of the load.

## The boundary with HVAC

When a boiler supplies space heat, that heating load can plausibly be counted under either Boilers or [HVAC](hvac.md), since the HVAC section also carries heating capacity. Decide where the space-heating load lives and state it, so it is neither double counted nor dropped between the two sections. If the boilers serve only process steam, say so; if they also carry space heat, make clear that the HVAC section excludes the portion of heating the boilers provide. See the [HVAC](hvac.md) page for the same boundary described from the other side.
