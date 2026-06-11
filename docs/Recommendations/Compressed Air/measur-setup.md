---
hide:
  - toc
---

# MEASUR Setup and Weekly Power Analysis

MEASUR's compressed air module requires configuration across several tabs before running any simulation. This page documents what each setting requires and where to find the data, then provides an interactive power analysis tool for developing operating schedule inputs used across compressed air analyses.

!!! note "Referenced Across Recommendations"
    The MEASUR settings documented here apply to most compressed air recommendations in this section. Configure the tool once per facility and reuse the inputs across analyses.

---

## MEASUR Data Entry Reference

### Assessment Basics

The Assessment Basics tab establishes the fundamental settings for the simulation, including units, currency, and utility rate information.

#### Utility Rates

- **Electricity Cost ($/kWh):** Pulled directly from the utility analysis spreadsheet. This is the consumption rate that accounts for all relevant charges on the facility's electric bill.
- **Demand Cost ($/kW-month):** Also from the utility analysis spreadsheet. This reflects the demand charge component of the facility's rate structure.

#### Other Settings

- **Currency:** Default to $ (USD).
- **Units of Measure:** Typically set to Imperial for domestic assessments.
- **Emissions Result Unit:** Select tonne (Metric).

!!! note "Emissions Results"
    The carbon emissions section is not currently used in ITAC analyses. The Emissions Result Unit selection has no practical impact — select tonne (Metric) as a default and disregard the emissions output.

---

### System Information

This tab captures global system parameters and environmental conditions.

#### System Parameters

- **Atmospheric Pressure:** Leave at the default of 14.7 psia unless the facility is at a significantly different elevation.
- **Total Air Storage:** The total receiver volume in the system. Estimate this as half of the total physical receiver volume recorded in the site notes.

!!! note "Total Air Storage Estimation"
    Not all of the stored receiver volume participates in pressure regulation. Roughly half of the total physical volume is a reasonable working estimate of usable storage. Record the total receiver volume from site nameplates or notes and divide by two.

#### Multi Compressor System Controls Method

This dropdown determines how MEASUR models the sequencing of multiple compressors when more than one unit is present. The options are as follows:

| Control Method | Description |
|---|---|
| Cascading Pressure | Compressors are assigned priority numbers and turn on/off based on system pressure thresholds. The most common method for systems without a central controller. |
| Target Pressure Sequencer | A central sequencer targets a specific discharge pressure and brings compressors online or offline to maintain it. Used when facilities have a dedicated sequencing controller. |
| Isentropic Efficiency | Models compressors based on their thermodynamic efficiency rather than specific control logic. Useful for high-level modeling when detailed control schemes are not known. |
| Centrifugal Equal Capacity Ratio Load Sharing | Specific to centrifugal compressor systems where multiple units share load equally by adjusting inlet guide vanes to maintain the same capacity ratio. |
| Base/Trim | One or more compressors run at full load (base), while a single trim compressor modulates to match varying demand. Common in well-designed systems. |

!!! note "Most Common Selection"
    For most ITAC assessments, **Cascading Pressure** or **Isentropic Efficiency** are the most commonly used options, depending on what is known about the system's control architecture.

#### Carbon Emissions

The carbon emissions fields (Zip code, eGRID Subregion, and Total Emission Output Rate) are not currently used in ITAC analyses. Leave these at their defaults.

---

### Compressor Inventory

The Inventory tab is where you enter data for each individual compressor in the system. This is typically the most data-intensive section.

!!! note "Compressor Type"
    Almost every compressor encountered in the field is a **single stage lubricant-injected rotary screw** type.

#### Nameplate Data

??? note "Finding Nameplate Data"
    Nameplate data for site compressors is stored in **Airtable** under the site equipment records. Look up the facility and navigate to the compressor entries to find motor HP, full load amps, and motor service factor.

??? note "Finding CAGI Datasheets and Manufacturer Spec Sheets"
    CAGI datasheets are standardized performance documents published by compressor manufacturers. To locate one:

    - Search the compressor model number followed by "CAGI datasheet" (e.g., "Atlas Copco GA37 CAGI datasheet")
    - Most manufacturers maintain a searchable repository on their website — use the model number to locate the correct sheet

    The same search approach works for general manufacturer spec sheets (needed for blowdown time, motor design efficiency, etc. that may not appear on the CAGI sheet).

