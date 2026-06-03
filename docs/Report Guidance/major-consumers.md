---
hide:
  - toc
---

# Major Energy Consumers

This section has two parts that must both be filled in:

- **Report Sections → Major-Consumers.tex** — the main body section, with a summary table and short paragraphs on each applicable system

- **Appendices → Major-Systems-App.tex** — the detailed appendix write-up for each system

---

## Major-Consumers.tex

This section opens with a summary table listing every major energy-consuming system at the facility along with a brief description and estimated energy intensity. Below the table, each system gets its own short paragraph with more detail.

**Delete any system that does not apply to this facility.** If a system is present at the facility, it must be included here even if it is not the subject of any recommendation.

### Summary Table

For each applicable system, fill in:

- **Description** — what the system does and how it is used at this facility, in brief

- **Estimated Energy Intensity** — the approximate power or heat load of the system. Choose units based on how the system is actually energized rather than the system type: use **kW** for electric loads and **MMBtu/hr** for fuel-fired loads. Most machines, compressed air, and process cooling are electric, while most boilers, process heat, and many HVAC systems are fuel-fired — but check the equipment. An electric boiler is reported in kW, a gas-fired chiller in MMBtu/hr, and a system that draws both (e.g., HVAC with electric cooling and a gas furnace) gets both.

Energy intensity values typically come from nameplate data. You will likely have to aggregate data from several nameplates for some systems (i.e. Machines and HVAC). 

### System Paragraphs

Below the table, each system present at the facility gets a `\paragraph{}` entry. Keep it to **3–5 sentences** — this is an overview, not an inventory. Include only what helps the reader picture the system at a glance:

- What equipment makes up this system and how much of it (quantity, approximate age range, general type)

- How and when it is used in the production process

- Any observed operational detail that materially affects energy use (operating pressure, temperature, setpoints, scheduling, condition)

Prioritize information that characterizes the system as a whole. "Thirty HVAC units ranging from 1996–2003" is useful — it conveys scale and age. Specific model numbers are not; those belong in the appendix. Keep these paragraphs factual and observational — this is not the place for recommendations.

---

## Major-Systems-App.tex

The appendix contains one subsection per system type. These subsections provide full technical detail on each system.

**Delete any subsection that does not apply to this facility**, consistent with what was kept in the Major-Consumers section.

For each subsection that remains, write a detailed description of the system covering:

- Equipment inventory (quantity, manufacturer, model, rated capacity, age/condition if known)

- Operating parameters (pressure, temperature, flow rates, setpoints)

- Controls and scheduling

- Distribution layout or system configuration where relevant

- Any observations from the walkthrough that characterize how the system is currently operating

Every system included in the summary table in Major-Consumers.tex must have a corresponding subsection in Major-Systems-App.tex, and vice versa.
