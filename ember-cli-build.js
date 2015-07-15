/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-addon');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

module.exports = function (defaults) {
    var app = new EmberApp(defaults, {
        // Add options here
    });

    /*
     This build file specifes the options for the dummy test app of this
     addon, located in `/tests/dummy`
     This build file does *not* influence how the addon or the app using it
     behave. You most likely want to be modifying `./index.js` or app's build file
     */

    var fontTree = pickFiles('bower_components/fontawesome/fonts', {
        srcDir: '/',
        files: ['*'],
        destDir: '/assets/fonts'
    });

    return mergeTrees([app.toTree(), fontTree]);
};
