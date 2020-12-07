<?php
function load (){
    try{
        require_once('connection.php');
        $conn = connect();
        $sql = "SELECT * FROM posts";
        $result = mysqli_query($conn, $sql);
        mysqli_close($conn);
        if (mysqli_num_rows($result) > 0) {
            $responseJSON = array();
            while($data = mysqli_fetch_assoc($result)) {
                $responseJSON[] = $data;
            }
            echo json_encode($responseJSON);
        }else {
            echo "<script> alert('Não existe publicação')</script>";
        }
    }catch(Exception $error){
        echo "<script> alert('Erro')</script>";
    }
} 
//load();
?>


