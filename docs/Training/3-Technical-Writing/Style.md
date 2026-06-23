# Style Guide

This page covers specific formatting conventions and structural guidelines for ITAC reports. Following these rules ensures consistency across all recommendations and makes reports easier to read and more professional.

## Number Formatting

### Comma Separators

Use commas to separate thousands in all numbers 1,000 or greater:

| Correct | Incorrect |
|---------|-----------|
| 1,000 kWh | 1000 kWh |
| 47,500 | 47500 |
| 1,234,567 | 1234567 |

### Spelling Out Numbers

Spell out numbers less than 10 when they appear in running text. Use numerals for 10 and above:

| Correct | Incorrect |
|---------|-----------|
| The facility has three compressors. | The facility has 3 compressors. |
| The system operates 12 hours per day. | The system operates twelve hours per day. |

**Exception:** Always use numerals when presenting measured values, calculations, or technical specifications, regardless of size:

- "The motor draws 7 amperes at full load."
- "Temperature increased by 3°F during the test period."
- "Install 2 capacitor banks rated at 50 kVAR each."

### Significant Figures

Report calculated values to a precision that reflects the accuracy of your input data:

- **Measured values:** Match the precision of your measurement equipment. If you measured current to the nearest 0.1 amperes, report 47.3 A, not 47.28 A.

- **Calculated energy savings:** Round to three significant figures for most applications. For annual savings, this typically means the nearest 100 kWh or nearest whole MMBtu.

- **Cost savings:** Round to the nearest $10 for values under $10,000, and to the nearest $100 for values above $10,000. Use your judgment: $4,873 should be $4,900, and $47,234 should be $47,200.

- **Payback periods:** Report to one decimal place (e.g., 2.3 years, not 2.31 years).

**Avoid false precision.** If your operating hours estimate is ±10%, reporting annual savings to the nearest kilowatt-hour is misleading.

!!! note "Exception"

    Using significant figures is ideal. However, we often don't know the accuracy of our measurements as they come from un-calibrated devices. In these cases, it's acceptable to report numbers to a reasonable precision. This is usually the nearest kWh, USD, 0.1 kW, or 0.1 MMBtu. 

## Units

### Capitalization and Abbreviations

Use proper capitalization for all units. Units named after people are capitalized when abbreviated but lowercase when spelled out:

| Correct | Incorrect |
|---------|-----------|
| 50 kW | 50 KW, 50 kw, 50 Kw |
| 120 V | 120 v, 120 Volts |
| 15 A | 15 a, 15 Amps |
| 100°F | 100° F, 100 degrees F |
| 500 GPM | 500 gpm |

### Spacing

Insert a space between the number and the unit, except for degree and percent symbols:

| Correct | Incorrect |
|---------|-----------|
| 250 kW | 250kW |
| 15 MMBtu | 15MMBtu |
| 100°F | 100 °F |
| 30% | 30 % |

### Common Unit Abbreviations

Use these standard abbreviations consistently throughout all reports:

| Unit | Abbreviation | Notes |
|------|--------------|-------|
| Kilowatt | kW | Power |
| Kilowatt-hour | kWh | Energy |
| Million BTU | MMBtu | Thermal energy |
| Million BTU per hour | MMBtu/hr | Thermal power |
| Horsepower | HP | Mechanical power |
| Cubic feet per minute | CFM | Airflow |
| Gallons per minute | GPM | Liquid flow |
| Pounds per square inch | psi | Pressure |
| Pounds per square inch gauge | psig | Gauge pressure |
| Revolutions per minute | RPM | Rotational speed |
| Thousand gallons | Tgal | Water volume |
| Degrees Fahrenheit | °F | Temperature |

## Report Length

**Recommendations should not exceed two pages.** If a recommendation runs longer than two pages, one of two problems exists:

1. **Too much detail in the main text:** The recommendation includes unnecessary background, excessive explanation, or redundant information. Solution: edit for conciseness and remove anything that does not directly support your argument.

