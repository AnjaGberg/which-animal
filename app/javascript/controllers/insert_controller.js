import { Controller } from "@hotwired/stimulus"
import { csrfToken } from "@rails/ujs"

export default class extends Controller {
  static targets = ["result", "form"]

  connect() {
  }

  send(event) {
    event.preventDefault()

    fetch(this.formTarget.action, {
      method: "POST",
      headers: { "Accept": "application/json", "X-CSRF-Token": csrfToken() },
      body: new FormData(this.formTarget)
    })
    .then(response => response.json())
    .then((data) => {
      this.resultTarget.insertAdjacentHTML("beforeend", data.inserted_item)
      // this.formTarget.outerHTML = data.form
      // console.log(data.form)
      // console.log(this.formTarget.outerHTML)
    })
  }
}
