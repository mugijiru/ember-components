import Ember from 'ember';
import layout from '../templates/components/mg-button';

export default Ember.Component.extend({
  layout,
  tagName: 'button',
  classNames: ['btn'],
  classNameBindings: ['isPrimary:btn-primary', 'isDanger:btn-danger'],
  attributeBindings: ['disabled'],

  isPrimary: false,
  isDanger: false,
  disabled: false,

  text: ''
});
