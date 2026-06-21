# Air Compressors

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin-bottom: 1em;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube-nocookie.com/embed/v8hUlWksBic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

The compressor room is where atmospheric air is compressed to system pressure. Understanding the equipment in this room—compressors, dryers, filters, and controls—is important for identifying supply-side efficiency opportunities.

## Compressor Types

For small and medium-sized facilities, compressors typically range from 25 to 600 horsepower, with an average around 100 HP. Three main types dominate:

**Reciprocating compressors** work exactly like an internal combustion engine running in reverse. Pistons driven by a crankshaft compress air in cylinders, with valves opening and closing to control airflow. They produce pulsating airflow (due to oscillating pistons) and have audible operation (you can hear them "chugging" from far away). They require storage tanks to smooth out pulsations and are best suited for smaller applications (under 100 HP).

The major advantage of reciprocating compressors is their ability to operate in on/off mode. When system pressure reaches setpoint, the compressor shuts off entirely, consuming zero energy. A storage tank supplies compressed air during off periods. When tank pressure drops, the compressor restarts. This is the most efficient control strategy for intermittent loads. If on/off control isn't appropriate, reciprocating compressors can unload by opening inlet valves, which significantly reduces energy consumption compared to other unloading methods.

**Rotary screw compressors** use two meshing helical screws (rotors) to compress air. As the rotors turn, air is captured between the threads and progressively compressed as it moves through the screws. They provide smooth, continuous airflow (no pulsation) and are quieter than reciprocating compressors. They're more common than reciprocating compressors for larger applications (over 30 HP), but they have higher energy waste when unloaded.

Most rotary screw compressors are oil-flooded, meaning oil fills the bottom sump and creates a sealing film between the rotors as they rotate. This works well but introduces oil into the compressed air stream, which may contaminate products or processes. Oil-free screws use extremely tight manufacturing tolerances to seal without oil. They cost more but are essential for applications where oil contamination is unacceptable (food processing, pharmaceuticals, electronics manufacturing).

When a screw compressor unloads, it either runs against a closed discharge (deadhead operation) or recirculates high-pressure air back to the inlet. Both methods waste 50-60% of full-load power even though no useful air is being produced. This is a major inefficiency compared to reciprocating compressors.

**Centrifugal compressors** create a high-velocity swirl of air, throwing it outward where pressure increases. They're excellent for very high-pressure applications and large capacities (typically above 500 HP). For ITAC assessments, centrifugal compressors are rare. You'll primarily encounter reciprocating and rotary screw machines. 

## Variable Speed Drives (VSDs)

Variable speed drives (VSDs) solve the unloading problem for rotary screw compressors. A VSD varies the motor frequency from the standard 60 Hz, allowing continuous speed adjustment to match demand. This eliminates unloaded energy waste entirely, continuously regulates output capacity, and is ideal for loads that vary significantly over time.

VSDs make sense when load varies throughout the day, when a single compressor serves variable demand, or when eliminating on/off cycling is important for the process. They don't make sense when load is steady and predictable, when multiple compressors handle varying loads through staging, or when the initial cost difference can't be justified by energy savings.

## Air Dryers and Coolers

When air is compressed, it heats up dramatically. At 100 psig, compressed air temperature can reach 530°F before cooling, which is hotter than most ovens. This creates two problems: high temperature can damage equipment and degrade materials, and condensation occurs when hot compressed air cools down.

The dew point is the temperature at which water vapor condenses into liquid. At atmospheric pressure, typical indoor air has a dew point around 55°F. At 100 psig, the dew point rises to 140°F. If compressed air isn't dried, condensation will form when air cools below 140°F. This water causes corrosion in airlines and equipment, freezing in outdoor airlines during winter, paint defects (water spots, poor adhesion), pneumatic tool malfunction, and product contamination.

**Refrigerated air dryers** are the most common drying method. They use a refrigeration cycle to cool compressed air to 35-40°F, condensing out water vapor. The air is then reheated to room temperature (typically using heat from the incoming hot compressed air). They achieve dew points of 35-40°F (adequate for most applications), have simple and reliable operation, are typically air-cooled (no cooling tower connection), and have lower operating cost than desiccant dryers.


**Desiccant dryers** pass compressed air over a material (desiccant) that absorbs water. Common desiccants include silica gel, activated alumina, or molecular sieves (similar to the packets in electronics packaging). Most industrial desiccant dryers use two towers: while one tower dries compressed air, the other tower is being regenerated (dried out after becoming saturated). The system alternates between towers.

