# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

This is the documentation site for the **Southern New England Industrial Training and Assessment Center (ITAC)**. It is a static site built with **Zensical** (a MkDocs-based system), configured via `zensical.toml`. Content lives in `docs/` as Markdown files. Pushing to `main` triggers a GitHub Actions workflow that runs `zensical build --clean` and deploys to GitHub Pages.

## Common Commands

```bash
# Install dependencies (Python venv already at .venv/)
pip install zensical

# Serve locally with live reload
zensical serve

# Build the static site
zensical build --clean
```

## Content Structure

All content is in `docs/`. The nav tree is **explicitly defined** in `zensical.toml` — adding a new `.md` file does **not** automatically add it to the site; it must be listed under `nav` in `zensical.toml`.

Key sections:
- `docs/Recommendations/` — Energy efficiency recommendation pages, organized by category (Compressed Air, HVAC, Motors, Lighting, Miscellaneous, Utility, Smart Manufacturing). Each page documents a specific measure's savings calculation methodology.
- `docs/Training/` — Modular training content on energy assessment topics.
- `docs/calculators/` — Interactive calculator pages (use Plotly/Chart.js for charts).
- `docs/plotme/` — PlotME tool documentation.
- `docs/handbook/` — Student handbook (onboarding, pay, advancement).
- `docs/Report Guidance/` — Guidance for writing assessment reports.
- `docs/assets/stylesheets/extra.css` — Site-wide custom CSS.

## Writing Recommendation Pages

When writing or editing a page in `docs/Recommendations/`, follow the structure and style conventions in `docs/Recommendations/TEMPLATE.md` and `docs/Recommendations/how-to.md`.

Key conventions:
- **Fixed 5 sections** for written recommendations (delivered as LaTeX in reports): Summary, Current Practices and Observations, Recommended Action, Anticipated Savings, Costs and Payback.
- The **methodology pages** (in `docs/Recommendations/`) document the *how-to* for each measure type — they use LaTeX math (`$$...$$`), Markdown tables, and optional Plotly/Chart.js charts. They are *not* themselves recommendations; they explain how to calculate savings for a given measure.
- Prefer charts over tables when data spans a range; use Markdown tables only for ≤3 rows with no visual story.
- Use `??? note "..."` for collapsible supplemental content, `!!! note "..."` / `!!! warning "..."` for admonitions.
- LaTeX math is rendered via MathJax (configured in `zensical.toml`).
- `hide: - toc` frontmatter suppresses the right-side table of contents on a page.

## Adding Pages

1. Create a `.md` file in the appropriate `docs/` subdirectory.
2. Add it to the `nav` list in `zensical.toml` — otherwise it will not appear in the site.
3. Images go in `docs/assets/` (or a `ReferencePhotos/` subfolder); reference with relative paths.

## Recommendation Page Style Guide

### Page Structure

Every recommendation page must follow this section order:

1. **Intro paragraph** — inline, no `## Overview` heading. One short paragraph describing the measure and why it saves energy.
2. **`**ARC Code(s):**`** line — immediately after the intro, before any sections. List the codes as a bullet list, one per line, each with its official ARC description in parentheses — e.g. `- 2.7142 (Utilize Higher Efficiency Lamps and/or Ballasts)`. Follow the list with a `---` horizontal rule before `## Savings Calculation`.
3. **`## Savings Calculation`** — always this heading, not "Calculation Methodology" or similar.
   - `### Annual Energy Savings` — if the calculation is complex enough to need a subsection.
   - `### Peak Demand Savings` — always a separate subsection, never inline.
4. **`## Anticipated Costs`**
5. **`## Report Requirements`** — only when the measure requires a summary table in the report.

Do not use a `## Required Information` section. Any required inputs belong in the intro paragraph or the savings calculation prose.

### Calculation Order

Within the savings calculation, always calculate in this order:

1. **kWh** (annual energy savings)
2. **kW** (peak demand reduction — instantaneous, no seasonal split needed here)
3. **kW-months** (annual demand savings) — always a separate equation multiplying kW by months:

$$
\Delta \text{kW-months} = (\Delta \text{kW}_{\text{summer}} \times 3) + (\Delta \text{kW}_{\text{winter}} \times 9)
$$

This explicit equation makes the 3/9 month split self-documenting; no admonition or prose explanation is needed.

When the demand reduction is a single year-round instantaneous value (e.g. lighting), do not split it into separate summer/winter kW figures. Instead carry one `\Delta \text{kW}` and apply summer/winter **coincidence factors** in the kW-months step:

