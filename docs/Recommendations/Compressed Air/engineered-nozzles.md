---
hide:
  - toc
---

# Use Engineered Air Nozzles

Open-tube blow-off guns and drilled-pipe nozzles consume large volumes of compressed air because they exhaust an unrestricted, fully expanded stream. Engineered air nozzles entrain ambient air around a smaller compressed-air jet, delivering equivalent blow-off force at a fraction of the flow. Replacing inefficient blow guns with engineered nozzles reduces compressor flow demand, lowering both energy consumption and peak demand. Engineered nozzles also operate at lower sound levels and prevent dead-ending, improving OSHA compliance and operator safety.

**ARC Code(s):** 

- 2.4239 (Eliminate or Reduce Compressed Air Usage)

---

## Savings Calculation

Savings come from the reduction in compressed-air flow when each blow-off point is converted from its existing flow rate to the rated flow of an engineered nozzle. The flow reduction is converted to electrical savings using the compressor's specific power.

The flow rate reduction per nozzle is:

$$
\Delta Q = Q_{\text{baseline}} - Q_{\text{nozzle}}
$$

where:

- $\Delta Q$ = flow rate reduction (CFM)

- $Q_{\text{baseline}}$ = flow rate of the existing blow-off gun (CFM)

- $Q_{\text{nozzle}}$ = rated flow rate of the engineered nozzle (CFM)

When the baseline gun's flow is not published, estimate it from the orifice diameter and supply pressure using the table below.

??? note "Specific flow rates for various orifice diameters (CFM)"

    Free-air flow through a sharp-edged orifice at the listed supply pressure. Interpolate between rows for intermediate pressures. Ref [1].

    | Pressure (psig) | 1/64" | 1/32" | 1/16" | 1/8" | 1/4" | 3/8" |
    |---|---|---|---|---|---|---|
    | 70 | 0.29 | 1.16 | 4.66 | 18.62 | 74.4 | 167.8 |
    | 80 | 0.32 | 1.26 | 5.24 | 20.76 | 83.1 | 187.2 |
    | 90 | 0.36 | 1.46 | 5.72 | 23.1 | 92.0 | 206.6 |
    | 100 | 0.40 | 1.55 | 6.31 | 25.22 | 100.9 | 227.0 |
    | 125 | 0.48 | 1.94 | 7.66 | 30.65 | 122.2 | 275.5 |

The specific power converts compressed-air flow to electrical input power. When a CAGI datasheet is available, take the specific power from the rated load point; otherwise divide the compressor's total package input power by its rated capacity:

$$
P_{\text{specific}} = \frac{kW_{\text{package}}}{Q_{\text{rated}}}
$$

where:

- $P_{\text{specific}}$ = compressor specific power (kW/CFM)

- $kW_{\text{package}}$ = total package input power at full load (kW)

- $Q_{\text{rated}}$ = rated capacity of the compressor (CFM)

??? note "Specific power without a CAGI datasheet"

    CAGI datasheets report specific power directly at standardized load points. When no datasheet is published for a model, dividing the nameplate package input power by the rated capacity gives a representative full-load specific power. State this substitution in the analysis.

### Annual Energy Savings

Annual energy savings depend on how long each part is blown off and how many parts are produced per year:

$$
\Delta kWh = N_{\text{parts}} \times t \times \Delta Q \times P_{\text{specific}}
$$

where:

- $\Delta kWh$ = annual energy savings (kWh/yr)

- $N_{\text{parts}}$ = annual production (parts/yr)

- $t$ = air time per part (hrs/part)

- $\Delta Q$ = flow rate reduction (CFM)

- $P_{\text{specific}}$ = compressor specific power (kW/CFM)

### Peak Demand Savings

The flow reduction times the specific power gives the instantaneous demand reduction, which is then weighted by the coincidence factor — the probability that the blow-off load is running during the facility peak. For efficient compressed air nozzles, the summer and winter coincidence factors are both 95%:

$$
\Delta kW_{\text{summer}} = \Delta Q \times P_{\text{specific}} \times 0.95
$$

$$
\Delta kW_{\text{winter}} = \Delta Q \times P_{\text{specific}} \times 0.95
$$

Annual demand savings in kW-months:

$$
\Delta kW\text{-months} = (\Delta kW_{\text{summer}} \times 3) + (\Delta kW_{\text{winter}} \times 9)
$$

where:

- $\Delta kW_{\text{summer}}$ = summer peak demand reduction with 95% coincidence factor (kW)

- $\Delta kW_{\text{winter}}$ = winter peak demand reduction with 95% coincidence factor (kW)

- 3 = number of summer months

- 9 = number of winter months

### Annual Cost Savings

$$
\text{Annual Savings} = (\Delta kWh \times R_c) + (\Delta kW\text{-months} \times R_d)
$$

where:

- $R_c$ = facility consumption rate ($/kWh)

- $R_d$ = facility demand rate ($/kW-month)

!!! note "Assumptions"

    - The engineered nozzle delivers acceptable blow-off force for the application at its rated flow.

    - Air time per part and annual production reflect actual facility operating data.

    - The existing blow-off flow rate is taken from manufacturer specifications or measured directly.

---

## Anticipated Costs

**Equipment:** Engineered nozzles are inexpensive, typically around \$50 per nozzle. Multiply by the number of blow-off points being converted.

**Installation:** Installation is quick — roughly 0.25 hours per nozzle at the facility's maintenance labor rate. Most blow guns can be retrofitted in place without distribution piping changes.

Simple payback for engineered-nozzle retrofits is usually well under one year because of the low equipment cost and large flow reduction per blow-off point.
