---
hide:
  - toc
---


# Install Interior Lighting Controls

Interior lighting systems often operate continuously or on manual switches, consuming energy when spaces are unoccupied or when daylight provides adequate illumination. Installing occupancy sensors, daylight dimming controls, or networked lighting control systems reduces lighting energy consumption by automatically adjusting power based on occupancy and available daylight.

**ARC Code(s):** 

- 2.7134 (Use Photocell Controls)
- 2.7135 (Install Occupancy Sensors)

## Savings Calculation

Energy savings from lighting controls result from reduced operating hours when spaces are unoccupied and reduced power consumption when daylight or demand-based controls lower light output. The magnitude of savings depends on the control type, space characteristics, occupancy patterns, and availability of natural daylight.

Annual energy savings from the controls are:

$$
\Delta \text{kWh} = W \times H \times (\text{SF}_{\text{EE}} - \text{SF}_{\text{base}})
$$

where:

- $W$ = controlled lighting load (kW)

- $H$ = annual operating hours before controls installed (hrs/yr)

- $\text{SF}_{\text{EE}}$ = savings factor for installed control type (from table above)

- $\text{SF}_{\text{base}}$ = savings factor for baseline condition (0.0 for no controls)

| Lighting Control Type | Savings Factor (SF) |
|----------------------|---------------------|
| Daylight dimming | 0.28 |
| Dual occupancy and daylight sensors | 0.38 |
| No lighting controls | 0.0 |
| Occupancy sensors | 0.24 |


### Annual Demand Savings

Peak demand savings:

$$
\Delta \text{kW} = W \times (\text{SF}_{\text{EE}} - \text{SF}_{\text{base}})
$$

Annual demand savings in kW-month are calculated by applying coincidence factors to the summer and winter demand savings:

$$
\Delta \text{kW-months} = \Delta kW \times (\text{CF}_{\text{summer}} \times 3 + \text{CF}_{\text{winter}} \times 9)
$$

where:

- $\text{CF}_{\text{summer}}$ = summer coincidence factor (0.198 for manufacturing facilities)

- $\text{CF}_{\text{winter}}$ = winter coincidence factor (0.172 for manufacturing facilities)


## Anticipated Costs

Obtain equipment costs from vendor quotes or manufacturer pricing for the specific control type being recommended. Installation labor costs can be estimated using the high-skill labor rate and 15 min - 30 min per control fixture (i.e. the number of occupancy sensors), depending on the complexity of the job. 