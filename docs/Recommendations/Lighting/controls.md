---
hide:
  - toc
---


# Install Interior Lighting Controls

Interior lighting systems often operate continuously or on manual switches, consuming energy when spaces are unoccupied or when daylight provides adequate illumination. Installing occupancy sensors, daylight dimming controls, or networked lighting control systems reduces lighting energy consumption by automatically adjusting power based on occupancy and available daylight.

**ARC Code(s):** 2.7133, 2.7134, 2.7135

## Savings Calculation

Energy savings from lighting controls result from reduced operating hours when spaces are unoccupied and reduced power consumption when daylight or demand-based controls lower light output. The magnitude of savings depends on the control type, space characteristics, occupancy patterns, and availability of natural daylight.

This measure applies only to interior lighting controls that exceed the minimum requirements of 2021 IECC C405.2. Control types include occupancy sensors (wall, ceiling, or fixture-mounted), daylight dimming controls, high-end trim, dual occupancy and daylight sensors, integrated fixtures with room-based controls, Luminaire Level Lighting Controls (LLLCs), and Networked Lighting Controls (NLCs).

Control types achieve different savings levels based on their capabilities. Use the following table to select the appropriate savings factor:

| Lighting Control Type | Savings Factor (SF) |
|----------------------|---------------------|
| Combination of high-end trim and daylight dimming | 0.35 |
| Combination of high-end trim and occupancy sensors | 0.33 |
| Daylight dimming | 0.28 |
| Dual occupancy and daylight sensors | 0.38 |
| Integrated fixture with room-based controls | 0.38 |
| Luminaire-level lighting controls (LLLC) – Networked & Cx | 0.49 |
| Networked lighting controls (NLC) | 0.49 |
| No lighting controls | 0.0 |
| Occupancy sensors | 0.24 |

Annual energy savings from the controls are:

$$
\Delta kWh_{\text{ctrl}} = \frac{W_{\text{ctrl}} \times H_{\text{pre}} \times (\text{SF}_{\text{EE}} - \text{SF}_{\text{base}})}{1000}
$$

where:

- $\Delta kWh_{\text{ctrl}}$ = annual energy savings (kWh/yr)

- $W_{\text{ctrl}}$ = controlled lighting load (W)

- $H_{\text{pre}}$ = annual operating hours before controls installed (hrs/yr); use 5,793 hrs/yr if facility-specific operating hours cannot be determined

- $\text{SF}_{\text{EE}}$ = savings factor for installed control type (from table above)

- $\text{SF}_{\text{base}}$ = savings factor for baseline condition (0.0 for no controls)



### Peak Demand Savings

Summer peak demand savings:

$$
\Delta kW_{\text{summer}} = \frac{W_{\text{ctrl}} \times (\text{SF}_{\text{EE}} - \text{SF}_{\text{base}}) \times \text{CF}_{\text{OS}}}{1000}
$$

Winter peak demand savings:

$$
\Delta kW_{\text{winter}} = \frac{W_{\text{ctrl}} \times (\text{SF}_{\text{EE}} - \text{SF}_{\text{base}}) \times \text{CF}_{\text{OS}}}{1000}
$$

where:

- $\text{CF}_{\text{OS}}$ = occupancy sensor coincidence factor (19.8% for summer, 17.2% for winter)

!!! warning "Summer and Winter Period Definitions"

    For demand savings calculations, "summer" represents 3 months of the year and "winter" represents 9 months of the year. Apply the appropriate coincidence factor and calculation method for each period when estimating annual demand savings.

Important assumptions to state in the analysis:

- Lighting operating hours should be facility-specific
- Control savings factors assume proper installation, commissioning, and maintenance
- Networked controls (NLC/LLLC) require commissioning to achieve stated savings factors
- Coincidence factors for peak demand vary significantly by facility type and control strategy


## Anticipated Costs

Obtain equipment costs from vendor quotes or manufacturer pricing for the specific control type being recommended. Installation labor costs can be estimated using standard UC-ITAC rates and 15 min - 30 min per fixture, depending on the complexity of the job. 

## Report Requirements

In addition to the [typical report requirements](../how-to.md) and the recommendation-specific savings and costs, the recommendation should include a table documenting all control zones or areas. The table should follow this structure:

- **Column 1:** Zone description or location
- **Column 2:** Controlled lighting load (watts or kW)
- **Column 3:** Annual operating hours (hrs/yr)
- **Column 4:** Annual energy savings (kWh/yr)
- **Column 5:** Annual demand savings (kW-month)
- **Column 6:** Annual cost savings ($/yr)

If multiple zones are controlled, include a totals row at the bottom.

```latex
\begin{table}[H]
\centering
\caption{Interior Lighting Controls Summary}
\label{tab:lighting-controls}
\begin{tabular}{lcccccc}
\toprule
Zone/Location & Controlled & Operating & Energy & Demand & Cost \\
 & Load (kW) & Hours (hrs/yr) & Savings (kWh/yr) & Savings (kW-month) & Savings (\$/yr) \\
\midrule
Conference Rooms &  &  &  &  &  \\
Restrooms &  &  &  &  &  \\
Perimeter Offices &  &  &  &  &  \\
\midrule
\textbf{Total} & \textbf{} & \textbf{--} & \textbf{} & \textbf{} & \textbf{} \\
\bottomrule
\end{tabular}
\end{table}
```
