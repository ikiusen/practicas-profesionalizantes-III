<?php
/**
 * Copyright (c) 2022 Thiago Cabrera All rights reserved.
 * Contact: thiagofcabrera00@gmail.com
 * Released under the GPLv3
 * https://www.gnu.org/licenses/gpl-3.0
 **/
$input = json_decode(file_get_contents('php://input'));

function calculate($expression) {
    return eval('return '.$expression.';');
}

$response = calculate($input);

echo json_encode($response);
?>