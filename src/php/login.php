<?php
function logar ($email,$senha){
    try{
        require_once('conexao.php');
        $conn = conectar();
        $sql = "SELECT * FROM cadastro WHERE email = '$email' and senha = '$senha'";
        $result = mysqli_query($conn, $sql);
        mysqli_close($conn);
        if (mysqli_num_rows($result) > 0) {  
            while($data = mysqli_fetch_assoc($result)) {
                echo "name:".$data['name']." - email:".$data['email']."<br>";
            }
        }else {
            echo "<script> alert('inválido')</script>";
        }
    }catch(Exception $error){
        echo "<script> alert('Email ou senha inválidos')</script>";
    }
} 
logar('aly@gmail.com','123**');

?>


