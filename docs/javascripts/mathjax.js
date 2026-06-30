// MathJax 3 configuration for pymdownx.arithmatex (generic mode).
//
// This object must exist on `window` BEFORE the MathJax library loads, which is
// why `javascripts/mathjax.js` is listed before the MathJax CDN bundle in the
// `extra_javascript` array in zensical.toml. Do not change that ordering.
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// Re-typeset on every page load, including instant-navigation body swaps.
// `document$` is the RxJS subject Material/Zensical emits on each navigation;
// without this hook, math stays as raw \(...\) / \[...\] until a hard refresh.
//
// We chain onto `MathJax.startup.promise` rather than calling typesetPromise()
// directly. On the very first load MathJax runs its own startup typeset, and if
// our callback fired at the same time the two passes would race — leaving some
// equations half-rendered until a refresh. Chaining guarantees our reset runs
// only after any in-flight typeset settles. clearCache/typesetClear/texReset
// fully drop the previous page's math state so every equation on the freshly
// swapped-in page is re-discovered and rendered.
document$.subscribe(function () {
  if (typeof MathJax === "undefined" || !MathJax.startup || !MathJax.startup.promise) {
    return;
  }
  MathJax.startup.promise = MathJax.startup.promise.then(function () {
    MathJax.startup.output.clearCache();
    MathJax.typesetClear();
    MathJax.texReset();
    return MathJax.typesetPromise();
  });
});