$$
\Delta \text{kW-months} = \Delta \text{kW} \times (\text{CF}_{\text{summer}} \times 3 + \text{CF}_{\text{winter}} \times 9)
$$

State the `\text{CF}_{\text{summer}}` and `\text{CF}_{\text{winter}}` values used in the where-list (they are facility-type- and measure-specific — list each one's value in parentheses).

### Variable Naming

| Quantity | Variable |
|---|---|
| Annual energy savings | `\Delta \text{kWh}` (with descriptive subscript if needed) |
| Peak demand reduction | `\Delta \text{kW}`, or `\Delta \text{kW}_{\text{summer}}` / `\Delta \text{kW}_{\text{winter}}` when split seasonally |
| Annual demand savings | `\Delta \text{kW-months}` (always plural, this exact form) |
| Consumption (energy) rate | `R_c` ($/kWh) |
| Demand rate | `R_d` ($/kW-month) |
| Efficiency | `\eta` (with subscript, e.g. `\eta_{\text{baseline}}`) |

- Never use `\Delta E`, `\Delta Q`, `E_{\text{savings}}`, or `P_{\text{savings}}` for energy/demand savings.
- **Multi-letter identifiers are always wrapped in `\text{}`** so they render as one upright token, not a string of multiplied italic letters. Write `\text{PPA}`, `\text{SF}`, `\text{DF}`, `\text{EER}`, `\text{EFLH}`, `\text{COP}`, `\text{CF}`, `\text{PF}`, `\text{CAP}` — never bare `PPA`, `SF`, etc. Single-letter symbols ($H$, $N$, $A$, $F$, $k$, $h$) stay italic.
- Efficiencies use `\eta` (not `Eff`, `E`, or a spelled-out word).
- Rates use a capital `R` with a descriptive subscript: `R_c` (consumption), `R_d` (demand), `R_{\text{labor}}`. Do not use `r_e`/`r_d` or spelled-out `\text{Electricity Cost}`.
- Subscript words are always lowercase and wrapped in `\text{}`: `_{\text{summer}}`, `_{\text{loaded}}`, `_{\text{baseline}}`, `_{\text{prod}}` — never `_{\text{Summer}}` or `_{\text{Prod}}`.
- Unit abbreviations in savings variables are wrapped in `\text{}` so they render as one upright token: write `\Delta \text{kWh}`, `\Delta \text{kW}`, `\Delta \text{kW-months}` — never bare `\Delta kWh` or `\Delta kW`. The same applies to multi-letter units that read poorly in italics (`\Delta \text{MMBtu}`, `\text{gal}_{\text{propane}}`).

### Cost Savings Equation

The dollar conversion is the final step. When shown as an equation, use the standard rate symbols:

$$
\text{Annual Savings} = (\Delta \text{kWh} \times R_c) + (\Delta \text{kW-months} \times R_d)
$$

### Where-Lists

After every equation, introduce the variable list with a lowercase `where:` lead-in, then a bullet list. Put a **blank line between each bullet** (Zensical requires this to render the list correctly). Descriptions start lowercase and always end with parenthetical units:

```
where:

- $\Delta \text{kWh}$ = annual energy savings (kWh/yr)

- $H$ = annual operating hours (hrs/yr)

- $\Delta \text{kW}_{\text{summer}}$ = summer peak demand reduction (kW)
```

For a single variable, an inline `where $X$ is ...` sentence is fine instead of a list.

Use consistent abbreviations throughout: `kWh/yr`, `kW`, `kW-months`, `hrs/yr`, `gal/yr`, `units/hr`, `$/yr`.

### Admonitions

Use admonitions only when content is genuinely non-obvious or a common costly mistake — not to restate prose already on the page.

| Type | When to use | Collapsible? |
|---|---|---|
| `??? note "Title"` | Methodology choices that might surprise a reader (e.g., why a default value was chosen, derivation of a formula) | Yes — always collapsible |
| `!!! note "Assumptions"` | Assumptions the engineer must state in their analysis | No |
| `!!! warning "Title"` | Errors of omission with real cost consequences (e.g., forgetting rebates, replacing equipment before end-of-life) | No |

Do not use admonitions to restate content already explained in the surrounding prose or where-list.

### Anticipated Costs

Use bold subheadings (`**Equipment:**`, `**Installation:**`) only when both categories are present and have meaningfully different cost drivers. For simple cases, a single paragraph is sufficient.
