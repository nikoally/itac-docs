// Cold Air Intake Calculator (calculators/cold-intake.md).
//
// Functions called from inline onclick= attributes (addCompressor,
// removeCompressor, applyLocationPreset, saveChart, toggleLatex, copyLatex)
// MUST remain global, so this file is not wrapped in an IIFE. Plotly is
// lazy-loaded on demand via loadScriptOnce (defined in extra.js).

// Physical constants
const GAMMA = 1.40287268;
const R_AIR = 0.28703905;
const P_ATM = 101.325;
const CFM_TO_KGS = 0.000472 * 1.225;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let compressorCount = 0;
let calculationResults = null;

function addCompressor(cfm = '', psi = '', eff = '', hours = '') {
    compressorCount++;
    const id = compressorCount;
    const container = document.getElementById('compressorList');
    const card = document.createElement('div');
    card.id = `compressor-${id}`;
    card.style.cssText = 'margin: 10px 0; padding: 15px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 6px; background: var(--md-default-bg-color);';
    card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <strong>Compressor ${id}</strong>
            <button onclick="removeCompressor(${id})" style="padding: 4px 10px; background: none; border: 1px solid #f44336; border-radius: 4px; cursor: pointer; color: #f44336; font-size: 0.85em;">Remove</button>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 12px;">
            <div>
                <label style="display: block; margin-bottom: 4px; font-size: 0.85em;">CFM:</label>
                <input type="number" class="comp-cfm" data-id="${id}" value="${cfm}" step="1" placeholder="e.g. 447" style="width: 100%; padding: 6px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
            </div>
            <div>
                <label style="display: block; margin-bottom: 4px; font-size: 0.85em;">Pressure (PSI):</label>
                <input type="number" class="comp-psi" data-id="${id}" value="${psi}" step="1" placeholder="e.g. 145" style="width: 100%; padding: 6px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
            </div>
            <div>
                <label style="display: block; margin-bottom: 4px; font-size: 0.85em;">Isentropic Eff. (%):</label>
                <input type="number" class="comp-eff" data-id="${id}" value="${eff}" step="0.01" placeholder="e.g. 78.61" style="width: 100%; padding: 6px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
            </div>
            <div>
                <label style="display: block; margin-bottom: 4px; font-size: 0.85em;">Annual Loaded Hours:</label>
                <input type="number" class="comp-hours" data-id="${id}" value="${hours}" step="1" placeholder="e.g. 3650" style="width: 100%; padding: 6px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color);">
            </div>
        </div>
    `;
    container.appendChild(card);

    card.querySelectorAll('input').forEach(inp => {
        inp.addEventListener('change', calculate);
        inp.addEventListener('input', calculate);
    });

    calculate();
}

function removeCompressor(id) {
    const card = document.getElementById(`compressor-${id}`);
    if (card) card.remove();
    calculate();
}

function getCompressors() {
    const compressors = [];
    const cards = document.querySelectorAll('#compressorList > div');
    cards.forEach((card, idx) => {
        const cfm = parseFloat(card.querySelector('.comp-cfm').value);
        const psi = parseFloat(card.querySelector('.comp-psi').value);
        const eff = parseFloat(card.querySelector('.comp-eff').value);
        const hours = parseFloat(card.querySelector('.comp-hours').value);
        if (!isNaN(cfm) && !isNaN(psi) && !isNaN(eff) && !isNaN(hours)) {
            compressors.push({ name: `Compressor ${idx + 1}`, cfm, psi, eff, hours });
        }
    });
    return compressors;
}

function celsiusToKelvin(c) { return c + 273.15; }
function psiToKpa(psi) { return psi * 6.894757; }

function calculateIdealPower(T_kelvin, P_discharge_kpa, massFlow) {
    const exponent = (GAMMA - 1) / GAMMA;
    const pressureRatio = P_discharge_kpa / P_ATM;
    return (GAMMA * R_AIR * T_kelvin / (GAMMA - 1)) *
           (Math.pow(pressureRatio, exponent) - 1) * massFlow;
}

function calculateRealPower(idealPower, efficiency) {
    return idealPower / (efficiency / 100);
}

function formatNumber(num, decimals = 0) {
    return num.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}

function calculate() {
    const compressors = getCompressors();
    const electricRate = parseFloat(document.getElementById('electricRate').value);
    const demandRate = parseFloat(document.getElementById('demandRate').value);

    const monthlyTempsC = [];
    const monthlyIndoorC = [];
    let allTempsValid = true;
    for (let i = 1; i <= 12; i++) {
        const outVal = parseFloat(document.getElementById(`temp${i}`).value);
        const inVal = parseFloat(document.getElementById(`indoor${i}`).value);
        if (isNaN(outVal) || isNaN(inVal)) { allTempsValid = false; break; }
        monthlyTempsC.push(outVal);
        monthlyIndoorC.push(inVal);
    }

    if (compressors.length === 0 || !allTempsValid || isNaN(electricRate) || isNaN(demandRate)) {
        document.getElementById('resultsSummaryContent').innerHTML = '<p style="color: var(--md-default-fg-color--light);">Enter indoor/outdoor temperatures and compressor parameters to see results.</p>';
        if (window.Plotly) Plotly.purge('powerChartContainer');
        return;
    }

    const totalDays = DAYS_IN_MONTH.reduce((a, b) => a + b, 0);

    // Combined monthly totals across all compressors
    const combined = Array.from({length: 12}, () => ({
        hours: 0, baseEnergy: 0, newEnergy: 0, damperNewEnergy: 0,
        deltaKW: 0, damperDeltaKW: 0, idealPower: 0, realPower: 0,
        damperRealPower: 0, basePower: 0
    }));

    let grandTotalBaseEnergy = 0, grandTotalNewEnergy = 0, grandTotalNewEnergyDamper = 0;
    let grandTotalDeltaKW = 0, grandTotalDeltaKWDamper = 0;

    for (const comp of compressors) {
        const massFlow = comp.cfm * CFM_TO_KGS;
        const dischargeKpa = psiToKpa(comp.psi);
        const monthlyHours = DAYS_IN_MONTH.map(days => (days / totalDays) * comp.hours);

        for (let i = 0; i < 12; i++) {
            const indoorTempC = monthlyIndoorC[i];
            const indoorTempK = celsiusToKelvin(indoorTempC);
            const baseIdealPower = calculateIdealPower(indoorTempK, dischargeKpa, massFlow);
            const baseRealPower = calculateRealPower(baseIdealPower, comp.eff);

            const outdoorTempC = monthlyTempsC[i];
            const tempK = celsiusToKelvin(outdoorTempC);
            const idealPower = calculateIdealPower(tempK, dischargeKpa, massFlow);
            const realPower = calculateRealPower(idealPower, comp.eff);
            const hours = monthlyHours[i];
            const baseEnergy = baseRealPower * hours;
            const newEnergy = realPower * hours;
            const deltaKW = baseRealPower - realPower;

            // Smart damper: use outdoor only when cooler than indoor for this month
            let damperRealPower, damperNewEnergy, damperDeltaKW;
            if (outdoorTempC < indoorTempC) {
                damperRealPower = realPower;
                damperNewEnergy = newEnergy;
                damperDeltaKW = deltaKW;
            } else {
                damperRealPower = baseRealPower;
                damperNewEnergy = baseEnergy;
                damperDeltaKW = 0;
            }

            combined[i].basePower += baseRealPower;
            combined[i].hours += hours;
            combined[i].baseEnergy += baseEnergy;
            combined[i].newEnergy += newEnergy;
            combined[i].damperNewEnergy += damperNewEnergy;
            combined[i].deltaKW += deltaKW;
            combined[i].damperDeltaKW += damperDeltaKW;
            combined[i].idealPower += idealPower;
            combined[i].realPower += realPower;
            combined[i].damperRealPower += damperRealPower;

            grandTotalBaseEnergy += baseEnergy;
            grandTotalNewEnergy += newEnergy;
            grandTotalNewEnergyDamper += damperNewEnergy;
            grandTotalDeltaKW += deltaKW;
            grandTotalDeltaKWDamper += damperDeltaKW;
        }
    }

    const grandTotalEnergySavings = grandTotalBaseEnergy - grandTotalNewEnergy;
    const grandTotalEnergySavingsDamper = grandTotalBaseEnergy - grandTotalNewEnergyDamper;

    const energyCost = grandTotalEnergySavings * electricRate;
    const demandCost = grandTotalDeltaKW * demandRate;
    const totalCost = energyCost + demandCost;

    const energyCostDamper = grandTotalEnergySavingsDamper * electricRate;
    const demandCostDamper = grandTotalDeltaKWDamper * demandRate;
    const totalCostDamper = energyCostDamper + demandCostDamper;

    const marginalEnergy = grandTotalEnergySavingsDamper - grandTotalEnergySavings;
    const marginalDemand = grandTotalDeltaKWDamper - grandTotalDeltaKW;
    const marginalCost = totalCostDamper - totalCost;

    // Build combined monthly data array for table rendering
    const monthlyDataCombined = combined.map((c, i) => ({
        month: MONTHS[i],
        tempK: celsiusToKelvin(monthlyTempsC[i]),
        hours: c.hours,
        basePower: c.basePower,
        idealPower: c.idealPower,
        realPower: c.realPower,
        damperRealPower: c.damperRealPower,
        deltaKW: c.deltaKW,
        damperDeltaKW: c.damperDeltaKW,
        baseEnergy: c.baseEnergy,
        newEnergy: c.newEnergy,
        damperNewEnergy: c.damperNewEnergy,
        energySavings: c.baseEnergy - c.newEnergy,
        damperEnergySavings: c.baseEnergy - c.damperNewEnergy
    }));

    // Store for LaTeX
    calculationResults = { monthlyDataCombined, grandTotalEnergySavings, grandTotalEnergySavingsDamper, grandTotalDeltaKW, grandTotalDeltaKWDamper, grandTotalBaseEnergy, grandTotalNewEnergy, grandTotalNewEnergyDamper };

    // Render results summary - always show both scenarios + marginal
    let summaryHTML = `
        <h4 style="margin: 0 0 15px 0;">Without Smart Damper (always outdoor air)</h4>
        <div style="margin-bottom: 20px; padding: 20px; background: rgba(76, 175, 80, 0.1); border: 1px solid rgba(76, 175, 80, 0.3); border-radius: 6px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; text-align: center;">
                <div>
                    <p style="margin: 5px 0; color: var(--md-default-fg-color--light); font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.5px;">Energy Savings</p>
                    <p style="margin: 5px 0; font-family: monospace; font-size: 1.4em; font-weight: 600; color: #4caf50;">${formatNumber(grandTotalEnergySavings)} kWh</p>
                    <p style="margin: 5px 0; font-family: monospace; font-size: 1.1em; color: #4caf50;">$${formatNumber(energyCost)}</p>
                </div>
                <div>
                    <p style="margin: 5px 0; color: var(--md-default-fg-color--light); font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.5px;">Demand Savings</p>
                    <p style="margin: 5px 0; font-family: monospace; font-size: 1.4em; font-weight: 600; color: #4caf50;">${formatNumber(grandTotalDeltaKW, 1)} kW-mo</p>
                    <p style="margin: 5px 0; font-family: monospace; font-size: 1.1em; color: #4caf50;">$${formatNumber(demandCost)}</p>
                </div>
                <div>
                    <p style="margin: 5px 0; color: var(--md-default-fg-color--light); font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.5px;">Total Annual Savings</p>
                    <p style="margin: 5px 0; font-family: monospace; font-size: 1.4em; font-weight: 600; color: #4caf50;">$${formatNumber(totalCost)}</p>
                </div>
            </div>
        </div>

        <h4 style="margin: 20px 0 15px 0;">With Smart Damper (outdoor air only when cooler)</h4>
        <div style="margin-bottom: 20px; padding: 20px; background: rgba(33, 150, 243, 0.1); border: 1px solid rgba(33, 150, 243, 0.3); border-radius: 6px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; text-align: center;">
                <div>
                    <p style="margin: 5px 0; color: var(--md-default-fg-color--light); font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.5px;">Energy Savings</p>
                    <p style="margin: 5px 0; font-family: monospace; font-size: 1.4em; font-weight: 600; color: #2196f3;">${formatNumber(grandTotalEnergySavingsDamper)} kWh</p>
                    <p style="margin: 5px 0; font-family: monospace; font-size: 1.1em; color: #2196f3;">$${formatNumber(energyCostDamper)}</p>
                </div>
                <div>
                    <p style="margin: 5px 0; color: var(--md-default-fg-color--light); font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.5px;">Demand Savings</p>
                    <p style="margin: 5px 0; font-family: monospace; font-size: 1.4em; font-weight: 600; color: #2196f3;">${formatNumber(grandTotalDeltaKWDamper, 1)} kW-mo</p>
                    <p style="margin: 5px 0; font-family: monospace; font-size: 1.1em; color: #2196f3;">$${formatNumber(demandCostDamper)}</p>
                </div>
                <div>
                    <p style="margin: 5px 0; color: var(--md-default-fg-color--light); font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.5px;">Total Annual Savings</p>
                    <p style="margin: 5px 0; font-family: monospace; font-size: 1.4em; font-weight: 600; color: #2196f3;">$${formatNumber(totalCostDamper)}</p>
                </div>
            </div>
        </div>

        <h4 style="margin: 20px 0 15px 0;">Marginal Benefit of Smart Damper</h4>
        <div style="padding: 20px; background: rgba(255, 152, 0, 0.1); border: 1px solid rgba(255, 152, 0, 0.3); border-radius: 6px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; text-align: center;">
                <div>
                    <p style="margin: 5px 0; color: var(--md-default-fg-color--light); font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.5px;">Energy Improvement</p>
                    <p style="margin: 5px 0; font-family: monospace; font-size: 1.4em; font-weight: 600; color: #ff9800;">${formatNumber(marginalEnergy)} kWh</p>
                </div>
                <div>
                    <p style="margin: 5px 0; color: var(--md-default-fg-color--light); font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.5px;">Demand Improvement</p>
                    <p style="margin: 5px 0; font-family: monospace; font-size: 1.4em; font-weight: 600; color: #ff9800;">${formatNumber(marginalDemand, 1)} kW-mo</p>
                </div>
                <div>
                    <p style="margin: 5px 0; color: var(--md-default-fg-color--light); font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.5px;">Additional Annual Savings</p>
                    <p style="margin: 5px 0; font-family: monospace; font-size: 1.4em; font-weight: 600; color: #ff9800;">$${formatNumber(marginalCost)}</p>
                </div>
            </div>
            <p style="margin: 10px 0 0 0; font-size: 0.85em; color: var(--md-default-fg-color--light); text-align: center;">The smart damper avoids energy penalties in months where outdoor air is warmer than indoor air.</p>
        </div>`;

    document.getElementById('resultsSummaryContent').innerHTML = summaryHTML;

    // Render Plotly power chart
    renderPowerChart(monthlyDataCombined);
    generateLatex();
}

function renderPowerChart(monthlyData) {
    window.loadScriptOnce(window.PLOTLY_SRC).then(function () {
        const container = document.getElementById('powerChartContainer');
        if (!container) return;

        const months = monthlyData.map(d => d.month);
        const basePowers = monthlyData.map(d => d.basePower);
        const noDamperPowers = monthlyData.map(d => d.realPower);
        const damperPowers = monthlyData.map(d => d.damperRealPower);

        const traceCurrent = {
            x: months, y: basePowers,
            name: 'Current (Indoor Air)',
            type: 'scatter', mode: 'lines+markers',
            line: { color: '#f44336', width: 2 },
            marker: { size: 6 }
        };

        const traceNoDamper = {
            x: months, y: noDamperPowers,
            name: 'Without Smart Damper',
            type: 'scatter', mode: 'lines+markers',
            line: { color: '#4caf50', width: 2 },
            marker: { size: 6 }
        };

        const traceDamper = {
            x: months, y: damperPowers,
            name: 'With Smart Damper',
            type: 'scatter', mode: 'lines+markers',
            line: { color: '#2196f3', width: 2 },
            marker: { size: 6 }
        };

        const layout = {
            xaxis: { title: 'Month', gridcolor: 'rgba(128,128,128,0.2)' },
            yaxis: { title: 'Power (kW)', gridcolor: 'rgba(128,128,128,0.2)' },
            legend: { orientation: 'h', y: -0.2, x: 0.5, xanchor: 'center' },
            margin: { t: 20, r: 20, b: 60, l: 60 },
            hovermode: 'x unified',
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            font: { family: 'monospace' }
        };

        const config = { responsive: true, displayModeBar: false };

        Plotly.newPlot('powerChartContainer', [traceCurrent, traceNoDamper, traceDamper], layout, config);
    });
}

function saveChart() {
    if (!window.Plotly) return;
    Plotly.downloadImage('powerChartContainer', {
        format: 'png', width: 1200, height: 500, filename: 'cold-air-intake-power'
    });
}

function generateLatex() {
    if (!calculationResults) return;
    const { monthlyDataCombined } = calculationResults;

    let latex = '';
    latex += buildLatexTable('Without Smart Damper', monthlyDataCombined, false);
    latex += '\n\n';
    latex += buildLatexTable('With Smart Damper', monthlyDataCombined, true);

    document.getElementById('latexCode').textContent = latex.trim();
}

function buildLatexTable(caption, monthlyData, useDamper) {
    let latex = `\\begin{table}[htbp]
\\centering
\\caption{Cold Air Intake: ${caption}}
\\begin{tabular}{@{}lrrrrrr@{}}
\\toprule
 & Outdoor & \\multicolumn{2}{c}{Power (kW)} & \\multicolumn{3}{c}{Energy (kWh)} \\\\
\\cmidrule(lr){3-4} \\cmidrule(lr){5-7}
Month & T (K) & Combined & $\\Delta$kW & Base & New & Savings \\\\
\\midrule\n`;

    let totDeltaKW = 0, totBase = 0, totNew = 0, totSavings = 0;

    for (const d of monthlyData) {
        const rp = useDamper ? d.damperRealPower : d.realPower;
        const dk = useDamper ? d.damperDeltaKW : d.deltaKW;
        const ne = useDamper ? d.damperNewEnergy : d.newEnergy;
        const es = useDamper ? d.damperEnergySavings : d.energySavings;

        totDeltaKW += dk;
        totBase += d.baseEnergy;
        totNew += ne;
        totSavings += es;

        latex += `${d.month} & ${d.tempK.toFixed(2)} & ${rp.toFixed(2)} & ${dk.toFixed(2)} & ${formatNumber(d.baseEnergy, 2)} & ${formatNumber(ne, 2)} & ${formatNumber(es, 2)} \\\\\n`;
    }

    latex += `\\midrule
Cumulative & & & ${totDeltaKW.toFixed(2)} & ${formatNumber(totBase, 2)} & ${formatNumber(totNew, 2)} & ${formatNumber(totSavings, 2)} \\\\
\\bottomrule
\\end{tabular}
\\end{table}`;

    return latex;
}

function toggleLatex() {
    const content = document.getElementById('latexContent');
    const button = document.getElementById('latexToggle');
    const copyButton = document.getElementById('copyButton');

    if (content.style.display === 'none') {
        content.style.display = 'block';
        button.textContent = 'Hide LaTeX Table';
        copyButton.style.display = 'inline-block';
    } else {
        content.style.display = 'none';
        button.textContent = 'Show LaTeX Table';
        copyButton.style.display = 'none';
    }
}

function copyLatex() {
    const latexCode = document.getElementById('latexCode').textContent;
    const btn = document.getElementById('copyButton');

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(latexCode).then(() => {
            showCopySuccess(btn);
        }).catch(() => {
            fallbackCopy(latexCode, btn);
        });
    } else {
        fallbackCopy(latexCode, btn);
    }
}

function fallbackCopy(text, btn) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
        showCopySuccess(btn);
    } catch (err) {
        btn.textContent = 'Copy failed';
        setTimeout(() => {
            btn.textContent = 'Copy to Clipboard';
        }, 2000);
    }

    document.body.removeChild(textArea);
}

function showCopySuccess(btn) {
    btn.textContent = 'Copied!';
    setTimeout(() => {
        btn.textContent = 'Copy to Clipboard';
    }, 2000);
}

const LOCATION_TEMPS = {
    HFD: [-2.8, -1.7, 3.3, 10.0, 15.6, 20.6, 23.3, 22.2, 17.8, 11.1, 6.1, 0.0],
    BOS: [-1.1, 0.0, 3.9, 9.4, 15.0, 20.0, 23.3, 22.8, 18.9, 12.8, 7.2, 1.7],
    HPN: [-2.2, -1.1, 3.9, 10.6, 16.7, 21.7, 24.4, 23.9, 20.0, 13.3, 7.8, 1.7],
    LGA: [0.0, 1.1, 5.6, 11.7, 17.2, 22.2, 25.0, 24.4, 20.6, 13.9, 8.3, 3.3],
    ISP: [-0.6, 0.6, 5.0, 11.1, 16.7, 21.7, 24.4, 23.9, 20.0, 13.3, 7.8, 2.8],
    ORH: [-3.9, -2.8, 1.7, 7.8, 13.9, 18.9, 21.7, 20.6, 16.1, 9.4, 3.9, -2.2],
    BAF: [-4.4, -3.3, 1.1, 7.2, 13.3, 18.3, 21.1, 20.0, 15.6, 8.9, 3.3, -2.8],
    BTV: [-6.7, -5.6, 0.0, 7.2, 14.4, 19.4, 21.7, 20.6, 16.1, 9.4, 2.8, -3.9],
    BGR: [-7.8, -6.1, -0.6, 6.1, 13.3, 18.3, 20.6, 20.0, 15.6, 8.9, 2.2, -4.4]
};

function applyLocationPreset() {
    const key = document.getElementById('locationPreset').value;
    if (!key || !LOCATION_TEMPS[key]) return;
    const temps = LOCATION_TEMPS[key];
    for (let i = 1; i <= 12; i++) {
        document.getElementById(`temp${i}`).value = temps[i - 1];
    }
    calculate();
}

// Initialize on every page load (including instant-nav swaps). Bails out unless
// this calculator's root element is present, seeds one compressor, and guards
// against double-binding the shared-input listeners.
function initColdIntakeCalculator() {
    if (!document.getElementById('cold-air-calculator')) return;

    // Add listeners to shared inputs (rates + temperatures)
    const sharedIds = ['electricRate', 'demandRate'];
    for (let i = 1; i <= 12; i++) {
        sharedIds.push('temp' + i, 'indoor' + i);
    }
    sharedIds.forEach(function (id) {
        var el = document.getElementById(id);
        if (el && !el.dataset.ciBound) {
            el.dataset.ciBound = 'true';
            el.addEventListener('change', calculate);
            el.addEventListener('input', calculate);
        }
    });

    // Seed one compressor (the server-rendered list starts empty on each load)
    addCompressor();
}

if (typeof document$ !== 'undefined') {
    document$.subscribe(initColdIntakeCalculator);
} else {
    document.addEventListener('DOMContentLoaded', initColdIntakeCalculator);
}
