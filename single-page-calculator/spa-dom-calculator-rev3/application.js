/**
 * Copyright (c) 2022 Thiago Cabrera All rights reserved.
 * Contact: thiagofcabrera00@gmail.com
 * Released under the GPLv3
 * https://www.gnu.org/licenses/gpl-3.0
 **/
import { CalculatorServerModel } from "./model/CalculatorServerModel.js";
import { CalculatorView } from "./view/CalculatorView.js";

let calcServerModel = new CalculatorServerModel();
let calc = new CalculatorView(calcServerModel);
document.body.appendChild(calc);

