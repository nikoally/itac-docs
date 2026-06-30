// Leak Rate Calculator (calculators/leak-rate.md).
//
// Functions called from inline onclick=/onchange= attributes (loadCSV,
// addVFDPoint, removeVFDPoint, calculateLeakRate, updateControlTypeUI) MUST
// remain global, so this file is not wrapped in an IIFE. Plotly is lazy-loaded
// on demand via loadScriptOnce (defined in extra.js).

let csvData = [];
let headers = [];

function updateControlTypeUI() {
    const controlType = document.querySelector('input[name="controlType"]:checked').value;
    document.getElementById('vfdConfig').style.display = controlType === 'vfd' ? 'block' : 'none';
    document.getElementById('nonvfdConfig').style.display = controlType === 'nonvfd' ? 'block' : 'none';
}

function addVFDPoint() {
    const container = document.getElementById('vfdPointsContainer');
    const newPoint = document.createElement('div');
    newPoint.className = 'vfd-point';
    newPoint.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr 50px; gap: 10px; margin-bottom: 8px;';
    newPoint.innerHTML = `
        <input type="number" class="vfd-power" placeholder="kW" step="0.1" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
        <input type="number" class="vfd-flow" placeholder="CFM" step="0.1" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
        <button onclick="removeVFDPoint(this)" style="padding: 6px; background: #d32f2f; color: white; border: none; border-radius: 4px; cursor: pointer;">✕</button>
    `;
    container.appendChild(newPoint);
}

function removeVFDPoint(button) {
    const points = document.querySelectorAll('.vfd-point');
    if (points.length > 4) {
        button.parentElement.remove();
    } else {
        alert('Minimum 4 data points required for VFD interpolation');
    }
}

function loadCSV() {
    const fileInput = document.getElementById('csvFileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select a CSV file');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        parseCSV(text);
    };
    reader.readAsText(file);
}

function parseCSV(text) {
    const lines = text.split('\n').filter(line => line.trim());
    headers = lines[0].split(',').map(h => h.trim());

    csvData = [];
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        const row = {};
        headers.forEach((header, index) => {
            row[header] = values[index] ? values[index].trim() : '';
        });
        csvData.push(row);
    }

    // Columns are fixed: column 0 = ID, column 1 = DateTime, column 2 = Current
    const dateTimeCol = headers[1];
    const currentCol = headers[2];

    document.getElementById('fileInfo').innerHTML = `
        <strong>✓ File loaded:</strong> ${csvData.length} data points |
        Timestep: ${calculateTimestep()} minutes<br>
        <strong>DateTime Column:</strong> ${dateTimeCol} | <strong>Current Column:</strong> ${currentCol}
    `;

    // Set default period to full range
    const firstDate = parseDateString(csvData[0][dateTimeCol]);
    const lastDate = parseDateString(csvData[csvData.length - 1][dateTimeCol]);

    document.getElementById('startTime').value = formatDateTimeLocal(firstDate);
    document.getElementById('endTime').value = formatDateTimeLocal(lastDate);

    updatePeriodInfo();

    // Update histogram if voltage is entered
    updatePowerHistogram();
}

function updatePowerHistogram() {
    const voltage = parseFloat(document.getElementById('systemVoltage').value);

    if (csvData.length === 0 || isNaN(voltage) || voltage <= 0) {
        document.getElementById('powerHistogram').style.display = 'none';
        return;
    }

    const currentCol = headers[2];

    // Calculate power for all data points
    const powers = csvData.map(row => {
        const current = parseFloat(row[currentCol]);
        return Math.sqrt(3) * voltage * current / 1000; // kW
    }).filter(p => !isNaN(p));

    if (powers.length === 0) return;

    // Create histogram
    const trace = {
        x: powers,
        type: 'histogram',
        nbinsx: 50,
        marker: {
            color: '#4051b5',
            line: {
                color: '#ffffff',
                width: 1
            }
        },
        name: 'Power Distribution'
    };

    const layout = {
        title: 'Power Distribution (All Data)',
        xaxis: {
            title: 'Power (kW)',
            zeroline: false
        },
        yaxis: {
            title: 'Frequency (count)',
            zeroline: false
        },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        font: {color: getComputedStyle(document.body).getPropertyValue('--md-default-fg-color')},
        margin: {t: 40, b: 50, l: 60, r: 20},
        showlegend: false
    };

    const config = {responsive: true, displayModeBar: true};

    document.getElementById('powerHistogram').style.display = 'block';
    window.loadScriptOnce(window.PLOTLY_SRC).then(function () {
        if (document.getElementById('powerHistogram')) {
            Plotly.newPlot('powerHistogram', [trace], layout, config);
        }
    });
}

