class FormModel {
    constructor() {
    }

    submit(data) {
        return fetch('../form/backend/login.php', { method: 'POST', body: JSON.stringify(data) }).then(response => response.json());
    }
}

export { FormModel };
