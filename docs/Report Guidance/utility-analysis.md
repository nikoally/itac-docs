---
hide:
  - toc
---

# Utility Analysis

The Utility History section is found under **Report Sections** → **Utility-Analysis.tex** in the LaTeX sidebar. It analyzes twelve months of utility bills to characterize how the facility consumes energy and what it pays for it. This section sets up the rest of the report: every recommendation's savings ultimately traces back to the rates and usage patterns established here.

The section is built from a fixed set of tables and figures, followed by multiple subsections: Electricity Bills Analysis and Fuel Bills Analysis. 

## Introduction

Open by stating the **period analyzed** (twelve months and the start month), and for each utility, how many accounts there are and who **supplies** versus **delivers** the energy. Supplier and deliverer are often different companies — name both. Then walk the reader through the fixed set of tables and figures:

**Plant Energy Usage Summary table:** a high-level table of annual consumption, demand, fees, and fuel, with yearly and unit costs. In the text, explain the totals and call out which source dominates the facility's energy spend.

**Energy Use Intensity (EUI):** calculate and report the facility's EUI — total annual site energy (all fuels plus electricity) divided by gross floor area, in kBtu/ft²/yr.

$$
\text{EUI} = \frac{\left(\text{MMBtu} \times 1000\right) + \left(kWh \times 3.412\right)}{A}
$$

where:

- $\text{MMBtu}$ = total annual fuel consumption across all sources (MMBtu/yr)

- $kWh$ = total annual electricity consumption (kWh/yr)

- $A$ = gross floor area (ft²)

Also report two normalized variants that tie energy use to the facility's output. **Energy per worker** divides total site energy by the number of employees, and **energy per shipment dollar** divides it by the annual value of shipments:

$$
\text{EUI}_{\text{worker}} = \frac{\text{MMBtu} + \left(kWh \times 0.003412\right)}{N}
$$

$$
\text{EUI}_{\$} = \frac{\left(\text{MMBtu} \times 1000\right) + \left(kWh \times 3.412\right)}{V}
$$

where:

- $\text{EUI}_{\text{worker}}$ = energy per worker (MMBtu/employee)

- $\text{EUI}_{\text{product}}$ = energy per shipment dollar (kBtu/\$)

- $N$ = number of employees

- $V$ = annual value of shipments (\$)

State these values and compare them against the benchmarks for the facility's industry below, so the reader can gauge whether the facility is energy-intensive relative to its peers.

??? note "Manufacturing energy benchmarks by NAICS subsector"

    | NAICS | Subsector | EUI (kBtu/ft²) | Per worker (MMBtu/employee) | Per shipment \$ (kBtu/\$) |
    |---|---|---|---|---|
    | 311 | Food | 1,108 | 1,029.7 | 1.5 |
    | 312 | Beverage and Tobacco | 736 | 1,236.7 | 1.7 |
    | 313 | Textile Mills | 463 | 901.0 | 2.4 |
    | 314 | Textile Product Mills | 148 | 184.4 | 0.9 |
    | 315 | Apparel | 79 | 47.7 | 0.3 |
    | 316 | Leather and Allied | 158 | 138.5 | 0.7 |
    | 321 | Wood Products | 771 | 1,281.6 | 2.9 |
    | 322 | Paper | 2,946 | 5,374.3 | 9.0 |
    | 323 | Printing and Related | 158 | 192.0 | 0.7 |
    | 324 | Petroleum and Coal Products | 26,639 | 37,134.1 | 4.1 |
    | 325 | Chemicals | 3,537 | 5,199.0 | 4.5 |
    | 326 | Plastics and Rubber | 371 | 511.9 | 1.3 |
    | 327 | Nonmetallic Mineral | 2,238 | 3,275.3 | 7.9 |
    | 331 | Primary Metals | 2,166 | 4,136.6 | 4.4 |
    | 332 | Fabricated Metal | 241 | 329.3 | 1.0 |
    | 333 | Machinery | 140 | 152.6 | 0.4 |
    | 334 | Computer and Electronic | 286 | 168.3 | 0.2 |
    | 335 | Electrical Equipment/Appliances | 283 | 226.2 | 0.5 |
    | 336 | Transportation Equipment | 216 | 226.1 | 0.3 |
    | 337 | Furniture and Related | 151 | 198.6 | 0.9 |
    | 339 | Miscellaneous | 165 | 139.4 | 0.4 |
    | 31–33 | All manufacturing | 1,271 | 1,528.4 | 2.4 |

**Recent Utility Charges table:** a month-by-month breakdown of consumption, demand, and fuel usage with their costs. Reference it and point the reader toward the seasonal patterns the monthly figures will explore in detail.

