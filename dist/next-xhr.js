/*!
 * name: next-xhr
 * url: https://github.com/afeiship/next-xhr
 * version: 1.0.0
 * date: 2019-08-31T01:07:25.143Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxXhr = nx.declare('nx.Xhr', {
    statics: {
      create: (function() {
        // 以下代码，参考自jquery1.8.2
        function createStandardXHR() {
          try {
            return new window.XMLHttpRequest();
          } catch (_) {}
        }

        function createActiveXHR() {
          try {
            return new window.ActiveXObject('Microsoft.XMLHTTP');
          } catch (_) {}
        }

        return window.ActiveXObject
          ? function() {
              return createStandardXHR() || createActiveXHR();
            }
          : createStandardXHR;
      })()
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxXhr;
  }
})();

//# sourceMappingURL=next-xhr.js.map
