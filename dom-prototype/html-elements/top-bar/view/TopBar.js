import { TopBarController } from "../controller/TopBarController.js";

class TopBar extends HTMLElement {
    constructor() {
        super();

        this.controller = new TopBarController(this);

        this.topBarBody = document.createElement("div");
        this.topBarBody.classList.add("w3-container", "w3-top", "w3-theme", "w3-large");

        this.topBarButton = document.createElement("p");
        this.topBarButton.classList.add("w3-button", "w3-teal", "w3-hide-large", "w3-xlarge");

        this.topBarText = document.createElement("span");
        this.topBarText.classList.add("w3-hide");
        this.topBarText.innerText = "Test top title";

        this.topBarBody.appendChild(this.topBarButton);
        this.topBarBody.appendChild(this.topBarText);
    }

    connectedCallback() {
        this.topBarButton.addEventListener("click", () => this.controller.onTopBarButtonClick());
        this.appendChild(this.topBarBody);
    }
}

customElements.define('x-topbar', TopBar);
export { TopBar };