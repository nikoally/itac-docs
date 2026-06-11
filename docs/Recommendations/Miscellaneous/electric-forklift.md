---
hide:
  - toc
---


# Replace Propane Forklift with Electric Forklift

Liquid propane gas (LPG) forklifts consume significant amounts of fuel and convert only a fraction of it to useful work. Replacing an LPG forklift with an equivalent electric forklift eliminates on-site propane consumption by shifting energy use to overnight battery charging, which benefits from off-peak electric rates and higher overall drivetrain efficiency.

**ARC Code(s):**

## Background

This measure applies to replacing a propane-powered forklift with a new electric-powered forklift, or to purchasing an electric forklift instead of a propane model for the first time (lost market opportunity). The baseline propane forklift is assumed to have a four-cylinder engine with an eight-gallon fuel tank operating on a single-shift workday. The electric forklift is assumed to charge overnight.

## Savings Calculation

Savings come from avoided propane consumption. This is offset by the net electric energy required to charge the replacement forklift. Because the electric forklift is assumed to charge overnight, there is no coincident peak demand impact.

### Annual Propane Savings

$$
\Delta \text{gal}_{\text{propane}} = \text{gal}_{\text{propane}}
$$

where:

- $\Delta \text{gal}_{\text{propane}}$ = annual propane savings (gal/yr)

- $\text{gal}_{\text{propane}}$ = annual propane consumption of the baseline forklift (gal/yr), default 1,500 gal

### Annual Electric Energy Impact

The electric forklift increases site electricity consumption. The annual electric energy impact is calculated as:

$$
\Delta kWh = \frac{\text{gal}_{\text{propane}} \times C_{\text{propane}} \times \eta_{\text{baseline}}}{\eta_{\text{charger}} \times C_{\text{kWh}}}
$$

where:

- $\Delta kWh$ = annual increase in electricity consumption (kWh/yr)

- $\text{gal}_{\text{propane}}$ = annual propane consumption of the baseline forklift (gal/yr), default 1,500

- $C_{\text{propane}}$ = propane energy content, 91,330 Btu/gal

- $\eta_{\text{baseline}}$ = baseline propane engine efficiency, 0.30

- $\eta_{\text{charger}}$ = average charger efficiency for the electric forklift, 0.87

- $C_{\text{kWh}}$ = electric conversion constant, 3,412 Btu/kWh

Using default values, the annual electric energy increase is approximately 13,845 kWh/year.

!!! warning "Increased Electric Consumption"

    This is an electrification measure. While propane consumption is eliminated, site electric consumption increases. Net energy cost savings depend on the relative prices of propane and electricity at the facility.

### Peak Demand Savings

Because the electric forklift charges overnight, there is no coincident summer or winter peak demand impact.

### Calculation Parameters Summary

| Variable | Description | Default Value | Units |
|---|---|---|---|
| $\text{gal}_{\text{propane}}$ | Annual propane consumption of baseline forklift | 1,500 | gallons/year |
| $\eta_{\text{baseline}}$ | Baseline propane engine efficiency | 0.30 | -- |
| $\eta_{\text{charger}}$ | Average electric charger efficiency | 0.87 | -- |
| $C_{\text{propane}}$ | Propane energy content | 91,330 | Btu/gallon |
| $C_{\text{kWh}}$ | Electric conversion constant | 3,412 | Btu/kWh |
| Hours | Annual operating/charging hours | 1,500 | hours/year |

!!! note "Default vs. Actual Values"

    Use default values for the savings calculation except where actual nameplate ratings or actual efficiency test data are available.

## Anticipated Costs

**Equipment:** Electric forklifts are available from multiple manufacturers across a range of lift capacities. Pricing varies by capacity, battery type (lead-acid vs. lithium-ion), and included accessories. Obtain quotes for an electric forklift equivalent in capacity to the propane unit being replaced, including the battery and charger.

**Labor:** Installation labor is minimal; the primary cost is the forklift itself and the charging infrastructure. If the facility does not already have a suitable charging station, budget for electrical service and outlet installation.

**Utility incentives:** This measure typically qualifies for electrification incentives through the local utility. Check with the utility for current program details and subtract incentives before calculating payback.

## Report Requirements

In addition to the [typical report requirements](../how-to.md) and the recommendation-specific savings and costs, the recommendation should document:

- Annual propane consumption of the existing forklift (gallons/year), including whether the value is measured or the default of 1,500 gallons
- Forklift operating schedule (shifts per day, days per year)
- Baseline propane engine efficiency used (default 0.30 or actual test data)
- Charger efficiency used (default 0.87 or actual test data)
- Calculated annual electric energy increase (kWh/year)
- Cost comparison between propane fuel and electric charging at facility rates
