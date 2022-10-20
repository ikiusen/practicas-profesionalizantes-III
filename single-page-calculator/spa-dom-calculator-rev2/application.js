/**
 * Copyright (c) 2022 Thiago Cabrera All rights reserved.
 * Contact: thiagofcabrera00@gmail.com
 * Released under the GPLv3
 * https://www.gnu.org/licenses/gpl-3.0
 **/
import { CalculatorClientModel } from "./model/CalculatorClientModel.js";
import { CalculatorView } from "./view/CalculatorView.js";

let calcModel = new CalculatorClientModel();
let calc = new CalculatorView(calcModel);
document.body.appendChild(calc);