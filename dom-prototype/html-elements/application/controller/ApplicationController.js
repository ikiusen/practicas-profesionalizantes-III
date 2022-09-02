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