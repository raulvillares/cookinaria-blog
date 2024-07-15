import { Application } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
import TabsController from "/javascripts/tabs_controller.js"
import DropdownController from "/javascripts/dropdown_controller.js"

window.Stimulus = Application.start()
Stimulus.register("dropdown", DropdownController)
Stimulus.register("tabs", TabsController)
