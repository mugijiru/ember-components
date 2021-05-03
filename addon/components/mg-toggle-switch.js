import Component from '@glimmer/component';

export default class MgToggleSwitch extends Component {
  get label () { return this.args.label ?? '' }
  get offLabel () { return this.args.offLabel ?? 'Off' }
  get onLabel () { return this.args.onLabel ?? 'On' }
  get enabled () { return this.args.enabled ?? false }

  get classNamesString () {
    const classList = ['c-toggle-switch']
    if (this.enabled) { classList.push('c-toggle-switch--enabled') }
    return classList.join(' ')
  }
}
