import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["modal"]

  connect() {
    console.log(this.modalTarget);
  }

  show(event){
    console.log(event);
  }
}
