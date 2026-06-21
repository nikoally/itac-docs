# Pumps

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin-bottom: 1em;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube-nocookie.com/embed/m3i_5xP9PYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Pumping systems are major energy consumers in industrial and commercial facilities. Pumps circulate chilled water, condenser water, hot water for heating, process fluids, and countless other applications. Understanding pump types, system characteristics, and efficiency considerations is essential for identifying energy savings opportunities.

## Pump Types

### Centrifugal Pumps

Centrifugal pumps are by far the most common type in HVAC and industrial applications. They use a rotating impeller to add velocity to the fluid, which is then converted to pressure as the fluid slows down in the volute or diffuser.

**Key characteristics:**
- Flow varies inversely with system pressure (high pressure = lower flow)
- Smooth, continuous flow
- Relatively low maintenance
- Well-suited for clean liquids
- Performance follows the affinity laws

**Common applications:**
- Chilled water circulation
- Condenser water circulation
- Hot water heating systems
- Process cooling water
- Boiler feedwater (for smaller boilers)

### Positive Displacement Pumps

Positive displacement pumps move a fixed volume of fluid with each rotation or stroke. Common types include gear pumps, lobe pumps, piston pumps, and progressive cavity pumps.

**Key characteristics:**
- Flow is nearly constant regardless of system pressure
- Can generate very high pressures
- Require pressure relief protection
- More maintenance than centrifugal pumps
- Do NOT follow the affinity laws in the same way

**Common applications:**
- Viscous fluids (oils, syrups, slurries)
- Metering and dosing (chemical injection)
- High-pressure applications
- Sludge and wastewater

**For ITAC assessments**, you will primarily encounter centrifugal pumps. The discussion below focuses on centrifugal pumps unless otherwise noted.

## System Curves and Operating Points

A pumping system's behavior is determined by the interaction between the pump curve and the system curve.

### Pump Curve

The pump curve shows the relationship between flow rate (GPM) and head (feet of water) that the pump can deliver. Pump manufacturers provide these curves based on testing. A typical centrifugal pump curve shows:

- **Maximum head at zero flow** (shutoff head)
- **Decreasing head as flow increases**
- **Efficiency curves** showing peak efficiency (best efficiency point or BEP) at a specific flow
- **Power consumption** at various flows

### System Curve

The system curve shows the head required by the piping system at various flow rates. It has two components:

**Static head:** The elevation difference the pump must overcome. This is constant regardless of flow rate.

$$H_{\text{static}} = z_2 - z_1$$

Where $z_2$ is the discharge elevation and $z_1$ is the suction elevation.

**Friction head:** The pressure drop due to friction in pipes, fittings, valves, and equipment. Friction head increases with flow rate, roughly proportional to flow squared:

$$H_{\text{friction}} \propto Q^2$$

**Total system head:**

$$H_{\text{system}} = H_{\text{static}} + H_{\text{friction}}$$

### Operating Point

The operating point is where the pump curve intersects the system curve. This is the flow and head at which the system will actually operate.

!!! example

    A chilled water pump has a rated capacity of 500 GPM at 80 feet of head. The system has 30 feet of static head and friction losses that vary with flow.

    At 400 GPM, friction head might be 35 feet, giving total system head of 65 feet. If the pump curve shows it can deliver 70 feet at 400 GPM, and the system requires 65 feet, the system will operate at approximately 400 GPM (where the curves intersect).

## Pump Efficiency and the Best Efficiency Point (BEP)

Pump efficiency varies with flow rate. The **best efficiency point (BEP)** is the flow rate where the pump operates most efficiently. Operating significantly away from BEP results in:

- Lower efficiency (higher energy consumption per gallon pumped)
- Increased wear and shorter pump life
- Potential for cavitation, vibration, and noise
- Higher NPSHr (net positive suction head required)

!!! tip "Pump Selection Rule"

    Select pumps to operate within 80-110% of BEP flow for optimal efficiency and reliability. Operating below 60% or above 120% of BEP significantly increases problems.

Pump efficiency is defined as:

$$\eta_{\text{pump}} = \frac{\text{Water horsepower}}{\text{Brake horsepower}} = \frac{\rho g Q H}{P}$$

Where:
- $\rho$ = Fluid density
- $g$ = Gravitational constant
- $Q$ = Flow rate
- $H$ = Total head
- $P$ = Power input to pump shaft

For water at standard conditions, this simplifies to:

$$\text{Pump efficiency} = \frac{\text{GPM} \times \text{Head (ft)} \times \text{SG}}{3{,}960 \times \text{HP}}$$

!!! example

    A pump delivers 300 GPM at 60 feet of head and requires 5 HP of input power (at the pump shaft, not the motor).

    $$\eta = \frac{300 \times 60 \times 1.0}{3{,}960 \times 5} = \frac{18{,}000}{19{,}800} = 0.909 \text{ or } 90.9\%$$

    This pump is operating near its BEP with excellent efficiency.

## Affinity Laws Application to Pumps

As discussed in the Affinity Laws section, centrifugal pumps follow predictable relationships when speed changes:

- Flow is proportional to speed
- Head is proportional to speed squared
- Power is proportional to speed cubed

