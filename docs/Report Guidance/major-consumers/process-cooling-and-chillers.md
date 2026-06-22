---
hide:
  - toc
---

# Process Cooling and Chillers

Process cooling covers chillers and the equipment that rejects heat from a process or a chilled-water loop. The central characterization challenge is efficiency at the operating condition, and the central bookkeeping challenge is keeping comfort cooling from being counted twice. This page follows the [universal spine](index.md#the-universal-spine).

## Characterization

Describe the cooling plant:

- Number and type of chillers: centrifugal, screw, or scroll, and air cooled versus water cooled.

- Total tonnage.

- What the chillers serve: process load, comfort cooling, or both.

- Condenser type, and whether a cooling tower comes with the plant (a load and a water user in its own right).

- Chilled-water supply temperature setpoint, which strongly affects efficiency.

- Operating schedule, including seasonal operation and any process-driven year-round base load.

## Anchor value

The anchor is efficiency expressed as kW/ton at full load, and at part load where that data is available. Part-load efficiency often matters more than full-load for chillers that rarely run at capacity, so report it when you have it and state its basis.

### Overall plant kW/ton

When the plant has more than one chiller, the overall figure is the total chiller compressor power divided by the total cooling delivered, not a plain average of the per-chiller ratings. Weighting by tons keeps a small chiller from carrying the same vote as the lead machine:

$$
\left(\frac{\text{kW}}{\text{ton}}\right)_{\text{overall}} = \frac{\sum_i \text{kW}_i}{\sum_i \text{tons}_i}
$$

where:

- $\text{kW}_i$ = compressor power draw of chiller $i$ at its operating point (kW)

- $\text{tons}_i$ = cooling delivered by chiller $i$ at that point (tons)

This figure is compressor-only. The chilled-water and condenser-water pumps and the cooling-tower fans are real cooling-plant load, but they are reported on their own lines (see the pump-motor inventory in the appendix), not folded into the chiller kW/ton.

## The boundary with HVAC

Comfort cooling can be served by a chiller or by packaged HVAC, and it is easy to count it under both headings. Decide where the comfort load lives and state it, consistent with the [HVAC](hvac.md) page, so the cooling load is neither double counted nor dropped. If the chillers serve only process load, say so; if they also serve comfort cooling, make clear that the HVAC section excludes it.

## Body versus appendix

Body: the characterization, the boundary statement, and the kW/ton anchor with its basis.

Appendix: nameplate data and full efficiency tables, including the part-load curves behind the anchor.

## Appendix contents

The total tonnage and the kW/ton anchor quoted in the body come *out of* the appendix tables. Total tonnage is the column sum; the kW/ton anchor is read from the full efficiency tables and part-load curves, which is where the part-load figure — often the one that matters most for a chiller that rarely runs at capacity — actually lives. Before the section is "done," the appendix must contain:

- A per-chiller table with nameplate data, the full- and part-load efficiency figures, and a totals row giving summed tonnage (the body's capacity anchor).

- The part-load efficiency curves or IPLV/IEER points behind the kW/ton anchor, with the basis stated (nameplate versus measured).

- A pump-motor and cooling-tower-fan inventory as its own load line — the chilled-water and condenser-water pumps and the tower fans are real cooling-plant load (and the tower is a water user in its own right), not part of the chiller nameplate. Capture nameplate power, rated efficiency, and estimated load factor per motor so the auxiliary load can be reconstructed (see the template below).

### Table template

Two tables: a per-chiller attribute table and a pump-motor inventory. For each, the first tab is the rendered Markdown table; the second is the `booktabs` LaTeX for dropping straight into the appendix.

**Chiller data** — columns are individual chillers and rows are attributes; chillers carry enough per-unit detail (and part-load curves) that the per-unit-as-column layout keeps each unit's data together:

=== "Rendered"

    | Attribute | Chiller 1 | Chiller 2 | … |
    |---|---|---|---|
    | Type (centrifugal / screw / scroll) | | | |
    | Air- or water-cooled | | | |
    | Tonnage (tons) | | | |
    | Serves (process / comfort / both) | | | |
    | Condenser type / cooling tower | | | |
    | Chilled-water supply setpoint (°F) | | | |
    | Full-load efficiency (kW/ton) | | | |
    | Part-load efficiency (kW/ton or IPLV) | | | |
    | Operating schedule | | | |

=== "LaTeX"

    ``` latex
    \begin{table}[h]
      \centering
      \caption{Chiller Data}
      \begin{tabular}{lcc}
        \toprule
        Attribute & Chiller 1 & Chiller 2 \\
        \midrule
        Type (centrifugal / screw / scroll) & & \\
        Air- or water-cooled & & \\
        Tonnage (tons) & & \\
        Serves (process / comfort / both) & & \\
        Condenser type / cooling tower & & \\
        Chilled-water supply setpoint (\textdegree F) & & \\
        Full-load efficiency (kW/ton) & & \\
        Part-load efficiency (kW/ton or IPLV) & & \\
        Operating schedule & & \\
        \bottomrule
      \end{tabular}
    \end{table}
    ```

**Pump-motor and tower-fan inventory** — one row per motor, closing with a totals row for the estimated auxiliary load:

=== "Rendered"

    | Service / Loop | Qty | Nameplate Power (hp) | Rated Efficiency (%) | Estimated Load Factor | Operating Hours (hrs/yr) | Estimated Load (kW) |
    |---|---|---|---|---|---|---|
    | *(chilled-water pumps, condenser-water pumps, tower fans…)* | | | | | | |
    | **Total auxiliary load** | | | | | | |

=== "LaTeX"

    ``` latex
    \begin{table}[h]
      \centering
      \caption{Cooling-Plant Pump-Motor and Tower-Fan Inventory}
      \begin{tabular}{lcccccc}
        \toprule
        Service / Loop & Qty & Nameplate Power (hp) & Rated Efficiency (\%) & Estimated Load Factor & Operating Hours (hrs/yr) & Estimated Load (kW) \\
        \midrule
        % chilled-water pumps, condenser-water pumps, tower fans…
        \midrule
        \textbf{Total auxiliary load} & & & & & & \\
        \bottomrule
      \end{tabular}
    \end{table}
    ```
