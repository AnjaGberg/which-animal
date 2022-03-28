import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["tile", "output"]

  connect() {
    console.log("The 'tiles' controller is now loaded!")
    this.counter = 0
  }

  hide(event) {
    this.tileTargets.forEach(tile => {
      document.getElementById(event.target.id).classList.add("hidden");
    })
    this.counter += 1;
    this.updateOutput();
  }

  updateOutput() {
    this.outputTarget.innerText = `You have turned ${this.counter} tiles!`
  }
}
