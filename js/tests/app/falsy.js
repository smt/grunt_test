if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define(function(require) {
    describe('App', function() {
        it('should be falsy', function() {
            expect(0).not.to.eql('1');
        });
    });
});
