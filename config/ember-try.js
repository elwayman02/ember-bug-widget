module.exports = {
  scenarios: [
    {
      name: 'ember-1.11',
      dependencies: {
        'ember': '1.11.1'
      }
    },
    {
      name: 'ember-1.12-beta',
      dependencies: {
        'ember': '1.12.0-beta.1'
      }
  }/*,
    {
      name: 'ember-canary',
      dependencies: {
        'ember': 'canary'
      }
    },
    {
      name: 'ember-beta',
      dependencies: {
        'ember': 'components/ember#beta'
      },
      resolutions: { // Resolutions are only necessary when they do not match the version specified in `dependencies`
        'ember': 'canary'
      }
  }*/
  ]
};
