---
hide:
  - toc
---

# Condensing Heat Exchanger
A condensing economizer recovers heat from boiler flue gas that would otherwise be lost up the stack and uses it to preheat boiler feedwater, reducing fuel consumption required to heat the feedwater. 
 
**ARC Code:** 2.2414 (USE WASTE HEAT FROM HOT FLUE GASES TO PREHEAT) 
 

 
## Savings Calculation
 
Savings are calculated with the DOE MEASUR **Heat Recovery from Condensing Heat Exchanger** tool. The calculator requires you to enter measured conditions from the assessment and the boiler heat input. MEASUR returns the recoverable heat and annual savings. The steps below explain how to populate every input field on the calculator.
 
### Step 1 — Determine boiler heat input
 
The calculator requires the boiler heat input in MMBtu/hr. If it is not directly metered or on the nameplate, back-calculate it from the nameplate mass flow rate, measured boiler efficiency and the input and output temperature. There are many calculators online which can help you do this.

### Step 2 — Fill in the MEASUR inputs
 
Enter each field as follows:
 
| MEASUR Field | What to enter | Source |
|---|---|---|
| Operating Hours | Annual boiler runtime (hrs/yr) | Facility logs / production schedule |
| Fuel | Select the correct fuel (e.g. Propane, or Typical Natural Gas – US) | Facility fuel type |
| Fuel Cost | Delivered fuel price ($/MMBtu) | Utility analysis |
| Heat Input | from Step 1 (MMBtu/hr) | Calculated or from nameplate |
| Flue Gas Temperature | Measured stack temperature, $T_{\text{stack}}$ (°F) | Combustion analyzer |
| New Flue Gas Temperature | 100°F | Condensing economizer target outlet temp |
| Percent Oxygen or Excess Air? | Oxygen in Flue Gas | Combustion analyzer |
| O₂ in Flue Gas  | Measured value (%) | Combustion analyzer |
| Combustion Air Temperature | Measured intake air temp, $T_{\text{air}}$ (°F) | Combustion analyzer |
| Moisture in Combustion Air | 1.0% | Standard assumption |
| Fuel Temperature | Use $T_{\text{air}}$ / ambient temperature as an approximation (°F) | Combustion analyzer |
| Ambient Air Temperature | $T_{\text{air}}$ (°F) | Combustion analyzer |
 
!!! warning "Set the New Flue Gas Temperature to 100°F, not above the dew point"
    The single most important input is the *New Flue Gas Temperature*. Setting it to ~100°F is what captures latent heat recovery. Entering a value above the water-vapor dew point (~130°F) models a non-condensing dry economizer and will significantly understate the true savings of a condensing unit.

### Step 3 — Read the results
 
MEASUR returns the recoverable heat in the **Results** panel (sensible, latent, and total heat recovery in MMBtu/hr) and the **Annual Results** panel (annual heat recovery in MMBtu/yr and the resulting cost savings in $/yr).
 


!!! note "Assumptions"
    The calculation assumes the boiler runs at its rated firing rate for all reported operating hours. If the boiler cycles or runs at part load, apply a load factor to annual heat recovery to find the annual fuel savings.
 
## Anticipated Costs
 
**Equipment:** Condensing economizers for boilers typically cost **$2,500 - $4,000**. 
 
**Labor:** Estimate **10 hours** of high cost labor per condenser.

## Report Requirements

- Record all measured flue gas and feedwater temperatures used in the MEASUR calculation. The Anticipated Savings section should include a table of all the values inputted into MEASUR.

- Include the fuel type, fuel price, operating hours, and calculated annual savings.

- Attach screenshots of the MEASUR calculator in the Appendix or export data from MEASUR if available.
 

 



