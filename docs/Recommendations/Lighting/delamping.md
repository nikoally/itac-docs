---
hide:
  - toc
---


# Turn Off or Remove Unnecessary Lighting

Many facilities operate lighting fixtures in areas where illumination is not required or exceeds recommended levels. Turning off unnecessary fixtures or permanently removing (delamping) excess fixtures eliminates wasted energy while maintaining adequate lighting for the space.

**ARC Code(s):** 2.7111, 2.7121, 2.7124

## Savings Calculation

Energy savings from turning off or removing unnecessary lighting result from eliminating power consumption in over-lit areas or unneeded locations. This measure has zero equipment cost when fixtures are simply turned off, and minimal cost when fixtures or lamps are permanently removed to prevent inadvertent reactivation.

### Annual Energy Savings

Annual energy savings from turning off or removing fixtures are:

$$
\Delta kWh_{\text{lighting}} = \frac{W_{\text{removed}} \times H \times N}{1000}
$$

where:

- $\Delta kWh_{\text{lighting}}$ = annual lighting energy savings (kWh/yr)

- $W_{\text{removed}}$ = wattage of each fixture being turned off or removed (W)

- $H$ = annual operating hours (hrs/yr); use 5,793 hrs/yr if facility-specific operating hours cannot be determined

- $N$ = number of fixtures being turned off or removed

### Cooling Load Reduction

Reduced lighting heat gain decreases cooling energy consumption in conditioned spaces:

$$
\Delta kWh_{\text{cool}} = \frac{\Delta kWh_{\text{lighting}} \times F}{\text{COP}}
$$

where:

- $\Delta kWh_{\text{cool}}$ = annual cooling energy savings (kWh/yr)

- $F$ = fraction of lighting energy savings that reduces cooling load (see table below)

- $\text{COP}$ = coefficient of performance for cooling system (use 3.5 for retrofit applications)

| Building Description | F |
|---------------------|---|
| HVAC system includes an economizer | 0.35 |
| No economizer, building area < 2,000 ft² | 0.48 |
| No economizer, building area 2,000 – 20,000 ft² | $0.48 + \frac{0.195 \times (A - 2000)}{18000}$ |
| No economizer, building area > 20,000 ft² | 0.675 |

Total annual electric savings:

$$
\Delta kWh = \Delta kWh_{\text{lighting}} + \Delta kWh_{\text{cool}}
$$

### Peak Demand Savings

Summer peak demand savings include both lighting reduction and cooling load impact:

$$
\Delta kW_{\text{summer}} = \frac{W_{\text{removed}} \times N \times (1 + G/\text{COP})}{1000}
$$

Winter peak demand savings exclude cooling effects:

$$
\Delta kW_{\text{winter}} = \frac{W_{\text{removed}} \times N}{1000}
$$

where:

- $G$ = estimated fraction of lighting energy converted to heat in the space (0.73)

!!! warning "Summer and Winter Period Definitions"

    For demand savings calculations, "summer" represents 3 months of the year and "winter" represents 9 months of the year. Apply the appropriate demand savings calculation for each period when estimating annual demand cost savings.

### Annual Demand Savings

Annual demand savings in kW-month are calculated by applying peak factors to the summer and winter demand savings:

$$
\Delta kW\text{-months} = (\Delta kW_{\text{summer}} \times \text{PF}_{\text{summer}} \times 3) + (\Delta kW_{\text{winter}} \times \text{PF}_{\text{winter}} \times 9)
$$

where:

- $\text{PF}_{\text{summer}}$ = summer peak factor (0.83 for manufacturing facilities)

- $\text{PF}_{\text{winter}}$ = winter peak factor (0.665 for manufacturing facilities)

- 3 = number of summer months

- 9 = number of winter months

Important assumptions to state in the analysis:

- Lighting operating hours should be facility-specific where possible; use 5,793 hours/year if measured data unavailable
- Fixture wattages should include ballast/driver losses
- Verify that remaining lighting provides adequate illumination per IESNA standards
- Document current light levels with measurements before and after delamping where possible
- Cooling fraction F depends on HVAC system type and building size

!!! warning "Illumination Level Verification"

    Before recommending fixture removal or delamping, verify that remaining fixtures will provide adequate light levels for the space's tasks and activities. Use a light meter to measure current illumination levels (in foot-candles or lux) and confirm they exceed recommended levels by a significant margin. Consult IESNA Lighting Handbook or local code requirements for minimum illumination levels by space type. Safety and task performance must not be compromised.

## Anticipated Costs

For fixtures that are simply turned off using existing switches, there is zero implementation cost.

For permanent delamping (lamp and ballast removal), obtain labor cost estimates from facility maintenance staff or electrical contractors. Typical delamping requires about 15 minutes per fixture, depending on fixture type and access. Budget additional 2 hours for ceiling access equipment if required.

This measure typically does not qualify for utility incentives as it involves no equipment purchase. However, some utilities may provide technical assistance or verification services for lighting reduction projects.

## Report Requirements

In addition to the [typical report requirements](../how-to.md) and the recommendation-specific savings and costs, the recommendation should include a table documenting all fixtures being turned off or removed. The table should follow this structure:

- **Column 1:** Location or area description
- **Column 2:** Number of fixtures to be removed
- **Column 3:** Fixture wattage (W)
- **Column 4:** Operating hours (hrs/yr)
- **Column 5:** Annual energy savings (kWh/yr)
- **Column 6:** Annual demand savings (kW-month)
- **Column 7:** Annual cost savings ($/yr)

If multiple areas are affected, include a totals row at the bottom.

```latex
\begin{table}[H]
\centering
\caption{Lighting Reduction Summary}
\label{tab:delamping}
\begin{tabular}{lccccccc}
\toprule
Location & Quantity & Fixture & Operating & Energy & Demand & Cost \\
 &  & Wattage (W) & Hours (hrs/yr) & Savings (kWh/yr) & Savings (kW-month) & Savings (\$/yr) \\
\midrule
Warehouse Aisle 1 &  &  &  &  &  &  \\
Storage Room &  &  &  &  &  &  \\
Break Room &  &  &  &  &  &  \\
\midrule
\textbf{Total} & \textbf{} & \textbf{--} & \textbf{--} & \textbf{} & \textbf{} & \textbf{} \\
\bottomrule
\end{tabular}
\end{table}
```