| Field | Source |
|---|---|
| Compressor Type | Almost always "Single stage lubricant-injected rotary screw" for the facilities we assess. |
| Motor Power (hp) | From the compressor nameplate or manufacturer spec sheet. |
| Full Load Operating Pressure (psig) | From site notes. This is the operating pressure observed or reported during the assessment. |
| Rated Capacity (acfm) | From the CAGI data sheet for that compressor model. |
| Full Load Amps | From the compressor nameplate or the manufacturer's spec sheet. |
| Total Package Input Power (kW) | From the CAGI data sheet. This is the total power draw at rated conditions. |

#### Controls

The control type describes how the compressor regulates its output to match demand. This information typically comes from the manufacturer's specifications or CAGI sheet.

!!! note "Most Common Control Types"
    The two most common control types by far are **Load/Unload** and **VFD (Variable Frequency Drive)**.

| Control Type | Description |
|---|---|
| Load/Unload | The compressor loads (compresses air) when pressure drops below the cut-in point and unloads (runs but does not compress) when pressure exceeds the cut-out point. Very common in fixed-speed rotary screw compressors. |
| VFD | A variable frequency drive adjusts motor speed to match demand in real time. Provides excellent part-load efficiency and is increasingly common in modern installations. |
| Inlet Modulation without Unloading | An inlet valve throttles airflow to reduce output. The compressor remains loaded at all times, which makes it less efficient at part load. |
| Inlet Modulation with Unloading | Combines inlet modulation with the ability to fully unload. Modulates down to a threshold, then unloads if demand continues to drop. |
| Variable Displacement with Unloading | Uses a mechanism (such as a turn or poppet valve) to vary the compressor's displacement. Provides better part-load efficiency than inlet modulation. |
| Start/Stop | The compressor motor starts and stops entirely based on pressure. Typically only used on smaller compressors due to motor wear concerns. |

#### Design Details

Most fields in the Design Details section come from the manufacturer's spec sheet, CAGI data sheet, or nameplate data. Key fields include:

- **Blowdown Time:** From manufacturer specs. A default of 40 seconds is often reasonable if not available.
- **Motor Design Efficiency:** From CAGI or manufacturer specs.
- **Motor Service Factor:** From the nameplate. Typically 1.15 for most industrial motors.
- **Full Unloaded Power % of Full Load:** From CAGI. Indicates how much power the compressor draws while unloaded, expressed as a percentage of full load power.

#### Performance Points

Performance points define how the compressor behaves at specific operating conditions. The data required depends on the control type.

**For Load/Unload Compressors:**

- **Full Load (cut-in):** The discharge pressure at which the compressor loads. This is the lower bound of the operating pressure band, taken from site notes or the compressor controller settings.
- **Max Full Flow (cut-out):** The discharge pressure at which the compressor unloads. This is the upper bound.
- **Airflow (acfm):** For both the Full Load and Max Full Flow points, use the same rated capacity value from the CAGI sheet.
- **Power (kW):** Full load and max full flow power from CAGI.
- **No Load (unloaded):** Discharge pressure, airflow (0 acfm), and power consumption while unloaded — all from CAGI.

!!! note "Cut-Out Pressure"
    If a specific cut-out pressure is not available, assume a 5 psi difference above the cut-in pressure.

**For VFD Compressors:**

Performance points come directly from the CAGI data sheet, which provides multiple operating points across the speed range — typically at 100%, 70%, and 40% capacity, plus the no-load condition.

---

### Day Types

Day types group the facility's operating schedule into distinct patterns. For example, a facility that runs differently on weekdays versus weekends would have two day types.

