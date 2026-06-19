---
hide:
  - toc
---

# Repair Compressed Air Leaks (Old Method)

Compressed air leaks are a significant source of energy waste in industrial facilities. Leaks occur at connections, fittings, valves, and distribution system components, causing compressors to run more frequently or at higher loads to maintain system pressure. Repairing leaks reduces compressor energy consumption and demand.

**ARC Code(s):** 

- 2.4236 (Eliminate Leaks in Inert Gas and Compressed Air Lines/Valves)

---

## Savings Calculation

### Leak Rate Determination from Runtime Data

Compressed air leak rates can be determined by analyzing compressor power consumption during non-production hours when production equipment is idle. During these periods, compressor load represents only system leaks and minimal continuous loads. This method requires electrical monitoring data collected over at least one week to capture representative operating patterns.

The methodology differs based on compressor control type:

- **VFD (Variable Frequency Drive) compressors** modulate output continuously, requiring interpolation from power-flow performance curves
- **Non-VFD compressors** operate in discrete states (loaded, unloaded, off), requiring state-based analysis

!!! note "Period Selection Criteria"

    The selected non-production period should be:

    - At least 2-4 hours in duration for stable averaging
    - Free of startup/shutdown transients or maintenance activities
    - Representative of typical non-production conditions
    - At stable system pressure (verify from pressure logs if available)

### VFD Compressor Analysis

VFD compressors vary motor speed to modulate output, creating a continuous relationship between electrical power and air flow. Leak rate is determined by interpolating CFM output from measured power during non-production hours.

Obtain the compressor's power-to-flow relationship from CAGI (Compressed Air and Gas Institute) datasheets or manufacturer performance curves as discrete (kW, CFM) pairs. CAGI datasheets provide standardized performance data at various load points. A minimum of 4-6 data points spanning the operating range is required, with particular attention to the low-power region where leak-only operation typically occurs.

For each power measurement during the non-production period, interpolate the corresponding CFM using linear interpolation between adjacent performance points. Average the interpolated CFM values across all timesteps to obtain the facility leak rate.

### Non-VFD Compressor Analysis

Non-VFD compressors operate in discrete states with fixed power consumption and output at each state. Define three operating states from nameplate data:

- **Loaded**: Motor running at full power producing rated CFM capacity
- **Unloaded**: Motor running at 15-30% of full power with intake closed (typically 0 CFM, but verify with manufacturer documentation)
- **Off**: Motor not running, <5% of full power (parasitic losses only), 0 CFM

Assign power thresholds for each state using hysteresis margins (5-10% of state power) to prevent erratic state switching from measurement noise. For each timestep during the non-production period, assign the measured power to the appropriate state. Calculate the time-weighted average CFM by summing the product of flow and time duration for each timestep, then dividing by total period duration.

!!! warning "Unloaded Flow Verification"

    Most rotary screw and reciprocating compressors produce zero CFM when unloaded (intake valve closed). However, some designs may produce minimal flow in the unloaded state. Consult manufacturer documentation to determine the correct unloaded CFM value. If unknown, assume 0 CFM as a conservative estimate.

Energy savings from compressed air leak repair result from reduced compressor runtime and loading. The calculation uses the facility-specific leak rate determined from runtime analysis and the compressor system's specific power (kW per 100 CFM).

### Annual Energy Savings

Annual energy savings are calculated as:

$$
\Delta \text{kWh} = \frac{Q_{\text{repaired}} \times H \times P_{\text{specific}}}{100}
$$

where:

- $\Delta \text{kWh}$ = annual energy savings (kWh/yr)

- $Q_{\text{repaired}}$ = leak rate repaired (CFM), typically 50-80% of identified leak rate

- $H$ = annual compressor operating hours (hrs/yr)

- $P_{\text{specific}}$ = specific power of compressed air system (kW per 100 CFM)

Specific power depends on compressor type and operating efficiency. For VFD compressors, calculate from the CAGI datasheet power-flow curve in the operating region. For non-VFD compressors, calculate from loaded state values:

$$
P_{\text{specific}} = \frac{P_{\text{loaded}} \times 100}{Q_{\text{loaded}}}
$$

Important assumptions to state in the analysis:

- Leak repair percentage (50-80% of identified leaks is realistic; 100% repair is rarely achievable)
- Annual operating hours should match actual compressor power-on time (this is often 24/7)

### Peak Demand Savings

Average demand reduction follows directly from the leak rate and specific power:

$$
\Delta \text{kW} = \frac{Q_{\text{repaired}} \times P_{\text{specific}}}{100}
$$

where $\Delta \text{kW}$ is the instantaneous peak demand reduction (kW). Convert to kW-months for the demand savings column, applying summer and winter coincidence factors:

$$
\Delta \text{kW-months} = \Delta \text{kW} \times (\text{CF}_{\text{summer}} \times 3 + \text{CF}_{\text{winter}} \times 9)
$$

where:

- $\text{CF}_{\text{summer}}$ = summer coincidence factor (0.947)

- $\text{CF}_{\text{winter}}$ = winter coincidence factor (0.743)


## Anticipated Costs

Implementation costs for leak repair include ultrasonic leak detection survey costs, repair labor, and replacement components (fittings, valves, hoses, flexible couplings). Survey costs depend on facility size and accessibility. Labor costs vary with leak location, accessibility, and whether repairs require system shutdown. Component costs depend on leak type and size.

Estimate the number of individual leaks from the total leak rate using typical leak sizes. Significant compressed air leaks range from 5-50 CFM each depending on orifice size and system pressure.

Many utilities offer incentives for compressed air leak surveys and leak repair programs. Check with the local utility energy efficiency program for current prescriptive rebates or custom incentive opportunities. Incentive structures typically cover a portion of survey costs and may provide per-CFM payments for verified leak repairs.

Simple payback periods for comprehensive leak repair programs typically range from 6 months to 2 years depending on leak severity, repair costs, and utility incentives.

---

## Interactive Leak Rate Calculator

Use the dedicated calculator to automatically determine leak rates from compressor power data. Upload a CSV file with power measurements, configure the analysis parameters, and calculate the facility leak rate for use in the savings calculation above.

[Open Leak Rate Calculator](../../calculators/leak-rate.md){ .md-button }

