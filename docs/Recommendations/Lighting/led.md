---
hide:
  - toc
---


# Upgrade to Efficient Lighting Fixtures

Older lighting fixtures using incandescent, fluorescent, or high-intensity discharge (HID) lamps consume significantly more energy than modern LED fixtures to produce the same light output. Replacing inefficient fixtures with LED or other high-efficiency lighting reduces electrical consumption and maintenance costs.

**ARC Code(s):** 2.7142

## Savings Calculation

Energy savings from efficient lighting fixtures result from reduced wattage to produce the same or better illumination levels. The savings depend on the wattage difference between baseline and proposed fixtures and annual operating hours.

### Annual Energy Savings

Annual energy savings from replacing fixtures are:

$$
\Delta kWh_{\text{lighting}} = \frac{(W_{\text{baseline}} - W_{\text{proposed}}) \times H \times N}{1000}
$$

where:

- $\Delta kWh_{\text{lighting}}$ = annual energy savings (kWh/yr)

- $W_{\text{baseline}}$ = wattage of existing fixture (W)

- $W_{\text{proposed}}$ = wattage of proposed efficient fixture (W)

- $H$ = annual operating hours (hrs/yr); use 5,793 hrs/yr if facility-specific operating hours cannot be determined

- $N$ = number of fixtures being replaced

### Peak Demand Savings

Peak demand savings from the lighting reduction are:

$$
\Delta kW = \frac{(W_{\text{baseline}} - W_{\text{proposed}}) \times N}{1000}
$$

Important assumptions to state in the analysis:

- Lighting operating hours should be facility-specific where possible; use 5,793 hours/year if measured data unavailable
- Baseline and proposed fixture wattages should include ballast/driver losses
- Light output (lumens) of proposed fixtures should meet or exceed baseline fixtures
- Verify that proposed fixtures are compatible with existing controls and mounting hardware

??? note "Replacing Ballast-Driven LED Tube Fixtures with LED Troffers"

    When the existing fixtures are Type A LED tubes running through the original magnetic or electronic ballast, the baseline wattage must account for ballast losses in addition to the lamp wattage:

    $$
    W_{\text{baseline}} = (W_{\text{lamp}} \times N_{\text{lamps}}) + W_{\text{ballast loss}}
    $$

    Where $W_{\text{lamp}}$ is the rated wattage of one LED tube (from the lamp spec sheet, not the original fluorescent rating), $N_{\text{lamps}}$ is the number of lamps per fixture, and $W_{\text{ballast loss}}$ is the ballast loss in watts. Ballast loss should be taken from manufacturer data or direct measurement. If unavailable, use a default of 4–8 W per ballast for electronic ballasts and 10–15 W per ballast for magnetic ballasts, and document the assumption.

    The proposed LED troffer wattage is taken directly from the fixture spec sheet since it operates on an integrated driver with no external ballast losses. All other calculations follow the standard methodology above.


## Anticipated Costs

Obtain equipment costs from vendor quotes or manufacturer pricing for the specific fixture type being recommended. Include both fixture costs and any required accessories (mounting hardware, lenses, etc.). Installation labor costs should be obtained from local electrical contractors or estimated based on project-specific conditions including ceiling height, access constraints, and disposal requirements for existing fixtures.

Check with the local utility provider for current energy efficiency incentive programs. Lighting fixture upgrades often qualify for prescriptive rebates based on fixture type and wattage reduction. Document incentive eligibility requirements and application procedures in the cost analysis.

## Report Requirements

In addition to the [typical report requirements](../how-to.md) and the recommendation-specific savings and costs, the recommendation should include a table documenting all fixtures being replaced. The table should follow this structure:

- **Column 1:** Location or fixture description
- **Column 2:** Number of fixtures
- **Column 3:** Baseline fixture wattage (W)
- **Column 4:** Proposed fixture wattage (W)
- **Column 5:** Operating hours (hrs/yr)
- **Column 6:** Annual energy savings (kWh/yr)
- **Column 7:** Annual demand savings (kW-month)
- **Column 8:** Annual cost savings ($/yr)

If multiple fixture types are being replaced, include a totals row at the bottom.

```latex
\begin{table}[H]
\centering
\caption{Efficient Lighting Fixture Upgrade Summary}
\label{tab:lighting-upgrade}
\begin{tabular}{lcccccccc}
\toprule
Location & Quantity & Baseline & Proposed & Operating & Energy & Demand & Cost \\
 &  & Wattage (W) & Wattage (W) & Hours (hrs/yr) & Savings (kWh/yr) & Savings (kW-month) & Savings (\$/yr) \\
\midrule
Warehouse High Bay &  &  &  &  &  &  &  \\
Office Troffers &  &  &  &  &  &  &  \\
Parking Lot &  &  &  &  &  &  &  \\
\midrule
\textbf{Total} & \textbf{} & \textbf{--} & \textbf{--} & \textbf{--} & \textbf{} & \textbf{} & \textbf{} \\
\bottomrule
\end{tabular}
\end{table}
```
