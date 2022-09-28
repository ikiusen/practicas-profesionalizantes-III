class DropdownListController {
    constructor(view) {
        this.view = view;
    }

    onDropdownButtonClick() {
        if (!this.view.dropdownContainer.classList.contains("w3-show")) {
            this.view.dropdownContainer.classList.add("w3-show");
            this.view.dropdownContainer.previousElementSibling.classList.add("w3-theme");
        } else {
            this.view.dropdownContainer.classList.remove("w3-show");
            this.view.dropdownContainer.previousElementSibling.classList.remove("w3-theme");
        }
    }
}

export { DropdownListController };