- Use the [Weekly Power Pattern Analyzer](#weekly-power-pattern-analyzer) below to determine the appropriate breakdown of operating days for each day type.
- Most facilities will have two day types (e.g., Weekday and Weekend) unless they operate 24/7 with uniform demand, in which case a single day type with 365 operating days is appropriate.

!!! warning "Day Type Total"
    The total operating days across all day types must sum to 365.

---

### System Profile

The System Profile defines how the compressors operate throughout each day type, including compressor ordering and power consumption at each time interval.

- Profile data comes from the results of the [Weekly Power Pattern Analyzer](#weekly-power-pattern-analyzer) below.
- The profile is typically set with a 1-hour data interval, with power values for each compressor at each hour of the day.
- Compressor ordering is determined by the system's control method and the priority scheme observed or configured at the facility.

??? note "Finding CT Monitoring Data"
    Current transformer (CT) monitoring data is stored in **Teams** under the assessment folder for the facility. Locate the logged amperage export file from the monitoring equipment — this is the input file for the Weekly Power Pattern Analyzer below.

---

### End Uses

The End Uses tab accounts for known air consumption in the system. The most important entry is the system leak rate.

- **Day Type Leak Rate (acfm):** Enter the leak rate determined from the FLUKE acoustic imaging study. Enter this value for all day types.

!!! warning "Leak Rate Applies to All Day Types"
    Leaks are present regardless of the facility's production schedule and occur 24/7. Enter the leak rate for every day type, not just production days.

Additional end uses can be added if specific pneumatic equipment consumption data is available, but the leak rate is the primary and most common entry in this section.

---

### Quick Reference: Data Sources

| Data Point | Source |
|---|---|
| Electricity & Demand Rates | Utility analysis spreadsheet |
| Total Air Storage | Site notes (estimate as half of physical receiver volume) |
| Compressor Type | Field observation (almost always single stage lubricant-injected rotary screw) |
| Full Load Operating Pressure | Site notes |
| Rated Capacity, Package Input Power | CAGI data sheet |
| Full Load Amps, Motor HP | Nameplate or manufacturer spec sheet |
| Control Type | Manufacturer specs (Load/Unload and VFD most common) |
| Design Details | CAGI, manufacturer specs, or nameplate |
| Performance Points (Load/Unload) | Site notes for pressure band; CAGI for airflow and power |
| Performance Points (VFD) | CAGI data sheet (multiple operating points) |
| Day Types | Weekly Power Pattern Analyzer |
| System Profile | Weekly Power Pattern Analyzer |
| Leak Rate | FLUKE acoustic imaging study |

---

## Weekly Power Pattern Analyzer

This calculator analyzes compressed air power consumption by day of week and hour of day to identify operational patterns. Upload current monitoring data to visualize daily schedules and calculate average hourly demand profiles.

<div id="weekly-analyzer" style="max-width: 1200px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background: var(--md-code-bg-color);">

<h3>Step 1: Upload CSV File</h3>

<div style="margin: 15px 0;">
    <p style="font-size: 0.9em; color: var(--md-default-fg-color--light); margin-bottom: 10px;">
        Upload a CSV file containing a date-time column and a current (amps) column. You will select which columns to use after loading.
    </p>
    <input type="file" id="csvFileInput" accept=".csv" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
    <button onclick="loadCSV()" style="margin-left: 10px; padding: 8px 16px; background: #4051b5; color: white; border: none; border-radius: 4px; cursor: pointer;">Load Data</button>
</div>

<div id="fileInfo" style="margin: 10px 0; font-size: 0.9em; color: var(--md-default-fg-color--light);"></div>

<div id="columnSelection" style="margin: 15px 0; padding: 15px; background: var(--md-default-bg-color); border-radius: 6px; display: none;">
    <h4 style="margin-top: 0;">Step 1b: Select Columns</h4>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
        <div>
            <label for="dateTimeColSelect" style="display: block; margin-bottom: 5px; font-weight: 500;">Date-Time Column:</label>
            <select id="dateTimeColSelect" onchange="updateDateRangePreview()" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;"></select>
        </div>
        <div>
            <label for="currentColSelect" style="display: block; margin-bottom: 5px; font-weight: 500;">Current (Amps) Column:</label>
            <select id="currentColSelect" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;"></select>
        </div>
    </div>
</div>

<h3>Step 2: Enter System Parameters</h3>

<div style="margin: 15px 0; padding: 15px; background: var(--md-default-bg-color); border-radius: 6px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
        <div>
            <label for="systemVoltage" style="display: block; margin-bottom: 5px; font-weight: 500;">System Voltage (V):</label>
            <input type="number" id="systemVoltage" placeholder="480" step="1" value="480" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
            <p style="font-size: 0.85em; color: var(--md-default-fg-color--light); margin-top: 5px;">Common: 208V, 240V, 480V, 600V</p>
        </div>
        <div>
            <label for="powerFactor" style="display: block; margin-bottom: 5px; font-weight: 500;">Power Factor:</label>
            <input type="number" id="powerFactor" placeholder="0.85" step="0.01" min="0" max="1" value="0.85" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
            <p style="font-size: 0.85em; color: var(--md-default-fg-color--light); margin-top: 5px;">Typical range: 0.80-0.95</p>
        </div>
    </div>
</div>

<h3>Step 3: Analyze Weekly Patterns</h3>

<div style="margin: 15px 0;">
    <button onclick="analyzeWeeklyPattern()" style="padding: 12px 24px; background: #4051b5; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 1.1em; font-weight: 500;">Analyze Weekly Pattern</button>
</div>

<div id="weeklyChart" style="margin: 20px 0; height: 500px; display: none;"></div>

<div id="calendarHeatmap" style="margin: 20px 0; height: 400px; display: none;"></div>

<div id="daySelection" style="margin: 20px 0; padding: 15px; background: var(--md-default-bg-color); border-radius: 6px; display: none;">
    <h3>Step 4: Select Operating Days</h3>
    <p style="font-size: 0.9em; color: var(--md-default-fg-color--light); margin-bottom: 15px;">
        Select which days represent normal operating conditions:
    </p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px; margin: 15px 0;">
        <label style="display: flex; align-items: center; padding: 10px; background: var(--md-code-bg-color); border-radius: 4px; cursor: pointer;">
            <input type="checkbox" id="day-0" value="0" checked style="margin-right: 8px;">
            <span>Sunday</span>
        </label>
        <label style="display: flex; align-items: center; padding: 10px; background: var(--md-code-bg-color); border-radius: 4px; cursor: pointer;">
            <input type="checkbox" id="day-1" value="1" checked style="margin-right: 8px;">
            <span>Monday</span>
        </label>
        <label style="display: flex; align-items: center; padding: 10px; background: var(--md-code-bg-color); border-radius: 4px; cursor: pointer;">
            <input type="checkbox" id="day-2" value="2" checked style="margin-right: 8px;">
            <span>Tuesday</span>
        </label>
        <label style="display: flex; align-items: center; padding: 10px; background: var(--md-code-bg-color); border-radius: 4px; cursor: pointer;">
            <input type="checkbox" id="day-3" value="3" checked style="margin-right: 8px;">
            <span>Wednesday</span>
        </label>
        <label style="display: flex; align-items: center; padding: 10px; background: var(--md-code-bg-color); border-radius: 4px; cursor: pointer;">
            <input type="checkbox" id="day-4" value="4" checked style="margin-right: 8px;">
            <span>Thursday</span>
        </label>
        <label style="display: flex; align-items: center; padding: 10px; background: var(--md-code-bg-color); border-radius: 4px; cursor: pointer;">
            <input type="checkbox" id="day-5" value="5" checked style="margin-right: 8px;">
            <span>Friday</span>
        </label>
        <label style="display: flex; align-items: center; padding: 10px; background: var(--md-code-bg-color); border-radius: 4px; cursor: pointer;">
            <input type="checkbox" id="day-6" value="6" checked style="margin-right: 8px;">
            <span>Saturday</span>
        </label>
    </div>
    <button onclick="calculateAverageProfile()" style="margin-top: 15px; padding: 10px 20px; background: #4caf50; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 500;">Calculate Average Profile</button>
</div>

<div id="averageResults" style="margin: 20px 0; padding: 20px; background: var(--md-default-bg-color); border-radius: 6px; display: none;">
    <h3 style="margin-top: 0; color: #4caf50;">Average Hourly Power Profile</h3>
    <div id="averageResultsContent"></div>
</div>

<div id="averageChart" style="margin: 20px 0; height: 400px; display: none;"></div>

<div id="eflhSection" style="margin: 20px 0; padding: 15px; background: var(--md-default-bg-color); border-radius: 6px; display: none;">
    <h3 style="margin-top: 0;">Step 5: Equivalent Fully Loaded Hours</h3>
    <p style="font-size: 0.9em; color: var(--md-default-fg-color--light); margin-bottom: 10px;">
        Enter the compressor nameplate power to calculate equivalent fully loaded operating hours per year.
    </p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; align-items: end;">
        <div>
            <label for="nameplatePower" style="display: block; margin-bottom: 5px; font-weight: 500;">Nameplate Power (kW):</label>
            <input type="number" id="nameplatePower" placeholder="e.g. 37" step="0.1" min="0" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; color: black;">
        </div>
        <div>
            <button onclick="calculateEFLH()" style="padding: 10px 20px; background: #4051b5; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 500;">Calculate EFLH</button>
        </div>
    </div>
    <div id="eflhResult" style="margin-top: 15px; display: none;">
        <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
            <tr style="border-bottom: 1px solid var(--md-default-fg-color--lightest);">
                <td style="padding: 8px;">24-Hour Average Power</td>
                <td id="eflhAvgPower" style="padding: 8px; text-align: right; font-weight: 500;"></td>
            </tr>
            <tr style="border-bottom: 1px solid var(--md-default-fg-color--lightest);">
                <td style="padding: 8px;">Nameplate Power</td>
                <td id="eflhNameplate" style="padding: 8px; text-align: right; font-weight: 500;"></td>
            </tr>
            <tr style="border-top: 2px solid var(--md-default-fg-color--lightest); font-weight: bold;">
                <td style="padding: 8px;">Equivalent Fully Loaded Hours</td>
                <td id="eflhValue" style="padding: 8px; text-align: right; color: #4051b5;"></td>
            </tr>
        </table>
    </div>
</div>

</div>

<script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>

<script>
let csvData = [];
let headers = [];
let hourlyByDayData = null;
let twentyFourHrAvg = null;

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

    // Populate column selectors, defaulting to column 2 (datetime) and column 3 (current)
    const dateTimeSelect = document.getElementById('dateTimeColSelect');
    const currentSelect = document.getElementById('currentColSelect');
    dateTimeSelect.innerHTML = '';
    currentSelect.innerHTML = '';
    headers.forEach((header, index) => {
        const opt1 = document.createElement('option');
        opt1.value = header; opt1.text = header;
        if (index === 1) opt1.selected = true;
        dateTimeSelect.appendChild(opt1);

        const opt2 = document.createElement('option');
        opt2.value = header; opt2.text = header;
        if (index === 2) opt2.selected = true;
        currentSelect.appendChild(opt2);
    });

    document.getElementById('columnSelection').style.display = 'block';
    document.getElementById('fileInfo').innerHTML = `<strong>✓ File loaded:</strong> ${csvData.length} data points`;
    updateDateRangePreview();
}

function updateDateRangePreview() {
    const dateTimeCol = document.getElementById('dateTimeColSelect').value;
    try {
        const dates = csvData
            .map(row => parseDateString(row[dateTimeCol]))
            .filter(d => !isNaN(d.getTime()));

        if (dates.length === 0) {
            document.getElementById('fileInfo').innerHTML =
                `<strong>✓ File loaded:</strong> ${csvData.length} data points<br>` +
                `<span style="color: #e74c3c;">⚠ Could not parse dates from the selected column — check that the correct column is chosen.</span>`;
            return;
        }

        const timestamps = dates.map(d => d.getTime());
        const minDate = new Date(Math.min(...timestamps));
        const maxDate = new Date(Math.max(...timestamps));
        const durationDays = (maxDate - minDate) / (1000 * 60 * 60 * 24);

        document.getElementById('fileInfo').innerHTML =
            `<strong>✓ File loaded:</strong> ${csvData.length} data points<br>` +
            `<strong>Date Range:</strong> ${minDate.toLocaleDateString()} to ${maxDate.toLocaleDateString()} (${durationDays.toFixed(1)} days)`;
    } catch (error) {
        console.error('Error parsing dates:', error);
    }
}

function parseDateString(dateStr) {
    if (!dateStr || dateStr.trim() === '') return new Date(NaN);
    dateStr = dateStr.trim();

    // M/D/YYYY H:MM[:SS] — common US data logger format (e.g. 1/15/2026 14:04)
    let m = dateStr.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{1,2}):(\d{2})(?::(\d{2}))?/);
    if (m) return new Date(+m[3], +m[1]-1, +m[2], +m[4], +m[5], +(m[6]||0));

    // YYYY-MM-DD[THH:MM[:SS]] — ISO 8601 / Excel export
    m = dateStr.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})(?:[T\s](\d{1,2}):(\d{2})(?::(\d{2}))?)?/);
    if (m) return new Date(+m[1], +m[2]-1, +m[3], +(m[4]||0), +(m[5]||0), +(m[6]||0));

    // D-Mon-YYYY HH:MM[:SS] — e.g. 15-Jan-2026 14:04
    const months = {jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};
    m = dateStr.match(/^(\d{1,2})-([A-Za-z]{3})-(\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?/);
    if (m && months[m[2].toLowerCase()] !== undefined)
        return new Date(+m[3], months[m[2].toLowerCase()], +m[1], +(m[4]||0), +(m[5]||0), +(m[6]||0));

    // Fallback: native browser Date parsing (handles RFC 2822, full ISO 8601, etc.)
    return new Date(dateStr);
}

