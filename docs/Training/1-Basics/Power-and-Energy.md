# Power and Energy

## Part 1: Basic Electrical Relationships

### Ohm's Law

The foundation of electrical circuit analysis is Ohm's Law, which describes the relationship between voltage, current, and resistance:

$$V = IR$$

Where:

- $V$ = Voltage (Volts, V)
- $I$ = Current (Amperes, A)
- $R$ = Resistance (Ohms, $\Omega$)

Voltage represents the electrical potential difference that drives current through a circuit. Current is the flow of electric charge. Resistance opposes that flow.

**Example:** If a heating element has a resistance of 10 $\Omega$ and draws 12 A of current, the voltage across it is:

$$V = (12 \text{ A})(10 \text{ }\Omega) = 120 \text{ V}$$

### Electrical Power

Power is the rate at which energy is transferred or consumed. For electrical systems, power can be expressed in several equivalent forms derived from Ohm's Law:

$$P = IV$$

Substituting $V = IR$ gives us:

$$P = I(IR) = I^2R$$

Alternatively, substituting $I = \frac{V}{R}$ gives us:

$$P = \frac{V^2}{R}$$

Where:

- $P$ = Power (Watts, W)
- $I$ = Current (Amperes, A)
- $V$ = Voltage (Volts, V)
- $R$ = Resistance (Ohms, $\Omega$)

**Example:** A motor draws 15 A at 480 V. Its power consumption is:

$$P = (15 \text{ A})(480 \text{ V}) = 7{,}200 \text{ W}$$

### The Watt

One Watt represents one Joule of energy transferred per second:

$$1 \text{ W} = 1 \frac{\text{J}}{\text{s}}$$

This is a rate, not a quantity of energy. When you see a 100 W light bulb, that tells you how quickly it uses energy, not how much total energy it uses.

## Part 2: Power Units in Practice

### Kilowatts (kW)

In industrial settings, power consumption is typically measured in kilowatts rather than watts because the numbers become unwieldy otherwise.

$$1 \text{ kW} = 1{,}000 \text{ W}$$

**Converting our motor example:**

$$P = 7{,}200 \text{ W} \times \frac{1 \text{ kW}}{1{,}000 \text{ W}} = 7.2 \text{ kW}$$

This motor operates at 7.2 kW. On a utility bill, you may see "demand charges" based on peak kW usage during a billing period.

### Kilowatt-Hours (kWh)

While kW measures the rate of energy use, kWh measures the total quantity of energy consumed over time. 

$$\text{Energy} = \text{Power} \times \text{Time}$$

$$\text{kWh} = \text{kW} \times \text{hours}$$

**Example:** If our 7.2 kW motor runs for 8 hours, it consumes:

$$E = (7.2 \text{ kW})(8 \text{ h}) = 57.6 \text{ kWh}$$

!!! tip

    On utility bills, you pay for kWh consumed (consumption charges) and often for peak kW demand (demand charges). These are separate line items.

### Summary of Electrical Units

| Quantity | Unit | Symbol | What It Measures |
|----------|------|--------|------------------|
| Voltage | Volt | V | Electrical potential difference |
| Current | Ampere | A | Flow of electric charge |
| Resistance | Ohm | $\Omega$ | Opposition to current flow |
| Power | Watt / Kilowatt | W / kW | Rate of energy transfer |
| Energy | Kilowatt-hour | kWh | Total energy consumed |

## Part 3: Thermal Energy Units

### The BTU

When we move beyond electrical systems to thermal processes (boilers, furnaces, ovens, HVAC), we often use British Thermal Units (BTU). By definition, one BTU is the amount of energy required to raise the temperature of one pound of water by one degree Fahrenheit.

$$1 \text{ BTU} \approx 1{,}055 \text{ J}$$

### BTU/hr: Thermal Power

Just as kW measures electrical power, BTU/hr measures thermal power (the rate of heat transfer).

$$\text{BTU/hr} = \frac{\text{BTU}}{\text{hour}}$$

