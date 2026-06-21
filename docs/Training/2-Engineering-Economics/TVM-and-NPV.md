# Time Value of Money and Net Present Value

## Why This Matters for Energy Engineers

When you present a recommendation to a plant manager, they may approve it themselves. But larger projects go to finance departments, CFOs, and executive teams for approval. These decision-makers think in terms of discount rates, present values, and NPV. They compare your energy project against every other use of company capital: new production equipment, facility expansions, acquisitions, or simply leaving money in the bank.

If you cannot speak their language, you cannot effectively advocate for your recommendations. Understanding discounting does not mean you need to perform complex financial analysis. It means you understand how your simple payback figures translate into the metrics executives actually use to make decisions.

## The Time Value of Money

A dollar today is worth more than a dollar next year. This is not just because of inflation. Even in a world with no inflation, a dollar today can be invested to earn a return, making it worth more than a dollar received later.

This concept, called the time value of money, is fundamental to engineering economics. It means we cannot simply add up cash flows from different time periods without adjustment.

### Future Value

If you invest money today at an interest rate, it grows over time. The future value tells you what a present amount will be worth at some point in the future.

$$FV = PV(1 + i)^n$$

Where:

- $FV$ = Future Value
- $PV$ = Present Value (amount today)
- $i$ = Interest rate per period (as a decimal)
- $n$ = Number of periods

!!! example

    You invest $1,000 today at 8% annual interest. What is it worth in 5 years?

    $$FV = \$1{,}000(1 + 0.08)^5 = \$1{,}000(1.469) = \$1{,}469$$

### Present Value

Present value works in reverse. It tells you what a future amount is worth today. This process is called discounting.

$$PV = \frac{FV}{(1 + i)^n}$$

!!! example

    You will receive $1,469 in 5 years. At an 8% discount rate, what is that worth today?

    $$PV = \frac{\$1{,}469}{(1 + 0.08)^5} = \frac{\$1{,}469}{1.469} = \$1{,}000$$

### The Discount Rate

The discount rate reflects the opportunity cost of capital. If a company can earn 10% on its typical investments, then a dollar next year is only worth about $0.91 today (because $0.91 invested at 10% grows to $1.00 in one year).

Different organizations use different discount rates based on their cost of capital, risk tolerance, and alternative investment opportunities. Higher discount rates make future cash flows worth less in present terms, which favors projects with quick returns.

!!! note "Typical Discount Rates"

    - **Industrial facilities:** 10-15% (reflecting the return they expect from production equipment)
    - **Government projects:** 3-7% (based on treasury rates and public policy considerations)
    - **Publicly traded companies:** 8-12% (based on weighted average cost of capital)
    - **Small businesses:** 15-25% (reflecting higher risk and capital constraints)

## Net Present Value (NPV)

### Combining Cash Flows Across Time

Net Present Value (NPV) converts all cash flows to their present value and sums them. This allows us to compare the total value created by an investment in today's dollars.

$$NPV = \sum_{t=0}^{n} \frac{CF_t}{(1 + i)^t}$$

Where:

- $CF_t$ = Cash flow at time $t$
- $i$ = Discount rate
- $n$ = Number of periods
- $t$ = Time period (0, 1, 2, ...)

Note that cash flows at year 0 are not discounted (dividing by $(1+i)^0 = 1$).

### Interpreting NPV

- **NPV > 0**: The project creates value. It returns more than the discount rate.
- **NPV = 0**: The project breaks even at the discount rate.
- **NPV < 0**: The project destroys value. It returns less than the discount rate.

!!! example

    A motor replacement costs $5,000 (no incentives) and saves $1,500 per year for 5 years. Using a 10% discount rate:

    | Year | Cash Flow | Discount Factor | Present Value |
    |------|-----------|-----------------|---------------|
    | 0 | -$5,000 | 1.000 | -$5,000 |
    | 1 | +$1,500 | 0.909 | +$1,364 |
    | 2 | +$1,500 | 0.826 | +$1,239 |
    | 3 | +$1,500 | 0.751 | +$1,127 |
    | 4 | +$1,500 | 0.683 | +$1,025 |
    | 5 | +$1,500 | 0.621 | +$931 |
    | **Total** | | | **+$686** |

    The NPV is +$686, meaning this project creates $686 of value (in today's dollars) above what could be earned by investing the $5,000 at the 10% discount rate.

## Calculating Discount Factors

The discount factor for year $n$ is:

$$\text{Discount Factor} = \frac{1}{(1 + i)^n}$$

You can calculate these manually, use a financial calculator, or reference discount factor tables. For a 10% discount rate:

| Year | Discount Factor |
|------|-----------------|
| 0 | 1.000 |
| 1 | 0.909 |
| 2 | 0.826 |
| 3 | 0.751 |
| 4 | 0.683 |
| 5 | 0.621 |
| 10 | 0.386 |
| 20 | 0.149 |

Notice how discount factors decrease over time. At a 10% discount rate, a dollar received in year 20 is worth only 15 cents today. This explains why long-term projects need larger annual savings to justify their initial investment.

## NPV vs. Simple Payback

NPV and simple payback often point in the same direction—good projects have positive NPV and short payback periods—but they can disagree when:

1. **Project lifetime matters:** NPV accounts for cash flows beyond the payback period. A project might have a 4-year payback but generate savings for 20 years. Simple payback ignores those extra 16 years of value.

2. **Discount rates are high:** High discount rates reduce the present value of future cash flows, which can make a 5-year payback project have negative NPV if the discount rate exceeds the project's internal return.

3. **Cash flows vary:** Simple payback assumes constant annual savings. NPV correctly handles varying cash flows.

For most ITAC recommendations (short payback periods, constant savings), the two metrics agree. But understanding NPV helps you recognize when a finance team might reject a project despite a reasonable payback period—typically because their hurdle rate (minimum acceptable return) is higher than the project's return.

## Why ITAC Doesn't Calculate NPV

We don't know the facility's discount rate, and asking for it can create awkward conversations. Discount rates reflect sensitive information about a company's cost of capital and strategic priorities. Different companies will use different rates, and even within a company, different types of projects may have different hurdle rates.

By presenting cash flows and simple payback, we give facility decision-makers the raw data they need to apply their own discount rate and calculate NPV if they choose to do so. This approach respects their internal processes while ensuring our analysis is transparent and verifiable.
