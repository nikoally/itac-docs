# Payback Period

Payback period measures how long it takes to recover an initial investment. There are three versions of this metric, each with different assumptions about the time value of money.

## Simple Payback Period

Simple payback ignores the time value of money entirely. It divides the net initial investment by the annual net savings.

$$\text{Simple Payback} = \frac{\text{Implementation Cost} - \text{Incentives}}{\text{Annual Savings} - \text{Recurring Costs}}$$

!!! example

    A VFD installation costs $12,000, qualifies for a $2,000 rebate, and saves $4,000 per year with no recurring costs.

    $$\text{Simple Payback} = \frac{\$12{,}000 - \$2{,}000}{\$4{,}000} = \frac{\$10{,}000}{\$4{,}000} = 2.5 \text{ years}$$

Simple payback is easy to calculate and easy to communicate. However, it treats a dollar saved in year 1 the same as a dollar saved in year 10, which ignores economic reality.

!!! note "When Simple Payback Works"

    Simple payback assumes constant annual savings. When annual savings are constant, simple payback equals standard payback period (discussed below). The formula above is a shortcut that only works for even cash flows.

## Payback Period (Cumulative Cash Flow)

Standard payback period finds the point where cumulative cash flows become positive, but still does not discount future cash flows. This method handles varying annual cash flows, which simple payback cannot.

**When cash flows are constant**, payback period equals simple payback. You can use either method and get the same answer.

**When cash flows vary**, you must use the cumulative approach because the simple payback formula no longer applies.

!!! example "Varying Cash Flows"

    A project costs $20,000 at year 0. Year 1 saves $5,000, year 2 saves $8,000, year 3 saves $10,000.

    | Year | Cash Flow | Cumulative |
    |------|-----------|------------|
    | 0 | -$20,000 | -$20,000 |
    | 1 | +$5,000 | -$15,000 |
    | 2 | +$8,000 | -$7,000 |
    | 3 | +$10,000 | +$3,000 |

    Payback occurs between year 2 and year 3. Interpolating:

    $$2 + \frac{\$7{,}000}{\$10{,}000} = 2.7 \text{ years}$$

## Discounted Payback Period

Discounted payback finds when cumulative discounted cash flows become positive. This accounts for the time value of money.

!!! example "Discounted Payback"

    Same project as above, with a 10% discount rate.

    | Year | Cash Flow | Discount Factor | PV | Cumulative PV |
    |------|-----------|-----------------|-----|---------------|
    | 0 | -$20,000 | 1.000 | -$20,000 | -$20,000 |
    | 1 | +$5,000 | 0.909 | +$4,545 | -$15,455 |
    | 2 | +$8,000 | 0.826 | +$6,608 | -$8,847 |
    | 3 | +$10,000 | 0.751 | +$7,510 | -$1,337 |
    | 4 | +$10,000 | 0.683 | +$6,830 | +$5,493 |

    Discounted payback occurs between year 3 and year 4, longer than the undiscounted payback of 2.7 years. This reflects the reduced present value of future savings.

## Why ITAC Uses Simple Payback

### Our Role in the Decision Process

ITAC conducts preliminary assessments to identify energy efficiency opportunities. We are not performing full financial analysis for capital budgeting decisions. Our recommendations are the starting point for a facility's internal evaluation, not the final word.

When a facility decides to pursue a recommendation, their finance team will conduct their own analysis using their specific discount rate, tax situation, depreciation schedules, and capital budgeting criteria. They have information we do not have access to: their cost of capital, their cash flow constraints, and their strategic priorities.

Simple payback is easy to calculate, easy to verify, and easy to communicate. A plant manager can look at our numbers, check the math, and immediately understand what we are claiming. This transparency builds trust in our analysis.

More sophisticated metrics require assumptions (discount rates, project lifetimes, escalation rates) that introduce uncertainty and potential disagreement. By using simple payback, we present the fundamental economics without imposing assumptions that may not match the facility's situation. Any assumption has potential to spark disagreement. By limiting assumptions, we limit potential disagreements.

### When Simple Payback Works Well

For short-payback projects (under 2 years) with constant annual savings, simple payback is an excellent metric. The time value of money has minimal impact over short periods, and the calculation is straightforward.

Most ITAC recommendations fall into this category: lighting retrofits, motor replacements, compressed air leak repairs, insulation improvements, and similar measures. These projects have predictable, constant annual savings and relatively short payback periods.

!!! tip "Simple Payback Sweet Spot"

    Simple payback is most appropriate when:

    - Payback period is less than 3 years
    - Annual savings are constant or nearly constant
    - The project has a straightforward implementation cost
    - The facility has typical discount rates (8-12%)

    In these cases, simple payback and discounted payback differ by less than 10%, making the simpler calculation acceptable.

### When Simple Payback Breaks Down

Simple payback becomes inadequate for large, complex projects with long time horizons and uneven cash flows. Examples include:

- **Battery storage systems** with savings that vary based on demand charge structures and time-of-use rates
- **Solar PV installations** with degrading output over 25+ year lifetimes and complex incentive structures
- **Geothermal systems** with high upfront costs, long lifetimes, and savings that depend on fuel price assumptions
- **Combined heat and power (CHP)** with multiple revenue streams and complex operating profiles

For these projects, the simple payback formula does not apply because annual cash flows are not constant. A 10-year simple payback tells you almost nothing about a solar installation where year 1 includes a large tax credit and years 2 through 25 show gradual panel degradation.

When we encounter these large projects, we may go a step further and calculate standard payback period or discounted payback period using our analysis software. These methods properly account for uneven cash flows and, in the case of discounted payback, the time value of money over long horizons where discounting significantly affects the analysis.

!!! note "ITAC Database Limitations"

    We are not permitted to report discounted payback or standard payback (with varying cash flows) in the ITAC database. If we calculate these metrics for complex projects, they appear in the text of the Costs and Payback section of the recommendation, not in any summary tables.

## Comparing the Three Methods

For a project with $15,000 net implementation cost and constant $5,000 annual savings:

| Method | Payback Period | Accounts for Varying Cash Flows? | Accounts for Time Value? |
|--------|----------------|----------------------------------|--------------------------|
| Simple Payback | 3.0 years | No | No |
| Standard Payback | 3.0 years | Yes | No |
| Discounted Payback (10%) | ~3.5 years | Yes | Yes |

For this example with constant cash flows, simple and standard payback are identical. Discounted payback is longer because future savings are worth less in present value terms.

## Limitations of All Payback Methods

All payback methods share a fundamental flaw: they ignore cash flows beyond the payback period. A project that pays back in 4 years and then generates savings for another 16 years looks identical to a project that pays back in 4 years and then ends. Net present value (NPV) correctly accounts for the full project lifetime, which is why financial analysts prefer it for major capital decisions.

For ITAC work, this limitation rarely matters because most of our recommendations have long equipment lifetimes relative to their payback periods. A lighting retrofit with a 2-year payback and a 15-year bulb life clearly creates value for 13 years beyond payback. The simple payback calculation gives decision-makers the information they need without requiring us to estimate equipment lifetimes, discount rates, and other parameters that would add complexity without significantly changing the decision.
