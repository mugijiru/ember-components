import Component from '@glimmer/component'
import { action } from '@ember/object'

export default class MgButton extends Component {
  get disabled() {
    return this.args.disabled ?? false
  }

  get text() {
    return this.args.text ?? ''
  }

  get isPrimary() {
    return this.args.isPrimary ?? false
  }

  get isDanger() {
    return this.args.isDanger ?? false
  }

  get classNamesString() {
    const classList = ['mg-button']
    if (this.isPrimary) {
      classList.push('mg-button--primary')
    }
    if (this.isDanger) {
      classList.push('mg-button--danger')
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
