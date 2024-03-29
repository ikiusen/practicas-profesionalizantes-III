/**
 * Copyright (c) 2022 Thiago Cabrera All rights reserved.
 * Contact: thiagofcabrera00@gmail.com
 * Released under the GPLv3
 * https://www.gnu.org/licenses/gpl-3.0
 **/
import { ModalDialog } from './view/ModalDialog.js';
import { FormModel } from '../form/model/FormModel.js';
import { FormView } from '../form/view/FormView.js';

function main() {
    document.body.classList.add("w3-container");

    let myFormModel = new FormModel();
	let myFormView = new FormView(myFormModel);

	let myModalDialog = new ModalDialog();
	myModalDialog.confirmAction = (e) => myFormView.controller.onSubmit(e);

	let buttonOpenModal = document.createElement('button');
	buttonOpenModal.innerText = 'openDialog';
    buttonOpenModal.addEventListener('click', () => myModalDialog.show());


	myModalDialog.innerContent.appendChild(myFormView);
	document.body.appendChild(myModalDialog);
	document.body.appendChild(buttonOpenModal);
}

window.addEventListener('load', main);