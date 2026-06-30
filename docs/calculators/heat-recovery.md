---
hide:
  - toc
---

# Compressor Heat Recovery Calculator

Use this calculator to estimate energy and cost savings from implementing compressor heat recovery. Enter your compressor and heating system parameters to see the annual fuel savings analysis.

<div id="heat-recovery-calculator" style="max-width: 1200px; margin: 20px auto; padding: 20px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 8px; background: var(--md-code-bg-color);">

<h3>Compressor Parameters</h3>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
    <div>
        <label for="motorPower" style="display: block; margin-bottom: 5px; font-weight: 500;">Compressor Motor Power:</label>
        <div style="display: flex; gap: 10px;">
            <input type="number" id="motorPower" value="100" step="1" style="flex: 1; padding: 8px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
            <select id="powerUnit" onchange="hrCalculate()" style="padding: 8px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
                <option value="hp">HP</option>
                <option value="kw">kW</option>
            </select>
        </div>
    </div>
    <div>
        <label for="compressorType" style="display: block; margin-bottom: 5px; font-weight: 500;">Compressor Type:</label>
        <select id="compressorType" onchange="hrUpdateRejectionFactor()" style="width: 100%; padding: 8px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
            <option value="rotary-screw">Lubricant-Injected Rotary Screw (Air-Cooled)</option>
            <option value="oil-free">Oil-Free Rotary Screw</option>
            <option value="reciprocating">Reciprocating (Air-Cooled)</option>
            <option value="centrifugal">Centrifugal</option>
        </select>
    </div>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
    <div>
        <label for="rejectionFactor" style="display: block; margin-bottom: 5px; font-weight: 500;">Heat Rejection Factor:</label>
        <input type="number" id="rejectionFactor" value="0.85" step="0.01" min="0" max="1" style="width: 100%; padding: 8px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
        <p style="font-size: 0.85em; color: var(--md-default-fg-color--light); margin-top: 5px;">Fraction of input energy rejected as recoverable heat (auto-filled from compressor type)</p>
    </div>
    <div>
        <label for="annualCompressorHours" style="display: block; margin-bottom: 5px; font-weight: 500;">Annual Compressor Operating Hours:</label>
        <input type="number" id="annualCompressorHours" value="8760" step="1" style="width: 100%; padding: 8px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
        <p style="font-size: 0.85em; color: var(--md-default-fg-color--light); margin-top: 5px;">Total loaded hours compressor runs per year </p>
    </div>
</div>

<h3 style="margin-top: 30px;">Heating System Parameters</h3>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
    <div>
        <label for="fuelType" style="display: block; margin-bottom: 5px; font-weight: 500;">Heating Fuel Type:</label>
        <select id="fuelType" onchange="hrUpdateFuelDefaults()" style="width: 100%; padding: 8px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
            <option value="natural-gas">Natural Gas (MMBtu)</option>
            <option value="propane">Propane (MMBtu)</option>
            <option value="fuel-oil">No. 2 Fuel Oil (MMBtu)</option>
            <option value="electric">Electric Resistance (kWh)</option>
        </select>
    </div>
    <div>
        <label for="heatingEfficiency" style="display: block; margin-bottom: 5px; font-weight: 500;">Heating System Efficiency (%):</label>
        <input type="number" id="heatingEfficiency" value="85" step="1" min="1" max="100" style="width: 100%; padding: 8px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
    </div>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
    <div>
        <label for="fuelCost" style="display: block; margin-bottom: 5px; font-weight: 500;">Fuel Cost ($ per unit):</label>
        <input type="number" id="fuelCost" value="15.00" step="0.01" style="width: 100%; padding: 8px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
        <p style="font-size: 0.85em; color: var(--md-default-fg-color--light); margin-top: 5px;" id="fuelCostLabel">$/MMBtu for natural gas</p>
    </div>
    <div>
        <label for="fuelHoC" style="display: block; margin-bottom: 5px; font-weight: 500;">Heat of Combustion (Btu/unit):</label>
        <input type="number" id="fuelHoC" value="1000000" step="100" style="width: 100%; padding: 8px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
        <p style="font-size: 0.85em; color: var(--md-default-fg-color--light); margin-top: 5px;" id="fuelHoCLabel">1,000,000 Btu/MMBtu (by definition)</p>
    </div>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
    <div>
        <label for="heatingMonths" style="display: block; margin-bottom: 5px; font-weight: 500;">Number of Heating Months per Year:</label>
        <input type="number" id="heatingMonths" value="6" step="1" min="1" max="12" style="width: 100%; padding: 8px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
        <p style="font-size: 0.85em; color: var(--md-default-fg-color--light); margin-top: 5px;">Months per year with heating demand (typically 5 to 8 in northern climates)</p>
    </div>
    <div id="demandRateSection" style="display: none;">
        <label for="hrDemandRate" style="display: block; margin-bottom: 5px; font-weight: 500;">Demand Rate ($/kW-month):</label>
        <input type="number" id="hrDemandRate" value="8.50" step="0.01" style="width: 100%; padding: 8px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
        <p style="font-size: 0.85em; color: var(--md-default-fg-color--light); margin-top: 5px;">Monthly demand charge per kW of peak demand</p>
    </div>
</div>

<h3 style="margin-top: 30px;">Results Summary</h3>

