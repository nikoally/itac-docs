// VSD Isentropic Efficiency Estimator (calculators/vsd-efficiency.md).
//
// Loaded site-wide, so the init function bails out unless this page's root
// element is present, and re-runs on every instant-navigation load.
(function () {
  const GAMMA_VSD = 1.40287268;
  const R_AIR_VSD = 0.28703905;
  const P_ATM_VSD = 101.325;
  const CFM_TO_KGS_VSD = 0.000472 * 1.225;

  function calcVsdEff() {
    const cfm = parseFloat(document.getElementById('vsdCfm').value);
    const kw = parseFloat(document.getElementById('vsdKw').value);
    const psi = parseFloat(document.getElementById('vsdPressure').value);
    const inletC = parseFloat(document.getElementById('vsdInletTemp').value);
    const resultDiv = document.getElementById('vsdResult');

    if (isNaN(cfm) || isNaN(kw) || isNaN(psi) || isNaN(inletC) || cfm <= 0 || kw <= 0) {
      resultDiv.innerHTML = '<p style="color: var(--md-default-fg-color--light);">Enter values above to calculate isentropic efficiency.</p>';
      return;
    }

    const massFlow = cfm * CFM_TO_KGS_VSD;
    const T1 = inletC + 273.15;
    const P2 = psi * 6.894757 + P_ATM_VSD; // gauge to absolute
    const exponent = (GAMMA_VSD - 1) / GAMMA_VSD;
    const idealPower = (GAMMA_VSD * R_AIR_VSD * T1 / (GAMMA_VSD - 1)) *
                       (Math.pow(P2 / P_ATM_VSD, exponent) - 1) * massFlow;
    const efficiency = (idealPower / kw) * 100;
    const specificPower = kw / (cfm / 100);

    let color = '#4caf50';
    let note = '';
    if (efficiency > 100) {
      color = '#f44336';
      note = '<p style="margin: 8px 0 0 0; font-size: 0.85em; color: #f44336;">Efficiency > 100% indicates an inconsistency in the inputs. Check that the pressure is gauge (not absolute) and the power measurement corresponds to the flow rate.</p>';
    } else if (efficiency < 50) {
      color = '#ff9800';
      note = '<p style="margin: 8px 0 0 0; font-size: 0.85em; color: #ff9800;">Efficiency below 50% is unusually low. Verify the inputs are correct.</p>';
    }

    resultDiv.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; text-align: center;">
                <div>
                    <p style="margin: 4px 0; color: var(--md-default-fg-color--light); font-size: 0.85em;">Isentropic Efficiency</p>
                    <p style="margin: 4px 0; font-family: monospace; font-size: 1.4em; font-weight: 600; color: ${color};">${efficiency.toFixed(2)}%</p>
                </div>
                <div>
                    <p style="margin: 4px 0; color: var(--md-default-fg-color--light); font-size: 0.85em;">Ideal Power</p>
                    <p style="margin: 4px 0; font-family: monospace; font-size: 1.4em;">${idealPower.toFixed(2)} kW</p>
                </div>
                <div>
                    <p style="margin: 4px 0; color: var(--md-default-fg-color--light); font-size: 0.85em;">Specific Power</p>
                    <p style="margin: 4px 0; font-family: monospace; font-size: 1.4em;">${specificPower.toFixed(2)} kW/100cfm</p>
                </div>
            </div>
            ${note}
            <p style="margin: 10px 0 0 0; font-size: 0.85em; color: var(--md-default-fg-color--light);">Use the efficiency value above as the "Isentropic Eff." input in the cold air intake calculator.</p>`;
  }

  function initVsdCalculator() {
    if (!document.getElementById('vsd-efficiency-calc')) return;
    ['vsdCfm', 'vsdKw', 'vsdPressure', 'vsdInletTemp'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el && !el.dataset.vsdBound) {
        el.dataset.vsdBound = 'true';
        el.addEventListener('change', calcVsdEff);
        el.addEventListener('input', calcVsdEff);
      }
    });
    calcVsdEff();
  }

  if (typeof document$ !== 'undefined') {
    document$.subscribe(initVsdCalculator);
  } else {
    document.addEventListener('DOMContentLoaded', initVsdCalculator);
  }
})();
