export default class UpdateDriver {

  constructor() {
    this.init();
  }

  init() {
  }

  updated(diff) {
    if (this.updateHandler && typeof this.updateHandler === 'function') {
      this.updateHandler(diff);
    }
  }

}
