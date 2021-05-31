import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render, click } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

module('Integration | Component | mg toggle-switch', function (hooks) {
  setupRenderingTest(hooks)

  test('label が指定された時そのラベルが表示される', async function (assert) {
    await render(hbs`{{mg-toggle-switch label="Specify Label"}}`)

    assert.dom('.mg-toggle-switch__label').hasText('Specify Label')
  })

  test('On/Off のそれぞれのラベルが表示される', async function (assert) {
    await render(hbs`{{mg-toggle-switch}}`)

    assert.dom('.mg-toggle-switch__off-label').hasText('Off')
    assert.dom('.mg-toggle-switch__on-label').hasText('On')
  })

  test('On/Off のラベルが指定された時、そのラベルが表示される', async function (assert) {
    await render(hbs`{{mg-toggle-switch onLabel="オン" offLabel="オフ"}}`)

    assert.dom('.mg-toggle-switch__off-label').hasText('オフ')
    assert.dom('.mg-toggle-switch__on-label').hasText('オン')
  })

  test('デフォルトではスイッチはオフ側に倒れている', async function (assert) {
    await render(hbs`{{mg-toggle-switch}}`)

    assert.dom('.mg-toggle-switch').hasNoClass('mg-toggle-switch--enabled')
  })

  test('enabled が true の時、スイッチはオン側に倒れている', async function (assert) {
    await render(hbs`{{mg-toggle-switch enabled=true}}`)

    assert.dom('.mg-toggle-switch').hasClass('mg-toggle-switch--enabled')
  })

  test('enabled が切り替わると表示も切り替わる', async function (assert) {
    assert.expect(2)

    this.set('flag', false)
    await render(hbs`<MgToggleSwitch @enabled={{this.flag}} />`)

    assert.dom('.mg-toggle-switch').doesNotHaveClass('mg-toggle-switch--enabled')

    this.set('flag', true)
    assert.dom('.mg-toggle-switch').hasClass('mg-toggle-switch--enabled')
  })

  test('click すると外部から渡されたアクションが実行される', async function (assert) {
    assert.expect(1)

    this.set('clickAction', (actual) => {
      const expected = null
      assert.equal(actual, expected)
    })

    await render(hbs`<MgToggleSwitch @onClick={{this.clickAction}} />`)

    click('.mg-toggle-switch')
  })
})
