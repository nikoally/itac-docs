---
hide:
  - toc
---

# Reduce Energy Intensity Through Increased Throughput (PRIME)

Process Re-engineering for Increased Manufacturing Efficiency (PRIME), also known as lean manufacturing, eliminates waste in energy, materials, and labor to increase production throughput without proportionally increasing energy consumption. Producing more products in the same time period reduces per-unit energy intensity by diluting fixed loads (lighting, HVAC) across more output and by reducing idle-time losses in manufacturing equipment.

**ARC Code(s):**

## Background / How It Works

Facility electricity consumption can be decomposed into three load categories:

| Load Type | Symbol | Description | Dependence Factor |
|---|---|---|---|
| Independent (Type A, B, Office) | $\text{DF}_{\text{ind}}$ | Loads independent of production hours and throughput (lighting, office equipment) | 0.45 |
| Hours-dependent (Type C) | $\text{DF}_{\text{hrs}}$ | Loads that scale with production hours (compressed air, ventilation) | 0.38 |
| Production-dependent (Type D) | $\text{DF}_{\text{prod}}$ | Loads that scale with production throughput (motor drives, process equipment) | 0.17 |

When throughput increases through PRIME, independent loads remain constant, hours-dependent loads remain constant (same hours, more output), and production-dependent loads increase less than proportionally due to efficiency gains at higher utilization. The net effect is lower energy consumption per unit of output.

!!! warning "Applicability"
    This measure is intended for facilities that achieve a genuine increase in production efficiency — more units per hour after PRIME. Do not use this methodology when the production rate stays the same (i.e., $N_a = N_e$). Constant-rate improvements should be treated as custom projects. For projects with natural gas savings, calculations must be handled on a case-by-case basis for each facility's specific manufacturing process.

## Savings Calculation

### Annual Energy Savings

Annual gross energy savings equal the difference between estimated consumption if the facility scaled production without PRIME and estimated consumption with PRIME improvements in place:

$$
\Delta kWh = kWh_{\text{est,wop}} - kWh_{\text{est,wp}}
$$

where:

- $\Delta kWh$ = annual energy savings (kWh/yr)

- $kWh_{\text{est,wop}}$ = estimated annual consumption with increased productivity **without** PRIME (kWh/yr)

- $kWh_{\text{est,wp}}$ = estimated annual consumption with increased productivity **with** PRIME (kWh/yr)

**Estimated consumption without PRIME** — each component scales with the production increase ratio $N_a / N_e$:

$$
kWh_{\text{est,wop}} = kWh_{\text{ind,wop}} + kWh_{\text{hrs,wop}} + kWh_{\text{prod,wop}}
$$

$$
kWh_{\text{ind,wop}} = \text{DF}_{\text{ind}} \times \text{PPA} \times kWh_{\text{hist}}
$$

$$
kWh_{\text{hrs,wop}} = \text{DF}_{\text{hrs}} \times \text{PPA} \times kWh_{\text{hist}} \times \frac{N_a}{N_e}
$$

$$
kWh_{\text{prod,wop}} = \text{DF}_{\text{prod}} \times \text{PPA} \times kWh_{\text{hist}} \times \frac{N_a}{N_e}
$$

**Estimated consumption with PRIME** — independent loads are unchanged, hours-dependent loads return to baseline because PRIME achieves the same output in the same hours, and production-dependent loads increase with throughput but are partially offset by a savings factor $\text{SF}$:

$$
kWh_{\text{est,wp}} = kWh_{\text{ind,wp}} + kWh_{\text{hrs,wp}} + kWh_{\text{prod,wp}}
$$

$$
kWh_{\text{ind,wp}} = \text{DF}_{\text{ind}} \times \text{PPA} \times kWh_{\text{hist}}
$$

$$
kWh_{\text{hrs,wp}} = \text{DF}_{\text{hrs}} \times \text{PPA} \times kWh_{\text{hist}}
$$

$$
kWh_{\text{prod,wp}} = \text{DF}_{\text{prod}} \times \text{PPA} \times \frac{N_a}{N_e} \times (1 - \text{SF}) \times kWh_{\text{hist}}
$$

**Savings factor** — $\text{SF}$ represents the percent energy reduction as a function of the percent production increase, derived from a regression analysis:

$$
\text{SF} = 0.1168 \times \left(\frac{N_a - N_e}{N_e}\right)^3 - 0.3402 \times \left(\frac{N_a - N_e}{N_e}\right)^2 + 0.4732 \times \left(\frac{N_a - N_e}{N_e}\right) + 0.0011
$$

where:

