if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function(require) {
  var A = require('app/moduleA');
  return {
    id: 'B',
      parent: A
  };
});
