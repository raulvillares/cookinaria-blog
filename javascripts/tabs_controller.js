import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

export default class extends Controller {
  static targets = ["tab", "pane"]

  connect() {
    this.showCurrentTab()
  }

  changeTab(event) {
    event.preventDefault()
    this.tabTargets.forEach((tab, index) => {
      const pane = this.paneTargets[index];
      const clickedTab = event.currentTarget.parentNode
      const isActive = tab === clickedTab

      tab.classList.toggle("active", isActive)
      pane.classList.toggle("active", isActive)
      pane.style.display = isActive ? "block" : "none"
    });
  }

  showCurrentTab() {
    const activeTabIndex = this.tabTargets.findIndex((tab) =>
      tab.classList.contains("active")
    )
    const activeTab = this.tabTargets[activeTabIndex]
    const activePane = this.paneTargets[activeTabIndex]

    activeTab.classList.add("active")
    activePane.classList.add("active")
    activePane.style.display = "block"
  }
}