function analyzeWeeklyPattern() {
    if (csvData.length === 0) {
        alert('Please load a CSV file first');
        return;
    }

    const voltage = parseFloat(document.getElementById('systemVoltage').value);
    const powerFactor = parseFloat(document.getElementById('powerFactor').value);

    if (isNaN(voltage) || voltage <= 0) {
        alert('Please enter a valid system voltage');
        return;
    }

    if (isNaN(powerFactor) || powerFactor <= 0 || powerFactor > 1) {
        alert('Please enter a valid power factor (0-1)');
        return;
    }

    const dateTimeCol = document.getElementById('dateTimeColSelect').value;
    const currentCol = document.getElementById('currentColSelect').value;

    if (!dateTimeCol || !currentCol) {
        alert('Please load a CSV file and select columns first');
        return;
    }

    // Initialize data structure: [day of week][hour] = array of power values
    hourlyByDayData = {};
    for (let day = 0; day < 7; day++) {
        hourlyByDayData[day] = {};
        for (let hour = 0; hour < 24; hour++) {
            hourlyByDayData[day][hour] = [];
        }
    }

    // Group data by day of week and hour
    csvData.forEach(row => {
        const date = parseDateString(row[dateTimeCol]);
        const current = parseFloat(row[currentCol]);

        if (!isNaN(current)) {
            const power = Math.sqrt(3) * voltage * current * powerFactor / 1000; // kW
            const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
            const hour = date.getHours();

            hourlyByDayData[dayOfWeek][hour].push(power);
        }
    });

    // Calculate averages for each day/hour combination
    const traces = [];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#34495e'];

    for (let day = 0; day < 7; day++) {
        const hours = [];
        const avgPowers = [];

        for (let hour = 0; hour < 24; hour++) {
            const values = hourlyByDayData[day][hour];
            if (values.length > 0) {
                const avg = values.reduce((a, b) => a + b, 0) / values.length;
                hours.push(hour);
                avgPowers.push(avg);
            } else {
                hours.push(hour);
                avgPowers.push(0);
            }
        }

        traces.push({
            x: hours,
            y: avgPowers,
            type: 'scatter',
            mode: 'lines+markers',
            name: dayNames[day],
            line: { color: colors[day], width: 2 },
            marker: { size: 4 }
        });
    }

    const layout = {
        title: 'Average Power by Day of Week and Hour',
        xaxis: {
            title: 'Hour of Day',
            dtick: 2,
            range: [0, 23]
        },
        yaxis: {
            title: 'Average Power (kW)',
            rangemode: 'tozero'
        },
        hovermode: 'x unified',
        legend: {
            orientation: 'h',
            y: -0.2
        },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        font: {color: getComputedStyle(document.body).getPropertyValue('--md-default-fg-color')},
        margin: {t: 50, b: 100, l: 60, r: 20}
    };

    const config = {responsive: true, displayModeBar: true};

    document.getElementById('weeklyChart').style.display = 'block';
    Plotly.newPlot('weeklyChart', traces, layout, config);

    // Create calendar heatmap
    createCalendarHeatmap(voltage, powerFactor, dateTimeCol, currentCol);

    // Show day selection section
    document.getElementById('daySelection').style.display = 'block';
}

