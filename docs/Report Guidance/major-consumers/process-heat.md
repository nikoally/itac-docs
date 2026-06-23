---
hide:
  - toc
---

# Process Heat

For our purposes, process heat means ovens and furnaces: equipment that applies heat directly to the product rather than producing steam or conditioning space. Many are fuel-fired, and where they are they share the same combustion-analysis outputs as [boilers](boilers-and-steam.md). Others are electric — resistance ovens, induction or arc furnaces — and these have no flue gas, so they are characterized through their electrical load instead. This page follows the [universal spine](index.md#the-universal-spine).

## Characterization

Describe the process-heat equipment and what it does to the product:

- Type and count of ovens or furnaces.

- What they process, and at what stage of production.

- Energy source: fuel type, or electric for resistance, induction, or arc heating.

- Input capacity — fuel input rating for fired equipment, or connected kW for electric.

- Operating temperature setpoints, which often govern both the load and the recoverable loss.

Note the controls and the operating schedule or load factor, since process-heat equipment ranges from continuous furnaces to batch ovens fired a few hours a day, and the energy picture is entirely different between the two.

## Combustion analysis outputs

Where the equipment is fuel-fired, it carries the same combustion-analysis outputs as a [boiler](boilers-and-steam.md), and several of them drive recommendations directly. Name them in the body:

- Stack (flue gas) temperature.

- Computed combustion efficiency.

These are the numbers a heat-recovery or tune-up recommendation will cite, so they belong in the body, with the full combustion data set in the appendix. If there are multiple fired units, include a range for each of these numbers and drill down on the specifics in the appendix. In addition, include these additional results from combustion analysis in the appendix only:

- Excess air

- Measured O2

- CO

Electric equipment has none of these; characterize it instead through its electrical load — measured kW and operating hours, or connected kW and load factor where a measurement isn't available.

## Anchor values

The anchors are energy intensity and efficiency. The intensity is fuel for fired equipment and electrical (kWh) for electric equipment; either way it ties the equipment back to the fuel or electricity attributed to it in the [Utility Analysis](../utility-analysis.md). Efficiency is what most recommendations act on.

Because a facility's process-heat fleet often mixes fuels and electric heating, report efficiency as a separate figure for each fuel type and one for the electric equipment — do not blend across energy sources. A natural-gas furnace and a propane oven are characterized by different combustion analyses, and electric resistance, induction, or arc heating has no combustion efficiency at all, so a single blended number would not tie back to any one line of the [Utility Analysis](../utility-analysis.md).

### Weighted average efficiency

Within a single fuel type, when more than one fired unit burns it, do not average the combustion efficiencies directly. Weight each unit's efficiency by its share of fuel input so the figure reflects how the load is actually distributed, exactly as on the [boiler](boilers-and-steam.md) side:

$$
\eta_{\text{fuel}} = \frac{\sum_i \eta_i \times \text{Fuel}_i}{\sum_i \text{Fuel}_i}
$$

where:

- $\eta_{\text{fuel}}$ = fuel-input-weighted average combustion efficiency for that fuel type (dimensionless)

- $\eta_i$ = combustion efficiency of fired unit $i$ burning that fuel (dimensionless)

- $\text{Fuel}_i$ = fuel input attributed to unit $i$ over the period (MMBtu/yr)

Electric equipment is reported on a load or measurement basis instead, never folded into a combustion-weighted figure.

## Body versus appendix

Body: the characterization, temperature setpoints, the named combustion outputs, and the anchors.

Appendix: nameplate detail and the full combustion data set.

## Appendix contents

The energy intensity and efficiency quoted in the body are *worked out* in the appendix from the per-unit data. For fired equipment the efficiency comes from the combustion analysis and the intensity ties to attributed fuel; for electric equipment there is no combustion data, so the intensity comes from measured kWh (or connected kW times load factor) and ties to attributed electricity. Either way the body states the figure and the appendix shows the basis. Before the section is "done," the appendix must contain:

- A per-model nameplate table covering every unit, with nameplate detail, operating setpoints, and schedule (see the templates below).

- A per-unit combustion-results table for the fired units only, carrying the full combustion data set. Combustion analysis is per unit, since two units of the same model can test differently.

- The worked energy intensity for each unit, tied back to the fuel or electricity attributed to it in the [Utility Analysis](../utility-analysis.md).

- The worked weighted-average efficiency for each fuel type, showing each fired unit's fuel share so the weighting is visible, plus the load or measurement basis for the electric equipment — a separate efficiency figure per fuel type and one for electric.

### Table template

Two tables: a per-model nameplate table covering every unit, and a per-unit combustion-results table for the fired units only. Equipment is listed once per model in the nameplate table; combustion analysis is per unit. Columns are individual models or units and rows are attributes. For each, the first tab is the rendered Markdown table; the second is the `booktabs` LaTeX for dropping straight into the appendix.

**Nameplate data** — one column per model, covering fired and electric units alike:

=== "Rendered"

    | Attribute | Model 1 | Model 2 | … |
    |---|---|---|---|
    | Type | | | |
    | Purpose | | | |
    | Energy source | | | |
    | Input capacity | | | |
    | Operating range (°F) | | | |
    | Controls | | | |
    | Operating Hours | | | |

=== "LaTeX"

    ``` latex
    \begin{table}[h]
      \centering
      \caption{Process-Heat Nameplate Data}
      \begin{tabular}{lcc}
        \toprule
        Attribute & Model 1 & Model 2 \\
        \midrule
        Type & & \\
        Purpose & & \\
        Energy source & & \\
        Input capacity & & \\
        Operating range (\textdegree F) & & \\
        Controls & & \\
        Operating Hours & & \\
        \bottomrule
      \end{tabular}
    \end{table}
    ```

**Combustion analysis results** — one column per fired unit; electric equipment is omitted from this table:

=== "Rendered"

    | Attribute | Unit 1 | Unit 2 | … |
    |---|---|---|---|
    | Stack temperature (°F) | | | |
    | Excess air / O₂ (%) | | | |
    | CO (ppm) | | | |
    | Combustion efficiency (%) | | | |

=== "LaTeX"

    ``` latex
    \begin{table}[h]
      \centering
      \caption{Process-Heat Combustion Analysis Results}
      \begin{tabular}{lcc}
        \toprule
        Attribute & Unit 1 & Unit 2 \\
        \midrule
        Stack temperature (\textdegree F) & & \\
        Excess air / O\textsubscript{2} (\%) & & \\
        CO (ppm) & & \\
        Combustion efficiency (\%) & & \\
        \bottomrule
      \end{tabular}
    \end{table}
    ```
