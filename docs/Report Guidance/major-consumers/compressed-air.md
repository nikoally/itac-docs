---
hide:
  - toc
---

# Compressed Air

Compressed air is often a facility's most expensive utility per unit of useful work, and it is one of the richest sources of recommendations, so the paragraph needs to carry enough detail to support them. The body should characterize the supply side as a system, not just list compressors. This page follows the [universal spine](index.md#the-universal-spine).

## Characterization

Describe the compressed air system, not only the machines that make the air:

- Number and type of units, and the lead/lag or trim arrangement that decides which unit carries the swing load.

- Total capacity of the system.

- Control method (load/unload, modulating, variable speed), since this drives part-load efficiency more than anything else.

- Header pressure setpoint.

- Receiver storage volume, which buffers demand swings and interacts with control behavior.

## Anchor values

Three anchors come out of this system:

- Specific power, in kW/CFM. This typically comes from a nameplate or CAGI datasheet. For VSD compressors, this needs to be a time-weighted average based on the CAGI datasheet's performance points. 

- Equivalent full load hours, which convert capacity into annual energy.

- System operating hours. This is the hours/year the system is pressurized, and likely exceeds the facility operating hours. Estimate this from the CT data. 

## Body versus appendix

Body: the system characterization above, plus the three anchors with their basis stated.

Appendix: per-unit nameplate/datasheet data, full control detail, and any logged data (pressure traces, flow logs, kW logs). The logged data is the evidence behind the power and the schedule.

## Appendix contents

All three anchors quoted in the body are *computed* in the appendix. Specific power (kW/CFM) comes from the per-unit datasheet figures — and for a VSD compressor it is the time-weighted average across the CAGI performance points, which has to be worked out from the points themselves. Equivalent full load hours and system operating hours come from the logged CT data via the [Weekly Power Pattern Analyzer](../../Recommendations/Compressed%20Air/measur-setup.md#weekly-power-pattern-analyzer). The body states the results; the appendix shows the inputs and the arithmetic.

The per-unit detail in the appendix is the same data the [MEASUR compressed air module](../../Recommendations/Compressed%20Air/measur-setup.md) needs, so capture it once here in a form the analysis can reuse. Before the section is "done," the appendix must contain:

- A per-unit table covering the nameplate, CAGI, and control data (see the template below), with the derived specific power and EFLH for each unit.

- The system-level parameters that are not per-unit: total system volume, atmospheric pressure, the multi-compressor control method, and the FLUKE-study leak rate. 

### System-level parameters

- **Total system volume (gal):** the air-holding volume of the whole system — receivers plus the distribution piping, headers, and drops. Our typical estimate is 150% of the total receiver storage volume; the extra 50% accounts for the connected piping that the tank nameplates do not capture. Sum the rated volume of every receiver to get the storage volume, then multiply by 1.5.

- **Atmospheric pressure (psia):** 14.7 unless elevation differs significantly.

- **Multi-compressor control method:** cascading pressure, target pressure sequencer, base/trim, etc.

- **System leak rate:** from the FLUKE acoustic imaging study, applied to all day types.

- **Day types and operating days:** the schedule breakdown (must sum to 365 days).

- **System operating hours (hrs/yr):** hours the system is pressurized, from the CT data.

### Per-unit table template

Columns are individual compressors; rows are attributes. This carries far more attributes per unit than a fleet table would, so the per-unit-as-column layout keeps each compressor's full datasheet in one place. The first tab is the rendered Markdown table; the second is the `booktabs` LaTeX for dropping straight into the appendix.

=== "Rendered"

    | Attribute | Compressor 1 | Compressor 2 | … |
    |---|---|---|---|
    | Compressor type | | | |
    | Motor power (hp) | | | |
    | Full load operating pressure (psig) | | | |
    | Rated capacity (acfm) | | | |
    | Full load amps | | | |
    | Total package input power (kW) | | | |
    | Control type (Load/Unload, VFD, …) | | | |
    | Full unloaded power (% of full load) | | | |
    | Pressure Setpoint (psig) | | | |
    | Specific power (kW/CFM) | | | |
    | EFLH (hrs/yr)  | | | |

=== "LaTeX"

    ``` latex
    \begin{table}[h]
      \centering
      \caption{Compressed Air System --- Per-Unit Data}
      \begin{tabular}{lcc}
        \toprule
        Attribute & Compressor 1 & Compressor 2 \\
        \midrule
        Compressor type & & \\
        Motor power (hp) & & \\
        Full load operating pressure (psig) & & \\
        Rated capacity (acfm) & & \\
        Full load amps & & \\
        Total package input power (kW) & & \\
        Control type (Load/Unload, VFD) & & \\
        Full unloaded power (\% of full load) & & \\
        Pressure Setpoint (psig) & & \\
        Specific power (kW/CFM) & & \\
        EFLH (hrs/yr) & & \\
        \bottomrule
      \end{tabular}
    \end{table}
    ```

### Deriving specific power and EFLH

The two derived rows are computed differently depending on the unit's control type.

**Specific power (kW/CFM):**

- *Load/unload (and other fixed-speed) units:* use the nameplate specific power — total package input power divided by rated capacity at full load. A load/unload compressor runs at essentially its full-load specific power whenever it is loaded, so the nameplate figure is representative.

- *VSD units:* compute a time-weighted average specific power across the CAGI datasheet's performance points. At each point, specific power is the package input power divided by the airflow at that point. Weight each point by the fraction of operating time the unit spends near that output (from the logged CT data) and sum to get the weighted average.

**EFLH (hrs/yr):**

- *Load/unload units:* EFLH equals the annual loaded hours — the hours the unit is actually producing air. Because it draws full-load power only while loaded, loaded hours and equivalent full-load hours coincide.

- *VSD units:* take EFLH from the [Weekly Power Pattern Analyzer](../../Recommendations/Compressed%20Air/measur-setup.md#weekly-power-pattern-analyzer), which reduces the logged CT trace to an average load profile and computes EFLH as the 24-hour average power divided by the nameplate full-load power, times 8760.