function createCalendarHeatmap(voltage, powerFactor, dateTimeCol, currentCol) {
    // Calculate daily power statistics by day of week
    const dayOfWeekData = {};
    for (let day = 0; day < 7; day++) {
        dayOfWeekData[day] = [];
    }

    // Group daily averages by day of week
    const dailyAverages = {};

    csvData.forEach(row => {
        const date = parseDateString(row[dateTimeCol]);
        const current = parseFloat(row[currentCol]);

        if (!isNaN(current)) {
            const power = Math.sqrt(3) * voltage * current * powerFactor / 1000; // kW
            const dateKey = date.toISOString().split('T')[0]; // YYYY-MM-DD

            if (!dailyAverages[dateKey]) {
                dailyAverages[dateKey] = {
                    powers: [],
                    dayOfWeek: date.getDay()
                };
            }
            dailyAverages[dateKey].powers.push(power);
        }
    });

    // Calculate average power for each date and group by day of week
    Object.keys(dailyAverages).forEach(dateKey => {
        const data = dailyAverages[dateKey];
        const avgPower = data.powers.reduce((a, b) => a + b, 0) / data.powers.length;
        dayOfWeekData[data.dayOfWeek].push(avgPower);
    });

    // Calculate min, mean, max for each day of week
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const minPowers = [];
    const meanPowers = [];
    const maxPowers = [];

    for (let day = 0; day < 7; day++) {
        const powers = dayOfWeekData[day];
        if (powers.length > 0) {
            minPowers.push(Math.min(...powers));
            meanPowers.push(powers.reduce((a, b) => a + b, 0) / powers.length);
            maxPowers.push(Math.max(...powers));
        } else {
            minPowers.push(0);
            meanPowers.push(0);
            maxPowers.push(0);
        }
    }

    // Create traces
    const traces = [
        {
            x: dayNames,
            y: maxPowers,
            type: 'scatter',
            mode: 'lines+markers',
            name: 'Max',
            line: { color: '#e74c3c', width: 2 },
            marker: { size: 6 }
        },
        {
            x: dayNames,
            y: meanPowers,
            type: 'scatter',
            mode: 'lines+markers',
            name: 'Mean',
            line: { color: '#3498db', width: 3 },
            marker: { size: 8 }
        },
        {
            x: dayNames,
            y: minPowers,
            type: 'scatter',
            mode: 'lines+markers',
            name: 'Min',
            line: { color: '#2ecc71', width: 2 },
            marker: { size: 6 }
        }
    ];

    const layout = {
        title: 'Daily Average Power Statistics by Day of Week',
        xaxis: {
            title: 'Day of Week'
        },
        yaxis: {
            title: 'Average Power (kW)',
            rangemode: 'tozero'
        },
        hovermode: 'x unified',
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        font: {color: getComputedStyle(document.body).getPropertyValue('--md-default-fg-color')},
        margin: {t: 50, b: 50, l: 60, r: 20},
        legend: {
            orientation: 'h',
            y: -0.15
        }
    };

    const config = {responsive: true, displayModeBar: true};

    document.getElementById('calendarHeatmap').style.display = 'block';
    Plotly.newPlot('calendarHeatmap', traces, layout, config);
}

