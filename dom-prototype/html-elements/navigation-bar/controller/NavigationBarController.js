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