<?php 
function publicar ($email, $text) {
    try {
        $Hour = date('Y-m-d H:i:s');
        require_once('conexao.php');
        $conn = conectar();
        $sql = "INSERT INTO posts (email, timeNow, text) VALUES ('$email', '$Hour', '$text')";
        mysqli_query($conn, $sql);
        mysqli_close($conn);
    } catch(Exception $error) {
        echo "Erro no cadastro!";
    }
}
//publicar('lucaSU@gmail.com', '19-12-02 15:58:58', 'texto aaaa');
?>