# Ember Bug Widget
[![Build Status](https://travis-ci.org/elwayman02/ember-bug-widget.svg?branch=master)](https://travis-ci.org/elwayman02/ember-bug-widget)
[![npm version](https://badge.fury.io/js/ember-bug-widget.svg)](http://badge.fury.io/js/ember-bug-widget)
[![Code Climate](https://codeclimate.com/github/elwayman02/ember-bug-widget/badges/gpa.svg)](https://codeclimate.com/github/elwayman02/ember-bug-widget)
[![Codacy Badge](https://www.codacy.com/project/badge/7b9a436d453943baa9dc1f00a5cd72f9)](https://www.codacy.com/app/hawker-jordan/ember-bug-widget)
[![Ember Observer](http://emberobserver.com/badges/ember-bug-widget.svg)](http://emberobserver.com/addons/ember-bug-widget)
[![Dependency Status](https://www.versioneye.com/user/projects/557386e1336334002500000a/badge.svg?style=flat)](https://www.versioneye.com/user/projects/557386e1336334002500000a)

[![NPM](https://nodei.co/npm/ember-bug-widget.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ember-bug-widget/)

Ember-Bug-Widget is now aligned with the [Ember 2.x Release Format](http://emberjs.com/blog/2015/06/16/ember-project-at-2-0.html).

This addon is a lightweight drop-in bug-reporting widget for your Ember application.  Simply add the bug-widget to your application.hbs template and tell it where your bugs should be reported:

```handlebars
{{bug-widget url='https://github.com/elwayman02/ember-bug-widget/issues/new'}}
```

The text of the button defaults to "Report A Bug", but can easily be configured:

```handlebars
{{bug-widget
    url='https://github.com/elwayman02/ember-bug-widget/issues/new'
    text='File An Issue'}}
```

The widget displays in the bottom right edge of the page by default, and it can currently be moved to the other three corners of the page as well:

Bottom Left -
```handlebars
{{bug-widget
    url='https://github.com/elwayman02/ember-bug-widget/issues/new'
    horizontal='left'}}
```

Top Left -
```handlebars
{{bug-widget
    url='https://github.com/elwayman02/ember-bug-widget/issues/new'
    horizontal='left'
    vertical='top'}}
```

Top Right -
```handlebars
{{bug-widget
    url='https://github.com/elwayman02/ember-bug-widget/issues/new'
    vertical='top'}}
```

Additionally, if you want the widget to be expanded by default, simply initialize the hide attribute as false:

```handlebars
{{bug-widget
    url='https://github.com/elwayman02/ember-bug-widget/issues/new'
    hide=false}}
```

To further customize the widget, you may use it in the block format and yield your own contents for the button:

```handlebars
{{#bug-widget}}
    I am a custom widget: <a href="http://jhawk.co" target="_blank">Click me!</a>
{{/bug-widget}}
```

Currently the widget's icons default to FontAwesome classes, but they can be configured as well:

```handlebars
{{bug-widget
    url='https://github.com/elwayman02/ember-bug-widget/issues/new'
    bugIcon='bugIconClass'
    arrowLeftIcon='leftArrowClass'
    arrowRightIcon='rightArrowClass'}}
```

If you would like to use FontAwesome icons, you must configure them within your own app. We did not want to force that
dependency on every user of this addon, so just add the following to your `ember-cli-build.js` (or `Brocfile.js`, for older versions of Ember-CLI):

```javascript
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');
var path = require('path');

module.exports = function (defaults) {
    var app = new EmberApp(defaults, {
        // Add options here
    });

    var fontTree = pickFiles(path.join(app.bowerDirectory, 'fontawesome', 'fonts'), {
        srcDir: '/',
        destDir: path.join('assets', 'fonts')
    });

    return mergeTrees([app.toTree(), fontTree]);
};
```

You'll need to install `broccoli-static-compiler` and `broccoli-merge-trees` via npm to have access to those packages.

## Contributing

[CONTRIBUTING.md](https://github.com/elwayman02/ember-bug-widget/blob/master/CONTRIBUTING.md) details how to contribute to this project.

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember serve`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
