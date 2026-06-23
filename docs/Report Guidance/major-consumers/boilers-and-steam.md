---
hide:
  - toc
---

# Boilers and Steam

Boilers convert fuel into steam or hot water for process use, space heating, or both. As combustion equipment, they carry a distinct set of measured outputs that drive recommendations, and the paragraph should make those outputs and the load factor easy to find. This page follows the [universal spine](index.md#the-universal-spine).

## Characterization

Describe the boiler plant and what it does:

- Number and type of boilers, and the fuel each burns.

- Input capacity (the fuel input rating, not the steam output).

- What the boiler serves: process steam, space heat, or both. This determines whether the load is seasonal, continuous, or a mix.

- Steam temperature and pressure or hot-water supply setpoint.

- Condensate return arrangement, since returned condensate is recovered energy and water.

## Combustion analysis outputs

As combustion equipment, boilers are characterized by a combustion analysis, and several of its outputs drive recommendations directly. Name them in the body:

- Stack (flue gas) temperature.

- Computed combustion efficiency.

These are the numbers a heat-recovery or tune-up recommendation will cite, so they belong in the body, with the full combustion data set in the appendix. If there are multiple boilers, include a range for each of these numbers and drill down on the specifics in the appendix. In addition, you should include these additional results from combustion analysis in the appendix only: 

- Excess air

- Measured O2

- CO

## Anchor values

The anchors are combustion efficiency, load factor, input capacity, and operating hours. Calculations for the first two are described below. Calculations for the input capacity is simply summation and the operating hours are based on what the facilities personnel at the plant describe. 

### Load Factor

The load factor itself is the ratio of fuel actually attributed to the boilers to the fuel they would have burned at full fire over the operating hours:

$$
\text{LF} = \frac{\text{Fuel}_{\text{actual}}}{\text{CAP}_{\text{input}} \times H}
$$

where:

- $\text{LF}$ = boiler load factor (dimensionless)

- $\text{Fuel}_{\text{actual}}$ = fuel attributed to the boilers over the period (MMBtu/yr)

- $\text{CAP}_{\text{input}}$ = boiler fuel input capacity (MMBtu/hr)

- $H$ = annual operating hours (hrs/yr)

### Average Combustion Efficiency

When the plant has more than one boiler, do not average the combustion efficiencies directly. Weight each boiler's efficiency by its share of fuel input so the plant figure reflects how the load is actually distributed:

$$
\eta_{\text{plant}} = \frac{\sum_i \eta_i \times \text{Fuel}_i}{\sum_i \text{Fuel}_i}
$$

where:

- $\eta_{\text{plant}}$ = plant weighted-average combustion efficiency (dimensionless)

- $\eta_i$ = combustion efficiency of boiler $i$ (dimensionless)

- $\text{Fuel}_i$ = fuel input attributed to boiler $i$ over the period (MMBtu/yr)

A small, lightly loaded boiler should not pull the plant efficiency around as much as the lead boiler carrying most of the load.

## The boundary with HVAC

When a boiler supplies space heat, that heating load can plausibly be counted under either Boilers or [HVAC](hvac.md), since the HVAC section also carries heating capacity. Decide where the space-heating load lives and state it, so it is neither double counted nor dropped between the two sections. If the boilers serve only process steam, say so; if they also carry space heat, make clear that the HVAC section excludes the portion of heating the boilers provide. See the [HVAC](hvac.md) page for the same boundary described from the other side.

## Body versus appendix

Body: the characterization, the named combustion outputs, and the anchor values. 

Appendix: the full combustion analysis data and the complete nameplate detail.

## Appendix contents

The plant combustion efficiency and the load factor quoted in the body are both *computed* in the appendix from the per-boiler data. The plant efficiency is the fuel-input-weighted average of the individual boiler efficiencies (the $\eta_{\text{plant}}$ equation above), not a plain average; the load factor is the reconciliation of attributed fuel against full-fire fuel (the $\text{LF}$ equation above). The body states the single figures; the appendix shows the per-boiler inputs and both calculations, including the reconciliation against the fuel attributed to the boilers in the [Utility Analysis](../utility-analysis.md). Before the section is "done," the appendix must contain:

- A per-boiler model table with the required nameplate data (see the template below).

- A per-boiler table with the combustion efficiency results (see the template below).

- The worked plant weighted-average combustion efficiency, showing each boiler's fuel share so the weighting is visible.

- The worked load factor calculation. 

### Table template

Two tables: a per-model nameplate table and a per-boiler combustion-results table. Columns are individual boiler models (first table) or individual boilers (second table) and rows are attributes — boilers carry enough combustion and nameplate detail per unit that the per-unit-as-column layout reads better than one row each. For each, the first tab is the rendered Markdown table; the second is the `booktabs` LaTeX for dropping straight into the appendix.

**Nameplate data** — one column per boiler model:

=== "Rendered"

    | Attribute | Model 1 | Model 2 | … |
    |---|---|---|---|
    | Type | | | |
    | Fuel | | | |
    | Input capacity (MMBtu/hr) | | | |
    | Output capacity (MMBtu/hr) | | | |
    | Usage | | | |
    | Pressure setpoint (psi) | | | |
    | Temperature setpoint (°F) | | | |
    | Rated combustion efficiency (%) | | | |

=== "LaTeX"

    ``` latex
    \begin{table}[h]
      \centering
      \caption{Boiler Nameplate Data}
      \begin{tabular}{lcc}
        \toprule
        Attribute & Model 1 & Model 2 \\
        \midrule
        Type & & \\
        Fuel & & \\
        Input capacity (MMBtu/hr) & & \\
        Output capacity (MMBtu/hr) & & \\
        Usage & & \\
        Pressure setpoint (psi) & & \\
        Temperature setpoint (\textdegree F) & & \\
        Rated combustion efficiency (\%) & & \\
        \bottomrule
      \end{tabular}
    \end{table}
    ```

**Combustion analysis results** — one column per boiler:

=== "Rendered"

    | Attribute | Boiler 1 | Boiler 2 | … |
    |---|---|---|---|
    | Stack temperature (°F) | | | |
    | Excess air (%) | | | |
    | O₂ (%) | | | |
    | CO (ppm) | | | |
    | Actual combustion efficiency (%) | | | |

=== "LaTeX"

    ``` latex
    \begin{table}[h]
      \centering
      \caption{Boiler Combustion Analysis Results}
      \begin{tabular}{lcc}
        \toprule
        Attribute & Boiler 1 & Boiler 2 \\
        \midrule
        Stack temperature (\textdegree F) & & \\
        Excess air (\%) & & \\
        O\textsubscript{2} (\%) & & \\
        CO (ppm) & & \\
        Actual combustion efficiency (\%) & & \\
        \bottomrule
      \end{tabular}
    \end{table}
    ```
