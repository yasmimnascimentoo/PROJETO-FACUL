<?php
function conectar () {
    $conn = mysqli_connect("localhost","root","","projeto_da_faculdade");

    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        exit();
    }
    return $conn; 
}
?>