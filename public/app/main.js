/**
 * marionette-scaffolding
 *
 * @author Nil Gradisnik <nil.gradisnik@gmail.com>
 * https://github.com/nilgradisnik/marionette-scaffolding
 */
require.config({

  paths: {
    // jQuery
    jquery: '../lib/jquery/jquery',
    // Backbone & Underscore
    // AMD enabled: https://github.com/amdjs
    underscore: '../lib/underscore/underscore',
    backbone: '../lib/backbone/backbone',
    // Marionette 
    // https://github.com/marionettejs/backbone.marionette
    marionette : '../lib/backbone/backbone.marionette',
    'backbone.wreqr' : '../lib/backbone/backbone.wreqr',
    'backbone.babysitter' : '../lib/backbone/backbone.babysitter',
    dust: '../lib/dust/dust-core.js',
    dustRenderer: '../lib/backbone/backbone.marionette'
  }
});

// kick off the app
require(['app'], function(App) {
  App.start();
});