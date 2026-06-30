---
hide:
  - toc
---

# Cold Air Intake Calculator

Use this calculator to estimate energy and cost savings from implementing a cold air intake system. Enter your compressor parameters, monthly outdoor temperatures, and utility rates to see detailed monthly savings analysis.

If you need to back-calculate isentropic efficiency from CT data first, use the [VSD Isentropic Efficiency Estimator](vsd-efficiency.md) to get the "Isentropic Eff." input value.

<div id="cold-air-calculator" style="max-width: 1200px; margin: 20px auto; padding: 20px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 8px; background: var(--md-code-bg-color);">

<h3>Compressors</h3>

<div id="compressorList">
    <!-- Compressor cards inserted by JS -->
</div>

<div style="margin: 15px 0;">
    <button onclick="addCompressor()" style="padding: 8px 16px; background: var(--md-primary-fg-color); color: white; border: none; border-radius: 4px; cursor: pointer;">+ Add Compressor</button>
</div>

<h3 style="margin-top: 30px;">Monthly Indoor Temperatures</h3>

<p style="font-size: 0.85em; color: var(--md-default-fg-color--light); margin: 10px 0;">Average monthly indoor temperatures at current compressor intake (°C):</p>

<div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; margin: 15px 0;">
    <div>
        <label for="indoor1" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">Jan</label>
        <input type="number" id="indoor1" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="indoor2" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">Feb</label>
        <input type="number" id="indoor2" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="indoor3" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">Mar</label>
        <input type="number" id="indoor3" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="indoor4" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">Apr</label>
        <input type="number" id="indoor4" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="indoor5" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">May</label>
        <input type="number" id="indoor5" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="indoor6" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">Jun</label>
        <input type="number" id="indoor6" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="indoor7" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">Jul</label>
        <input type="number" id="indoor7" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="indoor8" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">Aug</label>
        <input type="number" id="indoor8" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="indoor9" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">Sep</label>
        <input type="number" id="indoor9" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="indoor10" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">Oct</label>
        <input type="number" id="indoor10" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="indoor11" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">Nov</label>
        <input type="number" id="indoor11" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="indoor12" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">Dec</label>
        <input type="number" id="indoor12" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
</div>

<h3 style="margin-top: 30px;">Cost Parameters</h3>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
    <div>
        <label for="electricRate" style="display: block; margin-bottom: 5px; font-weight: 500;">Energy Rate ($/kWh):</label>
        <input type="number" id="electricRate" value="0.12" step="0.01" style="width: 100%; padding: 8px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="demandRate" style="display: block; margin-bottom: 5px; font-weight: 500;">Demand Rate ($/kW-month):</label>
        <input type="number" id="demandRate" value="8.50" step="0.01" style="width: 100%; padding: 8px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
        <p style="font-size: 0.85em; color: var(--md-default-fg-color--light); margin-top: 5px;">Monthly demand charge per kW of peak demand</p>
    </div>
</div>

<h3 style="margin-top: 30px;">Monthly Outdoor Temperatures</h3>

<div style="margin: 10px 0;">
    <label for="locationPreset" style="font-size: 0.85em; font-weight: 500; margin-right: 8px;">Load from location:</label>
    <select id="locationPreset" onchange="applyLocationPreset()" style="padding: 6px 10px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color); font-size: 0.85em;">
        <option value="">-- Select --</option>
        <option value="HFD">Hartford Brainard (HFD)</option>
        <option value="BOS">Boston (BOS)</option>
        <option value="HPN">White Plains (HPN)</option>
        <option value="LGA">New York LaGuardia (LGA)</option>
        <option value="ISP">Islip (ISP)</option>
        <option value="ORH">Worcester (ORH)</option>
        <option value="BAF">Westfield-Barnes (BAF)</option>
        <option value="BTV">Burlington (BTV)</option>
        <option value="BGR">Bangor (BGR)</option>
    </select>
</div>

<p style="font-size: 0.85em; color: var(--md-default-fg-color--light); margin: 10px 0;">Average monthly outdoor temperatures (°C):</p>

<div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; margin: 15px 0;">
    <div>
        <label for="temp1" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">Jan</label>
        <input type="number" id="temp1" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="temp2" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">Feb</label>
        <input type="number" id="temp2" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="temp3" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">Mar</label>
        <input type="number" id="temp3" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="temp4" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">Apr</label>
        <input type="number" id="temp4" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="temp5" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">May</label>
        <input type="number" id="temp5" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="temp6" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">Jun</label>
        <input type="number" id="temp6" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="temp7" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">Jul</label>
        <input type="number" id="temp7" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="temp8" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">Aug</label>
        <input type="number" id="temp8" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="temp9" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">Sep</label>
        <input type="number" id="temp9" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="temp10" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">Oct</label>
        <input type="number" id="temp10" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="temp11" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">Nov</label>
        <input type="number" id="temp11" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
    <div>
        <label for="temp12" style="display: block; margin-bottom: 5px; font-size: 0.85em; text-align: center;">Dec</label>
        <input type="number" id="temp12" value="" step="0.1" style="width: 100%; padding: 6px; text-align: center; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
</div>

<h3 style="margin-top: 30px;">Results Summary</h3>

<div id="results" style="margin: 20px 0; padding: 20px; background: var(--md-default-bg-color); border-radius: 6px; border: 1px solid var(--md-default-fg-color--lightest);">
    <div id="resultsSummaryContent">
        <p style="color: var(--md-default-fg-color--light);">Enter outdoor temperatures and compressor parameters to see results.</p>
    </div>
</div>

<h3 style="margin-top: 30px;">Monthly Power Comparison</h3>

<div id="powerChartContainer" style="width: 100%; height: 400px;">
    <!-- Plotly chart inserted by JS -->
</div>

<div style="margin-top: 20px;">
    <button onclick="saveChart()" style="padding: 10px 20px; background: var(--md-primary-fg-color); color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 10px;">Save Graph as PNG</button>
    <button onclick="toggleLatex()" id="latexToggle" style="padding: 10px 20px; background: var(--md-default-bg-color); border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; cursor: pointer; color: var(--md-default-fg-color); margin-right: 10px;">Show LaTeX Table</button>
    <button onclick="copyLatex()" id="copyButton" style="padding: 10px 20px; background: var(--md-primary-fg-color); color: white; border: none; border-radius: 4px; cursor: pointer; display: none;">Copy to Clipboard</button>
</div>

<div id="latexContent" style="display: none; margin-top: 15px; padding: 15px; background: var(--md-code-bg-color); border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; overflow-x: auto;">
    <pre id="latexCode" style="margin: 0; font-family: monospace; font-size: 0.75em; color: var(--md-default-fg-color--light); white-space: pre;"></pre>
</div>

</div>
