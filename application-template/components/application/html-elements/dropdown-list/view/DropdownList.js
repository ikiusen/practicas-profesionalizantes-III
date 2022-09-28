import { DropdownListController } from "../controller/DropdownListController.js";

class DropdownList extends HTMLElement {
    constructor() {
        super();

        this.controller = new DropdownListController(this);

        this.dropdownBody = document.createElement("div");

        this.dropdownButton = document.createElement("a");
        this.dropdownButton.innerText = "Dropdown";
        this.dropdownButton.reference = "#";
        this.dropdownButton.classList.add("w3-bar-item", "w3-button");

        this.dropdownContainer = document.createElement("div");
        this.dropdownContainer.classList.add("w3-hide");

        this.dropdownBody.appendChild(this.dropdownButton);
        this.dropdownBody.appendChild(this.dropdownContainer);
    }

    connectedCallback() {
        this.dropdownButton.addEventListener("click", () => this.controller.onDropdownButtonClick());

        this.appendChild(this.dropdownBody);
    }

    appendItem(name, reference) {
        let item = document.createElement("a");
        item.innerText = name;
        item.href = reference;
        item.classList.add("w3-bar-item", "w3-button");
        this.dropdownContainer.appendChild(item);
    }
}
customElements.define('x-dropdown-list', DropdownList);
export { DropdownList };