import Component from '@glimmer/component'
import { action } from '@ember/object'

export default class MgCheckbox extends Component {
  get checked() {
    return this.args.checked ?? false
  }

  get classNamesString() {
    const classList = ['c-checkbox']
    if (this.checked) {
      classList.push('c-checkbox--checked')
    }

    return classList.join(' ')
  }

  @action
  click() {
    const onClick = this.args.onClick
    if (typeof onClick !== 'function') {
      return
    }
    onClick()
  }
}
