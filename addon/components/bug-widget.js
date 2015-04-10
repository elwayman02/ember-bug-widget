import Ember from 'ember';

export default Ember.Component.extend({
    hide: true,
    text: 'Report A Bug',
    horizontal: 'right',
    vertical: 'bottom',
    bugIcon: 'fa fa-bug',
    arrowLeftIcon: 'fa fa-angle-double-left',
    arrowRightIcon: 'fa fa-angle-double-right',

    hiddenClass: Ember.computed('hide', function () {
        if (this.get('hide')) {
            return 'hide';
        }

        return '';
    }),

    arrowIcon: Ember.computed('hide', 'arrowLeftIcon', 'arrowRightIcon', function () {
        var hide = this.get('hide');
        var left = this.get('arrowLeftIcon');
        var right = this.get('arrowRightIcon');

        if (this.get('horizontal') === 'right') {
            return hide ? left : right;
        }
        return hide ? right : left;
    }),

    actions: {
        toggle: function () {
            this.toggleProperty('hide');
        }
    }
});
