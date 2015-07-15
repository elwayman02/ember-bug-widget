import Ember from 'ember';
import layout from '../templates/components/bug-widget';

const { computed } = Ember;

export default Ember.Component.extend({
    hide: true,
    text: 'Report A Bug',
    horizontal: 'right',
    vertical: 'bottom',
    bugIcon: 'fa fa-bug',
    arrowLeftIcon: 'fa fa-angle-double-left',
    arrowRightIcon: 'fa fa-angle-double-right',
    layout,

    hiddenClass: computed('hide', function () {
        if (this.get('hide')) {
            return 'hide';
        }

        return '';
    }),

    arrowIcon: computed('hide', 'arrowLeftIcon', 'arrowRightIcon', 'horizontal', function () {
        let hide = this.get('hide');
        let left = this.get('arrowLeftIcon');
        let right = this.get('arrowRightIcon');
        let horizontal = this.get('horizontal');

        if (horizontal.toLowerCase() === 'right') {
            return hide ? left : right;
        }

        return hide ? right : left;
    }),

    actions: {
        toggle() {
            this.toggleProperty('hide');
        }
    }
});
