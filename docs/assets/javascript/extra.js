// Site-wide JavaScript helpers for itac-docs.
//
// This file is loaded on every page via `extra_javascript` in zensical.toml and
// must load BEFORE the per-calculator scripts so the helpers below are defined
// when those scripts run.

// Load an external script exactly once across the whole site session, returning
// a Promise that resolves when it is available. Because instant navigation keeps
// globals alive between pages, this lets calculators lazy-load heavy libraries
// (e.g. Plotly) on demand without re-fetching them on every visit.
window.loadScriptOnce = function (src) {
  window._loadedScripts = window._loadedScripts || {};
  if (window._loadedScripts[src]) {
    return window._loadedScripts[src];
  }
  var promise = new Promise(function (resolve, reject) {
    var script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = function () { resolve(); };
    script.onerror = function () { reject(new Error("Failed to load " + src)); };
    document.head.appendChild(script);
  });
  window._loadedScripts[src] = promise;
  return promise;
};

// CDN URL for Plotly, shared by the calculators that render charts so they all
// load the same single copy.
window.PLOTLY_SRC = "https://cdn.plot.ly/plotly-2.35.2.min.js";
