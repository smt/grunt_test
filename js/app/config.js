/*global _:true,Backbone:true,mocha:true,tests:true */

// Set the require.js configuration for your application.
require.config({
  // Initialize the application with the main application file
  deps : [ 'tests/runner' ],

  baseUrl : '../',
  paths : {
    // Libraries
    jquery : 'lib/jquery',
    underscore : 'lib/underscore',
    backbone : 'lib/backbone',

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

define(
  ['jquery', 'underscore', 'backbone'],

  function (jQueryLocal, underscoreLocal, backboneLocal) {
    console.log('local', jQueryLocal);
    console.log('local', underscoreLocal);
    console.log('local', backboneLocal);
    console.log('global', $);
    console.log('global', _);
    console.log('global', Backbone);

    require(tests, function () {
      if (typeof mocha !== 'undefined') {
        mocha.run();
      }
    });
  }
);

