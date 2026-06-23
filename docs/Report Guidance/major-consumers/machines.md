---
hide:
  - toc
---

# Machines

Machines are the production equipment that turns raw material into product, and at most manufacturing facilities they are the single largest block of connected electrical load. The body paragraph should convey the production process and the bulk of that load, leaving individual machine detail to the appendix. This page follows the [universal spine](index.md#the-universal-spine).

## Characterization

The machines paragraph is really a description of the production process expressed in terms of load. Cover:

- The major production equipment by type and count, and what each step does in the process flow. The reader should be able to follow material from input to finished product.

- The general scale and age range of the equipment, not a model-by-model inventory.

- How the load is distributed across the process: which steps are continuous, which are intermittent, and which are the heavy hitters.

Controls and schedule matter here as everywhere: how production is scheduled (shifts, day types, seasonal swings) sets the operating hours that turn connected load into energy.

## Anchor value

The anchor is an estimated electrical load for the machines as a group, stated as either a connected load or an operating load, that ties back to the facility's billed electricity. Because of the sheer number of unique machines and variance in operating schedules, this is typically difficult to determine from nameplates. Thus, we typically calculate the other consumers first, then attribute the remaining electrical load to production machines. 

## Body versus appendix

Body: the process description and the group-level estimated electrical load.

Appendix: drill into a specific machine only when a recommendation touches it. If a recommendation acts on a single press, motor, or line, that machine's nameplate and operating detail belong in the appendix to support the calculation. A facility full of machines does not need a machine-by-machine appendix; it needs detail only where the report later spends it.

## Appendix contents

 Unlike lighting or HVAC, this is not an exhaustive inventory: list the heavy hitters that make up the bulk of the load and any machine a recommendation later acts on, not every machine on the floor. Before the section is "done," the appendix must contain:

- A table of the major load contributors and any recommendation-relevant machines, with connected load, the duty/diversity assumptions applied, and the resulting operating-load estimate.

- A totals row giving the group operating-load estimate (the body's anchor), and a note on how the rows not individually listed were accounted for so the total still reconciles.

- The basis stated per row: nameplate connected load versus measured or estimated operating load.

The total of the appendix table will almost certainly not equal the estimated energy intensity number obtained by subtraction. This is to be expected. Discuss the discrepancy in the appendix. The most usual case is that the table underestimates the energy intensity. In this case the simple explanation is that several less-major consumers weren't included in the analysis. 

### Table template

One row per machine or machine group; close with the group estimate. The first tab is the rendered Markdown table; the second is the `booktabs` LaTeX for dropping straight into the appendix.

=== "Rendered"

    | Equipment / Machine | Qty | Duty Cycle / Load Factor | Operating Hours (hrs/yr) | Connected Load (kW) |
    |---|---|---|---|---|
    | *(major load contributors…)* | | | | |
    | **Group estimated load** | | | | |

=== "LaTeX"

    ``` latex
    \begin{table}[h]
      \centering
      \caption{Major Machine Load Contributors}
      \begin{tabular}{lcccc}
        \toprule
        Equipment / Machine & Qty & Duty Cycle / Load Factor & Operating Hours (hrs/yr) & Connected Load (kW) \\
        \midrule
        % major load contributors…
        \midrule
        \textbf{Group estimated load} & & & & \\
        \bottomrule
      \end{tabular}
    \end{table}
    ```
