/**
 * Copyright (c) 2022 Thiago Cabrera All rights reserved.
 * Contact: thiagofcabrera00@gmail.com
 * Released under the GPLv3
 * https://www.gnu.org/licenses/gpl-3.0
 **/
class CalculatorServerModel {
    constructor() { }

    calculate(expression) {
        return fetch('./backend/calculate.php', { method: 'POST', body: JSON.stringify(expression) }).then(response => response.json());
    }
}

export { CalculatorServerModel };