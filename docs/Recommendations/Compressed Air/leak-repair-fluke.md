---
hide:
  - toc
---

# Repair Compressed Air Leaks (Acoustic Imaging)

Compressed air leaks force compressors to run longer and at higher loads to maintain system pressure, wasting energy continuously. Acoustic imaging cameras detect leaks by visualizing ultrasonic noise during a walkthrough survey, producing a tagged image log of each leak site with a CFM estimate.

**ARC Code(s):** 

- 2.4236 (Eliminate Leaks in Inert Gas and Compressed Air Lines/Valves)

## Savings Calculation

Savings come from reduced compressor loading once leaks are sealed. The acoustic imager reports flow loss (CFM) per detected leak; sum across all identified leaks to get the total repaired leak rate.

### Annual Energy Savings

$$
\Delta kWh = \frac{Q_{\text{leaks}} \times H \times P_{\text{specific}}}{100}
$$

where:

- $\Delta kWh$ = annual energy savings (kWh/yr)

- $Q_{\text{leaks}}$ = total leak flow rate repaired (CFM)

- $H$ = annual leaking hours (hrs/yr)

- $P_{\text{specific}}$ = compressor specific power (kW per 100 CFM), from CAGI datasheet loaded values

### Peak Demand Savings

Average demand reduction follows directly from energy savings and loaded compressor hours:

$$
\Delta kW = \frac{\Delta kWh}{H_{\text{loaded}}}
$$

where $H_{\text{loaded}}$ is annual compressor loaded operating hours (hrs/yr). Convert to kW-months for the demand savings column, applying summer and winter coincidence factors:

$$
\Delta kW\text{-months} = \Delta kW \times (\text{CF}_{\text{summer}} \times 3 + \text{CF}_{\text{winter}} \times 9)
$$

where:

- $\text{CF}_{\text{summer}}$ = summer coincidence factor (0.947)

- $\text{CF}_{\text{winter}}$ = winter coincidence factor (0.743)

### Annual Cost Savings

Total annual savings include both consumption and demand charges:

$$
\text{Annual Savings} = (\Delta kWh \times R_c) + (\Delta kW\text{-months} \times R_d)
$$

where:

- $R_c$ = facility consumption rate (\$/kWh)

- $R_d$ = facility demand rate (\$/kW-month)

Report consumption and demand savings separately so the facility can update projections when rates change.

!!! warning "Survey Coverage"
    If the survey occurs during production hours, background noise reduces detection sensitivity and the reported CFM total is a lower bound on actual facility leakage. Calculate a leak rate per square foot from the surveyed area, then multiply by total facility area to estimate full-system leakage. Recommend a follow-up non-production survey and note the coverage limitation in the report.

## Anticipated Costs

**Survey:** If the site visit did not include a complete acoustic imaging survey, budget **$1,000–$1,500** for a dedicated non-production survey depending on facility size. If the on-site survey covered the full system, no additional survey cost applies.

**Materials:** Budget **$20 per leak** for fittings, couplings, thread sealant, and hose sections. Leaks requiring valve replacement or pipe section repair will cost more. 
$$
C_{\text{materials}} = n_{\text{leaks}} \times \$20
$$

**Labor:** Budget **15 minutes per leak** at the ITAC standard high-skill rate. Leaks in confined spaces or requiring rigging access will take longer. 
$$
C_{\text{labor}} = n_{\text{leaks}} \times 0.25 \times R_{\text{labor}}
$$

**Utility incentives:** Compressed air leak repair qualifies for prescriptive or custom rebates under most utility demand-side management programs. Verify current offerings with the local utility and subtract any incentives from implementation cost before calculating payback.

**Total implementation cost:**

$$
C_{\text{total}} = C_{\text{survey}} + C_{\text{materials}} + C_{\text{labor}} - C_{\text{incentives}}
$$

Typical payback for compressed air leak repair ranges from **6 months to 1.5 years**.

## Report Requirements

In addition to the [typical report requirements](../how-to.md), the recommendation must include:

- **A leak image** — at least one acoustic imager screenshot showing a detected leak with the CFM reading visible. This documents the detection method and supports the reported leak rates.

