/* jshint node: true */
'use strict';

var path = require('path');
var name = 'ember-bug-widget';

module.exports = {
  name: name,
  included: function(app) {
    this._super.included(app);
  }
};
