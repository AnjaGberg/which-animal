import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['content', 'buttons']

  open() {
    document.body.classList.add("modal-open");
    this.element.setAttribute("style", "display: block;");
    this.element.classList.add("show");
    document.body.innerHTML += '<div class="modal-backdrop fade show"></div>';
  }

  close() {
    document.body.classList.remove("modal-open");
    this.element.removeAttribute("style");
    this.element.classList.remove("show");
    document.getElementsByClassName("modal-backdrop")[0].remove();
    this.contentTarget.innerHTML="";
    this.buttonsTarget.innerHTML="";
  }
}
