---
hide:
  - toc
---

# Lighting

Lighting is usually a smaller share of the load than the production systems, but it is one of the most consistently addressable, so the characterization should support a retrofit or controls recommendation cleanly. The organizing idea is the zone: lighting is described zone by zone, split between interior and exterior. This page follows the [universal spine](index.md#the-universal-spine).

## Characterization

Describe the lighting by zone, split into interior and exterior:

- Zones, and what kind of space each is (production floor, warehouse, office, yard).

- Technology types in use (for example fluorescent, HID, LED).

- Fixture wattage.

- Control types (manual switching, occupancy sensors, daylight harvesting, timers).

Keep operating hours by zone separate from control type. The hours are how long the lights are on; the control type is the mechanism that governs them. They answer different questions, and a recommendation needs both, so do not collapse one into the other.

## Anchor values

The anchors are total connected lighting load in kW, plus operating hours by zone. Together these give the annual energy and the per-zone breakdown that retrofit and controls recommendations build on.

## Body versus appendix

Body: the interior and exterior summary, the total connected load, and the operating hours by zone.

Appendix: the zone-by-zone or fixture-level inventory. For each entry, capture quantity, type, wattage, hours, controls, and the mounting height or space type. The mounting height and space type are what determine retrofit feasibility (a high-bay fixture and an office troffer are not interchangeable), so they belong with the inventory that supports a retrofit recommendation.

## Appendix contents

The total connected lighting load quoted in the body is *computed* in the appendix, not just restated there. The appendix inventory is the worksheet behind it: the total is the sum of quantity × fixture wattage across every row, and the body figure is only as defensible as the inventory that produces it. Before the section is "done," the appendix must contain:

- The full fixture inventory, one row per fixture group, split into interior and exterior, with a subtotal for each and a grand total connected load in kW. The grand total is the body's anchor.

- Per-zone operating hours, carried on each row so the annual energy and the per-zone breakdown that controls recommendations build on can be reconstructed.

- For every row, the mounting height and space type, since these decide retrofit feasibility.

### Table template

Group rows by interior and exterior, with a subtotal row after each group and a final total connected load.

| Zone / Area | Space Type | Technology | Fixture Type | Qty | Watts / Fixture | Total Watts | Mounting Height | Controls | Operating Hours (hrs/yr) |
|---|---|---|---|---|---|---|---|---|---|
| *(interior rows…)* | | | | | | | | | |
| **Interior subtotal** | | | | | | *(Σ W)* | | | |
| *(exterior rows…)* | | | | | | | | | |
| **Exterior subtotal** | | | | | | *(Σ W)* | | | |
| **Total connected load** | | | | | | *(kW)* | | | |
