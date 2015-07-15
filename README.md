# Ember Bug Widget
[![Build Status](https://travis-ci.org/elwayman02/ember-bug-widget.svg?branch=master)](https://travis-ci.org/elwayman02/ember-bug-widget)
[![npm version](https://badge.fury.io/js/ember-bug-widget.svg)](http://badge.fury.io/js/ember-bug-widget)
[![Code Climate](https://codeclimate.com/github/elwayman02/ember-bug-widget/badges/gpa.svg)](https://codeclimate.com/github/elwayman02/ember-bug-widget)
[![Codacy Badge](https://www.codacy.com/project/badge/7b9a436d453943baa9dc1f00a5cd72f9)](https://www.codacy.com/app/hawker-jordan/ember-bug-widget)
[![Ember Observer](http://emberobserver.com/badges/ember-bug-widget.svg)](http://emberobserver.com/addons/ember-bug-widget)
![Dependencies](https://david-dm.org/elwayman02/ember-bug-widget.svg)


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

Currently the widget's icons default to FontAwesome classes, but they can be configured as well:

```handlebars
{{bug-widget
    url='https://github.com/elwayman02/ember-bug-widget/issues/new'
    bugIcon='bugIconClass'
    arrowLeftIcon='leftArrowClass'
    arrowRightIcon='rightArrowClass'}}
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

## Contributing

This section details how to contribute to this project.

### Installation

* `git clone` this repository
* `npm install -g ember-cli`
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`