A furnace rated at 100,000 BTU/hr can deliver 100,000 BTU of heat energy every hour it operates at full capacity.

### MMBtu: Scaling Up

In industrial settings, thermal energy quantities become very large. We use MMBtu (one million BTU) to keep numbers manageable.

$$1 \text{ MMBtu} = 1{,}000{,}000 \text{ BTU} = 10^6 \text{ BTU}$$

!!! note "MMBtu Notation"

    The "MM" comes from the Roman numeral system where M = 1,000, so MM = 1,000 × 1,000 = 1,000,000. You may also see this written as MBtu in some contexts, but MMBtu is standard in the energy industry.

### MMBtu/hr: Industrial Thermal Power

For large equipment like industrial boilers, we measure thermal power in MMBtu/hr.

$$\text{MMBtu/hr} = \frac{\text{MMBtu}}{\text{hour}}$$

**Example:** A boiler rated at 15 MMBtu/hr operating for 6 hours delivers:

$$E = (15 \text{ MMBtu/hr})(6 \text{ h}) = 90 \text{ MMBtu}$$

## Part 4: Connecting Electrical and Thermal Units

### The Conversion Factor

Since both kWh and BTU measure energy, we can convert between them:

$$1 \text{ kWh} = 3{,}412 \text{ BTU}$$

This conversion is exact by definition.

### Converting kWh to MMBtu

$$1 \text{ kWh} = 3{,}412 \text{ BTU} \times \frac{1 \text{ MMBtu}}{1{,}000{,}000 \text{ BTU}} = 0.003412 \text{ MMBtu}$$

Or equivalently:

$$1 \text{ MMBtu} = \frac{1{,}000{,}000 \text{ BTU}}{3{,}412 \text{ BTU/kWh}} \approx 293.1 \text{ kWh}$$

### Converting kW to MMBtu/hr

Since these are both rates (power), the same conversion factor applies:

$$1 \text{ kW} = 0.003412 \text{ MMBtu/hr}$$

$$1 \text{ MMBtu/hr} \approx 293.1 \text{ kW}$$

**Example:** An electric resistance heater operates at 50 kW. Express this in MMBtu/hr:

$$P = 50 \text{ kW} \times 0.003412 \frac{\text{MMBtu/hr}}{\text{kW}} = 0.171 \text{ MMBtu/hr}$$

## Part 5: Practical Applications

### Reading a Utility Bill

When you review a facility's utility bills, you will encounter:

**Electric Bill:**

- kWh consumed (energy charge)
- Peak kW demand (demand charge)
- Rate structures in $/kWh and $/kW

**Natural Gas Bill:**

- Therms or CCF consumed (1 therm = 100,000 BTU = 0.1 MMBtu)
- Sometimes reported directly in MMBtu
- Rate structures in $/therm or $/MMBtu

### Comparing Energy Sources

**Example:** A facility can heat a process with either electricity at $0.12/kWh or natural gas at $1.05/CCF. Which is cheaper per unit of energy delivered?

First, we need to convert CCF to MMBtu. One CCF (hundred cubic feet) of natural gas contains approximately 1.03 therms of energy, and since 1 therm = 0.1 MMBtu:

$$1 \text{ CCF} \approx 1.03 \text{ therms} \times 0.1 \frac{\text{MMBtu}}{\text{therm}} = 0.103 \text{ MMBtu}$$

For electricity:

$$\frac{\$0.12}{\text{kWh}} \times \frac{1 \text{ kWh}}{0.003412 \text{ MMBtu}} = \frac{\$35.17}{\text{MMBtu}}$$

For natural gas:

$$\frac{\$1.05}{\text{CCF}} \times \frac{1 \text{ CCF}}{0.103 \text{ MMBtu}} = \frac{\$10.19}{\text{MMBtu}}$$

Natural gas is significantly cheaper per unit of energy in this example.

!!! tip

    This comparison assumes 100% efficiency for both systems. In practice, you must account for equipment efficiencies, which we cover in later training modules.


