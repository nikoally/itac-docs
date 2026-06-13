---
hide:
  - toc
---


# Upgrade to Efficient Lighting Fixtures

Older lighting fixtures using incandescent, fluorescent, or high-intensity discharge (HID) lamps consume significantly more energy than modern LED fixtures to produce the same light output. Replacing inefficient fixtures with LED or other high-efficiency lighting reduces electrical consumption and maintenance costs.

**ARC Code(s):** 

- 2.7142 (Utilize Higher Efficiency Lamps and/or Ballasts)

## Savings Calculation

Energy savings from efficient lighting fixtures result from reduced wattage to produce the same or better illumination levels. The savings depend on the wattage difference between baseline and proposed fixtures and annual operating hours.

### Annual Energy Savings

Annual energy savings from replacing fixtures are:

$$
\Delta \text{kWh} = (W_{\text{baseline}} - W_{\text{proposed}}) \times H
$$

where:

- $W_{\text{baseline}}$ = wattage of existing fixtures (kW)

- $W_{\text{proposed}}$ = wattage of proposed efficient fixtures (kW)

- $H$ = annual operating hours (hrs/yr)

$W_{\text{baseline}}$ should include only the facility's fixtures that are relevant to the recommendation. While you do not need to "show your work" in terms of the arithmetic that supports this figure, you must clearly explain which zones of lighting from the major consumers section are relevant to this recommendation. 

??? note "Replacing Ballast-Driven LED Tube Fixtures with LED Troffers"

    When the existing fixtures are Type A LED tubes running through the original magnetic or electronic ballast, the baseline wattage must account for ballast losses in addition to the lamp wattage:

    $$
    W_{\text{baseline}} = (W_{\text{lamp}} \times N_{\text{lamps}}) + W_{\text{ballast loss}}
    $$

    Where $W_{\text{lamp}}$ is the rated wattage of one LED tube (from the lamp spec sheet, not the original fluorescent rating), $N_{\text{lamps}}$ is the number of lamps per fixture, and $W_{\text{ballast loss}}$ is the ballast loss in watts. Ballast loss should be taken from manufacturer data or direct measurement. If unavailable, use a default of 4–8 W per ballast for electronic ballasts and 10–15 W per ballast for magnetic ballasts, and document the assumption.

    The proposed LED troffer wattage is taken directly from the fixture spec sheet since it operates on an integrated driver with no external ballast losses. All other calculations follow the standard methodology above.

### Peak Demand Savings

Peak demand savings from the lighting reduction are:

$$
\Delta \text{kW} = (W_{\text{baseline}} - W_{\text{proposed}})
$$

$$
\Delta \text{kW-months} = \text{kW} \times (\text{CF}_\text{summer} \times 3 + \text{CF}_\text{winter} \times 9)
$$

where: 

- $\text{CF}_\text{summer}$ = summer coincidence factor (0.81)

- $\text{CF}_\text{winter}$ = winter coincidence factor (0.665)



## Anticipated Costs

Obtain equipment costs from vendor quotes or retail pricing for the specific fixture type being recommended. When calculating labor costs, use 0.25 hours of high-skill labor per fixture to be replaced. 

Check with the local utility provider for current energy efficiency incentive programs. Lighting fixture upgrades often qualify for prescriptive rebates based on fixture type and wattage reduction. Document incentive eligibility requirements and application procedures in the cost analysis.