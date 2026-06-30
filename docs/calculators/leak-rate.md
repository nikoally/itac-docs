---
hide:
  - toc
---

# Leak Rate Calculator

Use this calculator to automatically determine leak rates from compressor power data. Upload a CSV file with power measurements and configure the analysis parameters. The DateTime should be in the second column and the current should be in the third column.

<div id="leak-calculator" style="max-width: 1200px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background: var(--md-code-bg-color);">

<h3>Step 1: Upload CSV File</h3>

<div style="margin: 15px 0;">
    <input type="file" id="csvFileInput" accept=".csv" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
    <button onclick="loadCSV()" style="margin-left: 10px; padding: 8px 16px; background: #4051b5; color: white; border: none; border-radius: 4px; cursor: pointer;">Load Data</button>
</div>

<div id="fileInfo" style="margin: 10px 0; font-size: 0.9em; color: var(--md-default-fg-color--light);"></div>

<h3>Step 2: Enter System Voltage</h3>

<div style="margin: 15px 0; padding: 15px; background: var(--md-default-bg-color); border-radius: 6px;">
    <p style="font-size: 0.9em; color: var(--md-default-fg-color--light); margin-bottom: 10px;">
        Enter the 3-phase system voltage. Power will be calculated as: P = √3 × V × I
    </p>
    <div style="max-width: 300px;">
        <label for="systemVoltage" style="display: block; margin-bottom: 5px; font-weight: 500;">System Voltage (V):</label>
        <input type="number" id="systemVoltage" placeholder="460" step="1" value="460" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
        <p style="font-size: 0.85em; color: var(--md-default-fg-color--light); margin-top: 5px;">Common values: 208V, 460V, 600V</p>
    </div>
</div>

<div id="powerHistogram" style="margin: 20px 0; height: 300px; display: none;"></div>

<h3>Step 3: Select Control Type and Configure</h3>

<div style="margin: 15px 0;">
    <label style="display: block; margin-bottom: 10px; font-weight: 500;">
        <input type="radio" name="controlType" value="vfd" checked onchange="updateControlTypeUI()"> VFD Compressor
        <input type="radio" name="controlType" value="nonvfd" style="margin-left: 20px;" onchange="updateControlTypeUI()"> Non-VFD Compressor
    </label>
</div>

<div id="vfdConfig" style="margin: 20px 0; padding: 15px; background: var(--md-default-bg-color); border-radius: 6px;">
    <h4 style="margin-top: 0;">VFD Configuration: Power-Flow Data Points</h4>
    <p style="font-size: 0.9em; color: var(--md-default-fg-color--light); margin-bottom: 10px;">
        Enter at least 4 power-flow data points. Click "Add Point" for more rows.
    </p>
    <div id="vfdPointsContainer" style="margin: 10px 0;">
        <div style="display: grid; grid-template-columns: 1fr 1fr 50px; gap: 10px; margin-bottom: 8px; font-weight: 500;">
            <div>Power (kW)</div>
            <div>Flow (CFM)</div>
            <div></div>
        </div>
        <div class="vfd-point" style="display: grid; grid-template-columns: 1fr 1fr 50px; gap: 10px; margin-bottom: 8px;">
            <input type="number" class="vfd-power" placeholder="10" step="0.1" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
            <input type="number" class="vfd-flow" placeholder="50" step="0.1" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
            <div></div>
        </div>
        <div class="vfd-point" style="display: grid; grid-template-columns: 1fr 1fr 50px; gap: 10px; margin-bottom: 8px;">
            <input type="number" class="vfd-power" placeholder="40" step="0.1" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
            <input type="number" class="vfd-flow" placeholder="250" step="0.1" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
            <div></div>
        </div>
        <div class="vfd-point" style="display: grid; grid-template-columns: 1fr 1fr 50px; gap: 10px; margin-bottom: 8px;">
            <input type="number" class="vfd-power" placeholder="75" step="0.1" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
            <input type="number" class="vfd-flow" placeholder="475" step="0.1" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
            <div></div>
        </div>
        <div class="vfd-point" style="display: grid; grid-template-columns: 1fr 1fr 50px; gap: 10px; margin-bottom: 8px;">
            <input type="number" class="vfd-power" placeholder="95" step="0.1" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
            <input type="number" class="vfd-flow" placeholder="600" step="0.1" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
            <button onclick="removeVFDPoint(this)" style="padding: 6px; background: #d32f2f; color: white; border: none; border-radius: 4px; cursor: pointer;">✕</button>
        </div>
    </div>
    <button onclick="addVFDPoint()" style="padding: 8px 16px; background: #4caf50; color: white; border: none; border-radius: 4px; cursor: pointer;">+ Add Point</button>
