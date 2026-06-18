---
hide:
  - toc
---

# Lighting

Lighting is usually a smaller share of the load than the production systems, but it is one of the most consistently addressable, so the characterization should support a retrofit or controls recommendation cleanly. This page follows the [universal spine](index.md#the-universal-spine).

## Characterization

Describe the lighting by zone: 

- Zones, and what kind of space each is (production floor, warehouse, office, yard).

- Technology types in use (for example fluorescent, HID, LED).

- Fixture wattage.

- Control types (manual switching, occupancy sensors, daylight harvesting, timers).

- Operating Hours

All of this needs to be individually addressed for each zone in the table. However, when writing the narrative, do not call every zone out individually as that would read horribly. Instead, discuss groups of zones if appropriate and skip over less important zones. For example, if the manufacturing space has 4 zones that are all different types of LED troffers, it is appropriate to just report the total wattage of those zones in the narrative. However, if they had a fifth zone of fluorescent lighting, the should be called out individually as it would be misleading to group it in with the LEDs. The same logic applies for control types. 

## Anchor values

The anchors are total connected lighting load in kW, plus operating hours by zone as relevant. Together these give the annual energy and the per-zone breakdown that retrofit and controls recommendations build on.

## Body versus appendix

Body: the general lay of the land, the total connected load (this should also be in the summary table), and the operating hours (by zone if they vary). Specifically call out any areas that are going to be subject to recommendations. This should include all of the $W_\text{connected}$ values used in lighting recommendations. 

Appendix: the zone-by-zone inventory. For each entry, capture quantity, type, wattage, hours, and controls. Write a more detailed narrative that covers the whole facility, not just the highlights as you did in the body paragraph. 

## Appendix contents

The total connected lighting load quoted in the body is *computed* in the appendix, not just restated there. The appendix inventory is the worksheet behind it: the total is the sum of quantity × fixture wattage across every row, and the body figure is only as defensible as the inventory that produces it. Before the section is "done," the appendix must contain:

- The full fixture inventory, one row per fixture group, with a grand total connected load in kW. The grand total is the body's anchor.

- Per-zone operating hours, carried on each row so the annual energy and the per-zone breakdown that controls recommendations build on can be reconstructed.

### Table template

One row per fixture group, with a final total connected load. The first tab is the rendered Markdown table; the second is the `booktabs` LaTeX for dropping straight into the appendix.

=== "Rendered"

    | Zone / Area | Technology | Qty | Wattage | Total Wattage (kW) | Controls | Operating Hours (hrs/yr) |
    |---|---|---|---|---|---|---|
    | *(fixture rows…)* | | | | | | |
    | **Total connected load** | -- | | -- |  | -- | -- |

=== "LaTeX"

    ``` latex
    \begin{table}[h]
      \centering
      \caption{Lighting Inventory}
      \begin{tabular}{lcccccc}
        \toprule
        Zone / Area & Technology & Qty & Wattage & Total Wattage (kW) & Controls & Operating Hours (hrs/yr) \\
        \midrule
        % fixture rows…
        \midrule
        \textbf{Total connected load} & -- & & -- & & -- & -- \\
        \bottomrule
      \end{tabular}
    \end{table}
    ```
