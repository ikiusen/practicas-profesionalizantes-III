import { DropdownList } from '../../dropdown-list/view/DropdownList.js';
import { NavigationBarController } from '../controller/NavigationBarController.js';
class NavigationBar extends HTMLElement {
    constructor() {
        super();

        this.controller = new NavigationBarController(this);

        this.navigationBarBody = document.createElement("nav");
        this.navigationBarBody.classList.add("w3-sidebar", "w3-bar-block", "w3-collapse", "w3-animate-left", "w3-card");
        this.navigationBarBody.style.zIndex = 3;
        this.navigationBarBody.style.width ="250px";
        
        this.img = document.createElement("img");
        this.img.src = "files/example.png";
        this.img.style.width = "80%";

        this.logoContainer = document.createElement("a");
        this.logoContainer.classList.add("w3-bar-item", "w3-button", "w3-border-bottom", "w3-large");
        this.logoContainer.href = "";
        this.logoContainer.appendChild(this.img);

        this.closeItem = document.createElement("a");
        this.closeItem.classList.add("w3-bar-item", "w3-button", "w3-hide-large", "w3-large");
        this.closeItem.href = "#";
        this.closeItem.innerText = "Close";

        this.homeItem = document.createElement("a");
        this.homeItem.classList.add("w3-bar-item", "w3-button", "w3-teal");
        this.homeItem.innerText = "Home";
        this.homeItem.href = "";

        this.navigationBarBody.appendChild(this.logoContainer);
        this.navigationBarBody.appendChild(this.closeItem);
        this.navigationBarBody.appendChild(this.homeItem);
    }

    connectedCallback() {
        this.closeItem.addEventListener("click", () => this.controller.onCloseItemClick());
        this.appendChild(this.navigationBarBody);
    }

    appendItem(name, reference) {
        let item = document.createElement("a");
        item.innerText = name;
        item.href = reference;
        item.classList.add("w3-bar-item", "w3-button");
        this.navigationBarBody.appendChild(item);
    }

    appendItemList() {
        let itemGroup = new DropdownList();
        this.navigationBarBody.appendChild(itemGroup);
        return itemGroup;
    }
}
customElements.define('x-navigation-bar', NavigationBar);
export { NavigationBar };