</div>

<div id="nonvfdConfig" style="margin: 20px 0; padding: 15px; background: var(--md-default-bg-color); border-radius: 6px; display: none;">
    <h4 style="margin-top: 0;">Non-VFD Configuration: Operating States</h4>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin: 15px 0;">
        <div>
            <label style="display: block; margin-bottom: 5px; font-weight: 500;">Loaded Power (kW):</label>
            <input type="number" id="loadedPower" placeholder="100" step="0.1" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
        </div>
        <div>
            <label style="display: block; margin-bottom: 5px; font-weight: 500;">Loaded Flow (CFM):</label>
            <input type="number" id="loadedFlow" placeholder="500" step="0.1" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
        </div>
        <div>
            <label style="display: block; margin-bottom: 5px; font-weight: 500;">Margin (% of loaded):</label>
            <input type="number" id="loadedMargin" placeholder="10" step="1" min="0" max="20" value="10" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
        </div>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin: 15px 0;">
        <div>
            <label style="display: block; margin-bottom: 5px; font-weight: 500;">Unloaded Power (kW):</label>
            <input type="number" id="unloadedPower" placeholder="25" step="0.1" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
        </div>
        <div>
            <label style="display: block; margin-bottom: 5px; font-weight: 500;">Unloaded Flow (CFM):</label>
            <input type="number" id="unloadedFlow" placeholder="0" step="0.1" value="0" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
        </div>
        <div>
            <label style="display: block; margin-bottom: 5px; font-weight: 500;">Margin (% of unloaded):</label>
            <input type="number" id="unloadedMargin" placeholder="10" step="1" min="0" max="20" value="10" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
        </div>
    </div>
</div>

<h3>Step 4: Select Non-Production Period</h3>

<div style="margin: 15px 0; padding: 15px; background: var(--md-default-bg-color); border-radius: 6px;">
    <p style="font-size: 0.9em; color: var(--md-default-fg-color--light); margin-bottom: 10px;">
        Select the start and end of the non-production period to analyze:
    </p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
        <div>
            <label for="startTime" style="display: block; margin-bottom: 5px; font-weight: 500;">Start DateTime:</label>
            <input type="datetime-local" id="startTime" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
        </div>
        <div>
            <label for="endTime" style="display: block; margin-bottom: 5px; font-weight: 500;">End DateTime:</label>
            <input type="datetime-local" id="endTime" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
        </div>
    </div>
    <div id="periodInfo" style="margin-top: 10px; font-size: 0.9em; color: var(--md-default-fg-color--light);"></div>
</div>

<h3>Step 5: Calculate Leak Rate</h3>

<div style="margin: 20px 0;">
    <button onclick="calculateLeakRate()" style="padding: 12px 24px; background: #4051b5; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 1.1em; font-weight: 500;">Calculate Leak Rate</button>
</div>

<div id="results" style="margin: 20px 0; padding: 20px; background: var(--md-default-bg-color); border-radius: 6px; display: none;">
    <h3 style="margin-top: 0; color: #4caf50;">Results</h3>
    <div id="resultsContent"></div>
</div>

<div id="powerChart" style="margin: 20px 0; height: 400px; display: none;"></div>

</div>
