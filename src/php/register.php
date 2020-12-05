<?php 
function newUser ($name, $midleName, $birthday, $password, $email) {
    try {
        require_once('connection.php');
        $conn = connect();
        $sql = "INSERT INTO cadastro (name, midleName, birthday, senha, email) VALUES ('$name','$midleName','$birthday', '$password' , '$email')";
        mysqli_query($conn, $sql);
        mysqli_close($conn);
    } catch(Exception $error) {
        echo "Erro no cadastro!";
    }
}
//newUser('lucas','sales','2001-10-19','113**','lucas@gmail.com' )
?>