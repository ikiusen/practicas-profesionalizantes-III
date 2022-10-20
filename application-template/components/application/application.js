/**
 * Copyright (c) 2022 Thiago Cabrera All rights reserved.
 * Contact: thiagofcabrera00@gmail.com
 * Released under the GPLv3
 * https://www.gnu.org/licenses/gpl-3.0
 **/
import { Application } from "./html-elements/application/view/Application.js";

let app = new Application();
window.app = app;
document.body.appendChild(app);