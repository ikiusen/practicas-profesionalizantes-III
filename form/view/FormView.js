import { FormController } from '../controller/FormController.js';

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
