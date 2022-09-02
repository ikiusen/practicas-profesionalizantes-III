class NavigationBarController {
    constructor(view) {
        this.view = view;
    }

    onCloseItemClick() {
        this.view.style.display = "none";
    }
}

export { NavigationBarController };