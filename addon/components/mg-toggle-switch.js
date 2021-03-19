import Ember from 'ember';
import layout from '../templates/components/mg-toggle-switch';

export default Ember.Component.extend({
  layout,
  classNames: ['c-toggle-switch'],
  classNameBindings: ['enabled:c-toggle-switch--enabled'],

  label: '',
  offLabel: 'Off',
  onLabel: 'On',
  enabled: false
});
