/**
 * Copyright (c) 2022 Thiago Cabrera All rights reserved.
 * Contact: thiagofcabrera00@gmail.com
 * Released under the GPLv3
 * https://www.gnu.org/licenses/gpl-3.0
 **/
class ApplicationController {
    constructor(view) {
        this.view = view;
    }

    onWindowScroll() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            this.view.topBar.classList.add("w3-card-4", "w3-animate-opacity");
            this.view.topBar.topBarText.classList.add("w3-show-inline-block");
        } else {
            this.view.topBar.topBarText.classList.remove("w3-show-inline-block");
            this.view.topBar.classList.remove("w3-card-4", "w3-animate-opacity");
        }
    }
}
export { ApplicationController };