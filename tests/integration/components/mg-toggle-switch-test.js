import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | mg toggle-switch', function(hooks) {
  setupRenderingTest(hooks);

  test('label が指定された時そのラベルが表示される', async function(assert) {
    await render(hbs`{{mg-toggle-switch label="Specify Label"}}`);

    assert.dom('.c-toggle-switch__label').hasText('Specify Label');
  });

  test('On/Off のそれぞれのラベルが表示される', async function(assert) {
    await render(hbs`{{mg-toggle-switch}}`);

    assert.dom('.c-toggle-switch__off-label').hasText('Off');
    assert.dom('.c-toggle-switch__on-label').hasText('On');
  });

  test('On/Off のラベルが指定された時、そのラベルが表示される', async function(assert) {
    await render(hbs`{{mg-toggle-switch onLabel="オン" offLabel="オフ"}}`);

    assert.dom('.c-toggle-switch__off-label').hasText('オフ');
    assert.dom('.c-toggle-switch__on-label').hasText('オン');
  });

  test('デフォルトではスイッチはオフ側に倒れている', async function(assert) {
    await render(hbs`{{mg-toggle-switch}}`);

    assert.dom('div').hasNoClass('c-toggle-switch--enabled');
  });

  test('enabled が true の時、スイッチはオン側に倒れている', async function(assert) {
    await render(hbs`{{mg-toggle-switch enabled=true}}`);

    assert.dom('div').hasClass('c-toggle-switch--enabled');
  });
});
