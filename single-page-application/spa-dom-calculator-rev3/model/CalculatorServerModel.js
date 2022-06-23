class CalculatorServerModel {
    constructor() { }

    calculate(expression) {
        return fetch('./backend/test.php', { method: 'POST', body: expression }).then(response => response.text());
    }
}

export { CalculatorServerModel };