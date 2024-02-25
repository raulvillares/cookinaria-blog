import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

export default class extends Controller {
  static targets = ["mainMenu", "menu"]

  toggle(event) {
    event.preventDefault()
    event.stopPropagation() // Stop the click from propagating to the document

    const menu = event.currentTarget.nextElementSibling;
    const isMenuAlreadyOpen = menu.classList.contains('show');

    // First, close all open menus
    this.menuTargets.forEach((menu) => {
      menu.classList.remove('show')
    })

    // Then, if the clicked menu was already open, it gets closed by the above loop.
    // If it was not open, we open it here.
    if (menu && this.menuTargets.includes(menu) && !isMenuAlreadyOpen) {
      menu.classList.add('show')
    }
  }


  // This method closes all dropdowns if the event target is not a part of any
  close(event) {
    if (!this.element.contains(event.target)) {
      this.menuTargets.forEach((menu) => {
        if (menu.classList.contains('show')) {
          menu.classList.remove('show')
        }
      })
    }
  }

  toggleHamburguerMenu() {
    this.mainMenuTarget.classList.toggle('show'); // Toggle visibility of the main menu
  }

}
