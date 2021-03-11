import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mg-checkbox', 'Integration | Component | mg checkbox', {
  integration: true
});

test('checked=false の時は class に `c-checkbox--checked` が付与されない', function(assert) {
  this.render(hbs`{{mg-checkbox checked=false}}`);

  assert.notOk(this.$('div').hasClass('c-checkbox--checked'));
});

test('checked=true の時は class に `c-checkbox--checked` が付与される', function(assert) {
  this.render(hbs`{{mg-checkbox checked=true}}`);

  assert.ok(this.$('div').hasClass('c-checkbox--checked'));
});
