---
hide:
  - toc
---

# Cold Air Intake



Using cold outdoor air for compressor intake instead of warm indoor air reduces compressor energy consumption. Air density increases as temperature decreases, meaning cooler intake air requires less compression work to reach target discharge pressure. This measure is most effective in climates with significant outdoor temperature variation throughout the year.

A **smart damper** system automatically switches between outdoor and indoor intake based on temperature, ensuring outdoor air is only used when it is actually cooler than indoor air. This avoids the penalty of drawing in hot outdoor air during summer months.

**ARC Code(s):**

- 2.4221 (Install Compressor Air Intakes in Coolest Locations)

---

## VSD Isentropic Efficiency Estimator

For VSD compressors, the CAGI datasheet doesn't always report isentropic efficiency. When it does, it reports it at a single test point, which may not represent the typical operating point. Use the dedicated calculator to back-calculate isentropic efficiency from measured specific power data, then enter the result as the "Isentropic Eff." input below.

[Open VSD Isentropic Efficiency Estimator](../../calculators/vsd-efficiency.md){ .md-button }

## Anticipated Costs

Implementation costs for cold air intake include:

- **Intake ducting and louvers**: Material and installation costs for outdoor air intake path. Duct sizing should minimize pressure drop (typically < 0.5 psi).
- **Filtration**: Outdoor air may require enhanced filtration compared to indoor air to prevent contamination from pollen, dust, or other environmental particles.
- **Freeze protection**: In cold climates, intake dampers or heating elements may be required to prevent freezing of compressor components or condensate systems.
- **Controls**: Automatic dampers or controls to switch between indoor and outdoor intake based on temperature.

Simple payback periods typically range from 1 to 4 years depending on indoor-outdoor temperature differential, compressor utilization, energy rates, and installation complexity.

---

## Interactive Cold Air Intake Calculator

Use the dedicated calculator to estimate energy and cost savings from implementing a cold air intake system. Enter your compressor parameters, monthly outdoor temperatures, and utility rates to see detailed monthly savings analysis.

[Open Cold Air Intake Calculator](../../calculators/cold-intake.md){ .md-button }