This cubic power relationship is why VFDs are so effective for pump energy savings when flow requirements vary.

!!! example

    A constant-speed cooling water pump runs 24/7 at 600 GPM, consuming 15 kW. Summer peak demand requires 600 GPM, but spring and fall only need 400 GPM (67% of design flow).

    With a VFD, speed can be reduced to 67% during shoulder seasons:

    $$\frac{W_2}{W_1} = (0.67)^3 = 0.30$$

    $$W_2 = 15 \text{ kW} \times 0.30 = 4.5 \text{ kW}$$

    If the system operates at reduced load 50% of the year:

    $$\text{Annual savings} = (15 - 4.5) \text{ kW} \times 4{,}380 \text{ hr/yr} \times \$0.11/\text{kWh} = \$5{,}054/\text{yr}$$

## VFD Benefits for Pumps

Variable frequency drives offer several advantages for pumping systems:

**1. Energy savings on variable flow systems**

Any system where flow varies with load is a candidate for VFD energy savings. Common examples:
- Chilled water pumps (cooling load varies with weather and occupancy)
- Condenser water pumps (reject heat varies with chiller load)
- Hot water pumps (heating load varies with weather)
- Process cooling pumps (process demand varies with production)

**2. Pressure control**

VFDs can maintain constant pressure at a setpoint, even as demand changes. This eliminates the need for:
- Bypass valves (which waste energy by circulating excess flow)
- Throttling valves (which waste energy creating artificial restriction)

**3. Reduced water hammer and mechanical stress**

VFDs provide soft starting and stopping, reducing pressure surges and extending system life.

**4. Reduced maintenance**

Lower operating speeds (when flow demand is low) reduce bearing wear, seal wear, and overall mechanical stress.

!!! tip "Identifying Cavitation"

    During facility walk-throughs, listen for unusual noise from pumps. Cavitation sounds like rocks or marbles rattling inside the pump. If you hear this, NPSHa is likely insufficient.

## Practical Sizing and Oversizing Problems

Pumps are often oversized due to:
- Conservative safety factors applied during design
- Changes in the process or building use
- Selecting the next larger standard pump size

**Consequences of oversizing:**

1. **Operating away from BEP:** Reduces efficiency, increases wear
2. **Throttling required:** Valves partially closed to restrict flow, wasting energy
3. **Bypass operation:** Excess flow circulated back to source, wasting energy
4. **Higher capital cost:** Larger pump, larger motor, larger starter
5. **Higher maintenance:** Increased wear from operating away from BEP

!!! note "Identifying Oversized Pumps"

    During ITAC assessments, look for:

    - Throttle valves or bypass valves partially closed during normal operation
    - Pumps operating below 60% of rated flow (check nameplate GPM vs. measured flow)
    - Hot pump motors (overheating from friction losses in throttling)
    - Excessive noise or vibration (from operating away from BEP)
    - Low differential pressure across equipment (indicating flow is higher than needed)

## ITAC Assessment Approach

When evaluating pumping systems:

### 1. Identify the System Type

- Constant flow or variable flow?
- Primary application (chilled water, condenser water, hot water, process)?
- Operating schedule (24/7, scheduled, intermittent)?

### 2. Measure Current Operation

- Motor power draw (kW) or current
- Flow rate (GPM) if accessible
- Differential pressure across pump
- Operating hours per year

### 3. Assess Control Strategy

- Constant speed with throttling valves? → VFD opportunity
- Constant speed with bypass flow? → VFD opportunity
- On/off control with wide deadband? → VFD opportunity
- Already has VFD? → Check if properly commissioned

### 4. Estimate Savings Potential

- Determine load profile (% of time at various flow rates)
- Apply affinity laws to estimate power at reduced speeds
- Calculate annual energy savings
- Account for VFD losses (typically 3-5%)

!!! example "VFD Assessment"

    **Given:**
    - Chilled water pump: 50 HP motor, 90% motor efficiency, 80% pump efficiency
    - Current operation: Constant speed, throttle valve partially closed
    - Measured power: 40 kW
    - Load profile: 100% flow for 3,000 hr/yr, 70% flow for 5,000 hr/yr
    - Electricity cost: $0.11/kWh

    **Analysis:**

    At 70% flow with VFD:
    $$P_{\text{VFD}} = 40 \text{ kW} \times (0.70)^3 \times 1.03 \text{ (VFD loss)} = 14.1 \text{ kW}$$

    Annual savings:
    $$(40 - 14.1) \text{ kW} \times 5{,}000 \text{ hr} \times \$0.11/\text{kWh} = \$14{,}245/\text{yr}$$

    With VFD cost of $8,000 installed, simple payback = 0.56 years.

## Summary

Pumping systems represent significant energy consumption in most facilities. The keys to efficient pumping include:

- **Proper sizing:** Select pumps to operate near BEP
- **VFDs for variable loads:** Avoid throttling and bypass control
- **System optimization:** Reduce static and friction head where possible
- **Maintenance:** Keep pumps, motors, and systems clean and well-maintained
- **Monitoring:** Track power consumption and look for degradation over time

Understanding these principles allows you to quickly identify high-value opportunities during ITAC assessments and explain the benefits clearly to facility personnel.