function calculateTimestep() {
    if (csvData.length < 2) return 'unknown';

    const dateTimeCol = headers[1]; // DateTime is always column 1

    const date1 = parseDateString(csvData[0][dateTimeCol]);
    const date2 = parseDateString(csvData[1][dateTimeCol]);

    const diffMinutes = (date2 - date1) / (1000 * 60);
    return Math.round(diffMinutes);
}

function parseDateString(dateStr) {
    // Format: MM/DD/YYYY HH:MM:SS
    const parts = dateStr.split(' ');
    const dateParts = parts[0].split('/');
    const timeParts = parts[1].split(':');

    return new Date(
        parseInt(dateParts[2]),           // year
        parseInt(dateParts[0]) - 1,       // month (0-indexed)
        parseInt(dateParts[1]),           // day
        parseInt(timeParts[0]),           // hours
        parseInt(timeParts[1]),           // minutes
        parseInt(timeParts[2])            // seconds
    );
}

function formatDateTimeLocal(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function updatePeriodInfo() {
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;

    if (startTime && endTime) {
        const start = new Date(startTime);
        const end = new Date(endTime);
        const durationHours = (end - start) / (1000 * 60 * 60);

        document.getElementById('periodInfo').innerHTML = `
            Period duration: ${durationHours.toFixed(1)} hours
        `;
    }
}

function linearInterpolate(x, xArray, yArray) {
    // Find bracketing points
    let lowerIdx = 0;
    let upperIdx = xArray.length - 1;

    // If x is outside range, use boundary values
    if (x <= xArray[0]) return yArray[0];
    if (x >= xArray[xArray.length - 1]) return yArray[yArray.length - 1];

    // Find bracketing indices
    for (let i = 0; i < xArray.length - 1; i++) {
        if (x >= xArray[i] && x <= xArray[i + 1]) {
            lowerIdx = i;
            upperIdx = i + 1;
            break;
        }
    }

    const x0 = xArray[lowerIdx];
    const x1 = xArray[upperIdx];
    const y0 = yArray[lowerIdx];
    const y1 = yArray[upperIdx];

    return y0 + (x - x0) * (y1 - y0) / (x1 - x0);
}

function calculateLeakRate() {
    // Validate inputs
    if (csvData.length === 0) {
        alert('Please load a CSV file first');
        return;
    }

    const voltage = parseFloat(document.getElementById('systemVoltage').value);
    if (isNaN(voltage) || voltage <= 0) {
        alert('Please enter a valid system voltage');
        return;
    }

    const startTime = new Date(document.getElementById('startTime').value);
    const endTime = new Date(document.getElementById('endTime').value);

    const dateTimeCol = headers[1]; // DateTime is always column 1
    const currentCol = headers[2];  // Current is always column 2

    // Filter data for non-production period and calculate power
    const periodData = csvData.filter(row => {
        const rowDate = parseDateString(row[dateTimeCol]);
        return rowDate >= startTime && rowDate <= endTime;
    }).map(row => {
        const current = parseFloat(row[currentCol]);
        const power = Math.sqrt(3) * voltage * current / 1000; // Convert to kW
        return {
            ...row,
            calculatedPower: power
        };
    });

    if (periodData.length === 0) {
        alert('No data points found in selected period');
        return;
    }

    const controlType = document.querySelector('input[name="controlType"]:checked').value;

    let results;
    if (controlType === 'vfd') {
        results = calculateVFDLeakRate(periodData, voltage);
    } else {
        results = calculateNonVFDLeakRate(periodData, voltage);
    }

    displayResults(results, periodData, dateTimeCol, voltage);
}

function calculateVFDLeakRate(periodData, voltage) {
    // Get VFD performance points
    const vfdPoints = document.querySelectorAll('.vfd-point');
    const powerArray = [];
    const flowArray = [];

    vfdPoints.forEach(point => {
        const power = parseFloat(point.querySelector('.vfd-power').value);
        const flow = parseFloat(point.querySelector('.vfd-flow').value);
        if (!isNaN(power) && !isNaN(flow)) {
            powerArray.push(power);
            flowArray.push(flow);
        }
    });

    if (powerArray.length < 4) {
        alert('Please enter at least 4 VFD performance points');
        return null;
    }

    // Sort arrays by power
    const combined = powerArray.map((p, i) => ({power: p, flow: flowArray[i]}));
    combined.sort((a, b) => a.power - b.power);
    const sortedPower = combined.map(c => c.power);
    const sortedFlow = combined.map(c => c.flow);

    // Interpolate flow for each timestep (using calculated 3-phase power)
    const flows = [];
    const powers = [];

    periodData.forEach(row => {
        const power = row.calculatedPower;
        if (!isNaN(power)) {
            const flow = linearInterpolate(power, sortedPower, sortedFlow);
            flows.push(flow);
            powers.push(power);
        }
    });

    const avgLeakRate = flows.reduce((a, b) => a + b, 0) / flows.length;
    const avgPower = powers.reduce((a, b) => a + b, 0) / powers.length;

    return {
        type: 'VFD',
        leakRate: avgLeakRate,
        avgPower: avgPower,
        dataPoints: periodData.length,
        performancePoints: combined,
        voltage: voltage,
        detailedData: periodData.map((row, i) => ({
            power: powers[i],
            flow: flows[i]
        }))
    };
}

function calculateNonVFDLeakRate(periodData, voltage) {
    // Get non-VFD configuration
    const loadedPower = parseFloat(document.getElementById('loadedPower').value);
    const loadedFlow = parseFloat(document.getElementById('loadedFlow').value);
    const loadedMargin = parseFloat(document.getElementById('loadedMargin').value) / 100;

    const unloadedPower = parseFloat(document.getElementById('unloadedPower').value);
    const unloadedFlow = parseFloat(document.getElementById('unloadedFlow').value);
    const unloadedMargin = parseFloat(document.getElementById('unloadedMargin').value) / 100;

    if (isNaN(loadedPower) || isNaN(loadedFlow) || isNaN(unloadedPower)) {
        alert('Please enter all non-VFD configuration values');
        return null;
    }

    // Calculate thresholds
    const loadedThreshold = loadedPower * (1 - loadedMargin);
    const unloadedThreshold = unloadedPower * (1 - unloadedMargin);

    // Assign states (using calculated 3-phase power)
    let loadedCount = 0, unloadedCount = 0, offCount = 0;
    let totalCFMMinutes = 0;
    const stateData = [];

    periodData.forEach(row => {
        const power = row.calculatedPower;
        if (isNaN(power)) return;

        let state, flow;
        if (power > loadedThreshold) {
            state = 'Loaded';
            flow = loadedFlow;
            loadedCount++;
        } else if (power >= unloadedThreshold) {
            state = 'Unloaded';
            flow = unloadedFlow;
            unloadedCount++;
        } else {
            state = 'Off';
            flow = 0;
            offCount++;
        }

        totalCFMMinutes += flow;
        stateData.push({power, state, flow});
    });

    const totalCount = loadedCount + unloadedCount + offCount;
    const avgLeakRate = totalCFMMinutes / totalCount;

    return {
        type: 'Non-VFD',
        leakRate: avgLeakRate,
        dataPoints: totalCount,
        voltage: voltage,
        states: {
            loaded: {
                count: loadedCount,
                percent: (loadedCount / totalCount * 100).toFixed(1),
                power: loadedPower,
                flow: loadedFlow,
                threshold: loadedThreshold
            },
            unloaded: {
                count: unloadedCount,
                percent: (unloadedCount / totalCount * 100).toFixed(1),
                power: unloadedPower,
                flow: unloadedFlow,
                threshold: unloadedThreshold
            },
            off: {
                count: offCount,
                percent: (offCount / totalCount * 100).toFixed(1)
            }
        },
        detailedData: stateData
    };
}

function displayResults(results, periodData, dateTimeCol, voltage) {
    if (!results) return;

    let html = `
        <div style="margin-bottom: 20px;">
            <h4 style="color: #4caf50; margin-bottom: 10px;">Leak Rate: ${results.leakRate.toFixed(1)} CFM</h4>
            <p style="margin: 5px 0;"><strong>Control Type:</strong> ${results.type}</p>
            <p style="margin: 5px 0;"><strong>System Voltage:</strong> ${voltage} V (3-phase)</p>
            <p style="margin: 5px 0;"><strong>Data Points Analyzed:</strong> ${results.dataPoints}</p>
            <p style="margin: 5px 0;"><strong>Timestep:</strong> ${calculateTimestep()} minutes</p>
        </div>
    `;

    if (results.type === 'VFD') {
        html += `
            <div style="margin: 20px 0;">
                <h4>VFD Performance Points Used:</h4>
                <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
                    <tr style="background: var(--md-code-bg-color); border-bottom: 2px solid var(--md-default-fg-color--lightest);">
                        <th style="padding: 8px; text-align: left;">Power (kW)</th>
                        <th style="padding: 8px; text-align: left;">Flow (CFM)</th>
                    </tr>
                    ${results.performancePoints.map(p => `
                        <tr style="border-bottom: 1px solid var(--md-default-fg-color--lightest);">
                            <td style="padding: 8px;">${p.power.toFixed(1)}</td>
                            <td style="padding: 8px;">${p.flow.toFixed(1)}</td>
                        </tr>
                    `).join('')}
                </table>
                <p style="margin: 10px 0;"><strong>Average Power During Period:</strong> ${results.avgPower.toFixed(2)} kW</p>
            </div>
        `;
    } else {
        html += `
            <div style="margin: 20px 0;">
                <h4>State Distribution:</h4>
                <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
                    <tr style="background: var(--md-code-bg-color); border-bottom: 2px solid var(--md-default-fg-color--lightest);">
                        <th style="padding: 8px; text-align: left;">State</th>
                        <th style="padding: 8px; text-align: right;">Count</th>
                        <th style="padding: 8px; text-align: right;">% of Period</th>
                        <th style="padding: 8px; text-align: right;">Power (kW)</th>
                        <th style="padding: 8px; text-align: right;">Flow (CFM)</th>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--md-default-fg-color--lightest);">
                        <td style="padding: 8px;">Loaded</td>
                        <td style="padding: 8px; text-align: right;">${results.states.loaded.count}</td>
                        <td style="padding: 8px; text-align: right;">${results.states.loaded.percent}%</td>
                        <td style="padding: 8px; text-align: right;">${results.states.loaded.power.toFixed(1)}</td>
                        <td style="padding: 8px; text-align: right;">${results.states.loaded.flow.toFixed(1)}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--md-default-fg-color--lightest);">
                        <td style="padding: 8px;">Unloaded</td>
                        <td style="padding: 8px; text-align: right;">${results.states.unloaded.count}</td>
                        <td style="padding: 8px; text-align: right;">${results.states.unloaded.percent}%</td>
                        <td style="padding: 8px; text-align: right;">${results.states.unloaded.power.toFixed(1)}</td>
                        <td style="padding: 8px; text-align: right;">${results.states.unloaded.flow.toFixed(1)}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--md-default-fg-color--lightest);">
                        <td style="padding: 8px;">Off</td>
                        <td style="padding: 8px; text-align: right;">${results.states.off.count}</td>
                        <td style="padding: 8px; text-align: right;">${results.states.off.percent}%</td>
                        <td style="padding: 8px; text-align: right;">~0</td>
                        <td style="padding: 8px; text-align: right;">0</td>
                    </tr>
                </table>
                <p style="margin: 10px 0; font-size: 0.9em; color: var(--md-default-fg-color--light);">
                    <strong>Thresholds:</strong> Loaded >${results.states.loaded.threshold.toFixed(1)} kW |
                    Unloaded ≥${results.states.unloaded.threshold.toFixed(1)} kW
                </p>
            </div>
        `;
    }

    document.getElementById('resultsContent').innerHTML = html;
    document.getElementById('results').style.display = 'block';

    // Create power vs time chart
    plotPowerChart(periodData, dateTimeCol, results);
}

function plotPowerChart(periodData, dateTimeCol, results) {
    const timestamps = periodData.map(row => parseDateString(row[dateTimeCol]));
    const powers = periodData.map(row => row.calculatedPower);

    let traces = [{
        x: timestamps,
        y: powers,
        type: 'scatter',
        mode: 'lines',
        name: 'Compressor Power',
        line: {color: '#4051b5', width: 2}
    }];

    if (results.type === 'VFD') {
        const flows = results.detailedData.map(d => d.flow);
        traces.push({
            x: timestamps,
            y: flows,
            type: 'scatter',
            mode: 'lines',
            name: 'Interpolated Flow',
            line: {color: '#4caf50', width: 2},
            yaxis: 'y2'
        });
    }

    const layout = {
        title: 'Compressor Power During Non-Production Period',
        xaxis: {title: 'Time'},
        yaxis: {title: 'Power (kW)'},
        yaxis2: results.type === 'VFD' ? {
            title: 'Flow (CFM)',
            overlaying: 'y',
            side: 'right'
        } : undefined,
        hovermode: 'x unified',
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        font: {color: getComputedStyle(document.body).getPropertyValue('--md-default-fg-color')},
        margin: {t: 50, b: 50, l: 60, r: results.type === 'VFD' ? 60 : 10}
    };

    const config = {responsive: true, displayModeBar: true};

    document.getElementById('powerChart').style.display = 'block';
    window.loadScriptOnce(window.PLOTLY_SRC).then(function () {
        if (document.getElementById('powerChart')) {
            Plotly.newPlot('powerChart', traces, layout, config);
        }
    });
}

// Initialize on every page load (including instant-nav swaps). Bails out unless
// this calculator's root element is present, and guards against double-binding
// listeners when the user revisits the page without a hard reload.
function initLeakRateCalculator() {
    if (!document.getElementById('leak-calculator')) return;

    const startEl = document.getElementById('startTime');
    if (startEl && !startEl.dataset.lrBound) {
        startEl.dataset.lrBound = 'true';
        startEl.addEventListener('change', updatePeriodInfo);
    }

    const endEl = document.getElementById('endTime');
    if (endEl && !endEl.dataset.lrBound) {
        endEl.dataset.lrBound = 'true';
        endEl.addEventListener('change', updatePeriodInfo);
    }

    const voltageEl = document.getElementById('systemVoltage');
    if (voltageEl && !voltageEl.dataset.lrBound) {
        voltageEl.dataset.lrBound = 'true';
        voltageEl.addEventListener('input', function () {
            if (csvData.length > 0) {
                updatePowerHistogram();
            }
        });
    }

    updateControlTypeUI();
}

if (typeof document$ !== 'undefined') {
    document$.subscribe(initLeakRateCalculator);
} else {
    document.addEventListener('DOMContentLoaded', initLeakRateCalculator);
}