Regeneration methods include heatless regeneration (using compressed air to blow through the wet tower—wasteful), heated regeneration (using external heat source like electric heaters, steam, or waste heat), and blower purge (using ambient air blown through the wet tower—most efficient). Desiccant dryers achieve dew points down to -40°F or lower (perfectly dry air) and are essential for applications requiring extremely low moisture. However, they have higher operating cost than refrigerated dryers (if using heatless regeneration) and more complex maintenance.

Use desiccant dryers only for processes requiring extremely dry air (instrument air, pneumatic controls, outdoor winter applications). Use refrigerated dryers for everything else. If waste heat is available (from compressor cooling, boiler exhaust, etc.), heated regeneration becomes cheaper than refrigerated drying—an excellent waste heat application.

## Filters and Separators

Filters and separators protect equipment and ensure clean air delivery. You'll find filters before the compressor (intake air filter), after the compressor (discharge filter), after air dryers, after separators, and at point-of-use locations. For every 1 psig of pressure drop through dirty filters, compressor energy consumption increases by approximately 0.5%.

Facilities typically have service contracts with compressor vendors to maintain filters, but these contracts focus on protecting the compressor itself, not downstream equipment. Check all filters, not just the ones near the compressor.

Oil-flooded rotary screw compressors need oil separators to remove oil from the compressed air stream. Oil-air separators remove oil droplets from compressed air. Droplet-form oil is relatively easy to separate using swirl separators. Oil in mist form (tiny droplets) requires coalescent filters that force small droplets to combine into larger ones that fall out by gravity. Oil-water separators remove oil from condensate water before disposal. These are less sophisticated and simply clean the water enough for safe disposal.

## Compressor Controls

The compressor control system maintains adequate pressure and airflow for the plant while managing efficiency and equipment longevity. With multiple compressors (common for backup), control becomes critical.

For single compressor systems, on/off (start/stop) control is typical for reciprocating compressors with storage. When pressure reaches setpoint, the compressor shuts off. When pressure drops (because plant is using air), the compressor restarts, with zero energy waste during off periods. Load/unload control is used when demand drops below compressor capacity. Reciprocating compressors can unload efficiently; rotary screws waste 50-60% of full-load power when unloaded. Variable speed drives continuously adjust speed to match demand, eliminating unloaded waste entirely and providing ideal control for varying loads.

With two or more compressors, use a lead-lag control strategy where the two compressors have different setpoints. When load is low, only the lead compressor runs. If load increases and pressure drops, the lag compressor starts automatically. This prevents excessive cycling and optimizes efficiency.

Ideally, any single compressor should not be able to meet maximum plant demand alone. This ensures backup capacity but prevents one oversized compressor from running partially loaded all the time. Some facilities have a combination of VSD and non-VSD compressors. In these cases, the non-VSD compressor serves as the "lead" so it doesn't go into the costly unloaded state. Then, the VSD compressor "lags" to take advantage of its flexibility. 

## Supply-Side Efficiency Opportunities

The single biggest opportunity in most compressed air systems is reducing system pressure. Every 2 psig reduction in discharge pressure reduces energy consumption by approximately 1%. Most pneumatic tools need 70-75 psig, yet many facilities operate at 100-130 psig. This happens through pressure creep: when problems occur (leaks, pressure drop, tool performance issues), the quick fix is to increase compressor pressure. Problems go away temporarily, but energy cost increases permanently.

The right approach is to measure pressure at critical end uses during peak demand. If pressure is adequate at all locations, reduce system pressure by 5 psig. Monitor for problems over 24-48 hours. If no problems occur, repeat until you reach optimal pressure. Typically, 75-85 psig is appropriate for most facilities.

Cooler air is denser, so compressing cool air requires less energy than compressing warm air. Every 5°F reduction in intake air temperature reduces compressor energy by approximately 1%. There are two main options: use a damper system to pull conditioned air from inside during the summer and cold air from outside in the winter, or always pull air in from outside (which generally has a quicker payback period in the northeast).

!!! note "Humidity Concerns"

    Some worry that outdoor summer air (high humidity) will overload oil separators in rotary screw compressors. This is rarely a problem, but if it occurs, use indoor air during peak humidity periods.

Compressors reject enormous amounts of heat. Up to 90% of input electrical energy becomes heat that must be removed. For a 100 HP compressor running full time, this is roughly 630,000 BTU/hr of waste heat. Heat recovery applications include space heating (duct hot compressor exhaust through facility in winter), process heating (preheat boiler makeup water, dry products), and building makeup air heating. Space heating is the most common application. If the building already has a lot of process heat, making the HVAC heating load negligible in the winter (common in injection molding facilities), it may be smart to pipe it outside. 
