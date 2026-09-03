# AC Power

## Why Alternating Current?

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin-bottom: 1em;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube-nocookie.com/embed/c9gm_NL7KyE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Most industrial facilities receive alternating-current (AC) power. Transformers make it practical to raise AC voltage for transmission and lower it near the load. For a given power transfer, higher voltage allows lower current, reducing resistive losses in conductors.

In the United States, utility AC has a nominal frequency of 60 Hz: 60 cycles each second. We will first consider sinusoidal voltage and current. Electronic loads can distort current waveforms; that matters when measuring real power and power factor.

## Single-Phase vs. Three-Phase Systems

A **single-phase load** can be connected line-to-neutral or line-to-line. For example, a 120 V load often uses a hot conductor and neutral, while a 240 V single-phase load may use two hot conductors. These descriptions omit protective grounding conductors; they are not installation instructions.

**Three-phase power** uses three AC voltages separated by 120 electrical degrees. Balanced sinusoidal three-phase loads draw constant total instantaneous power, unlike a single-phase resistive load's pulsating power. Three-phase supply also produces a rotating magnetic field naturally suited to industrial motors.

## AC Power and Power Factor

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin-bottom: 1em;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube-nocookie.com/embed/Tv_7XWf96gg?start=535" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

When discussing AC power, we distinguish three quantities:

- **Real power ($P$)**, measured in kW, is the net rate of electrical energy transfer. It includes useful output and equipment losses: a motor's electrical input kW is not its shaft output kW.

- **Reactive power ($Q$)**, measured in kVAR, describes energy exchanged with magnetic or electric fields. Motors need magnetic fields to operate, but reactive power does not represent net useful energy transfer.

- **Apparent power ($S$)**, measured in kVA, combines the voltage and current loading on the supply. 

For our purposes, we can assume these quantities form a right triangle. As such, we can use the pythagorean theorem to relate them: 

$$S = \sqrt{P^2 + Q^2}$$

Make sure to use consistent units: kW, kVAR, and kVA. 

### Calculating AC Power

Ok so now our power calculations are going to get a little more complicated. For simple single-phase loads, real power is: 

$$P = V \times I \times \text{PF}$$

However, when we're dealing with three-phase loads, we have to account for the fact that there are three separate phases. For balanced three-phase loads, real power is:

$$P = \sqrt{3} \times V \times I \times \text{PF}$$

Here $V$ the line-to-line voltage, $I$ the average current of the 3 lines, and $\text{PF}$ the power factor. Voltage is in volts and current in amperes. 

!!! example "Three-phase motor electrical input"

    A balanced motor load draws 15 A per line at 480 V line-to-line, with a measured power factor of 0.85.

    $$S = \frac{\sqrt{3}\times480\times15\times0.85}{1000} = 10.6 \text{ kW}$$

    The 10.60 kW is electrical input, not shaft output. Shaft output also depends on motor efficiency. If the motor is 90% efficient, its shaft output is 9.54 kW.

### Power Factor

Power factor is real power divided by apparent power:

$$\text{PF} = \frac{P}{S}$$

For a any given load, power-factor magnitude ranges from 0 to 1. A 100 kW load at 0.85 PF requires approximately 118 kVA. **This does not mean that 15% of its energy is wasted.** Power factor describes supply loading; efficiency describes useful output divided by real energy input.

**Why it matters in an assessment:**

- **Billing:** The rate tariff (document that describes how electricity is billed) may include a power-factor penalty, adjusted kW demand, kVA demand, or reactive-power charges. Savings depend on the actual tariff.
- **Capacity:** Transformers have kVA ratings; conductors and switchgear have current limits. Low PF requires more current for the same real power at a given voltage.
- **Losses:** Higher current increases $I^2R$ losses in the conductors carrying that current.

If power factor is low, the facility may be able to reduce energy costs by improving it. This can be done by adding capacitors to offset reactive power. However, this is not always the best solution; it depends on the tariff and the load profile. 

## Check Your Understanding

**1. Is voltage multiplied by current enough to determine a three-phase motor's real input power?**

??? question "Show answer"

    No. For a balanced load, you need line-to-line RMS voltage, line RMS current, and power factor, plus the three-phase factor of $\sqrt{3}$. The result is electrical input; motor efficiency is needed to estimate shaft output.

**2. A 100 kW load's power factor improves from 0.80 to 0.95. Has its process energy use fallen by 15%?**

??? question "Show answer"

    No. In this idealized example, real power remains 100 kW, so the load uses the same kWh for the same operating hours. Supply kVA and current decrease. Upstream resistive losses may fall, and the bill may decrease if the tariff rewards the change.
