---
hide:
  - toc
---

# Switch Energy Supplier

There are various energy suppliers that clients are able to choose from, all with varying rates of electricity supply. Use the appropriate state rate board below to compare energy supply rates for your assessment location.

**ARC Code(s):** 2.8114

## Savings Calculation

Access the energy rate board for your state:

- [Connecticut](https://www.energizect.com/rate-board/compare-energy-supplier-rates?customerClass=1206&monthlyUsage=2000&planTypeEdc=1191)
- [Massachusetts](https://www.energyswitchma.gov/#/)
- [New York](https://documents.dps.ny.gov/PTC/home)
- [Maine](https://www.maine.gov/meopa/electricity/electricity-supply)
- [Rhode Island](https://www.ri.gov/app/dpuc/empowerri/rate_card)
- [New Hampshire](https://www.energy.nh.gov/engyapps/ceps/shop.aspx)

Savings for this recommendation are calculated as follows:

$$
\text{Savings} = \text{kWh} \times (R_{\text{current}} - R_{\text{new}})
$$

where:

- $\text{kWh}$ = monthly electricity usage (kWh)

- $R_{\text{current}}$ = current supply rate (\$/kWh)

- $R_{\text{new}}$ = new supply rate (\$/kWh)

Although savings are reported as an annual figure, this calculation should be performed for each individual month and then summed to obtain the total yearly savings.

!!! warning
    
    The current supply rate used in this calculation is **not** the consumption rate used elsewhere in the report. The current supply rate for this calculation refers only to the rate charged specifically for energy supply. In the client's utility bills, the supply charge is often outlined in its own separate section. This rate is likely lower than the consumption rate used in other areas of the report.


## Anticipated Costs

Because there are no required equipment purchases or additional labor, the anticipated costs for this recommendation are $0. The payback period is therefore immediate.

## Report Requirements

In addition to the [typical report requirements](../how-to.md) and the recommendation-specific savings and costs, the recommendation should include a table comparing current and anticipated supply charges for each month of the assessment year. The table should follow this structure:

- **Column 1:** Month (formatted as three-letter abbreviation, hyphen, year; e.g., Mar-2024)
- **Column 2:** Current monthly supply charges
- **Column 3:** Anticipated monthly supply charges
- **Column 4:** Monthly savings (difference between columns 2 and 3)

Include a total row at the bottom summing each of the three calculated columns.

```latex
\begin{table}[h]
\centering
\caption{Combined Comparisons Before and After Switching Supplier (All Accounts)}
\label{tab_chargecomparison_total}
\begin{tabular}{lccc}
\toprule
Month & Current Supply Charges & Anticipated Supply Charges & Savings \\
\midrule
May-24 &  &  &  \\
Jun-24 &  &  &  \\
Jul-24 &  &  &  \\
Aug-24 &  &  &  \\
Sep-24 &  &  &  \\
Oct-24 &  &  &  \\
Nov-24 &  &  &  \\
Dec-24 &  &  &  \\
Jan-25 &  &  &  \\
Feb-25 &  &  &  \\
Mar-25 &  &  &  \\
Apr-25 &  &  &  \\
\midrule
\textbf{Total} & \textbf{} & \textbf{} & \textbf{} \\
\bottomrule
\end{tabular}
\end{table}
```

## Examples