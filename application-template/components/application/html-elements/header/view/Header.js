/**
 * Copyright (c) 2022 Thiago Cabrera All rights reserved.
 * Contact: thiagofcabrera00@gmail.com
 * Released under the GPLv3
 * https://www.gnu.org/licenses/gpl-3.0
 **/
class Header extends HTMLElement {
    constructor() {
        super();

        this.headerBody = document.createElement("header");
        this.headerBody.classList.add("w3-container", "w3-theme");
        this.headerBody.style.paddingTop = "64px";
        this.headerBody.style.paddingBottom = "64px";
        this.headerBody.style.paddingLeft = "32px";
        this.headerBody.style.paddingRight = "32px";

        this.headerTitle = document.createElement("h1");
        this.headerTitle.classList.add("w3-xxxlarge");
        this.headerTitle.innerText = "Test header";

        this.headerBody.appendChild(this.headerTitle);
    }

    connectedCallback() {
        this.appendChild(this.headerBody);
    }
}

customElements.define('x-header', Header);
export { Header };