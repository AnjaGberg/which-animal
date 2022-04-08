import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["modal"]

  modalTargetConnected(){
    // this closes the modal directly if result is correct
    // console.log(this.modalTarget)
    // let modalController = this.application.getControllerForElementAndIdentifier(
    //   document.querySelector('.modal'),
    //   "modal"
    // );
    // console.log(modalController);
    // modalController.close();
  }

//   connect () {
//   //   console.log(this.modalTarget)
//   //   let modalController = this.application.getControllerForElementAndIdentifier(
//   //     this.modalTarget,
//   //     "modal"
//   //   );
//   //   modalController.close();
//  }
}
