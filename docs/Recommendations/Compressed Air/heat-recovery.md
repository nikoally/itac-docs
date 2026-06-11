---
hide:
  - toc
---

# Compressor Heat Recovery

Recovering waste heat from electric air compressors can offset heating fuel consumption in facilities with space heating or process heating loads. The approach accounts for the thermodynamic reality that not all electrical input to a compressor becomes recoverable waste heat, and that not all recoverable heat necessarily displaces purchased heating fuel.

**ARC Code(s):** X.XXXX

## Technical Background

Electric air compressors convert electrical energy into compressed air and waste heat. The compression process is thermodynamically inefficient; the majority of input electrical energy is rejected as heat through the oil cooler, aftercooler, and compressor housing. Only a small fraction of the input energy is retained as useful work in the compressed air stream (i.e., the enthalpy increase of the air leaving the system).

For a typical industrial air compressor, approximately 80% to 93% of input electrical energy is converted to heat rejected through the oil cooler, aftercooler, and compressor housing. The DOE/Compressed Air Challenge *Sourcebook* uses a baseline assumption of roughly 80% recoverable heat at full load, yielding approximately 50,000 Btu/hr per 100 cfm of compressor capacity.

The simplest form of heat recovery is air-to-air exhaust venting: instead of venting the heated compressor room air to the outdoors, ductwork and dampers redirect the warm exhaust air into adjacent facility spaces during the heating season. This approach displaces fuel that would otherwise be consumed by the facility's existing heating system.

## Background

The fundamental unit conversion underlying this calculation is:

$$
1 \text{ HP} = 746 \text{ W} = 2{,}545 \text{ Btu/hr}
$$

This is a standard thermodynamic equivalence (not an empirical approximation). It follows directly from the definition of mechanical horsepower: 1 HP = 746 watts, and 1 watt = 3.412 Btu/hr, so 746 x 3.412 = 2,545 Btu/hr. The equivalent in SI terms is 1 kW = 3,412 Btu/hr.

This conversion gives the total energy equivalent of the electrical input. It does not mean that all input energy becomes waste heat. A portion of the input energy is retained as useful work in the compressed air (i.e., the enthalpy increase of the air stream leaving the system). The remainder is rejected as heat through the compressor's cooling systems.

The heat rejection fraction depends on compressor type:

| Compressor Type | Heat Rejection Factor | Source / Notes |
|---|---|---|
| Lubricant-injected rotary screw (air-cooled) | 0.80 to 0.90 | DOE Sourcebook; majority of heat in oil cooler and aftercooler |
| Oil-free rotary screw | 0.85 to 0.93 | Higher discharge temps yield more recoverable energy |
| Reciprocating (air-cooled) | 0.50 to 0.70 | Lower recovery potential; heat split across cylinders and aftercooler |
| Centrifugal | 0.80 to 0.90 | Intercooler and aftercooler are primary recovery points |

For air-cooled compressors, nearly all of the rejected heat warms the compressor room air. In a typical installation, the compressor room is ventilated to prevent overheating, and this warm exhaust air (typically 20 to 40 F above ambient) is vented outdoors. Redirecting this exhaust into the facility during the heating season captures the heat at no additional energy cost.

## Savings Calculation

### Recoverable Heat

The total heat input to the compressor is:

$$
Q_{\text{input}} = P_{\text{motor}} \times 2{,}545 \text{ Btu/hr per HP}
$$

Or, if using kW:

$$
Q_{\text{input}} = P_{\text{motor}} \times 3{,}412 \text{ Btu/hr per kW}
$$

The recoverable waste heat is:

$$
Q_{\text{recoverable}} = Q_{\text{input}} \times f_{\text{rejection}}
$$

where:

- $Q_{\text{input}}$ = total heat equivalent of electrical input (Btu/hr)

- $P_{\text{motor}}$ = compressor motor power (HP or kW)

- $f_{\text{rejection}}$ = heat rejection factor (decimal, from table above)

