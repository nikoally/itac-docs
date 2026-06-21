# Graph Selection and Design

Choosing the right graph type is critical to effective technical communication. The wrong visualization can obscure patterns, mislead readers, or simply waste space. This section covers the graph types commonly used in energy assessment reports and the principles that govern when to use each.

## Understanding Graph Types

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin-bottom: 1em;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube-nocookie.com/embed/o7F-tbBl_hA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Best Practices by Graph Type

### Line Charts

Line charts show trends over time or continuous relationships between variables.

**When to use:**

- Time-series data (hourly load profiles, seasonal energy consumption)

- Continuous measurements (temperature vs. efficiency, pressure vs. flow)

- Showing change or trends rather than discrete comparisons

**Design principles:**

- Use clear, distinct line styles for multiple series (solid, dashed, different colors)

- Label axes with units

- Start the y-axis at zero unless doing so would obscure meaningful variation

- Limit to 3-4 lines maximum to maintain readability

!!! note "ITAC Applications"

    - Compressed air system pressure over a week

    - Boiler efficiency vs. firing rate

    - Facility demand profile over 24 hours

    - Seasonal energy consumption trends

### Bar Charts

Bar charts compare discrete categories or show composition.

**When to use:**

- Comparing values across different categories (energy use by equipment type, savings by recommendation)

- Showing magnitude differences between distinct items

- Ranking items by size

**Design principles:**

- Always start the y-axis at zero (unlike line charts, bars must show true proportional relationships)

- Order bars logically (by magnitude, chronologically, or by category)

- Use consistent bar width and spacing

- Avoid 3D effects or unnecessary decoration

- For many categories, consider horizontal bars for better label readability

!!! note "ITAC Applications"

    - Energy consumption by end use (motors, lighting, HVAC, process)

    - Annual savings by recommendation

    - Comparing current vs. proposed energy use

    - Monthly utility costs

### Pie Charts

Pie charts show parts of a whole as percentages.

**When to use (rarely):**

- Showing composition when there are few categories (3-5 maximum)

- When exact percentages matter more than precise comparison

- The Rutgers Field Office requires a "utility pie" showing energy use breakdown by fuel type in every report

**Design principles:**

- Limit to 5 slices maximum

- Order slices from largest to smallest (starting at 12 o'clock)

- Label with both category name and percentage

- Avoid 3D pie charts—they distort perception

- Consider whether a bar chart would be clearer

!!! warning "Why Pie Charts Are Problematic"

    Humans are poor at comparing angles and areas. It's hard to show precise differences when slices are similar in size, and pie charts do not scale well beyond a few categories. Bar charts almost always communicate the same information more clearly.

!!! note "The Utility Pie at ITAC"

    Despite its limitations, ITAC reports must include a pie chart showing facility energy consumption by fuel type (electricity, natural gas, propane, fuel oil, etc.). This is a Rutgers Field Office requirement for standardization across all IAC centers. Use it for this purpose only.

## Graph Selection at ITAC

Energy assessment reports primarily use line charts and bar charts because these graph types handle the data we encounter most effectively.

### Line Charts Dominate Time-Series Analysis

Most measurement-based analysis involves time-series data: logger data from motors, compressed air pressure measurements, demand profiles from utility bills. Line charts excel at showing these trends and making patterns visible.

When analyzing a compressed air system, a line chart of pressure over time immediately reveals cycling behavior, pressure drift, or leak severity. The same data in a bar chart would obscure the temporal pattern.

### Bar Charts Enable Direct Comparison

When you need to compare discrete values—energy consumption by equipment type, implementation costs across recommendations, savings potential by measure—bar charts provide the clearest visualization.

The executive summary of every ITAC report includes a bar chart ranking recommendations by annual savings. This allows facility managers to quickly identify the highest-value opportunities without reading detailed descriptions.

### When Not to Use a Graph

Before creating any visualization, ask whether it serves your argument. Graphs that simply restate information already clear from the text waste space and dilute impact.

If you write "The facility spends $127,000 annually on electricity and $43,000 on natural gas," adding a pie chart showing 75% electricity and 25% natural gas adds nothing. The numbers are already precise and clear.

Every graph must either:

- Reveal a pattern not immediately obvious from text or tables

- Enable comparison across many categories where text would be cumbersome

- Provide visual evidence for a claim you are making

If a graph fails these tests, delete it.

## Technical Execution

Regardless of graph type, all visualizations in ITAC reports must meet these standards:

- **Axis labels and units:** Every axis must be labeled with quantity and units. "Pressure (psi)" not just "Pressure."

- **Legible fonts:** Text must be readable when the report is printed. Minimum 10-point font for axis labels; 8-point minimum for tick labels.

- **Clear legends:** If using multiple data series, provide a legend. Place it where it does not obscure data.

- **Appropriate scale:** Choose axis limits that show the full range of data without excessive white space. For bar charts, always start at zero. For line charts, use judgment based on what variation matters.

- **Consistent style:** Use the same color scheme, font, and design style across all figures in a report. Visual consistency suggests analytical rigor.

- **High resolution:** Export graphs at sufficient resolution for print (300 dpi minimum). Pixelated graphs undermine credibility.

## Common Mistakes

**3D Effects**

Three-dimensional charts distort perception and serve no analytical purpose. Always use 2D visualizations.

**Chartjunk**

Excessive gridlines, decorative elements, backgrounds, and unnecessary color reduce clarity. Remove everything that does not directly support interpretation.

**Too Many Series**

Plotting eight different lines on one chart creates visual chaos. If you need to show many series, create multiple panels or consider alternative visualizations.

**Misleading Scales**

Truncating the y-axis on a bar chart to exaggerate differences, using logarithmic scales without clear labeling, or presenting data at inappropriate time intervals can all mislead readers.

**Missing Context**

A graph showing energy consumption over time means nothing without units, time periods, or reference to what changed. Annotate significant events. Provide context in the caption.

## Integration with Text

Every graph must be referenced in the body text. Do not simply insert a figure and hope the reader understands its relevance.

!!! example "Weak vs. Strong Integration"

    **Weak integration:**

    "Figure 2 shows the compressed air pressure data."

    **Strong integration:**

    "Compressed air pressure fluctuates between 95 and 142 psi (Figure 2), well outside the 10 psi band recommended by industry standards. These pressure swings indicate poor system control and cause excessive compressor cycling."

The text makes an argument. The figure provides evidence. The caption allows the figure to stand alone for readers who skim. Together, they build a case.
