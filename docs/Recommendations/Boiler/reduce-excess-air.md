---
hide:
  - toc
---

# Reduce Excess Air in Boiler Flue Gas
Boiler combustion efficiency improves when excess air is reduced to the minimum level needed for complete combustion. Air supplied beyond this optimum does no useful work, it absorbs heat in the firebox and carries it out the stack as additional flue gas mass flow. A burner tune-up, in which a technician adjusts the air-to-fuel ratio while monitoring flue gas with a combustion analyzer, restores the boiler to near-optimum excess air and is one of the highest-return maintenance actions available on a steam system.
 
**ARC Code(s):** 2.1133 (ADJUST BURNERS FOR EFFICIENT OPERATION)
 
## Savings Calculation
 
This recommendation uses the DOE *Steam Tip Sheet #4* methodology. Current combustion efficiency ($\eta_1$) is obtained from an on-site combustion analyzer reading. Target combustion efficiency ($\eta_2$) is read from a combustion efficiency table indexed by the stack-to-air temperature difference and the excess air. Use the **natural gas** table for natural-gas-fired boilers and the **propane** table for propane-fired boilers.
 
First compute the temperature difference used to enter the tables:
 
$$\Delta T = T_{\text{stack}} - T_{\text{air}}$$
 
where $T_{\text{stack}}$ is the measured stack gas temperature (°F) and $T_{\text{air}}$ is the combustion air temperature (°F).
 
### Combustion efficiency table — Natural gas
 
Read efficiency at the intersection of the measured excess air row and the $\Delta T$ column. Interpolate linearly between columns.
 
| Excess Air (%) | ΔT 200°F | ΔT 300°F | ΔT 400°F | ΔT 500°F | ΔT 600°F |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 9.5 | 85.4 | 83.1 | 80.8 | 78.4 | 76.0 |
| 15.0 | 85.2 | 82.8 | 80.4 | 77.9 | 75.4 |
| 28.1 | 84.7 | 82.1 | 79.5 | 76.7 | 74.0 |
| 44.9 | 84.1 | 81.2 | 78.2 | 75.2 | 72.1 |
| 81.6 | 82.8 | 79.3 | 75.6 | 71.9 | 68.2 |
 
*Source: DOE AMO Steam Tip Sheet #4. Assumes complete combustion with no moisture in the combustion air. On well-maintained natural gas systems, 9.5% excess air is attainable.*
 
### Combustion efficiency table — Propane
 
For propane-fired boilers, use the corresponding values from the propane combustion efficiency tables (Table B.5, *Combustion Efficiency Tables for Propane Liquid Fuel*). The excess-air rows below parallel the natural gas table for easy comparison. On well-maintained natural gas systems, 9.6% excess air is attainable.
 
| Excess Air (%) | CO₂ (%) | ΔT 200°F | ΔT 300°F | ΔT 400°F | ΔT 500°F | ΔT 600°F |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 9.6 | 12.5 | 84.5 | 82.0 | 79.4 | 76.7 | 73.9 |
| 15.3 | 11.8 | 84.2 | 81.5 | 78.8 | 76.0 | 73.0 |
| 28.6 | 10.5 | 83.3 | 80.3 | 77.3 | 74.2 | 70.9 |
| 45.8 | 9.2 | 82.0 | 78.5 | 74.9 | 71.2 | 67.4 |
| 83.2 | 7.2 | 78.5 | 73.9 | 69.2 | 64.4 | 59.5 |
 
 
### Annual fuel and cost savings
 
Compute annual fuel consumption from the boiler heat input and operating hours:
 
$$Q_{\text{annual}} = \dot{Q}_{\text{input}} \times H$$
 
where:
 
- $\dot{Q}_{\text{input}}$ = boiler heat input rate (MMBtu/hr)

- $H$ = annual operating hours (hrs/yr)

If the boiler heat input it is not directly metered or on the nameplate, back-calculate it from the nameplate mass flow rate, measured boiler efficiency, and the input and output temperatures. Many online calculators can help you do this. The calculation assumes the boiler runs at its rated firing rate for all reported operating hours. If the boiler cycles or runs at part load, apply a load factor to the annual operating hours.
 
Annual fuel savings follow from the efficiency improvement:
 
$$\Delta \text{MMBtu} = Q_{\text{annual}} \times \left(1 - \frac{\eta_1}{\eta_2}\right)$$
 
where:
 
- $Q_{\text{annual}}$ = annual fuel consumption (MMBtu/yr)

- $\eta_1$ = current combustion efficiency (decimal)

- $\eta_2$ = target combustion efficiency after tune-up (decimal)

Annual cost savings:
 
$$\text{Annual Savings} = \Delta \text{MMBtu} \times R_c$$
 
where $R_c$ is the delivered fuel cost ($/MMBtu).

 
## Anticipated Costs
 
A burner tune-up by a qualified combustion technician typically costs **\$300–\$600** for a boiler. No capital equipment purchase is required.

