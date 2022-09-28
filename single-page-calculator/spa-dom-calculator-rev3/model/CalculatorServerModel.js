class CalculatorServerModel {
    constructor() { }

    calculate(expression) {
        return fetch('./backend/calculate.php', { method: 'POST', body: JSON.stringify(expression) }).then(response => response.json());
    }
}

export { CalculatorServerModel };