/**
 * Copyright (c) 2022 Thiago Cabrera All rights reserved.
 * Contact: thiagofcabrera00@gmail.com
 * Released under the GPLv3
 * https://www.gnu.org/licenses/gpl-3.0
 **/
function setElementOnTable(table, row, column, element){
    table.childNodes[0].childNodes[row].childNodes[column].appendChild(element);
}
function setFullLengthElementOnTable(table, element){
    let row = table.insertRow().insertCell();
    row.appendChild(element);
    row.colSpan = 4;
}

export {setElementOnTable, setFullLengthElementOnTable};