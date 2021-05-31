import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render, click } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

module('Integration | Component | mg checkbox', function (hooks) {
  setupRenderingTest(hooks)

  test('checked=false の時は class に `mg-checkbox--checked` が付与されない', async function (assert) {
    await render(hbs`{{mg-checkbox checked=false}}`)

    assert.dom('.mg-checkbox').hasNoClass('mg-checkbox--checked')
  })

  test('checked=true の時は class に `mg-checkbox--checked` が付与される', async function (assert) {
    await render(hbs`{{mg-checkbox checked=true}}`)
    assert.dom('.mg-checkbox').hasClass('mg-checkbox--checked')
  })

  test('checkedに渡された値が切り替わると表示も切り替わる', async function (assert) {
    this.set('flag', false)
    await render(hbs`<MgCheckbox @checked={{this.flag}} />`)
    assert.dom('.mg-checkbox').doesNotHaveClass('mg-checkbox--checked')

    this.set('flag', true)
    assert.dom('.mg-checkbox').hasClass('mg-checkbox--checked')
  })

  test('click すると外部から渡されたアクションが実行される', async function (assert) {
    assert.expect(1)

    this.set('clickAction', (actual) => {
      const expected = null
      assert.equal(actual, expected)
    })

    await render(hbs`<MgCheckbox @onClick={{this.clickAction}} />`)

    click('.mg-checkbox')
  })
})