<div id="hrResults" style="margin: 20px 0; padding: 20px; background: var(--md-default-bg-color); border-radius: 6px; border: 1px solid var(--md-default-fg-color--lightest);">
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-bottom: 20px;">
        <div>
            <p style="margin: 5px 0; color: var(--md-default-fg-color--light); font-size: 0.9em;">Motor Input Power:</p>
            <p style="margin: 5px 0; font-family: monospace; font-size: 1.1em;" id="hrMotorPowerResult">254,500 Btu/hr</p>
        </div>
        <div>
            <p style="margin: 5px 0; color: var(--md-default-fg-color--light); font-size: 0.9em;">Recoverable Heat (at full load):</p>
            <p style="margin: 5px 0; font-family: monospace; font-size: 1.1em;" id="hrRecoverableResult">216,325 Btu/hr</p>
        </div>
        <div>
            <p style="margin: 5px 0; color: var(--md-default-fg-color--light); font-size: 0.9em;">Heating Season Hours:</p>
            <p style="margin: 5px 0; font-family: monospace; font-size: 1.1em;" id="hrHeatingHoursResult">4,380 hrs</p>
        </div>
    </div>

    <div style="margin-top: 30px; padding: 20px; background: rgba(76, 175, 80, 0.1); border: 1px solid rgba(76, 175, 80, 0.3); border-radius: 6px;">
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; text-align: center;">
            <div>
                <p style="margin: 5px 0; color: var(--md-default-fg-color--light); font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.5px;">Annual Heat Recovered</p>
                <p style="margin: 5px 0; font-family: monospace; font-size: 1.4em; font-weight: 600; color: #4caf50;" id="hrAnnualHeatResult">0 MMBtu</p>
            </div>
            <div>
                <p style="margin: 5px 0; color: var(--md-default-fg-color--light); font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.5px;">Annual Fuel Displaced</p>
                <p style="margin: 5px 0; font-family: monospace; font-size: 1.4em; font-weight: 600; color: #4caf50;" id="hrFuelDisplacedResult">0 MMBtu</p>
            </div>
            <div>
                <p style="margin: 5px 0; color: var(--md-default-fg-color--light); font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.5px;">Annual Energy Cost Savings</p>
                <p style="margin: 5px 0; font-family: monospace; font-size: 1.4em; font-weight: 600; color: #4caf50;" id="hrEnergyCostResult">$0</p>
            </div>
        </div>

        <div id="hrDemandResultsRow" style="display: none; margin-top: 20px; padding-top: 15px; border-top: 1px solid rgba(76, 175, 80, 0.3);">
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; text-align: center;">
                <div>
                    <p style="margin: 5px 0; color: var(--md-default-fg-color--light); font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.5px;">Demand Reduction</p>
                    <p style="margin: 5px 0; font-family: monospace; font-size: 1.4em; font-weight: 600; color: #4caf50;" id="hrKwResult">0 kW</p>
                </div>
                <div>
                    <p style="margin: 5px 0; color: var(--md-default-fg-color--light); font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.5px;">Demand Savings</p>
                    <p style="margin: 5px 0; font-family: monospace; font-size: 1.4em; font-weight: 600; color: #4caf50;" id="hrKwMonthsResult">0 kW-mo</p>
                    <p style="margin: 5px 0; font-family: monospace; font-size: 1.1em; color: #4caf50;" id="hrDemandCostResult">$0</p>
                </div>
                <div>
                    <p style="margin: 5px 0; color: var(--md-default-fg-color--light); font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.5px;">Total Annual Savings</p>
                    <p style="margin: 5px 0; font-family: monospace; font-size: 1.4em; font-weight: 600; color: #4caf50;" id="hrTotalCostResult">$0</p>
                </div>
            </div>
        </div>
    </div>
</div>

<div style="margin-top: 20px;">
    <button onclick="hrToggleLatex()" id="hrLatexToggle" style="padding: 10px 20px; background: var(--md-default-bg-color); border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; cursor: pointer; color: var(--md-default-fg-color); margin-right: 10px;">Show LaTeX Table</button>
    <button onclick="hrCopyLatex()" id="hrCopyButton" style="padding: 10px 20px; background: var(--md-primary-fg-color); color: white; border: none; border-radius: 4px; cursor: pointer; display: none;">Copy to Clipboard</button>
</div>

<div id="hrLatexContent" style="display: none; margin-top: 15px; padding: 15px; background: var(--md-code-bg-color); border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; overflow-x: auto;">
    <pre id="hrLatexCode" style="margin: 0; font-family: monospace; font-size: 0.75em; color: var(--md-default-fg-color--light); white-space: pre;"></pre>
</div>

<div style="margin-top: 20px;">
    <button onclick="hrToggleEquations()" id="hrEquationsToggle" style="padding: 10px 20px; background: var(--md-default-bg-color); border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; cursor: pointer; color: var(--md-default-fg-color); margin-right: 10px;">Show LaTeX Equations</button>
    <button onclick="hrCopyEquations()" id="hrCopyEquationsButton" style="padding: 10px 20px; background: var(--md-primary-fg-color); color: white; border: none; border-radius: 4px; cursor: pointer; display: none;">Copy to Clipboard</button>
</div>

<div id="hrEquationsContent" style="display: none; margin-top: 15px; padding: 15px; background: var(--md-code-bg-color); border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; overflow-x: auto;">
    <pre id="hrEquationsCode" style="margin: 0; font-family: monospace; font-size: 0.75em; color: var(--md-default-fg-color--light); white-space: pre;"></pre>
</div>

</div>
