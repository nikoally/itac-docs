---
hide:
  - toc
---

# Install a High-Efficiency Boiler
Boiler fuel consumption drops when an aging, low-efficiency unit is replaced with a modern high-efficiency boiler. Older fire-tube and cast-iron boilers commonly operate at 75–80% thermal efficiency, while modern condensing boilers recover heat from the flue gas water vapor and reach 90–95% efficiency. Because the fuel savings persist for the full life of the new equipment, replacing a boiler that is near the end of its service life — or is badly oversized for the current load — is often one of the highest-value capital measures available on a steam or hot-water system.
 
**ARC Code(s):** 2.1224 (REPLACE BOILER)
 
---

## Savings Calculation
 
The savings come from the efficiency improvement between the existing boiler and the new high-efficiency unit. Current boiler efficiency ($\eta_1$) is obtained from an on-site combustion analyzer reading, a boiler efficiency test, or the nameplate rating of the existing unit. Target efficiency ($\eta_2$) is the rated thermal efficiency of the proposed high-efficiency boiler, taken from the manufacturer's specification sheet at the expected operating load. Use the same fuel basis (natural gas or propane) for both efficiencies.
 
!!! warning "Confirm the existing boiler is near end-of-life"
    A boiler replacement is only cost-effective when the existing unit is near the end of its service life or is significantly undersized/oversized for the load. Replacing a serviceable boiler well before its end-of-life forfeits remaining useful value and inflates the effective cost of the measure. Where the existing boiler still has years of life left, first consider lower-cost measures such as a [burner tune-up](reduce-excess-air.md) or a [condensing economizer](condensing-heat-exchanger.md).
 
### Annual fuel and cost savings
 
Compute annual fuel consumption from the boiler heat input and operating hours:
 
$$Q_{\text{annual}} = \dot{Q}_{\text{input}} \times H$$
 
where:
 
- $\dot{Q}_{\text{input}}$ = boiler heat input rate (MMBtu/hr)

- $H$ = annual operating hours (hrs/yr)
 
If the boiler heat input is not directly metered or on the nameplate, back-calculate it from the nameplate mass flow rate, measured boiler efficiency, and the input and output temperatures. Many online calculators can help you do this. The calculation assumes the boiler runs at its rated firing rate for all reported operating hours. If the boiler cycles or runs at part load, apply a load factor to the annual operating hours.
 
Annual fuel savings follow from the efficiency improvement:
 
$$\Delta \text{MMBtu} = Q_{\text{annual}} \times \left(1 - \frac{\eta_1}{\eta_2}\right)$$
 
where:
 
- $Q_{\text{annual}}$ = annual fuel consumption (MMBtu/yr)

- $\eta_1$ = current boiler efficiency (decimal)

- $\eta_2$ = rated efficiency of the new high-efficiency boiler (decimal)
 
!!! note "Assumptions"
    State the efficiency basis for both boilers (combustion efficiency vs. thermal efficiency vs. AFUE) and confirm they are compared on the same basis. Condensing boilers only reach their rated high efficiency when the return water temperature is low enough to condense flue gas water vapor — verify the system operates in the condensing regime before crediting the full rated efficiency.
 
Annual cost savings:
 
$$\text{Annual Savings} = \Delta \text{MMBtu} \times R_c$$
 
where $R_c$ is the delivered fuel cost ($/MMBtu).

 
## Anticipated Costs
 
A new high-efficiency boiler is a capital purchase. Installed cost depends heavily on capacity, fuel type, and the complexity of tying into existing piping, venting, and controls; obtain a vendor quote for the specific unit. Condensing boilers also require corrosion-resistant venting and condensate neutralization, which add to installation cost.

!!! warning "Check for available rebates"
    Utility and state efficiency programs frequently offer prescriptive or custom rebates for high-efficiency boiler installations. Subtract any available incentive from the installed cost before computing payback — omitting rebates can substantially overstate the payback period.
