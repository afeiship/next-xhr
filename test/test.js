(function () {
  var nx = require('next-js-core2');
  var NxXhr = require('../src/next-xhr');

  describe('NxXhr.methods', function () {
    test('NxXhr apis', function () {
      var xhr = NxXhr.create();
      expect(typeof NxXhr.create).toBe('function');
      expect(xhr instanceof XMLHttpRequest).toBe(true);
    });
  });
}());
