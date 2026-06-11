---
hide:
  - toc
---


# Install Cool Roof Coating

Traditional dark roofing materials absorb solar radiation, heating the building and increasing cooling loads. Cool roof coatings with high solar reflectance and thermal emittance reduce heat transfer into the building, lowering cooling energy consumption in air-conditioned facilities.

**ARC Code(s):** 2.7425

## Savings Calculation

Energy savings from cool roof coatings result from reduced cooling loads due to lower roof surface temperatures. The magnitude of savings depends on the roof area, presence of roof-mounted HVAC equipment, and whether the facility has air conditioning and gas heating.

Cool roofs primarily benefit facilities with:

- Significant air-conditioned space

- Roof-mounted HVAC equipment or ductwork

- Large roof area relative to building volume (single-story buildings)

### Annual Cooling Energy Savings

Cooling energy savings depend on whether HVAC equipment is located on the roof:

**For facilities with AC equipment ON the roof:**

$$
\Delta kWh_{\text{cool}} = A_{\text{roof}} \times 0.29872
$$

**For facilities with AC equipment NOT on the roof:**

$$
\Delta kWh_{\text{cool}} = A_{\text{roof}} \times 0.08145
$$

where:

- $A_{\text{roof}}$ = roof area (sq. ft.)

- savings factors are in kWh/sq. ft./yr

### Heating Penalty

Cool roofs reduce solar heat gain in winter, slightly increasing heating loads. The penalty depends on the heating fuel type.

#### Gas Heating Penalty

For facilities with natural gas heating:


$$
\Delta \text{MMBtu}_{\text{heating}} = -A_{\text{roof}} \times 0.001713
$$

where:

- $\Delta \text{MMBtu}_{\text{heating}}$ = annual increase in gas consumption (MMBtu/yr); the negative sign indicates increased consumption

- the heating penalty factor is -0.001713 MMBtu/sq. ft./yr

#### Electric Heating Penalty

For facilities with electric heating, convert the gas penalty to electric equivalent:

$$
\Delta kWh_{\text{heating}} = \Delta \text{CCF}_{\text{heating}} \times \frac{103,700 \text{ Btu/CCF}}{3,412 \text{ Btu/kWh} \times \eta_{\text{elec}}}
$$

where:

- $\eta_{\text{elec}}$ = electric heating system efficiency (use 1.0 for resistance heat, use COP value for heat pumps, typically 2.5-3.5)

- 103,700 Btu/CCF = energy content of natural gas

- 3,412 Btu/kWh = conversion factor

### Summer Peak Demand Savings

Summer peak demand savings depend on whether HVAC equipment is on the roof:

**For facilities with AC equipment ON the roof:**

$$
\Delta kW_{\text{summer}} = A_{\text{roof}} \times 0.00045
$$

**For facilities with AC equipment NOT on the roof:**

$$
\Delta kW_{\text{summer}} = A_{\text{roof}} \times 0.00019
$$

Winter peak demand savings are zero as cool roofs do not significantly affect loads during peak winter conditions.

### Annual Demand Savings

Annual demand savings in kW-month are calculated using only the summer peak savings:

$$
\Delta kW\text{-months} = \Delta kW_{\text{summer}} \times \text{CF}_{\text{summer}} \times 3
$$

where:

- $\text{CF}_{\text{summer}}$ = summer coincidence factor (0.83 for manufacturing facilities)

- 3 = number of summer months

!!! warning "Climate Suitability and Heating Penalty"

    Cool roofs provide the greatest benefit in hot climates with significant cooling loads and limited heating requirements. For facilities with gas heating, the winter heating penalty reduces net savings. Evaluate the heating vs. cooling balance for the specific facility before recommending this measure. Cool roofs are most cost-effective for facilities with high cooling loads relative to heating loads, especially when HVAC equipment is located on the roof.

## Anticipated Costs

Cool roof recommendations fall into two categories depending on the existing roof condition and facility plans:

### Retrofit: Cool Roof Coating

For facilities with existing roofs in good condition, cool roof coatings can be applied over the existing surface. Cost factors include:

- Roof type (flat vs. sloped membrane)
- Existing roof condition and surface preparation requirements (cleaning, minor repairs)
- Coating product selection (acrylic, silicone, or other reflective coating types)
- Application method (spray, roller, or brush)
- Accessibility and safety equipment requirements

### Lost Opportunity: Roof Replacement with Cool Roofing Materials

When the existing roof is near end of life or scheduled for replacement, specify cool roofing materials (high-reflectance membrane, shingles, or coating integrated into the new roof system). You'll need to compare the costs for: 

- Standard roof replacement (baseline cost)

- Cool roof replacement with high-reflectance materials (proposed cost)

The incremental cost difference between standard and cool roofing materials is typically small compared to the total roof replacement cost. Use only the incremental cost in the economic analysis, not the full roof replacement cost.

## Report Requirements

In addition to the [typical report requirements](../how-to.md) and the recommendation-specific savings and costs, the recommendation should document:

- Roof area affected by cool roof coating (ft²)
- Whether HVAC equipment is located on the roof
- Whether facility has gas heating (for heating penalty calculation)
