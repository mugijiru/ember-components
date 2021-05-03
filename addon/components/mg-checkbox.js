import Component from '@glimmer/component';

export default class MgCheckbox extends Component {
  get checked () {
    return this.args.checked ?? false
  }

  get classNamesString () {
    const classList = ['c-checkbox']
    if (this.checked) { classList.push('c-checkbox--checked') }

    return classList.join(' ')
  }
}
