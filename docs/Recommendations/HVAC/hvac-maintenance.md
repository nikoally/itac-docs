---
hide:
  - toc
---

# Regular HVAC Maintenance

Over time, the efficiency of electric air conditioners and heat pumps degrades due to dirty coils, refrigerant charge drift, fouled filters, and worn components. A professional tune-up restores much of this lost performance. This measure quantifies the energy and demand savings from servicing electric-powered cooling and heat pump equipment that has not received a tune-up in the previous three years. It applies to central A/C systems and heat pumps of 20 tons or less, and requires each unit's rated capacity, efficiency ratings, and equivalent full-load hours.

**ARC Code(s):**

- 2.7211 (Clean and Maintain Refrigerant, Condensers, and Cooling Towers)

---

## Savings Calculation

Savings are driven by the improvement factor, which expresses the fractional efficiency gain a tune-up delivers. It is applied to the unit's annual cooling (and, for heat pumps, heating) energy use.

$$
F_{\text{improv}} = \frac{\eta_{\text{post}} - \eta_{\text{baseline}}}{\eta_{\text{post}}}
$$

where:

- $F_{\text{improv}}$ = fractional improvement from the tune-up (unitless)

- $\eta_{\text{post}}$ = post-tune-up efficiency rating — SEER, SEER2, IEER, EER, or HSPF as applicable

- $\eta_{\text{baseline}}$ = baseline (pre-tune-up) efficiency rating in the same metric

??? note "Default improvement factor when ratings are unknown"

    When pre- and post-tune-up ratings cannot be measured, build $F_{\text{improv}}$ from NJ TRM Table 3-178 by summing the percent savings for each maintenance component performed:

    | Maintenance component | % savings |
    |---|---|
    | Condenser cleaning | 6.10 |
    | Evaporator cleaning | 0.22 |
    | Refrigerant charge offset ≤ 20% | 0.68 |
    | Refrigerant charge offset > 20% | 8.44 |

    Typically, we'll assume the first three rows of this table apply if the unit has not had a tune-up in the previous 2 years. 

### Annual Energy Savings

Total electric savings combine the cooling component (all units) and the heating component (heat pumps only):

$$
\Delta \text{kWh} = \Delta \text{kWh}_{\text{cool}} + \Delta \text{kWh}_{\text{heat}}
$$

$$
\Delta \text{kWh}_{\text{cool}} = \text{CAP}_{\text{cool}} \times \text{EFLH}_{\text{cool}} \times \frac{1}{\eta_{\text{cool,baseline}}} \times F_{\text{improv}}
$$

$$
\Delta \text{kWh}_{\text{heat}} = \text{CAP}_{\text{heat}} \times \text{EFLH}_{\text{heat}} \times \frac{1}{\text{HSPF}_{\text{baseline}}} \times F_{\text{improv}}
$$

where:

- $\Delta \text{kWh}_{\text{cool}}$ = annual cooling energy savings (kWh/yr)

- $\Delta \text{kWh}_{\text{heat}}$ = annual heating energy savings, heat pumps only (kWh/yr)

- $\text{CAP}_{\text{cool}}$, $\text{CAP}_{\text{heat}}$ = rated cooling and heating capacity (kBTU/hr)

- $\text{EFLH}_{\text{cool}}$, $\text{EFLH}_{\text{heat}}$ = equivalent full-load cooling and heating hours (hrs/yr)

- $\eta_{\text{cool,baseline}}$ = baseline cooling efficiency rating — SEER, SEER2, or IEER, whichever matches the unit's nameplate (use IEER for rooftop units rated above 65,000 BTU/hr)

- $\text{HSPF}_{\text{baseline}}$ = baseline heating efficiency rating

!!! note "Choosing the cooling efficiency metric"
    Use the metric the unit is actually rated in, and keep $\eta_{\text{post}}$ and $\eta_{\text{baseline}}$ in that same metric. SEER and SEER2 are reported for smaller, single-phase equipment; larger commercial rooftop units (RTUs) rated above 65,000 BTU/hr are rated by IEER (or EER), so prefer IEER for those. Do not mix metrics — a SEER baseline against an IEER post-tune-up rating will produce a meaningless improvement factor.


### Peak Demand Savings

The cooling load drives the summer peak, so demand savings — for both air conditioners and heat pumps — use the cooling capacity, the baseline EER, and the electric coincidence factor:

$$
\Delta \text{kW}_{\text{summer}} = \frac{1}{\text{EER}_{\text{baseline}}} \times F_{\text{improv}} \times \text{CF} \times \text{CAP}_{\text{cool}}
$$

where $\text{EER}_{\text{baseline}}$ is the baseline cooling efficiency rating and $\text{CF} = 0.478$ is the electric coincidence factor. Because the demand reduction is driven by cooling, no winter peak demand is claimed ($\Delta \text{kW}_{\text{winter}} = 0$).

$$
\Delta \text{kW-months} = (\Delta \text{kW}_{\text{summer}} \times 3) + (\Delta \text{kW}_{\text{winter}} \times 9)
$$

### Annual Cost Savings

$$
\text{Annual Savings} = (\Delta \text{kWh} \times R_c) + (\Delta \text{kW-months} \times R_d)
$$

where:

- $R_c$ = facility consumption rate ($/kWh)

- $R_d$ = facility demand rate ($/kW-month)

## Anticipated Costs

The exact cost of a tune-up is difficult to determine without quotes from local contractors, so use the allowance method for an estimate. Multiply the appropriate per-unit allowance by the number of units serviced:

| Unit size | Mounting | Allowance |
|---|---|---|
| 5 tons or more | Ground-mounted | \$175 / unit |
| 5 tons or more | Rooftop | \$225 / unit |
| Less than 5 tons | Any | \$125 / unit |
