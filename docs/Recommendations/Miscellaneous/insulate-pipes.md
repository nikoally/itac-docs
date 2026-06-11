---
hide:
  - toc
---

# Insulate Hot/Cold Pipes

Uninsulated or under-insulated pipes continuously lose heat (or gain it, for chilled systems) to the surrounding environment, forcing boilers and chillers to work harder to maintain process temperatures. Adding or upgrading pipe insulation reduces this surface heat loss, directly cutting fuel consumption.

**ARC Code(s):** 2.4236

---

## Savings Calculation

Savings are calculated by comparing the heat loss per unit area of bare pipe versus insulated pipe, then scaling by total pipe surface area and annual operating hours. The MEASUR Wall Losses calculator is used to determine the heat loss rate under each condition.

!!! warning "Operating Hours"

    Annual operating hours for this recommendation are the hours per year the pipe is at operating temperature — **not** facility operating hours. Steam and hot water pipes in process facilities are often pressurized 24 hours/day, 365 days/year (8,760 hrs/yr), even when the facility itself runs one or two shifts.

### Step 1 — Calculate Pipe Surface Area

Model each pipe run as a hollow cylinder. The lateral surface area of a cylinder is:

$$
A = \pi \times D_o \times L
$$

where:

- $A$ = outer surface area of the pipe (ft²)

- $D_o$ = outer diameter of the pipe (ft)

- $L$ = length of the pipe run (ft)

Sum the surface area across all pipe runs of the same nominal size and operating temperature. Pipes with meaningfully different diameters, temperatures, or insulation thicknesses should be grouped and calculated separately. Similar pipes should be grouped for sanity while calculating. Typically, you'll want to have one "Loss" in MEASUR per area of pipes, unless the diameters of the pipes in that area vary by 50% or more or they're in different orientations. In that case, break it up further by diameter/orientation. 


### Step 2 — Estimate Post-Insulation Surface Temperature

At steady state, heat conducted through the insulation equals heat convected off the outer surface. Setting these equal and solving for $T_{\text{surface}}$:

$$
T_{\text{surface}} = \frac{T_{\text{pipe}} + \left(\frac{h \cdot x}{k}\right) T_{\text{amb}}}{1 + \frac{h \cdot x}{k}}
$$

where:

- $T_{\text{surface}}$ = outer surface temperature of insulation (°F)

- $T_{\text{pipe}}$ = pipe operating temperature (°F)

- $T_{\text{amb}}$ = ambient air temperature (°F)

- $h$ = convective heat transfer coefficient of air (≈ 1.0 Btu/hr·ft²·°F for still air)

- $x$ = insulation thickness (ft)

- $k$ = thermal conductivity of insulation (Btu·ft / hr·ft²·°F)

Select an insulation thickness (typically 1–3 inches for pipes up to 6 in NPS) and a material from the table below.

??? note "Insulation Thermal Conductivity Values Used in This Procedure"

    | Material | k (Btu·ft / hr·ft²·°F) | Typical Use |
    |---|---|---|
    | Fiberglass (pipe insulation) | 0.024 | Steam, hot water (up to 450°F) |
    | Mineral wool / rock wool | 0.026 | High-temp steam (up to 1200°F) |
    | Cellular glass | 0.029 | Chilled water, cryogenic |
    | Elastomeric foam | 0.025 | Chilled water, refrigerant lines |
    | Polyurethane foam | 0.018 | Chilled water (up to 220°F) |

    Values are mid-range estimates at typical mean temperatures. Use manufacturer data sheet values when available.

### Step 3 — Run MEASUR Wall Losses (Baseline)

Open the **Wall Losses** calculator in MEASUR. Enter the following for the **bare pipe** (baseline) condition:

| MEASUR Input | Source |
|---|---|
| Surface area | Calculated in Step 1 (ft²) |
| Surface temperature | Measured at site with IR thermometer (°F) |
| Ambient temperature | Measured at site (°F) |
| Wind speed | 0 mph (conservative assumption for indoor pipes) |
| Surface shape | Horizontal cylinder or long vertical cylinder, based on pipe orientation |
| Emissivity | 0.9 (default; adjust only if pipe surface is polished metal or painted with known emissivity) |
| Fuel cost | From utility analysis ($/MMBtu) |
| Boiler efficiency | From nameplate or combustion test (%) |

Record the baseline heat loss (MMBtu/hr) and annual cost from MEASUR.

!!! note "Assumptions"

    All MEASUR inputs listed above must appear explicitly in the written report. The report reader must be able to reproduce the MEASUR calculation from the information provided.

### Step 4 — Add Modification (Insulated Case)

In MEASUR, click **Add Modification** and change only the **surface temperature** to the post-insulation value calculated in Step 2. Leave all other inputs identical to the baseline. Record the modified heat loss and annual cost.

### Annual Fuel Savings

MEASUR reports savings directly. The annual fuel savings are:

$$
\Delta \text{MMBtu} = (\dot{q}_{\text{bare}} - \dot{q}_{\text{insulated}}) \times H_{\text{op}}
$$

where:

- $\Delta \text{MMBtu}$ = annual fuel savings (MMBtu/yr)

- $\dot{q}_{\text{bare}}$ = bare pipe heat loss rate from MEASUR (MMBtu/hr)

- $\dot{q}_{\text{insulated}}$ = insulated pipe heat loss rate from MEASUR (MMBtu/hr)

- $H_{\text{op}}$ = annual hours pipe is at operating temperature (hrs/yr)

MEASUR calculates this directly when operating hours and fuel cost are entered; copy the reported annual savings value.

---

## Anticipated Costs

**Materials:** Pre-formed pipe insulation sections with jacketing (aluminum or PVC). Current pricing by pipe size and insulation thickness can be found on industrial supply sites such as McMaster-Carr or Grainger.

**Installation:** Obtain contractor quotes for labor to cut, fit, and secure insulation sections and vapor-seal joints.

---

## Report Requirements

In addition to the [typical report requirements](../how-to.md), the recommendation must include a summary table of MEASUR inputs so the facility can verify and update the analysis:

```latex
\begin{table}[H]
\centering
\caption{Pipe Insulation -- MEASUR Wall Losses Inputs}
\label{tab:pipe-insulation-measur}
\begin{tabular}{lcc}
\toprule
Parameter & Baseline (Bare) & Modified (Insulated) \\
\midrule
Total surface area (ft²) & -- & -- \\
Surface temperature (°F) & -- & -- \\
Ambient temperature (°F) & -- & -- \\
Wind speed (mph) & 0 & 0 \\
Surface shape & -- & -- \\
Emissivity & 0.9 & 0.9 \\
Boiler efficiency (\%) & -- & -- \\
Fuel cost (\$/MMBtu) & -- & -- \\
Annual operating hours (hrs/yr) & -- & -- \\
\bottomrule
\end{tabular}
\end{table}
```

A second summary table should consolidate results across all pipe groups analyzed, with one row per MEASUR loss entry:

```latex
\begin{table}[H]
\centering
\caption{Pipe Insulation -- Savings Summary by Pipe Group}
\label{tab:pipe-insulation-summary}
\begin{tabular}{lccc}
\toprule
Pipe Group Description & Insulation Cost (\$) & Savings (MMBtu/yr) & Savings (\$/yr) \\
\midrule
[e.g., 4-in steam header, boiler room] & -- & -- & -- \\
[e.g., 2-in condensate return, north wall] & -- & -- & -- \\
\midrule
\textbf{Total} & -- & -- & -- \\
\bottomrule
\end{tabular}
\end{table}
```
