import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["tile", "output", 'modal']

  hide(event) {
    this.tileTargets.forEach(tile => {
      document.getElementById(event.target.id).classList.add("hidden");
    })
    this.counter = document.querySelectorAll('.hidden').length;
    this.updateOutput();
  }

  updateOutput() {
    if (this.counter == 1) {
      this.tiles = "tile";
    } else{
      this.tiles = "tiles";
    }

    this.outputTarget.innerText = `You have turned ${this.counter} ${this.tiles}!`
  }

  showAll(){
    this.tileTargets.forEach(tile => {
      tile.classList.add("hidden");
    })

    let modalController = this.application.getControllerForElementAndIdentifier(
      this.modalTarget,
      "modal"
    );
    modalController.close();

    // this.outputTarget.insertAdjacentHTML('beforeend','hello');
  }
}
