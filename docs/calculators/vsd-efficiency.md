---
hide:
  - toc
---

# VSD Isentropic Efficiency Estimator

For VSD compressors, the CAGI datasheet doesn't always report isentropic efficiency. When it does, it reports it at a single test point, which may not represent the typical operating point. Use this calculator to back-calculate isentropic efficiency from measured specific power data.

First, analyze the CT data in order to figure out the average operating power. To do this, average all non-near-zero values. Then, take that power and figure out the corresponding airflow. You will likely need to interpolate.

<div id="vsd-efficiency-calc" style="max-width: 800px; margin: 20px auto; padding: 20px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 8px; background: var(--md-code-bg-color);">

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 15px 0;">
    <div>
        <label for="vsdCfm" style="display: block; margin-bottom: 5px; font-weight: 500;">Measured Flow Rate (CFM):</label>
        <input type="number" id="vsdCfm" value="" step="1" placeholder="e.g. 350" style="width: 100%; padding: 8px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
        <p style="font-size: 0.85em; color: var(--md-default-fg-color--light); margin-top: 4px;">Average non-near-zero flow from CT data</p>
    </div>
    <div>
        <label for="vsdKw" style="display: block; margin-bottom: 5px; font-weight: 500;">Measured Power (kW):</label>
        <input type="number" id="vsdKw" value="" step="0.1" placeholder="e.g. 75.2" style="width: 100%; padding: 8px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
        <p style="font-size: 0.85em; color: var(--md-default-fg-color--light); margin-top: 4px;">Average power at the measured flow point</p>
    </div>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 15px 0;">
    <div>
        <label for="vsdPressure" style="display: block; margin-bottom: 5px; font-weight: 500;">Discharge Pressure (PSI):</label>
        <input type="number" id="vsdPressure" value="" step="1" placeholder="e.g. 125" style="width: 100%; padding: 8px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="vsdInletTemp" style="display: block; margin-bottom: 5px; font-weight: 500;">Inlet Temperature (°C):</label>
        <input type="number" id="vsdInletTemp" value="20" step="0.1" placeholder="e.g. 20" style="width: 100%; padding: 8px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
        <p style="font-size: 0.85em; color: var(--md-default-fg-color--light); margin-top: 4px;">Temperature at test conditions (CAGI standard: 20°C)</p>
    </div>
</div>

<div id="vsdResult" style="margin-top: 15px; padding: 15px; background: var(--md-default-bg-color); border-radius: 6px; border: 1px solid var(--md-default-fg-color--lightest);">
    <p style="color: var(--md-default-fg-color--light);">Enter values above to calculate isentropic efficiency.</p>
</div>

</div>
