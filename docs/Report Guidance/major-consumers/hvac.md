---
hide:
  - toc
---

# HVAC

HVAC conditions the facility's spaces for comfort and, sometimes, for process requirements. The equipment is usually numerous and varied, so the paragraph has to summarize a fleet rather than describe a single machine, while still carrying the capacity and efficiency anchors. This page follows the [universal spine](index.md#the-universal-spine).

## Characterization

Summarize the HVAC fleet:

- Types and counts: rooftop units (RTUs), split systems, air handling units (AHUs), and any others present.

- Total heating and cooling capacity across the fleet.

- Refrigerant types, which bear on both efficiency and replacement decisions.

- Age and condition, expressed as a range rather than a unit-by-unit list.

- Control approach: thermostat scheduling, night and weekend setbacks, and whether they are actually in use.

- Maintenance history, which conditions both current efficiency and the credibility of any efficiency estimate.

## Anchor values

The anchors are total heating and cooling capacity and system efficiency, expressed as SEER, IEER, or COP as appropriate to the equipment. State the basis: nameplate ratings describe the equipment when new, while age and condition argue for derating, so note which you are reporting.

Nameplate efficiency overstates aged equipment, so the estimated in-service efficiency in the appendix is the nameplate rating derated for age. Apply a 1% per year degradation:

$$
\eta_{\text{est}} = \eta_{\text{rated}} \times 0.99^{\,n}
$$

where:

- $\eta_{\text{est}}$ = estimated in-service efficiency, on the same basis as the rating (SEER, IEER, EER, or COP)

- $\eta_{\text{rated}}$ = nameplate rated efficiency, on the same basis (SEER, IEER, EER, or COP)

- $n$ = equipment age (yrs)

## The boundary with chillers

Resolve the comfort-cooling boundary with [process cooling](process-cooling-and-chillers.md) the same way it is resolved there. If a chiller serves comfort cooling, decide whether that load is reported under HVAC or under chillers, and state it, so no cooling load is counted twice or dropped between the two sections.

## The boundary with boilers

Heating can be served by packaged HVAC equipment or by a [boiler](boilers-and-steam.md) supplying space heat, and the same double-counting risk applies as on the cooling side. Decide whether the space-heating load lives under HVAC or under Boilers and state it, consistent with the [Boilers and Steam](boilers-and-steam.md) page, so the heating load is neither double counted nor dropped. If a boiler carries the space heat, make clear that the HVAC heating capacity reported here excludes it.

## Body versus appendix

Body: the fleet summary, the control and economizer picture, and the capacity and efficiency anchors.

Appendix: the unit-by-unit nameplate table and the maintenance records that stand behind the age, condition, and efficiency statements.

## Appendix contents

The total capacity and the fleet efficiency quoted in the body are *derived* from the unit table in the appendix, not stated independently of it. Total heating and cooling capacity is the column sum; the fleet efficiency is a capacity-weighted average, not a plain average, so a single oversized unit does not get the same vote as a small one. Before the section is "done," the appendix must contain:

- The unit-by-unit nameplate tables (cooling and heating), one row per unit, each with a totals row giving summed cooling and heating capacity (the body's capacity anchor).

- The capacity-weighted fleet efficiency, shown as a worked figure so the reader can see which units carry the weight. Report it on the same basis (SEER, IEER, EER, or COP) as the body, and state whether the inputs are nameplate or derated for age and condition.

- The maintenance records that stand behind the age, condition, and any derating applied to the efficiency.

### Table template

Two tables, cooling and heating, one row per unit, each closing with a totals row. For each, the first tab is the rendered Markdown table; the second is the `booktabs` LaTeX for dropping straight into the appendix.

**Cooling equipment:**

=== "Rendered"

    | Model | Type | Refrigerant | Rated Efficiency (SEER / IEER / EER) | Year / Age | Estimated Efficiency (SEER / IEER / EER) | Cooling Capacity (tons) | Qty | Total Cooling Capacity (MMBtu/hr) |
    |---|---|---|---|---|---|---|---|---|
    | *(one row per unit…)* | | | | | | | | |
    | **Total** | | | | | | | | |

=== "LaTeX"

    ``` latex
    \begin{table}[h]
      \centering
      \caption{HVAC Cooling Equipment}
      \begin{tabular}{lllcccccc}
        \toprule
        Model & Type & Refrigerant & Rated Eff.\ (SEER/IEER/EER) & Year / Age & Est.\ Eff.\ (SEER/IEER/EER) & Cooling Capacity (tons) & Qty & Total Cooling Capacity (MMBtu/hr) \\
        \midrule
        % one row per unit…
        \midrule
        \textbf{Total} & & & & & & & & \\
        \bottomrule
      \end{tabular}
    \end{table}
    ```

**Heating equipment:**

=== "Rendered"

    | Model | Type | Rated Efficiency (AFUE / COP) | Year / Age | Heating Capacity (MMBtu/hr) | Qty | Total Heating Capacity (MMBtu/hr) |
    |---|---|---|---|---|---|---|
    | *(one row per unit…)* | | | | | | |
    | **Total** | | | | | | |

=== "LaTeX"

    ``` latex
    \begin{table}[h]
      \centering
      \caption{HVAC Heating Equipment}
      \begin{tabular}{llccccc}
        \toprule
        Model & Type & Rated Eff.\ (AFUE/COP) & Year / Age & Heating Capacity (MMBtu/hr) & Qty & Total Heating Capacity (MMBtu/hr) \\
        \midrule
        % one row per unit…
        \midrule
        \textbf{Total} & & & & & & \\
        \bottomrule
      \end{tabular}
    \end{table}
    ```
