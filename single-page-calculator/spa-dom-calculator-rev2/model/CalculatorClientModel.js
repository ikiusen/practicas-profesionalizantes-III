/**
 * Copyright (c) 2022 Thiago Cabrera All rights reserved.
 * Contact: thiagofcabrera00@gmail.com
 * Released under the GPLv3
 * https://www.gnu.org/licenses/gpl-3.0
 **/
//perfecto!

class CalculatorClientModel {
    constructor() { }

    calculate(expression) {
        let value = "";
        try {
            value = eval(expression);
        } catch (error) {
            alert("Error: intente nuevamente");
        }
        return value;
    }
}

export { CalculatorClientModel };