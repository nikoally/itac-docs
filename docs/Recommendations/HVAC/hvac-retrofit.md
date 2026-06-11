---
hide:
  - toc
---

# Rooftop Unit (RTU) Retrofits

Retrofitting rooftop units (RTUs) with higher-efficiency equipment significantly reduces cooling energy consumption, especially in older packaged systems operating without advanced controls. The analysis compares the baseline and installed efficiency metrics over the equipment's annual cooling run time, using the number of units, rated cooling capacity, and the facility's cooling degree days (from its ZIP code).

**ARC Code(s):** 2.7232

## Savings Calculation

The baseline EER from the original equipment can be calculated from the product data. This is found either on the nameplate or by searching online. Due to yearly degradation, a 1% compounding decrease in efficiency per year from the date of manufacturing is assumed.

$$
\text{EER}_{\text{baseline}} = \text{EER}_{\text{true}} \times (0.99)^{\text{years}}
$$

This same formula applies to IEER and SEER.

!!! note
    When selecting an efficiency metric, prefer SEER2 first, then SEER, then EER based on availability. The same metric must be used for both the baseline and installed unit — do not mix and match.

Effective full-load hours translate climate data into equivalent full-capacity run time:

$$
\text{EFLH}_{\text{cool}} = \frac{\text{CDD} \times 24}{T_{\text{design,cool}} - 65}
$$

where $T_{\text{design,cool}}$ is the ASHRAE 1% cooling design dry-bulb temperature (°F) for the facility's location.

!!! note
    Effective full-load hours (EFLH) accounts for the fact that HVAC equipment rarely operates at full capacity. The calculation uses climate data (cooling degree days) along with design temperatures to determine equivalent full-load operating hours.

### Annual Energy Savings

$$
\Delta kWh_{\text{cool}} = \text{CAP}_{\text{cool}} \times \left(\frac{1}{\text{EER}_{\text{baseline}}} - \frac{1}{\text{EER}_{\text{installed}}}\right) \times \frac{1}{1000} \times \text{EFLH}_{\text{cool}}
$$

where:

- $\Delta kWh_{\text{cool}}$ = annual cooling energy savings (kWh/yr)

- $\text{CAP}_{\text{cool}}$ = rated cooling capacity (Btu/hr)

- $\text{EER}_{\text{baseline}}$ = degraded baseline efficiency (Btu/Wh)

- $\text{EER}_{\text{installed}}$ = installed unit efficiency (Btu/Wh)

- $\text{EFLH}_{\text{cool}}$ = effective full-load cooling hours (hrs/yr)

### Peak Demand Savings

$$
\Delta kW_{\text{summer}} = \frac{\Delta kWh_{\text{cool}}}{\text{EFLH}_{\text{cool}}} \times 0.42
$$

where $0.42$ is the summer demand coincidence factor for cooling equipment.

### Annual Cost Savings

$$
\text{Annual Savings} = \Delta kWh_{\text{cool}} \times R_c
$$

where $R_c$ is the facility consumption rate (\$/kWh).

## Anticipated Costs

**Equipment:** Research high efficiency units to retrofit that have pricing available. Look for a unit that is the same size of the one that is being replaced. 

**Installation:** We assume that rigging, installation, and commissioning takes approximately 30 hours per unit. Multiply this by the standard labor rate for high-skilled labor to determine labor costs. 

!!! warning
    RTU retrofits usually qualify for utility rebates or efficiency incentives. Check with the local utility provider before finalizing cost estimates. Subtract any incentives from the implementation cost before calculating payback.

## Design Temperature Reference

The following representative design temperatures are from the ENERGY STAR County-Level Design Temperature Reference Guide (ASHRAE 2013 Handbook of Fundamentals).

| Location (representative) | 1% Cooling (°F) | Cooling ΔT |
|---|---|---|
| CT, Hartford Co. | 89 | 24 |
| CT, Fairfield Co. | 85 | 20 |
| CT, New London Co. | 85 | 20 |
| MA, Suffolk Co. (Boston) | 91 | 26 |
| RI, Providence Co. | 89 | 24 |
| NH, Hillsborough Co. | 90 | 25 |
| VT, Chittenden Co. (Burlington) | 87 | 22 |
| ME, Cumberland Co. (Portland) | 86 | 21 |
| NY, Albany Co. | 90 | 25 |
| NY, New York Co. (Manhattan) | 92 | 27 |

