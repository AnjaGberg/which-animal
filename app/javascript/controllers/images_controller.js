import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['image']

  refresh() {
    this.imageTarget.innerHTML="";
  }
}
