import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | mg checkbox', function(hooks) {
  setupRenderingTest(hooks);

  test('checked=false の時は class に `c-checkbox--checked` が付与されない', async function(assert) {
    await render(hbs`{{mg-checkbox checked=false}}`);

    assert.dom('.c-checkbox').hasNoClass('c-checkbox--checked');
  });

  test('checked=true の時は class に `c-checkbox--checked` が付与される', async function(assert) {
    await render(hbs`{{mg-checkbox checked=true}}`);
    assert.dom('.c-checkbox').hasClass('c-checkbox--checked');
  });
});
