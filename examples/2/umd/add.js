(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports)
    : typeof define === "function" && define.amd
    ? define('add', ["exports"], factory)
    : ((global = global || self), factory((global.MyMath = {})));
})(this, function (exports) {
  function add(a, b) {
    return a + b;
  }
  exports.add = add;
});
