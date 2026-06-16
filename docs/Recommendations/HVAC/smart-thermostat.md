---
hide:
  - toc
---

# Commercial Smart Thermostats

Replacing a manual or programmable thermostat with an ENERGY STAR certified smart thermostat reduces heating and cooling energy in small commercial buildings. Features such as learning, scheduling, geofencing, and HVAC fault and maintenance alerts ensure the space is conditioned only as much as needed. Savings are estimated from deemed energy intensities and savings factors (DNV CT X1931-8, EIA CBECS) applied per square foot of conditioned area served by the thermostat. This measure applies to retrofits of existing systems only.

**ARC Code(s):** 

- 2.7261 (Install Timers and/or Thermostats)

---

## Savings Calculation

Savings depend on the heating fuel, whether the space is cooled, and the conditioned floor area served by each thermostat. Spaces that are only heated, only cooled, or both heated and cooled must be evaluated separately on a per-square-foot basis and cannot be combined.

!!! note "Assumptions"
    Deemed factors assume New England commercial energy intensities and savings factors of 4.5% for heating and 2% for cooling. Use the factor matching the actual heating fuel and equipment type for each conditioned space.

### Annual Energy Savings

Apply the factor for the heating system present:

$$
\Delta kWh_{\text{heat}} = 0.4561 \times A \quad \text{(electric resistance)}
$$

$$
\Delta kWh_{\text{heat}} = 0.1425 \times A \quad \text{(heat pump)}
$$

$$
\Delta\text{CCF} = 0.0178 \times A \quad \text{(natural gas)}
$$

$$
\Delta\text{gal}_{\text{oil}} = 0.0134 \times A \quad \text{(oil)}
$$

$$
\Delta\text{gal}_{\text{propane}} = 0.0201 \times A \quad \text{(propane)}
$$

For cooled spaces, add the cooling electric savings:

$$
\Delta kWh_{\text{cool}} = 0.0234 \times A
$$

where:

- $A$ = conditioned area served by the thermostat (ft²)

- $\Delta kWh_{\text{heat}}$ = annual electric heating savings (kWh/yr)

- $\Delta kWh_{\text{cool}}$ = annual electric cooling savings (kWh/yr)

- $\Delta\text{CCF}$ = annual natural gas savings (CCF/yr)

- $\Delta\text{gal}_{\text{oil}}$ = annual oil savings (gal/yr)

- $\Delta\text{gal}_{\text{propane}}$ = annual propane savings (gal/yr)

### Peak Demand Savings

Summer and winter coincidence factors for this measure are both 0%, so no peak demand savings are claimed.

### Annual Cost Savings

$$
\text{Annual Savings} = (\Delta kWh \times R_c) + (\Delta\text{fuel} \times R_{\text{fuel}})
$$

where:

- $\Delta kWh$ = total electric savings, heating plus cooling (kWh/yr)

- $R_c$ = consumption rate (\$/kWh)

- $\Delta\text{fuel}$ = annual fuel savings in the appropriate unit (CCF/yr or gal/yr)

- $R_{\text{fuel}}$ = corresponding fuel rate (\$/CCF or \$/gal)

---

## Anticipated Costs

Smart thermostat hardware plus installation is the only cost. Use the installed price of an ENERGY STAR certified unit; installation is typically minimal for a one-for-one replacement.

!!! warning
    Many utilities offer rebates or direct-install programs for commercial smart thermostats. Check for available incentives and subtract them from the installed cost before calculating payback.
