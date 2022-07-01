class FormModel {
    constructor() {
    }

    submit(data) {
        return fetch('./backend/login.php', { method: 'POST', body: JSON.stringify(data) }).then(response => { response.json() });
    }
}

class FormController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    onSubmit(){
        this.model.submit(this.view.getFormData()).then(response => {/*algo*/});
    }

}

class FormView extends HTMLElement {
    constructor(model) {
        super();
        this.model = model;
        this.controller = new FormController(this, this.model);

        this.usernameInput = document.createElement('input');
        this.usernameInput.type = 'text';
        this.usernameInput.placeholder = 'Username';

        this.passwordInput = document.createElement('input');
        this.passwordInput.type = 'password';
        this.passwordInput.placeholder = 'Password';
    }

    connectedCallback() {
        this.appendChild(this.usernameInput);
        this.appendChild(this.passwordInput);
    }

    getFormData() {
        let values = {
            username: this.usernameInput.value,
            password: this.passwordInput.value
        }

        return values;
    }
}

customElements.define('x-form-view', FormView);

export { FormView };