### Heating Season

Heat recovery provides value only when the facility has a heating load. The number of heating months per year depends on climate and facility type. During the heating season, the compressor's recoverable heat displaces purchased heating fuel. Outside the heating season, the heat is rejected to ambient as it would be without a heat recovery system.

The annual compressor operating hours during the heating season are:

$$
H_{\text{heating}} = H_{\text{annual}} \times \frac{N_{\text{heating}}}{12}
$$

where:

- $H_{\text{annual}}$ = total annual compressor operating hours (hrs/yr)

- $N_{\text{heating}}$ = number of heating months per year (months/yr)

!!! note "Heating Season Definition"

    In northern climates, the heating season typically runs from October through April (approximately 7 months). In milder climates, the useful period may be shorter. Facilities with year-round heating loads (e.g., domestic hot water, process heating) may use up to 12 heating months.

### Displaced Fuel Savings

The recovered heat displaces fuel consumed by the existing heating system. For fossil fuels measured in MMBtu:

$$
\text{Fuel Displaced (MMBtu)} = \frac{Q_{\text{recoverable}} \times H_{\text{heating}}}{1{,}000{,}000 \times \eta_{\text{heating}}}
$$

For electric resistance heating:

$$
\text{Energy Displaced (kWh)} = \frac{Q_{\text{recoverable}} \times H_{\text{heating}}}{3{,}412 \times \eta_{\text{heating}}}
$$

where:

- $\eta_{\text{heating}}$ = efficiency of the existing heating system (decimal)

Common heating system efficiencies:

| Heating System Type | Typical System Efficiency |
|---|---|
| Natural Gas Boiler/Furnace | 80 to 95% |
| Propane Boiler/Furnace | 80 to 92% |
| Oil Boiler/Furnace | 80 to 88% |
| Electric Resistance | ~100% |

### Annual Cost Savings

$$
\text{Annual Savings} = \text{Fuel Displaced} \times \text{Fuel Cost per Unit}
$$

### Electric Resistance Demand Savings

When the displaced heating system is electric resistance, the demand reduction during heating months provides additional demand charge savings:

$$
\Delta kW = \frac{Q_{\text{recoverable}}}{3{,}412 \times \eta_{\text{heating}}}
$$

$$
\Delta kW\text{-months} = \Delta kW \times N_{\text{heating}}
$$

$$
\text{Demand Savings} = \Delta kW\text{-months} \times R_d
$$

where $R_d$ is the facility demand rate (\$/kW-month).

## Anticipated Costs

Implementation costs for air-to-air compressor heat recovery include:

- **Ductwork**: Supply and return ducts to route warm compressor room exhaust air to adjacent heated spaces. Duct sizing should maintain low static pressure to avoid interfering with the compressor's cooling airflow.
- **Dampers**: Motorized or manual dampers to switch between venting outdoors (summer) and recirculating indoors (heating season). Automatic dampers with thermostat control are preferred.
- **Controls**: Temperature-based controls to open/close dampers based on outdoor temperature or compressor room temperature. Prevents overheating of receiving spaces.

Typical installed cost ranges from $2,000 to $10,000 depending on duct run length, number of dampers, and control complexity.

Simple payback periods typically range from 0.5 to 3 years depending on:

- Compressor size and utilization (larger, heavily loaded compressors provide more recoverable heat)
- Length of heating season (longer heating season = greater savings)
- Fuel cost (higher fuel cost = shorter payback)
- Proximity of heated spaces to compressor room (shorter duct runs reduce cost)

Facilities with large compressors (>50 HP), expensive heating fuel (propane, fuel oil), and long heating seasons realize the greatest savings.

---

## Interactive Heat Recovery Calculator

Use the dedicated calculator to estimate energy and cost savings from implementing compressor heat recovery. Enter your compressor and heating system parameters to see the annual fuel savings analysis.

[Open Heat Recovery Calculator](../../calculators/heat-recovery.md){ .md-button }