function calculateAverageProfile() {
    if (!hourlyByDayData) {
        alert('Please analyze weekly pattern first');
        return;
    }

    // Get selected days
    const selectedDays = [];
    for (let day = 0; day < 7; day++) {
        const checkbox = document.getElementById(`day-${day}`);
        if (checkbox && checkbox.checked) {
            selectedDays.push(day);
        }
    }

    if (selectedDays.length === 0) {
        alert('Please select at least one operating day');
        return;
    }

    // Calculate average across selected days for each hour
    const hourlyAverages = [];
    for (let hour = 0; hour < 24; hour++) {
        let allValues = [];
        selectedDays.forEach(day => {
            allValues = allValues.concat(hourlyByDayData[day][hour]);
        });

        const avg = allValues.length > 0
            ? allValues.reduce((a, b) => a + b, 0) / allValues.length
            : 0;

        hourlyAverages.push({
            hour: hour,
            avgPower: avg,
            sampleCount: allValues.length
        });
    }

    // Display results table
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const selectedDayNames = selectedDays.map(d => dayNames[d]).join(', ');

    let tableHTML = `
        <p style="margin-bottom: 15px;"><strong>Selected Days:</strong> ${selectedDayNames}</p>
        <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
            <tr style="background: var(--md-code-bg-color); border-bottom: 2px solid var(--md-default-fg-color--lightest);">
                <th style="padding: 8px; text-align: left;">Hour</th>
                <th style="padding: 8px; text-align: right;">Average Power (kW)</th>
                <th style="padding: 8px; text-align: right;">Sample Count</th>
            </tr>
    `;

    hourlyAverages.forEach(data => {
        tableHTML += `
            <tr style="border-bottom: 1px solid var(--md-default-fg-color--lightest);">
                <td style="padding: 8px;">${data.hour}:00 - ${data.hour}:59</td>
                <td style="padding: 8px; text-align: right;">${data.avgPower.toFixed(2)}</td>
                <td style="padding: 8px; text-align: right;">${data.sampleCount}</td>
            </tr>
        `;
    });

    const totalAvg = hourlyAverages.reduce((sum, d) => sum + d.avgPower, 0) / 24;
    twentyFourHrAvg = totalAvg;
    tableHTML += `
        <tr style="border-top: 2px solid var(--md-default-fg-color--lightest); font-weight: bold;">
            <td style="padding: 8px;">24-Hour Average</td>
            <td style="padding: 8px; text-align: right;">${totalAvg.toFixed(2)}</td>
            <td style="padding: 8px; text-align: right;">--</td>
        </tr>
    `;

    tableHTML += '</table>';

    document.getElementById('averageResultsContent').innerHTML = tableHTML;
    document.getElementById('averageResults').style.display = 'block';

    // Show the EFLH section
    document.getElementById('eflhSection').style.display = 'block';

    // Plot average profile
    const trace = {
        x: hourlyAverages.map(d => d.hour),
        y: hourlyAverages.map(d => d.avgPower),
        type: 'scatter',
        mode: 'lines+markers',
        fill: 'tozeroy',
        line: { color: '#4051b5', width: 3 },
        marker: { size: 6, color: '#4051b5' },
        name: 'Average Power'
    };

    const layout = {
        title: `Average Hourly Profile (${selectedDayNames})`,
        xaxis: {
            title: 'Hour of Day',
            dtick: 2,
            range: [0, 23]
        },
        yaxis: {
            title: 'Average Power (kW)',
            rangemode: 'tozero'
        },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        font: {color: getComputedStyle(document.body).getPropertyValue('--md-default-fg-color')},
        margin: {t: 50, b: 50, l: 60, r: 20},
        showlegend: false
    };

    const config = {responsive: true, displayModeBar: true};

    document.getElementById('averageChart').style.display = 'block';
    Plotly.newPlot('averageChart', [trace], layout, config);
}

function calculateEFLH() {
    if (twentyFourHrAvg === null) {
        alert('Please calculate the average profile first');
        return;
    }

    const nameplatePower = parseFloat(document.getElementById('nameplatePower').value);
    if (isNaN(nameplatePower) || nameplatePower <= 0) {
        alert('Please enter a valid nameplate power (kW)');
        return;
    }

    const eflh = (twentyFourHrAvg / nameplatePower) * 8760;

    document.getElementById('eflhAvgPower').textContent = twentyFourHrAvg.toFixed(2) + ' kW';
    document.getElementById('eflhNameplate').textContent = nameplatePower.toFixed(2) + ' kW';
    document.getElementById('eflhValue').textContent = eflh.toFixed(0) + ' hrs/yr';
    document.getElementById('eflhResult').style.display = 'block';
}
</script>