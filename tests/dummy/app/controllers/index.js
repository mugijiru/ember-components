import { action } from '@ember/object'
import Controller from '@ember/controller'
import { tracked } from '@glimmer/tracking'

export default class Index extends Controller {
  @tracked checkboxState = false

  @action toggleCheckbox () {
    this.checkboxState = !this.checkboxState
  }
}
