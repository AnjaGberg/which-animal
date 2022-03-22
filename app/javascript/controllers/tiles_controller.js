import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("The 'check_all_checkboxes' controller is now loaded!")
  }
  
  noDisplayTileOnClick = () => {
   const tile = document.querySelector('tile');
   tile.addEventListener('click', (event) => {
     element.style.display = "none"
   });
  };

  noDisplayTileOnClick();
}
