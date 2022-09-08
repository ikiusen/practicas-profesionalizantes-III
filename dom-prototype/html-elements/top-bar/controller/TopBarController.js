class TopBarController {
    constructor(view) {
        this.view = view;
    }

    onTopBarButtonClick() {
        window.app.showNavigationBar();
    }

}
export {TopBarController};