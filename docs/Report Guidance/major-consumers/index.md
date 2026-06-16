---
hide:
  - toc
---

# Major Energy Consumers

The Major Energy Consumers section characterizes every system at the facility that draws a meaningful share of its energy. It is the bridge between the [Utility Analysis](../utility-analysis.md), which establishes how much energy the facility buys and what it pays, and the recommendations, which propose specific ways to use less of it. The job of this section is to give the reader a working mental model of where the energy goes, system by system, before any savings are discussed.

Every major consumer present at the facility belongs here, even when no recommendation touches it. The section is a complete account of the load, not a list of the systems we happened to find savings in. A reader should be able to reconstruct roughly the whole energy bill from this section alone. If a system is omitted because nothing could be recommended for it, the account no longer balances and the reader loses the ability to sanity-check everything that follows.

## The three-tier information model

The section organizes information into three tiers, each with a different job. Deciding which tier a given piece of information belongs to is the main discipline of writing this section, so it is worth stating the model up front.

### Tier 1: the summary table

One row per system. Each row carries a one-line description of what the system is and does, plus an estimated energy intensity. This is the at-a-glance view: a reader should be able to scan the table and see the relative weight of each consumer without reading any prose.

### Tier 2: the main-section paragraph

One paragraph per system in the body of the report. The paragraph characterizes the system and, crucially, carries the anchor values that recommendations later cite. These are the numbers the rest of the report depends on, so they live in the body where they are easy to find and easy to check.

### Tier 3: the appendix

All evidentiary detail: nameplate tables, raw combustion data, fixture inventories, logged data. This is where a skeptical reader goes to see the basis for an anchor value, but it is not where the narrative lives. The appendix supports the body; it does not duplicate it.

In the report's LaTeX, the first two tiers live in the body section (Report Sections, Major-Consumers.tex: the summary table followed by the system paragraphs), and the third lives in the appendix (Appendices, Major-Systems-App.tex). Every system kept in the summary table must have a matching appendix subsection, and vice versa.

### The test for body versus appendix

The single question that decides whether a number belongs in the Tier 2 paragraph rather than the Tier 3 appendix:

Does a recommendation elsewhere in the report reference this number?

If a savings calculation cites a value, that value belongs in the body paragraph. The supporting evidence behind it (the per-unit breakdown, the logged trace, the full nameplate) goes to the appendix. Apply this test deliberately: a body paragraph crowded with detail that nothing downstream uses is as much a failure as an appendix that hides a number a recommendation depends on.

## The universal spine

Every system paragraph follows the same order, so the sections read in parallel and a reader can find the same kind of information in the same place for each system. The spine is:

1. What the system is: type, count, and capacity, and what it serves.

2. How it is controlled.

3. The operating schedule, including how it varies by day type (weekday versus weekend, shift patterns, seasonal operation).

4. The anchor value or values, and how each was derived: measured, nameplate, or estimated.

5. A pointer to the appendix for the supporting detail.

Following the spine is what makes the section scannable. A reader who has read the Compressed Air paragraph already knows where to find the schedule and the anchor value in the Boilers paragraph.

## Cross-cutting principles

These apply to every system and are easy to get wrong one row at a time.

### State the basis of every intensity number

For every intensity or anchor value, say whether it is measured, taken from nameplate, or estimated. A logged kW/CFM and a nameplate-derived one are not the same kind of evidence, and a recommendation built on the weaker basis should be read with that in mind. Stating the basis consistently lets the reader weigh each number appropriately.

### Treat the summary table as an energy balance

The intensities across all rows should roughly reconcile to the facility's billed electricity and fuel from the [Utility Analysis](../utility-analysis.md). The table is, in effect, an energy balance: the parts should add up to the whole. A mismatch is a signal, not a rounding nuisance. It usually means one of two things: a consumer is missing from the table, or one of the estimates is off. Either way, the gap is worth chasing down before the section is finished.

### Schedule and hours are needed almost everywhere

Operating schedule and annual hours are not a compressed-air concern alone. Nearly every system's energy use is hours times load, so the schedule is half of every intensity estimate. Capture it for machines, boilers, process heat, cooling, HVAC, and lighting, not just for the systems where an hours-based recommendation is obvious.

### Map the facility's equipment to the rows before writing

Before writing anything, map the facility's actual equipment onto the template rows. Two boundary decisions deserve explicit attention:

- Resolve the HVAC versus chiller boundary up front. Comfort cooling can plausibly be counted under either heading. Decide where it lives and state it, so no cooling load is double counted or dropped. See the [HVAC](hvac.md) and [Process Cooling and Chillers](process-cooling-and-chillers.md) pages for the same boundary described from both sides.

- Delete any template row the facility does not have. An empty row implies a consumer that is not there and breaks the energy balance.