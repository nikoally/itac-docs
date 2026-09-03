# Power and Energy

An energy assessment starts with two different questions: **How much power does the equipment draw?** and **How much energy does it use over time?** Keeping those questions separate is essential when interpreting measurements and estimating savings.

## Power Versus Energy

- **Power** is the rate of energy transfer. A watt is one joule per second; a kilowatt is 1,000 watts. 

- **Energy** is the accumulated quantity transferred. A kilowatt-hour is the energy used by a steady 1 kW load operating for one hour.

For a constant load:

$$E = P \times t$$

With $P$ in kW and $t$ in hours, $E$ is in kWh.

Reducing operating hours saves energy without reducing the power drawn when equipment is on. Reducing the operating power can save energy too, but only if the equipment is on for the same amount of time. 

## Basic Electrical Relationships

### Ohm's Law

Voltage is the electrical potential difference that drives current. Current is the flow of electric charge, and resistance opposes that flow. For a resistive circuit:

$$V = IR$$

where $V$ is voltage in volts, $I$ is current in amperes, and $R$ is resistance in ohms. 

For a DC electrical load, electrical power is $P = VI$. For a purely resistive load, substituting Ohm's law gives:

$$P = VI = I^2R = \frac{V^2}{R}$$

!!! example "Space Heaters"

    A purely resistive heater has a nameplate power rating of 1200 W. It is supplied with 120 V RMS and stays fully on for 8 hours. How much energy does it use?
    
    \[\begin{align}
    E &= P \times t \\
    &= 1.2 \text{ kW} \times 8 \text{ h} \\
    &= 9.6 \text{ kWh} \\
    \end{align}\]

    Now, if we installed a thermostat that cycles the heater on and off, with an average duty cycle of 80% (meaning it now runs for 80% of the time), the energy use is reduced:

    \[\begin{align}
    t_{new} &= 8 \text{ h} \times 0.8 \\
    &= 6.4 \text{ h} \\
    E_{new} &= P \times t_{new} \\
    &= 1.2 \text{ kW} \times 6.4 \text{ h} \\
    &= 7.68 \text{ kWh} \\
    \end{align}\]

    We can then calculate the savings from installing the thermostat:
    
    \[\begin{align}
    \text{Savings} &= E - E_{new} \\
    &= 9.6 \text{ kWh} - 7.68 \text{ kWh} \\
    &= 1.92 \text{ kWh} \\
    \end{align}\]

## Thermal Energy and Power

Electrical and thermal units describe the same two quantities: energy and its rate of transfer. kW can describe heat output as well as electrical input.

A **British thermal unit (Btu)** is approximately the energy needed to raise one pound of water by 1°F. **MMBtu** means one million Btu. Btu/hr and MMBtu/hr are rates, not quantities of energy. There's a few conversions you need to know: 

- 1 Btu ≈ 1,055 J
- 1 MMBtu = 1,000,000 Btu
- 1 therm = 100,000 Btu = 0.1 MMBtu
- 1 kWh ≈ 3,412 Btu ≈ 0.003412 MMBtu
- 1 kW ≈ 3,412 Btu/hr ≈ 0.003412 MMBtu/hr

!!! note "Read the rating, not just the unit"

    A rating in Btu/hr may describe **fuel input** or **useful heat output**. They are not interchangeable. Also verify whether an abbreviation such as MBtu means thousands or millions in the source document; use MMBtu explicitly for millions here.

!!! example "Boiler fuel input versus useful heat"

    A boiler operates continuously at a **fuel input** of 15 MMBtu/hr for 6 hours. Assume an illustrative constant efficiency of 80%.

    $$E_{\text{input}} = 15 \times 6 = 90 \text{ MMBtu}$$

    $$E_{\text{useful}} = 90 \times 0.80 = 72 \text{ MMBtu}$$

    Its useful heat output rate is 12 MMBtu/hr. If the boiler cycles or operates at reduced load, use actual fuel input over time rather than multiplying its full-load rating by elapsed hours, similar to what we did with the duty cycle in the previous example.

## Check Your Understanding

**1. A machine's operating power stays the same, but its daily on-time is cut in half. What is the effect on energy use?**

??? question "Show answer"

    Its energy use is halved if the operating load is unchanged and off-state consumption is negligible. Its operating kW does not change. 

**2. Two boilers have the same fuel input rating, but one is more efficient. Do they deliver the same heat?**

??? question "Show answer"

    No. At the same actual fuel input, the more efficient boiler delivers more useful heat. To compare fuel consumption fairly, compare them while delivering the same useful heat, not merely while operating for the same time.

