import Ember from 'ember';

export default Ember.Component.extend({
  hide: true,
  horizontal: 'right',
  vertical: 'bottom',
  bugIcon: 'fa fa-bug',
  arrowLeftIcon: 'fa fa-angle-double-left',
  arrowRightIcon: 'fa fa-angle-double-right',

  hiddenClass: function () {
    if (this.get('hide')) {
      return 'hide';
    }

    return '';
  }.property('hide'),

  arrowIcon: function () {
    var hide = this.get('hide');
    var left = this.get('arrowLeftIcon');
    var right = this.get('arrowRightIcon');

    if (this.get('horizontal') === 'right') {
      return hide ? left : right;
    }
    return hide ? right : left;
  }.property('hide', 'arrowLeftIcon', 'arrowRightIcon'),

  actions: {
    toggle: function () {
      this.toggleProperty('hide');
    }
  }
});
