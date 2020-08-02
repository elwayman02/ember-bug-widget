Ember Bug Widget
==============================================================================

[![Build Status](https://travis-ci.org/elwayman02/ember-bug-widget.svg?branch=master)](https://travis-ci.org/elwayman02/ember-bug-widget)
[![Netlify Status](https://api.netlify.com/api/v1/badges/68529bc1-92ef-485c-a4b7-45b490760844/deploy-status)](https://app.netlify.com/sites/peaceful-sinoussi-e3a862/deploys)
[![npm version](https://badge.fury.io/js/ember-bug-widget.svg)](http://badge.fury.io/js/ember-bug-widget)
[![Code Climate](https://codeclimate.com/github/elwayman02/ember-bug-widget/badges/gpa.svg)](https://codeclimate.com/github/elwayman02/ember-bug-widget)
[![Codacy Badge](https://www.codacy.com/project/badge/7b9a436d453943baa9dc1f00a5cd72f9)](https://www.codacy.com/app/hawker-jordan/ember-bug-widget)
[![Ember Observer](http://emberobserver.com/badges/ember-bug-widget.svg)](http://emberobserver.com/addons/ember-bug-widget)

[![NPM](https://nodei.co/npm/ember-bug-widget.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ember-bug-widget/)

This addon is a lightweight drop-in bug-reporting widget for your Ember application. 
Simply add the bug-widget to your application.hbs template and tell it where your bugs should be reported:

Installation
------------------------------------------------------------------------------

```
ember install ember-bug-widget
```

Usage
------------------------------------------------------------------------------

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

Contributing
------------------------------------------------------------------------------

[CONTRIBUTING.md](https://github.com/elwayman02/ember-bug-widget/blob/master/CONTRIBUTING.md) details how to contribute to this project.

We adhere to the [Ember Community Guidelines](https://emberjs.com/guidelines/) for our Code of Conduct.

### Installation

* `git clone <repository-url>`
* `cd ember-bug-widget`
* `yarn install`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `yarn test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
