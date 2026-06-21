# Affinity Laws

Fans and pumps are motor-driven equipment that follow predictable relationships when their rotational speed changes. These relationships, called the affinity laws (also known as fan laws or pump laws), are the foundation for understanding why Variable Frequency Drives (VFDs) save so much energy.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin-bottom: 1em;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube-nocookie.com/embed/siXbmrNsoCQ?si=-eQoxMvU8ZHJiMzC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## The Three Affinity Laws

For a fan or pump at different speeds, with constant fluid density and system geometry:

**Flow is proportional to speed:**

$$\frac{Q_2}{Q_1} = \frac{N_2}{N_1}$$

**Pressure (or head) is proportional to speed squared:**

$$\frac{P_2}{P_1} = \left(\frac{N_2}{N_1}\right)^2$$

**Power is proportional to speed cubed:**

$$\frac{W_2}{W_1} = \left(\frac{N_2}{N_1}\right)^3$$

Where:

- $Q$ = Flow rate (CFM for air, GPM for liquids)
- $N$ = Rotational speed (RPM)
- $P$ = Pressure (for fans) or head (for pumps)
- $W$ = Power consumption
- Subscript 1 = initial condition
- Subscript 2 = new condition

## Why VFDs Save So Much Energy

The cubic relationship between speed and power is the key to VFD energy savings. Small reductions in speed produce dramatic reductions in power consumption.

!!! example

    A fan operates at 1,200 RPM and consumes 50 kW. If a VFD reduces the speed to 960 RPM (80% of original speed), what is the new power consumption?

    Using the affinity laws:

    $$\frac{N_2}{N_1} = \frac{960}{1{,}200} = 0.8$$

    $$\frac{W_2}{W_1} = (0.8)^3 = 0.512$$

    $$W_2 = 50 \text{ kW} \times 0.512 = 25.6 \text{ kW}$$

    The power consumption drops to 25.6 kW, a savings of 49%. This is why slowing a fan or pump to 80% speed saves about 50% of the energy, not 20%.

## Practical Application: Part-Load Operation

Most HVAC systems and many process systems operate at part load most of the time. Building cooling loads vary with outdoor temperature and occupancy. Process demands fluctuate with production schedules.

**Traditional throttling approach:**

Without a VFD, operators reduce flow by:
- Closing a damper (for fans)
- Throttling a valve (for pumps)

This maintains high speed while creating artificial resistance. The pressure drop across the damper or valve wastes energy. The fan or pump still operates at nearly full power even though it delivers reduced flow.

**VFD approach:**

A VFD reduces the motor speed to match the required flow. Because power drops with the cube of speed, energy savings are substantial.

!!! example

    An air handler supplies 10,000 CFM at full speed (1,200 RPM) and consumes 40 kW. During mild weather, only 6,000 CFM is needed.

    With damper control: The fan still runs at 1,200 RPM, consuming nearly 40 kW, while a damper restricts flow.

    With VFD control: Using the affinity laws:

    $$\frac{N_2}{N_1} = \frac{Q_2}{Q_1} = \frac{6{,}000}{10{,}000} = 0.6$$

    $$\frac{W_2}{W_1} = (0.6)^3 = 0.216$$

    $$W_2 = 40 \text{ kW} \times 0.216 = 8.6 \text{ kW}$$

    The VFD approach uses only 8.6 kW instead of 40 kW, a savings of 78%.

## Limitations and Considerations

!!! note "Affinity Law Assumptions"

    The affinity laws assume:

    1. The fan or pump operates on the same system (same ductwork or piping)
    2. Fluid properties remain constant
    3. Efficiency changes with speed are negligible (reasonable approximation for moderate speed changes)

!!! tip

    In real systems, efficiency does change somewhat with speed, but the cubic relationship still dominates. Actual savings may be 5-15% less than predicted by the affinity laws alone, still representing enormous energy savings.

## Why Affinity Laws Matter for ITAC Work

The affinity laws are the fundamental reason why VFDs on fans and pumps are among the highest-value energy efficiency measures available. When you evaluate a facility and find constant-speed fans or pumps serving variable loads, you immediately know that VFDs could save 30-70% of the motor energy consumption, depending on the load profile.

---

In the next section, you'll see how these affinity law principles are applied in practice through Variable Frequency Drives, which control motor speed electronically to achieve the energy savings we've calculated here.
