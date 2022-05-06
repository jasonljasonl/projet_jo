<?php
$con = mysqli_connect('localhost', 'root', '', 'projet_jo');
$response = array();
if($con){
    $sql = 'select * from accueil_textes';
    $result = mysqli_query($con,$sql);
    if($result){
        $i=0;
        while($row = mysqli_fetch_assoc($result)){
            $response[$i]['id'] = $row ['id'];
            $response[$i]['titre'] = $row ['titre'];
            $response[$i]['texte'] = $row ['texte'];
            $i++;
        }
        echo json_encode($response,JSON_PRETTY_PRINT);
    }
    else {
        echo'DataBase connection failed';
    }
} 
?>