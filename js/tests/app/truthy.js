if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define(function(require) {
  describe('Truthy', function() {
    it('should be truthy', function() {
      expect(1).to.eql('1');
    });
  });
});
