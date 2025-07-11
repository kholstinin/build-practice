var $ = (function () {
  var module = {};

  module.ajax = function (src) {
    return new XMLHttpRequest(src);
  };

  module.update = function (type) {
    var result = module.ajax(type);
  };

  return module;
})();
