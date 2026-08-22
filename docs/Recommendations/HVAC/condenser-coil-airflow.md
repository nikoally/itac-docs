---
hide:
  - toc
---

# Restore Condenser Coil Airflow

Air-cooled condensers reject heat by pulling ambient air across an outdoor coil. When that coil face is obstructed by leaves and debris, or its fins are flattened and mangled, airflow and effective heat-transfer surface drop — raising condensing temperature and pressure, which forces the compressor to work harder for the same delivered cooling. Clearing the obstruction and repairing (or replacing) damaged coil surface restores airflow and recovers the lost efficiency. This measure applies to air-cooled A/C and heat pump condensers whose outdoor coil is visibly fouled or physically damaged; it requires each affected unit's rated cooling capacity, baseline efficiency ratings, and equivalent full-load cooling hours.

**ARC Code(s):**

- 2.7211 (Clean and Maintain Refrigerant, Condensers, and Cooling Towers)

---

## Savings Calculation

Savings are driven by a **restoration factor** — the fractional efficiency the coil recovers when airflow is restored — applied to the unit's annual cooling (and, for heat pumps, heating) energy use. The method mirrors the [regular HVAC maintenance](hvac-maintenance.md) improvement-factor approach.

### Documenting the Condition

The observed defect is characterized visually so the report can show the severity of the fouling or damage. For surface obstruction, estimate a **visible face-blockage** percentage; for physical damage, estimate a **damaged face-area** percentage:

$$
B_{\text{visible}} = \frac{A_{\text{covered}}}{A_{\text{coil face}}}
\qquad
B_{\text{damaged}} = \frac{A_{\text{flattened}}}{A_{\text{coil face}}}
$$

where:

- $B_{\text{visible}}$ = fraction of the coil face covered by leaves or debris (decimal)

- $B_{\text{damaged}}$ = fraction of the coil face with substantially closed fin passages (decimal)

- $A_{\text{coil face}}$ = total coil face area, area-weighted across all sides of the condenser (ft²)

Photograph each coil face perpendicular to the fins, overlay a grid, estimate the covered fraction of each cell, and area-weight across every side.

!!! warning "Visible blockage is not an energy penalty"

    The visible blockage or damage percentage describes the *condition* — it is **not** a direct airflow reduction or energy penalty. Air redistributes through unobstructed portions, while tightly packed debris can produce disproportionately high resistance. Do not set the restoration factor equal to the blockage percentage. If the fins are crushed severely enough to have deformed the refrigerant tubes, the problem is no longer airflow alone — refrigerant charge and leakage require separate diagnosis and are outside this measure.

### Restoration Factor

$$
F_{\text{restore}} = \frac{\eta_{\text{post}} - \eta_{\text{baseline}}}{\eta_{\text{post}}}
$$

where:

- $F_{\text{restore}}$ = fractional efficiency recovered by restoring coil airflow (unitless)

- $\eta_{\text{post}}$ = restored efficiency rating — SEER, SEER2, IEER, or EER as applicable

- $\eta_{\text{baseline}}$ = fouled or damaged efficiency rating in the same metric

??? note "Default restoration factor when ratings are unknown"

    When pre- and post-repair ratings cannot be measured, use the NJ TRM (Table 3-178) condenser-cleaning value as a screening estimate:

    | Condition restored | % savings |
    |---|---|
    | Condenser cleaning (debris removal) | 6.10 |

    This figure is for restoring airflow on a fouled coil. It does **not** cover physically damaged fins: fin repair recovers a case-specific amount that should be bounded conservatively, and a coil damaged beyond repair should be evaluated as a replacement that restores the unit to its **rated** efficiency ($\eta_{\text{baseline}}$ = degraded, $\eta_{\text{post}}$ = nameplate). Where a defensible restoration factor cannot be established, report the condition and recommend verification through pre- and post-repair performance measurement rather than claiming a fixed savings figure.

### Annual Energy Savings

Total electric savings combine the cooling component (all units) and the heating component (heat pumps only):

$$
\Delta \text{kWh} = \Delta \text{kWh}_{\text{cool}} + \Delta \text{kWh}_{\text{heat}}
$$

$$
\Delta \text{kWh}_{\text{cool}} = \text{CAP}_{\text{cool}} \times \text{EFLH}_{\text{cool}} \times \frac{1}{\eta_{\text{cool,baseline}}} \times F_{\text{restore}}
$$

$$
\Delta \text{kWh}_{\text{heat}} = \text{CAP}_{\text{heat}} \times \text{EFLH}_{\text{heat}} \times \frac{1}{\text{HSPF}_{\text{baseline}}} \times F_{\text{restore}}
$$

where:

- $\Delta \text{kWh}_{\text{cool}}$ = annual cooling energy savings (kWh/yr)

- $\Delta \text{kWh}_{\text{heat}}$ = annual heating energy savings, heat pumps only (kWh/yr)

- $\text{CAP}_{\text{cool}}$, $\text{CAP}_{\text{heat}}$ = rated cooling and heating capacity (kBTU/hr)

- $\text{EFLH}_{\text{cool}}$, $\text{EFLH}_{\text{heat}}$ = equivalent full-load cooling and heating hours (hrs/yr)

- $\eta_{\text{cool,baseline}}$ = baseline cooling efficiency rating — SEER, SEER2, or IEER, whichever matches the unit's nameplate (use IEER for rooftop units rated above 65,000 BTU/hr)

- $\text{HSPF}_{\text{baseline}}$ = baseline heating efficiency rating

!!! note "Heat pump condensers"
    A heat pump's outdoor coil serves as the condenser in cooling and the evaporator in heating, so restored airflow benefits both modes. Only claim the heating component when the same fouled or damaged coil is used in heating season.

### Peak Demand Savings

The cooling load drives the summer peak, so demand savings — for both air conditioners and heat pumps — use the cooling capacity, the baseline EER, and the electric coincidence factor:

$$
\Delta \text{kW}_{\text{summer}} = \frac{1}{\text{EER}_{\text{baseline}}} \times F_{\text{restore}} \times \text{CF} \times \text{CAP}_{\text{cool}}
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

Clearing surface debris is largely a labor task and can often be folded into routine maintenance — budget a modest per-unit labor allowance and, if the coil is accessible, no equipment cost. Straightening flattened fins with a fin comb adds labor but little material. A coil damaged beyond repair requires a replacement condenser coil (or a new condensing unit), so obtain a contractor quote for the specific unit; in that case weigh the restoration factor against simply replacing aged equipment near end of life.
