/**
 * Copyright (c) 2022 Thiago Cabrera All rights reserved.
 * Contact: thiagofcabrera00@gmail.com
 * Released under the GPLv3
 * https://www.gnu.org/licenses/gpl-3.0
 **/
class NavigationBarController {
    constructor(view) {
        this.view = view;
    }

    onCloseItemClick() {
        this.view.navigationBarBody.style.display = "none";
    }

    openNavigationBar() {
        this.view.navigationBarBody.style.display = "block";
    }
}

export { NavigationBarController };