import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render, click } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

module('Integration | Component | mg button', function (hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function (assert) {
    await render(hbs`<MgButton @text="TEXT" />`)

    assert.dom('.mg-button').hasText('TEXT')
  })

  test('無効フラグが立てられるとボタンが無効になる', async function (assert) {
    await render(hbs`<MgButton @disabled={{true}} />`)

    assert.dom('.mg-button').isDisabled()
  })

  test('無効フラグが渡されなければボタンは無効にならない', async function (assert) {
    await render(hbs`<MgButton />`)

    assert.dom('.mg-button').isNotDisabled()
  })

  test('プライマリフラグが立てられるとプライマリ用の class が付与される', async function (assert) {
    await render(hbs`<MgButton @isPrimary={{true}} />`)

    assert.dom('.mg-button').hasClass('mg-button--primary')
  })

  test('プライマリフラグが渡されなければとプライマリ用の class は付与されない', async function (assert) {
    await render(hbs`<MgButton />`)

    assert.dom('.mg-button').doesNotHaveClass('mg-button--primary')
  })

  test('デンジャーフラグが立てられるとデンジャー用の class が付与される', async function (assert) {
    await render(hbs`<MgButton @isDanger={{true}} />`)

    assert.dom('.mg-button').hasClass('mg-button--danger')
  })

  test('デンジャーフラグが渡されなければとデンジャー用の class は付与されない', async function (assert) {
    await render(hbs`<MgButton />`)

    assert.dom('.mg-button').doesNotHaveClass('mg-button--danger')
  })

  test('click すると外部から渡されたアクションが実行される', async function (assert) {
    assert.expect(1)

    this.set('clickAction', (actual) => {
      const expected = null
      assert.equal(actual, expected)
    })

    await render(hbs`<MgButton @onClick={{this.clickAction}} />`)

    click('.mg-button')
  })
})
