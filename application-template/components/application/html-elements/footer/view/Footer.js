/**
 * Copyright (c) 2022 Thiago Cabrera All rights reserved.
 * Contact: thiagofcabrera00@gmail.com
 * Released under the GPLv3
 * https://www.gnu.org/licenses/gpl-3.0
 **/
class Footer extends HTMLElement {
    constructor() {
        super();

        this.footerBody = document.createElement("footer");
        this.footerBody.classList.add("w3-container", "w3-theme");
        this.footerBody.style.padding = "32px";

        this.footerText = document.createElement("p");
        this.footerText.innerText = "Test footer text";

        this.footerBody.appendChild(this.footerText);
    }

    connectedCallback() {
        this.appendChild(this.footerBody);
    }
}

customElements.define('x-footer', Footer);
export { Footer };