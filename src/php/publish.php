<?php 
function issue ($email, $text) {
    try {
        $Hour = date('Y-m-d H:i:s');
        require_once('connection.php');
        $conn = connect();
        $sql = "INSERT INTO posts (email, timeNow, text) VALUES ('$email', '$Hour', '$text')";
        mysqli_query($conn, $sql);
        mysqli_close($conn);
    } catch(Exception $error) {
        echo "Erro no cadastro!";
    }
}
issue('aly@gmail.com', 'texto aaafdkjfdlkjfdla');
?>