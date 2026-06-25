---
hide:
  - toc
---

# Ongoing Compressed Air Leak Management

A one-time acoustic survey seals the current backlog of leaks, but new leaks keep forming at roughly the same rate, so without recurring attention the savings decay as the leak population rebuilds toward its old level. This recommendation captures the **recurring** savings of catching new leaks each year through a contracted inspection-and-repair program, in which an outside firm performs periodic leak surveys and repairs on a set schedule. It is meant to be claimed **in addition to** the one-time [acoustic leak repair](leak-repair-fluke.md), not instead of it.

**ARC Code(s):**

- 3.7312 (Implement a Regular Maintenance Program to Reduce Emissions from Leaky Valves and Pipe Fittings)

---

## Savings Calculation

??? note "Background" 
    Leaks form randomly over time as a **Poisson process** with arrival rate $\lambda$ (new leaks per year). Each leak persists until it is repaired, and under ordinary ad hoc practice the time to repair is treated as memoryless, which makes the open-leak population an **M/M/$\infty$ queue**. The infinite-server structure is the right one because each leak ages toward repair independently; leaks do not wait in line for a limited repair crew.

    At steady state (the facility has gone long enough since a thorough sweep), the number of open leaks is Poisson with mean

    $$
    L_0 = \frac{\lambda}{\mu} = \lambda \times W
    $$

    where $W$ is the mean leak lifetime and $\mu = 1/W$ is the per-leak repair rate.

    **Parameter estimation** comes from the survey plus a short facility interview:

    - The acoustic survey gives the standing leak count $L_0$ and the per-leak CFM.

    - Ask the facility **how many leaks they repaired in the past year**. At steady state, repairs per year equals arrivals per year, so this count is a direct estimate of $\lambda$. This is the key data point that pins the whole model.

    - Mean lifetime then follows from Little's law, $W = L_0 / \lambda$, and the per-leak repair rate is $\mu = \lambda / L_0$.

    **Why the program adds value.** The ad hoc repair rate is driven by an annoyance threshold, roughly a noise-and-proximity relationship: a leak gets fixed when it is loud enough and close enough to people that someone is bothered enough to act. That threshold-driven repair rate is sustained by a large standing population of leaks. Once the initial sweep clears the backlog, the steady-state condition no longer holds. With few leaks left, far fewer cross the annoyance threshold, the natural repair rate falls well below $\lambda$, and new leaks accumulate largely unaddressed. The arrival rate $\lambda$ itself does not change (leaks keep forming at the same rate); what changes is that nobody is reliably fixing them. The contracted program is what restores a repair rate that keeps pace with $\lambda$. This is also why a **never-fix baseline** is the appropriate and utility-accepted valuation here: post-sweep, absent the program, the new leaks effectively are not repaired.

The program sustains savings each year by catching the new leaks that would otherwise accumulate. Define the **effective recurring leak rate** that flows into the standard energy formula:

$$
Q_{\text{eff}} = \lambda \times \bar{s}
$$

where:

- $Q_{\text{eff}}$ = effective recurring leak flow caught per year (CFM)

- $\lambda$ = new leaks per year (leaks/yr), from the prior-year repair count

- $\bar{s}$ = average leak size (CFM), from the survey

### Annual Energy Savings

$$
\Delta \text{kWh} = \frac{Q_{\text{eff}} \times H \times P_{\text{specific}}}{100}
$$

where:

- $Q_{\text{eff}}$ = effective recurring leak flow (CFM)

- $H$ = annual leaking hours (hrs/yr)

- $P_{\text{specific}}$ = compressor specific power (kW per 100 CFM), from CAGI datasheet loaded values

### Peak Demand Savings

Average demand reduction follows directly from energy savings and loaded compressor hours:

$$
\Delta \text{kW} = \frac{\Delta \text{kWh}}{H_{\text{loaded}}}
$$

where $H_{\text{loaded}}$ is annual compressor loaded operating hours (hrs/yr). Convert to kW-months for the demand savings column, applying summer and winter coincidence factors:

$$
\Delta \text{kW-months} = \Delta \text{kW} \times (\text{CF}_{\text{summer}} \times 3 + \text{CF}_{\text{winter}} \times 9)
$$

where:

- $\text{CF}_{\text{summer}}$ = summer coincidence factor (0.947)

- $\text{CF}_{\text{winter}}$ = winter coincidence factor (0.743)

!!! warning "Survey Coverage"
    If the survey occurs during production hours, background noise reduces detection sensitivity and the reported CFM total is a lower bound on actual facility leakage. This also biases the standing leak count $L_0$ low, which propagates into $W$ and $\mu$. Calculate a leak rate per square foot from the surveyed area, then multiply by total facility area to estimate full-system leakage, and note the coverage limitation in the report.

!!! note "Assumptions and Limitations"
    - The **never-fix valuation** is a convention adopted to match the generally accepted utility methodology; it credits each caught leak as though it would otherwise run indefinitely.

    - Because an annual sweep catches leaks while they are still young, those leaks are **smaller than the steady-state average**, so crediting each at the average size $\bar{s}$ is somewhat generous. A conservative variant credits caught leaks at their expected size at the time of catch.

    - The **operating-hours assumption drives every dollar figure**. The example uses 8,760 hr (continuous) and should be replaced with the facility's actual loaded hours.

## Anticipated Costs

Unlike the one-time acoustic repair, this measure has a **recurring cost set against recurring savings**, plus a small one-time equipment purchase. Payback and economics should reflect that recurring-cost, recurring-savings structure rather than a one-time cost with an ongoing return.

**Equipment (one-time):** Budget **$150** for an ultrasonic leak detector so staff can perform the periodic in-house leak sweeps. This is a one-time capital cost, not part of the recurring annual figure.

**Materials:** Budget **$20 per leak** for fittings, couplings, thread sealant, and hose sections, applied to the $\lambda$ leaks caught each year rather than the full backlog.

$$
C_{\text{materials}} = \lambda \times \$20
$$

**Repair labor:** Budget **15 minutes per leak** at the ITAC standard high-skill rate, again applied to $\lambda$ leaks per year.

$$
C_{\text{labor}} = \lambda \times 0.25 \times R_{\text{labor}}
$$

**Sweep labor:** Each recurring leak sweep also costs staff time to walk and survey the facility, charged at the ITAC standard high-skill rate. Estimate the sweep duration $t_{\text{sweep}}$ (hrs) from the original Fluke study — **check the timestamps on the Fluke image files** (first to last capture) to determine how long the walkthrough actually took.

$$
C_{\text{sweep}} = t_{\text{sweep}} \times R_{\text{labor}}
$$

**Utility incentives:** Compressed air leak repair qualifies for prescriptive or custom rebates under most utility demand-side management programs. Verify current offerings with the local utility and subtract any incentives before calculating payback.

**Total recurring annual cost:**

$$
C_{\text{recurring}} = C_{\text{materials}} + C_{\text{labor}} + C_{\text{sweep}} - C_{\text{incentives}}
$$

## Report Requirements

In addition to the [typical report requirements](../how-to.md), the recommendation must include:

- **The prior-year repair count:** the number of leaks the facility repaired in the past year, with a note of who provided it. This is the single estimate that sets $\lambda$ and therefore the entire savings figure.

- **The standing leak count and average leak size:** from the acoustic survey, used for $L_0$ and $\bar{s}$.

- **A clear statement that these savings are claimed in addition to** the one-time [acoustic leak repair](leak-repair-fluke.md), with the recurring-cost, recurring-savings structure shown explicitly so the contrast with the one-time sweep is unambiguous.
