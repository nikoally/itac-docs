---
hide:
  - toc
---

# Install VFDs on Conditioned-Air Exhaust Fans

A variable frequency drive (VFD) on a building exhaust or general ventilation fan lets airflow be turned down whenever full exhaust is not needed — through demand-controlled ventilation, occupancy scheduling, or matching a process schedule. Because these fans pull *conditioned* air out of the building, slowing them saves energy twice: the fan motor draws less power (power scales with the cube of speed for centrifugal fans), and an equal volume of unconditioned outside **makeup air** no longer has to be drawn in and re-heated in winter or re-cooled in summer. This second, HVAC-side saving is what distinguishes the measure from a plain fan VFD.

**ARC Code(s):**

- 2.4146 (Use Adjustable Frequency Drive or Multiple Speed Motors on Existing System)

- 2.7314 (Reduce Ventilation Air)

---

## Savings Calculation

Savings come from two independent components that are calculated separately and summed: the **fan energy** saved by the speed reduction, and the **conditioning energy** recovered by exhausting less conditioned air. Both scale with how far the fan can be turned down and for how long.

For a centrifugal fan the affinity laws govern: flow is proportional to speed, and power is proportional to the cube of speed. The airflow reduction that drives the conditioning saving follows directly from the speed reduction:

$$
\Delta \text{CFM} = \text{CFM}_{\text{baseline}} \times (1 - \bar{f})
$$

where:

- $\Delta \text{CFM}$ = reduction in exhaust airflow (ft³/min)

- $\text{CFM}_{\text{baseline}}$ = exhaust airflow at full fan speed (ft³/min)

- $\bar{f}$ = average speed fraction, equal to the average flow fraction for a centrifugal fan (decimal)

### Fan Energy Savings

$$
\Delta \text{kWh}_{\text{fan}} = P_{\text{baseline}} \times \left(1 - \bar{f}^{\,3}\right) \times H
$$

where:

- $\Delta \text{kWh}_{\text{fan}}$ = annual fan energy savings (kWh/yr)

- $P_{\text{baseline}}$ = fan motor input power at full speed (kW)

- $H$ = annual operating hours (hrs/yr)

??? note "Determining the average speed fraction"

    The average speed fraction equals the average flow fraction for a centrifugal fan ($Q \propto N$). Estimate it from ventilation schedules, damper position logs, or short-term power measurements. A common approach is to compare average measured power to full-speed nameplate power: $\bar{f} = \left(P_{\text{avg}} / P_{\text{baseline}}\right)^{1/3}$.

!!! warning "Minimum Speed Constraints"

    Some fans cannot operate below a minimum speed due to code-required minimum ventilation rates, makeup-air balance with other exhaust, or mechanical limits. Verify the minimum allowable airflow before assuming the full speed range is available. Both the fan and conditioning savings must be bounded by the actual achievable turndown.

### Conditioning Energy Savings

Reducing exhaust airflow by $\Delta \text{CFM}$ reduces the outside makeup air that infiltrates to replace it. The sensible load of that air uses the standard air-side heat factor:

$$
1.08 = 0.075\ \text{lb/ft}^3 \times 60\ \text{min/hr} \times 0.24\ \text{Btu/lb·°F}
$$

**Heating.** The annual makeup-air heating load recovered is estimated with the degree-day method, then divided by the heating equipment efficiency and converted to the facility's heating fuel:

$$
\Delta \text{Btu}_{\text{heat}} = 1.08 \times \Delta \text{CFM} \times 24 \times \text{HDD}
$$

Apply the conversion for the heating system present:

$$
\Delta \text{kWh}_{\text{heat}} = \frac{\Delta \text{Btu}_{\text{heat}}}{3412 \times \eta_{\text{heat}}} \quad \text{(electric resistance)}
$$

$$
\Delta \text{kWh}_{\text{heat}} = \frac{\Delta \text{Btu}_{\text{heat}}}{3412 \times \text{COP}} \quad \text{(heat pump)}
$$

$$
\Delta \text{CCF} = \frac{\Delta \text{Btu}_{\text{heat}}}{103{,}700 \times \eta_{\text{heat}}} \quad \text{(natural gas)}
$$

$$
\Delta \text{gal}_{\text{oil}} = \frac{\Delta \text{Btu}_{\text{heat}}}{138{,}500 \times \eta_{\text{heat}}} \quad \text{(oil)}
$$

$$
\Delta \text{gal}_{\text{propane}} = \frac{\Delta \text{Btu}_{\text{heat}}}{91{,}500 \times \eta_{\text{heat}}} \quad \text{(propane)}
$$

**Cooling.** The recovered cooling load is handled the same way, converting the sensible degree-day load to electricity through the cooling equipment's efficiency:

$$
\Delta \text{kWh}_{\text{cool}} = \frac{1.08 \times \Delta \text{CFM} \times 24 \times \text{CDD}}{\text{EER} \times 1000}
$$

where:

