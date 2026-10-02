---
hide:
  - toc
---

# Compressed Air

Compressed air is often a facility's most expensive utility per unit of useful work, and it is one of the richest sources of recommendations, so the paragraph needs to carry enough detail to support them. The body should characterize the supply side as a system, not just list compressors. This page follows the [universal spine](index.md#the-universal-spine).

## Characterization

Describe the compressed air system, not only the machines that make the air:

- Number and type of units, and the lead/lag or trim arrangement that decides which unit carries the swing load.

- Total capacity of the system.

- Control method (load/unload, modulating, variable speed), since this drives part-load efficiency more than anything else.

- Header pressure setpoint.

- Receiver storage volume, which buffers demand swings and interacts with control behavior.

## Anchor values

Three anchors come out of this system:

- Specific power, in kW/CFM. This typically comes from a nameplate or CAGI datasheet. For VSD compressors, this needs to be a time-weighted average based on the CAGI datasheet's performance points. 

- Equivalent full load hours, which convert capacity into annual energy.

- System operating hours. This is the hours/year the system is pressurized, and likely exceeds the facility operating hours. Estimate this from the CT data.