2. **Detailed calculations in the body:** Complex derivations or lengthy calculation sequences appear in the main sections. Solution: move detailed calculations to an appendix (see below).

A two-page limit forces you to prioritize the most important information and present it clearly. Facility managers and decision-makers will not read five-page recommendations. They will skim the summary and move on.

## Base Case vs. Efficient Case

Every recommendation compares two scenarios:

- **Base case:** The current condition—how the facility operates now, with all its inefficiencies and problems.
- **Efficient case:** The improved condition after implementing your recommendation.

The difference between these two cases defines your savings. Be explicit about this structure in your writing:

**Current Practices and Observations** establishes the base case. You describe what exists, what you measured, and how the equipment currently performs.

**Recommended Action** defines the efficient case. You describe what should change.

**Anticipated Savings** calculates the difference: the energy, demand, or cost reduction achieved by moving from the base case to the efficient case.

This structure should be clear to the reader. Do not conflate the two cases or leave the baseline ambiguous. If you write "the motor uses 45 kW," the reader should know immediately whether that describes the current motor or the proposed motor.

## Calculations: Text, Appendix, or Omission

Not all calculations belong in a recommendation. You must decide how much detail to include based on complexity and the reader's needs.

### Include in Text

Include calculations directly in the recommendation text when they are:

1. **Straightforward:** Simple arithmetic that readers can verify mentally or with a calculator
2. **Essential to the argument:** The calculation directly supports your claim and readers need to see the method
3. **Brief:** A single equation or a short sequence of 2-3 steps

**Example (appropriate for text):**

"The current motor draws 47 kW at full load for 6,200 hours per year, consuming:

$$E = 47 \text{ kW} \times 6{,}200 \text{ hr} = 291{,}400 \text{ kWh/year}$$

At $0.09 per kWh, this costs $26,200 annually."

### Move to Appendix

Move calculations to an appendix when they:

1. **Require multiple steps:** The derivation involves more than 3-4 equations
2. **Use complex relationships:** Affinity laws, thermodynamic cycles, heat transfer equations
3. **Include extensive data:** Tables of measurements, hourly profiles, or iterative procedures
4. **Distract from the narrative:** The calculation details interrupt the flow of your argument

When you move calculations to an appendix, summarize the method and reference the appendix explicitly in the main text:

"Savings were calculated using the affinity laws to determine power consumption at reduced speed. The full derivation appears in Appendix A. The analysis shows that reducing fan speed from 1,200 RPM to 960 RPM reduces power consumption from 50 kW to 26 kW."

Appendices are also appropriate for detailed equipment specifications, manufacturer performance data, or measurement logs that support your calculations but do not need to appear in the body.

### Omit Entirely

Some calculations are trivial and should be described in a sentence rather than shown as equations. If the calculation can be stated clearly in plain English without ambiguity, do not write it as a formula.

**Examples (describe, do not show):**

- "Total implementation cost is the sum of equipment cost (\$8,500) and labor cost (\$1,200), totaling \$9,700."
- "Annual savings equal the difference between baseline cost and efficient case cost."
- "The facility operates two shifts, five days per week, for 50 weeks per year, totaling 4,000 hours."

Readers do not need to see $\$8,500 + \$1,200 = \$9,700$ written as a formal equation.

## Referencing the How-To Guide

The [How to Write a Recommendation](../../Recommendations/how-to.md) page provides the structural template for all recommendations, including the five required sections and their purposes. This Style Guide complements that template by specifying formatting conventions and presentation standards.

When writing a recommendation:

1. Use the [How-To Guide](../../Recommendations/how-to.md) to understand the required structure and content of each section
2. Use this Style Guide to format numbers, units, and calculations consistently
3. Ensure your recommendation does not exceed two pages
4. Clearly distinguish base case from efficient case throughout your analysis