- $\Delta \text{Btu}_{\text{heat}}$ = annual makeup-air heating load recovered (Btu/yr)

- $\text{HDD}$ = annual heating degree days, base 65 °F (°F·days/yr)

- $\text{CDD}$ = annual cooling degree days, base 65 °F (°F·days/yr)

- $\eta_{\text{heat}}$ = heating equipment efficiency (decimal)

- $\text{COP}$ = heat pump coefficient of performance (decimal)

- $\text{EER}$ = cooling equipment energy efficiency ratio (Btu/Wh)

- $\Delta \text{kWh}_{\text{heat}}$, $\Delta \text{kWh}_{\text{cool}}$ = annual electric heating / cooling savings (kWh/yr)

- $\Delta \text{CCF}$ = annual natural gas savings (CCF/yr)

- $\Delta \text{gal}_{\text{oil}}$, $\Delta \text{gal}_{\text{propane}}$ = annual oil / propane savings (gal/yr)

??? note "Why cooling is modeled sensible-only"

    This uses the sensible degree-day load and neglects the latent load of dehumidifying humid outside air. It therefore understates cooling savings somewhat in humid summer months, making the estimate conservative. It also keeps the cooling calculation consistent with the CDD/EER degree-day method used elsewhere in the HVAC recommendations. If the facility runs significant summer exhaust in a humid climate, note that the true cooling saving is higher than reported here.

### Peak Demand Savings

The fan demand reduction is an instantaneous, year-round value:

$$
\Delta \text{kW}_{\text{fan}} = P_{\text{baseline}} \times \left(1 - \bar{f}^{\,3}\right)
$$

The cooling demand reduction applies only in the summer months and follows the same coincidence approach as the RTU retrofit measure:

$$
\Delta \text{kW}_{\text{cool}} = \frac{\Delta \text{kWh}_{\text{cool}}}{\text{EFLH}_{\text{cool}}} \times 0.42
\qquad
\text{EFLH}_{\text{cool}} = \frac{\text{CDD} \times 24}{T_{\text{design,cool}} - 65}
$$

where:

- $\Delta \text{kW}_{\text{fan}}$ = fan peak demand reduction, both seasons (kW)

- $\Delta \text{kW}_{\text{cool}}$ = summer cooling peak demand reduction (kW)

- $\text{EFLH}_{\text{cool}}$ = effective full-load cooling hours (hrs/yr)

- $T_{\text{design,cool}}$ = ASHRAE 1% cooling design dry-bulb temperature (°F)

- $0.42$ = summer demand coincidence factor for cooling equipment

Combine into annual demand savings with the summer/winter split. The summer term carries both the fan and cooling reductions; the winter term is fan-only unless the space is electrically heated, in which case add the electric-heat demand reduction to the winter term:

$$
\Delta \text{kW}_{\text{summer}} = \Delta \text{kW}_{\text{fan}} + \Delta \text{kW}_{\text{cool}}
$$

$$
\Delta \text{kW}_{\text{winter}} = \Delta \text{kW}_{\text{fan}}
$$

$$
\Delta \text{kW-months} = (\Delta \text{kW}_{\text{summer}} \times 3) + (\Delta \text{kW}_{\text{winter}} \times 9)
$$

### Annual Cost Savings

$$
\text{Annual Savings} = (\Delta \text{kWh} \times R_c) + (\Delta \text{kW-months} \times R_d) + (\Delta \text{fuel} \times R_{\text{fuel}})
$$

where:

- $\Delta \text{kWh}$ = total electric savings, fan plus electric cooling (and electric heating, if applicable) (kWh/yr)

- $R_c$ = consumption rate (\$/kWh)

- $R_d$ = demand rate (\$/kW-month)

- $\Delta \text{fuel}$ = annual fuel savings in the appropriate unit (CCF/yr or gal/yr)

- $R_{\text{fuel}}$ = corresponding fuel rate (\$/CCF or \$/gal)

## Anticipated Costs

**Equipment:** VFD costs scale with motor horsepower and voltage. Obtain quotes for the specific HP, voltage, and enclosure type required. A bypass contactor and input line reactor are commonly specified as ancillary equipment. If the fan has no existing airflow control input, budget for the sensor or controls that will command the drive (e.g., a CO₂ or occupancy signal for demand-controlled ventilation).

**Installation:** Labor includes VFD mounting, conduit and wiring, programming, and commissioning. Budget 4–8 hours for motors under 25 HP; larger installations or those requiring panel modifications may require significantly more. Some installations also require harmonic filtering depending on facility power quality requirements.

Most utilities offer prescriptive rebates for VFD installations on qualifying fan motors. Check with the local utility for current incentive offerings and verify eligibility before finalizing cost estimates.

Simple payback periods typically range from 1–3 years for fans running more than 4,000 hours per year with meaningful turndown, and improve further where the recovered heating and cooling load is large. Fans running few hours, or already near constant full airflow, will have longer paybacks.

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
