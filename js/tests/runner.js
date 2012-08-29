/*global _:true,Backbone:true,mocha:true */

var tests = [
  'tests/app/truthy',
  'tests/app/falsy',
  'tests/app/deps'
];

if (typeof window === 'undefined') {
  var requirejs = require('requirejs');
  requirejs.config({
    baseUrl : __dirname + '/../',
    nodeRequire : require,
    paths : {
      // Libraries
      underscore : 'lib/underscore',
      backbone : 'lib/backbone',
      jquery : 'lib/jquery',
      // Plugins
      text : 'lib/require/text'
    },
    shim : {
      backbone : {
        deps : ['underscore', 'jquery'],
        exports : 'Backbone'
      },
      underscore : {
        exports : '_'
      }
    }
  });

  requirejs(tests, function() {
    if (typeof mocha !== 'undefined') {
      mocha.run();
    }
  });
}
