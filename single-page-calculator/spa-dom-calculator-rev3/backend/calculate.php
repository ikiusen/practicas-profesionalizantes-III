<?php
$input = json_decode(file_get_contents('php://input'));

function calculate($expression) {
    return eval('return '.$expression.';');
}

$response = calculate($input);

echo json_encode($response);
?>