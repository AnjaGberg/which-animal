import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["tile", "output"]

  hide(event) {
    this.tileTargets.forEach(tile => {
      document.getElementById(event.target.id).classList.add("hidden");
    })
    this.counter = document.querySelectorAll('.hidden').length;
    this.updateOutput();
  }

  updateOutput() {
    this.outputTarget.innerText = `You have turned ${this.counter} tiles!`
  }
}
