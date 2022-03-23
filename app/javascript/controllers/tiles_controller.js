import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["tile"]

  connect() {
    console.log("The 'tiles' controller is now loaded!")
  }

  hide() {
    this.tileTarget.classList.add("d-none");
  }
}
