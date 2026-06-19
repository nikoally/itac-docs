---
hide:
  - toc
---

# Replace with High Efficiency Compressor

When an existing compressor reaches end of life, specifying a premium-efficiency replacement instead of a standard-efficiency unit reduces energy consumption with no change to air delivery capacity. This recommendation addresses only the incremental cost premium above a like-for-like replacement — the facility pays base replacement costs either way.

**ARC Code(s):**

- 2.4321 (Upgrade Obsolete Equipment)

- 2.4322 (Use or Replace with Energy Efficient Substitutes)

---

## Savings Calculation

The premium-efficiency compressor draws less electrical input power to deliver the same compressed air output. The analysis uses DOE MEASUR software to model both the existing compressor and the proposed replacement under identical facility demand conditions.

### Methodology

Build two MEASUR models — one representing the existing compressor and one representing the proposed premium-efficiency unit — using the same compressed air output profile. Key input parameters for each model include:

- Compressor type (e.g., single-stage rotary screw)
- Motor power (HP)
- Full load pressure (psig)
- Rated capacity (acfm)
- Full load amps (A)
- Total input power (kW)
- Control type (load/unload, VFD, etc.)

MEASUR outputs annual energy consumption (kWh) and average demand (kW) for each model. The difference between the existing and proposed system yields annual savings.

### Annual Energy Savings

$$
\Delta \text{kWh} = \text{kWh}_{\text{existing}} - \text{kWh}_{\text{proposed}}
$$

where:

- $\Delta \text{kWh}$ = annual energy savings (kWh/yr)

- $\text{kWh}_{\text{existing}}$ = annual energy consumption of existing compressor from MEASUR (kWh/yr)

- $\text{kWh}_{\text{proposed}}$ = annual energy consumption of proposed compressor from MEASUR (kWh/yr)

### Peak Demand Savings

$$
\Delta \text{kW} = \text{kW}_{\text{existing}} - \text{kW}_{\text{proposed}}
$$

where:

- $\Delta \text{kW}$ = average demand reduction (kW)

- $\text{kW}_{\text{existing}}$ = average demand of existing compressor from MEASUR (kW)

- $\text{kW}_{\text{proposed}}$ = average demand of proposed compressor from MEASUR (kW)

Convert demand reduction to kW-months for the demand savings column:

$$
\Delta \text{kW-months} = \Delta \text{kW} \times 12
$$


!!! note "Assumptions"

    - Both models use identical compressed air demand profiles derived from facility operating data
    - Compressor input parameters are taken from manufacturer CAGI datasheets or nameplate data
    - Operating hours and load profiles reflect actual facility production schedules
    - Utility rates match the facility's current tariff structure

!!! warning "Model Validation"
    Verify that the MEASUR baseline model output reasonably matches the existing compressor's metered energy consumption. If the modeled baseline deviates from measured data by more than 10%, investigate input assumptions before using the model for savings projections.

## Anticipated Costs

**Equipment:** The implementation cost for this recommendation is the incremental price premium between a standard-efficiency replacement and a premium-efficiency unit — not the full compressor purchase price. Obtain installed quotes for both standard and premium-efficiency models from at least two vendors to establish the incremental cost.

$$
C_{\text{incremental}} = C_{\text{premium}} - C_{\text{standard}}
$$

**Labor:** No additional labor cost applies beyond the base replacement. Both the standard and premium-efficiency units require the same installation effort; the incremental labor difference is zero.

**Utility incentives:** High-efficiency compressor replacements qualify for prescriptive or custom rebates under many utility demand-side management programs. Verify current offerings with the local utility and subtract any incentives from the incremental cost before calculating payback.

**Payback:**

```latex
\begin{align*}
\text{Payback Period} &=
\frac{\text{Implementation Cost}}{\text{Annual Savings}} = \frac{\XXImplementation}{\XXTotalSavings} = \textbf{\XXPayback~years}
\end{align*}
```

Typical payback on the incremental cost premium ranges from **2–6 years** depending on compressor size, efficiency gain, and operating hours.

## Report Requirements

In addition to the [typical report requirements](../how-to.md), the recommendation must include:

-  **A MEASUR input parameter table** documenting the simulation inputs for both the existing and proposed compressors.

```latex
\begin{table}[H]
\centering
\caption{MEASUR Simulation Input Parameters for Existing and Proposed Compressors}
\label{tab:measur-inputs}
\begin{tabular}{lcc}
\toprule
Parameter & Existing Compressor & Proposed Compressor \\
\midrule
Compressor Type & -- & -- \\
Motor Power (hp) & -- & -- \\
Full Load Pressure (psig) & -- & -- \\
Rated Capacity (acfm) & -- & -- \\
Full Load Amps (A) & -- & -- \\
Total Input Power (kW) & -- & -- \\
Control Type & -- & -- \\
\bottomrule
\end{tabular}
\end{table}
```

- **A MEASUR output comparison table** showing annual energy, demand, and cost results for both systems with the savings difference.

```latex
\begin{table}[H]
\centering
\caption{Comparison of Existing Compressor System with Proposed Premium Efficiency System}
\label{tab:measur-comparison}
\begin{tabular}{lccc}
\toprule
 & Existing System & Proposed System & Savings \\
\midrule
Annual Energy (kWh) & -- & -- & -- \\
Annual Demand (kW-months) & -- & -- & -- \\
Annual Energy Cost (\$/yr) & -- & -- & -- \\
Annual Demand Cost (\$/yr) & -- & -- & -- \\
\midrule
\textbf{Total Annual Cost Savings} & \textbf{--} & \textbf{--} & \textbf{} \\
\bottomrule
\end{tabular}
\end{table}
```