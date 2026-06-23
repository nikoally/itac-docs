# Utilities

Before you can identify energy savings opportunities at a facility, you need to understand how that facility is being charged for energy. Utility bill analysis is typically one of the first steps in any energy assessment, and the billing structure directly determines which efficiency measures will deliver the strongest financial returns. This guide covers the fundamentals you'll need to interpret commercial utility bills and translate engineering savings into dollar savings.

## Electricity Billing: Consumption and Demand

Commercial electricity billing differs fundamentally from residential billing. While homeowners pay a simple rate per kilowatt-hour, commercial and industrial accounts face a two-part rate structure that separates consumption charges from demand charges. Understanding this distinction is critical for energy assessment work.

### Consumption Charges

Consumption charges are based on total electricity used over the billing period, measured in kilowatt-hours (kWh). This is the straightforward part: if a facility uses 100,000 kWh in a month at $0.07 per kWh, the consumption charge is $7,000.

!!! example

    A facility uses 100,000 kWh in a month at $0.07 per kWh. The consumption charge is:

    $$100{,}000 \text{ kWh} \times \$0.07/\text{kWh} = \$7{,}000$$

When you recommend efficiency measures like lighting upgrades, VFD installations, or compressed air leak repairs, the kWh savings translate directly into consumption charge reductions. Your savings calculations will multiply annual kWh saved by the consumption rate to determine this portion of cost savings.

### Demand Charges

Demand charges are based on peak power draw, measured in kilowatts (kW). The utility records the facility's demand in 15-minute intervals throughout the billing period and charges based on the single highest interval.

!!! example

    A facility's peak 15-minute average was 450 kW and the demand rate is $12 per kW. The demand charge is:

    $$450 \text{ kW} \times \$12/\text{kW} = \$5{,}400$$

!!! note "Why Demand Charges Matter"

    Two facilities with identical annual kWh consumption can have vastly different electricity costs if their load profiles differ. A facility that runs steady loads around the clock will have lower demand charges than one that concentrates its electricity use into short periods.

When evaluating efficiency measures, you need to consider both consumption and demand impacts. Some measures reduce kWh without affecting peak demand. Others, like load scheduling or peak shaving controls, target demand specifically. The most valuable measures often reduce both.

!!! tip

    For many commercial facilities, demand charges represent 30% to 50% of total electricity costs. Always check the rate structure before assuming that kWh savings are the primary driver of cost savings.

### Ratchet Clauses

Many commercial tariffs include demand ratchets, which set a floor on billed demand based on historical peaks. A common structure bills the facility for the greater of actual monthly demand or some percentage (often 80% or 90%) of the highest demand recorded in the previous 12 months.

!!! example

    A facility had a peak demand of 500 kW in January due to extreme cold weather. The tariff includes an 80% ratchet. In April, when actual demand is only 350 kW, the facility is billed for:

    $$\text{Billed demand} = \max(350 \text{ kW}, 0.80 \times 500 \text{ kW}) = \max(350, 400) = 400 \text{ kW}$$

    The facility pays for 400 kW even though actual demand was only 350 kW.

!!! tip

    Ratchets mean that a single month of high demand can inflate bills for an entire year. When analyzing demand savings, check whether a ratchet applies and when the historical peak will roll off.

### Supply, Transmission, and Distribution

Electricity charges are typically broken into functional components: supply, transmission, and distribution.

**Supply charges** cover electricity generation. This is the cost of producing power at generating facilities. In deregulated markets, customers can often choose their supplier, and you may see this as a separate line item or even a separate bill.

**Transmission charges** cover high-voltage transport from generating stations to local distribution networks. **Distribution charges** cover the local infrastructure that delivers power to individual facilities. These two components are often grouped together as "delivery" charges, since both represent the cost of moving electricity from source to end user.

!!! note "Calculating Total Rates"

    When calculating savings, pay attention to which rate components apply to consumption versus demand. Supply charges are typically consumption-based (per kWh), while delivery charges may include both consumption and demand components. The total effective rate per kWh saved or per kW reduced depends on how these components stack up.

### Power Factor Adjustments

Some commercial tariffs include power factor penalties or billing adjustments. Power factor measures how effectively a facility uses delivered electricity, and values below a threshold (typically 0.85 or 0.90) may trigger penalty charges or adjusted demand billing.

!!! tip

    During assessments, note whether the facility is paying power factor penalties. If so, power factor correction through capacitor banks or other equipment may represent a straightforward savings opportunity. The penalty structure on the bill will tell you the financial value of improving power factor.

## Natural Gas Billing

Natural gas billing is generally simpler than electricity. There are no demand charges for most commercial accounts; you pay for the volume consumed.

!!! note "Common Natural Gas Units"

    Natural gas is most commonly billed in CCF (hundreds of cubic feet). You may also see billing in therms, MCF (thousands of cubic feet), or dekatherms depending on account size and utility conventions.

    - 1 CCF ≈ 1.03 therms ≈ 0.103 MMBtu
    - 1 therm = 100,000 BTU = 0.1 MMBtu

Like electricity, natural gas bills may separate commodity charges (the cost of gas supply) from delivery charges (pipeline and distribution costs). The total rate per CCF or therm is what matters for savings calculations.

## Fuel Oil and Propane

Facilities without natural gas service often rely on fuel oil or propane for heating and process loads. These delivered fuels operate under a different model than metered utilities.

Rather than monthly bills based on metered consumption, facilities purchase fuel oil and propane in bulk deliveries that fill on-site storage tanks. Deliveries might occur monthly during heating season or only a few times per year depending on consumption and tank capacity. This means you won't find a neat monthly billing record the way you would for electricity or natural gas.

!!! note "Energy Content of Delivered Fuels"

    Fuel oil and propane are typically priced per gallon. For energy comparisons, you can convert to MMBtu using standard heating values:

    - \#2 Fuel Oil: ≈ 138,500 BTU/gallon ≈ 0.139 MMBtu/gallon
    - Propane: ≈ 91,500 BTU/gallon ≈ 0.092 MMBtu/gallon

!!! example

    A facility purchases 5,000 gallons of propane at $2.50/gallon. To compare the energy cost to natural gas:

    Total energy content:
    $$ 5{,}000 \text{ gal} \times 0.092 \text{ MMBtu/gal} = 460 \text{ MMBtu} $$

    Cost per MMBtu:
    $$ \frac{\$2.50/\text{gal}}{0.092 \text{ MMBtu/gal}} = \$27.17/\text{MMBtu} $$

!!! tip

    When conducting assessments at facilities with delivered fuels, you'll need to gather delivery records and tank level data to reconstruct consumption patterns. Annual fuel purchase records from accounting may be easier to obtain than delivery-by-delivery data. Be aware that timing differences between deliveries and actual consumption can make month-to-month analysis less precise than with metered utilities.