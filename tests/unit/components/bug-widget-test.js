import {
    moduleForComponent,
    test
} from 'ember-qunit';

moduleForComponent('bug-widget', {
    unit: true
});

test('it renders', function(assert) {
    assert.expect(2);

    // creates the component instance
    const component = this.subject();
    assert.equal(component._state, 'preRender');

    // renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
});

test('hiddenClass default', function(assert) {
    assert.expect(1);

    const component = this.subject();
    assert.equal(component.get('hiddenClass'), 'hide', 'Hidden by default');
});

test('hiddenClass when not hidden', function(assert) {
    assert.expect(1);

    const component = this.subject();
    component.set('hide', false);
    assert.equal(component.get('hiddenClass'), '', 'No class when not hidden');
});

test('arrowIcon default', function(assert) {
    assert.expect(1);

    const component = this.subject();
    const left = component.get('arrowLeftIcon');

    assert.equal(component.get('arrowIcon'), left, 'Left by default (collapsed)');
});

test('arrowIcon expanded', function(assert) {
    assert.expect(1);

    const component = this.subject();
    const right = component.get('arrowRightIcon');

    component.set('hide', false);
    assert.equal(component.get('arrowIcon'), right, 'Right when expanded');
});

test('arrowIcon left align default', function(assert) {
    assert.expect(1);

    const component = this.subject();
    const right = component.get('arrowRightIcon');

    component.set('horizontal', 'left');
    assert.equal(component.get('arrowIcon'), right, 'Right by default for left horizontal position (collapsed)');
});

test('arrowIcon left align expanded', function(assert) {
    assert.expect(1);

    const component = this.subject();
    const left = component.get('arrowLeftIcon');

    component.setProperties({
        horizontal: 'left',
        hide: false
    });
    assert.equal(component.get('arrowIcon'), left, 'Left for left horizontal position when expanded');
});
