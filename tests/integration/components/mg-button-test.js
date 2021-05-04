import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | mg button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<MgButton @text="TEXT" />`);

    assert.dom('.btn').hasText('TEXT');
  });

  test('無効フラグが立てられるとボタンが無効になる', async function(assert) {
    await render(hbs`<MgButton @disabled={{true}} />`);

    assert.dom('.btn').isDisabled();
  });

  test('無効フラグが渡されなければボタンは無効にならない', async function(assert) {
    await render(hbs`<MgButton />`);

    assert.dom('.btn').isNotDisabled();
  });

  test('プライマリフラグが立てられるとプライマリ用の class が付与される', async function(assert) {
    await render(hbs`<MgButton @isPrimary={{true}} />`);

    assert.dom('.btn').hasClass('btn-primary');
  });

  test('プライマリフラグが渡されなければとプライマリ用の class は付与されない', async function(assert) {
    await render(hbs`<MgButton />`);

    assert.dom('.btn').doesNotHaveClass('btn-primary');
  });

  test('デンジャーフラグが立てられるとデンジャー用の class が付与される', async function(assert) {
    await render(hbs`<MgButton @isDanger={{true}} />`);

    assert.dom('.btn').hasClass('btn-danger');
  });

  test('デンジャーフラグが渡されなければとデンジャー用の class は付与されない', async function(assert) {
    await render(hbs`<MgButton />`);

    assert.dom('.btn').doesNotHaveClass('btn-danger');
  });

  test('click すると外部から渡されたアクションが実行される', async function(assert) {
    assert.expect(1)

    this.set('clickAction', (actual) => {
      const expected = null
      assert.equal(actual, expected)
    });

    await render(hbs`<MgButton @onClick={{this.clickAction}} />`)

    click('.btn')
  })
});