**Utility Cost pie chart:** a breakdown of total annual cost by category (electricity consumption, electricity demand, fees, and each fuel). Explain the split and analyze it: a facility dominated by electricity demand charges tells a very different story than one dominated by fuel, and that distinction points toward where the savings opportunities lie.

## Electricity Bills Analysis

Open with the **number of electric meters**, the **supplier and deliverer**, and the **rate schedule(s)** the facility operates under. If there are multiple accounts, map them to facility areas as described above.

**Most Recent Electricity Charge Rates table:** present the consumption (\$/kWh) and demand (\$/kW) charges from the most recent billing cycle. Name the billing period.

!!! note "Discussion of Rate Schedules"
    
    A lot of rate schedules have strange provisions. Make sure to discuss anything out of the ordinary. At a minimum, you should explain how demand billing works. How is billed demand figured? How is power factor penalized? 

**Electricity Consumption figure:** explain the peak, the low, and the overall shape, then analyze it. Which major consumers drive the consumption profile? Does it track production schedule, season, or neither?

**Electricity Demand figure:** explain the range and any peaks, then analyze. Flat demand suggests a steady base load; spiky demand points to large intermittent equipment and a potential demand-management opportunity.

!!! warning "Multiple Accounts or Meters"

    When a utility has **more than one account or meter**, describe **which account serves which part of the facility** — production floor, office, a specific building, or a major piece of equipment. Tie each account to the major consumers it feeds. This mapping is often what explains a trend (or its absence): an account serving only office HVAC will swing seasonally, while one feeding a continuous process line will stay flat. Use the account-to-area mapping to make sense of the monthly figures rather than describing them in isolation.

**Power Factor:** If the facility's power factor is **low enough that they are being penalized** for it on their bills, the electricity section **must include a power factor graph**. Present the monthly power factor, identify the months that fall below the utility's threshold, and analyze the cost impact. If the facility is not penalized for power factor, this graph is omitted.

## Fuel Bills Analysis

All other fuel sources (natural gas, oil, propane, etc.) are handled essentially the same way: state the meter/tank arrangement, the account, the supplier and deliverer, the rate or tariff, then present and analyze the usage figure. 

Open with the **number of meters (or tanks)**, the **account number**, the **supplier and deliverer**, and the **rate/tariff** that applies, with a note on what class of customer that tariff covers.

**Most Recent Fuel Rates table** — present the per-unit charges (e.g., $/MMBtu) from the most recent billing month. 

**Fuel Usage figure** — explain the consumption pattern, then analyze it. Burned fuels usually show a strong seasonal heating trend; tie the shape to the fuel-fired major consumers (space heating, process heat, boilers) and explain the driver. If the pattern is *not* seasonal, that absence is itself a notable finding worth discussing — it may indicate a process load rather than a heating load. This should also be grounded in and should refer to the [Major Energy Consumers](major-consumers.md) section. 

## Notes on Writing

### The Golden Rule: Explain, Then Analyze

Every table and figure in this section requires **two things** in the surrounding text:

1. **Explain the evidence.** State what the table or figure shows — the peak, the low, the totals, the dominant cost driver. This is the "what."

2. **Analyze it.** Say what the evidence *means*. Analysis is the discussion of a **trend**, the **absence of a trend**, or any **other notable finding**, and ideally an explanation of *why* the pattern exists. This is the "so what."

A sentence that only reports numbers ("consumption peaks in January at 77,000 kWh and bottoms out in November at 61,000 kWh") is incomplete. Tie it to the facility: which major consumers drive that pattern, and why does the season, schedule, or process explain it? Link the behavior back to the systems described in [Major Energy Consumers](major-consumers.md).

!!! warning "Do not just describe — interpret"
    The most common weakness in this section is restating the chart in words without analyzing it. If your paragraph could be written by someone who has never visited the facility, it is not finished. Every figure and table needs at least one sentence of genuine analysis.

### Exporting Graphs from the Excel Template

All figures in this section are generated by the utility analysis Excel template. They must be **exported as images, not screenshotted**, so they keep the correct resolution and aspect ratio.

!!! warning "Always export, never screenshot"
    To export a graph, **right-click the chart in Excel and choose *Save as Picture***. Do not take a screenshot — screenshots come out at the wrong resolution and aspect ratio.

    If a chart exports looking distorted or wrong, **zoom all the way in on the graph in Excel, then export again.** Excel sometimes fails to render charts correctly when you are zoomed out too far, and zooming in forces a clean redraw before the export.
