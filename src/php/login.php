<?php
function logar ($email,$senha){
    try{
        require_once('connection.php');
        $conn = connect();
        $sql = "SELECT email, name FROM cadastro WHERE email = '$email' and senha = '$senha'";
        $result = mysqli_query($conn, $sql);
        mysqli_close($conn);
        if (mysqli_num_rows($result) > 0) {  
            while($data = mysqli_fetch_assoc($result)) {
                $responseJSON = array("name" => $data['name'], "email" => $data['email']);
                echo json_encode($responseJSON);
            }
        }else {
            echo "<script> alert('inválido')</script>";
        }
    }catch(Exception $error){
        echo "<script> alert('Email ou senha inválidos')</script>";
    }
} 
?>