- $kWh_{\text{hist}}$ = facility annual electric usage from billing history (kWh/yr)

- $\text{PPA}$ = percent of facility energy usage affected by PRIME (decimal)

- $\text{DF}_{\text{ind}}$ = load dependence factor, independent loads (0.45)

- $\text{DF}_{\text{hrs}}$ = load dependence factor, hours-dependent loads (0.38)

- $\text{DF}_{\text{prod}}$ = load dependence factor, production-dependent loads (0.17)

- $N_a$ = production rate after PRIME (units/hr)

- $N_e$ = existing production rate before PRIME (units/hr)

- $\text{SF}$ = savings factor (dimensionless)

!!! note "Load Dependence Factors"
    The default dependence factors ($\text{DF}_{\text{ind}} = 0.45$, $\text{DF}_{\text{hrs}} = 0.38$, $\text{DF}_{\text{prod}} = 0.17$) are population averages from program evaluation data. If facility-specific metering or sub-metering data is available to refine these splits, document the rationale and use the site-specific values instead.

### Peak Demand Savings

Summer and winter peak demand savings are zero for this measure. PRIME increases throughput efficiency but does not reduce the instantaneous peak draw of operating equipment.

$$
\Delta kW_{\text{summer}} = 0
$$

$$
\Delta kW_{\text{winter}} = 0
$$

### Calculation Example

A manufacturing plant consumes 1,000,000 kWh/yr ($kWh_{\text{hist}}$). PRIME is applied to production lines representing 25% ($\text{PPA} = 0.25$) of facility energy. Production increases from 300 ($N_e$) to 330 ($N_a$) units per hour.

**Without PRIME:**

- $kWh_{\text{ind,wop}} = 0.45 \times 0.25 \times 1{,}000{,}000 = 112{,}500$ kWh
- $kWh_{\text{hrs,wop}} = 0.38 \times 0.25 \times 1{,}000{,}000 \times \frac{330}{300} = 104{,}500$ kWh
- $kWh_{\text{prod,wop}} = 0.17 \times 0.25 \times 1{,}000{,}000 \times \frac{330}{300} = 46{,}750$ kWh
- $kWh_{\text{est,wop}} = 112{,}500 + 104{,}500 + 46{,}750 = 263{,}750$ kWh

**With PRIME:**

- $kWh_{\text{ind,wp}} = 112{,}500$ kWh
- $kWh_{\text{hrs,wp}} = 0.38 \times 0.25 \times 1{,}000{,}000 = 95{,}000$ kWh
- $\text{SF} = 0.1168 \times (0.1)^3 - 0.3402 \times (0.1)^2 + 0.4732 \times (0.1) + 0.0011 = 0.045$
- $kWh_{\text{prod,wp}} = 0.17 \times 0.25 \times 1{,}000{,}000 \times \frac{330}{300} \times (1 - 0.045) = 44{,}646$ kWh
- $kWh_{\text{est,wp}} = 112{,}500 + 95{,}000 + 44{,}646 = 252{,}146$ kWh

**Savings:**

$$
\Delta kWh = 263{,}750 - 252{,}146 = 11{,}604 \text{ kWh}
$$

## Anticipated Costs

PRIME implementation costs vary widely depending on the scope of process re-engineering, the number of production lines affected, and whether capital equipment changes are required.

**Consulting and process analysis:** Budget for industrial engineering or lean manufacturing consulting to perform value-stream mapping, identify waste, and design the improved process flow.

**Equipment and tooling:** Some PRIME implementations require new fixtures, conveyors, workstation layouts, or automation components to realize the redesigned workflow. Others require only procedural changes with minimal capital cost.

**Training:** Workforce training on new standard operating procedures, 5S workplace organization, and continuous improvement practices.

**Utility incentives:** PRIME-related energy savings may qualify for custom incentive programs under the local utility's commercial and industrial efficiency offerings. Verify current program availability and submit documentation of measured production rate improvements.

Measure life for PRIME is **5 years**.

## Report Requirements

In addition to the [typical report requirements](../how-to.md), the recommendation must include:

- **Existing production rate** ($N_e$) — units per hour before PRIME, with basis for the value (production logs, operator interviews, or time studies)
- **Proposed production rate** ($N_a$) — units per hour after PRIME, with supporting justification for the expected improvement
- **Percent of production affected** ($\text{PPA}$) — the fraction of total facility energy represented by the lines undergoing PRIME
- **Historical energy consumption** ($kWh_{\text{hist}}$) — from at least 12 months of utility billing data
- **Load dependence factors used** — if deviating from default values, document the basis
