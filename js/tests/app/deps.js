if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define(function(require) {
  describe('Dependencies', function () {
    var A = require('app/moduleA');
    var B = require('app/moduleB');

    describe('Module A', function() {
      var module = A;

      it('should be an object', function() {
        expect(module).to.be.an('object');
      });
      it('should have the correct ID property', function() {
        expect(module).to.have.property('id', 'A');
      });
    });

    describe('Module B', function() {
      var module = B;

      it('should be an object', function() {
        expect(module).to.be.an('object');
      });
      it('should have the correct ID property', function() {
        expect(module).to.have.property('id', 'B');
      });
      it('should have the correct parent property', function () {
        expect(module).to.have.property('parent', A);
      });
    });
  });
});
