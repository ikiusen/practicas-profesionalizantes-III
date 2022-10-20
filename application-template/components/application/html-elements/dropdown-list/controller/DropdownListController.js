/**
 * Copyright (c) 2022 Thiago Cabrera All rights reserved.
 * Contact: thiagofcabrera00@gmail.com
 * Released under the GPLv3
 * https://www.gnu.org/licenses/gpl-3.0
 **/
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