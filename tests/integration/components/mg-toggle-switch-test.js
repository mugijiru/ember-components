import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mg-toggle-switch', 'Integration | Component | mg toggle-switch', {
  integration: true
});

test('label が指定された時そのラベルが表示される', function(assert) {
  this.render(hbs`{{mg-toggle-switch label="Specify Label"}}`);

  assert.equal(this.$('.c-toggle-switch__label').text().trim(), 'Specify Label');
});

test('On/Off のそれぞれのラベルが表示される', function(assert) {
  this.render(hbs`{{mg-toggle-switch}}`);

  assert.equal(this.$('.c-toggle-switch__off-label').text().trim(), 'Off');
  assert.equal(this.$('.c-toggle-switch__on-label').text().trim(), 'On');
});

test('On/Off のラベルが指定された時、そのラベルが表示される', function(assert) {
  this.render(hbs`{{mg-toggle-switch onLabel="オン" offLabel="オフ"}}`);

  assert.equal(this.$('.c-toggle-switch__off-label').text().trim(), 'オフ');
  assert.equal(this.$('.c-toggle-switch__on-label').text().trim(), 'オン');
});

test('デフォルトではスイッチはオフ側に倒れている', function(assert) {
  this.render(hbs`{{mg-toggle-switch}}`);

  assert.notOk(this.$('div').hasClass('c-toggle-switch--enabled'));
});

test('enabled が true の時、スイッチはオン側に倒れている', function(assert) {
  this.render(hbs`{{mg-toggle-switch enabled=true}}`);

  assert.ok(this.$('div').hasClass('c-toggle-switch--enabled'));
});
