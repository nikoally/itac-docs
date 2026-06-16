---
hide:
  - toc
---

# Machines

Machines are the production equipment that turns raw material into product, and at most manufacturing facilities they are the single largest block of connected electrical load. The body paragraph should convey the production process and the bulk of that load, leaving individual machine detail to the appendix. This page follows the [universal spine](index.md#the-universal-spine).

## Characterization

The machines paragraph is really a description of the production process expressed in terms of load. Cover:

- The major production equipment by type and count, and what each step does in the process flow. The reader should be able to follow material from input to finished product.

- The general scale and age range of the equipment, not a model-by-model inventory.

- How the load is distributed across the process: which steps are continuous, which are intermittent, and which are the heavy hitters.

Controls and schedule matter here as everywhere: how production is scheduled (shifts, day types, seasonal swings) sets the operating hours that turn connected load into energy.

## Anchor value

The anchor is an estimated electrical load for the machines as a group, stated as either a connected load or an operating load, that ties back to the facility's billed electricity. Because machines are usually the largest consumer, this estimate is the backbone of the energy balance described on the [overview page](index.md#treat-the-summary-table-as-an-energy-balance): if the machine load is wrong, the whole table fails to reconcile.

State the basis explicitly. A connected load summed from nameplates is not the same as an operating load that accounts for duty cycle and diversity, and the reader needs to know which one the number is. If you report connected load, note that actual draw is lower; if you report operating load, note how the duty and diversity were estimated.

## Body versus appendix

Body: the process description and the group-level estimated electrical load.

Appendix: drill into a specific machine only when a recommendation touches it. If a recommendation acts on a single press, motor, or line, that machine's nameplate and operating detail belong in the appendix to support the calculation. A facility full of machines does not need a machine-by-machine appendix; it needs detail only where the report later spends it.

## Appendix contents

The group electrical load quoted in the body is *built up* in the appendix from the machines that matter, not asserted as a round number. The appendix table is the worksheet that turns connected nameplate loads into the operating-load estimate, applying duty cycle and diversity, and the totals row is what must reconcile against billed electricity. Unlike lighting or HVAC, this is not an exhaustive inventory: list the heavy hitters that make up the bulk of the load and any machine a recommendation later acts on, not every machine on the floor. Before the section is "done," the appendix must contain:

- A table of the major load contributors and any recommendation-relevant machines, with connected load, the duty/diversity assumptions applied, and the resulting operating-load estimate.

- A totals row giving the group operating-load estimate (the body's anchor), and a note on how the rows not individually listed were accounted for so the total still reconciles.

- The basis stated per row: nameplate connected load versus measured or estimated operating load.

### Table template

One row per machine or machine group; close with the group estimate.

| Equipment / Machine | Process Step | Qty | Connected Load (hp / kW) | Duty Cycle / Load Factor | Operating Hours (hrs/yr) | Est. Operating Load (kW) | Basis |
|---|---|---|---|---|---|---|---|
| *(major load contributors…)* | | | | | | | |
| **Group estimated load** | | | | | | *(kW)* | |

## Watch for

- Connected load is not operating load. Summing nameplates overstates actual draw. State which one you are reporting and how diversity and duty were handled.

- The machine estimate is the reconciliation backbone. If billed electricity and the summed intensities do not line up, the machine load is the first estimate to revisit.

- Resist inventorying. The body is a process picture, not a parts list. Hold equipment detail for the appendix, and only where a recommendation needs it.
