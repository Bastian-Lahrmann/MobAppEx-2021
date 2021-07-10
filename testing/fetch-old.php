<?php
    require_once ('konfiguration.php');
    $db_link = mysqli_connect (
                     MYSQL_HOST, 
                     MYSQL_BENUTZER, 
                     MYSQL_KENNWORT, 
                     MYSQL_DATENBANK
                    );
                    
    mysqli_set_charset($db_link, 'utf8');

   // $rfid = $_GET["js_rfid_one"];
 
    $json = file_get_contents("php://input");
    $data = json_decode($json, true);
    $rfid = $data["rfid"];
    //echo json_encode($rfid);
    

    $sql = "SELECT * FROM `Fahrzeuge`WHERE `Fahrzeug_RFID` = '".$rfid."'";
    $result = mysqli_query( $db_link, $sql );
    $json_array = array();
    while($row = mysqli_fetch_assoc($result)){
        $json_array[] = $row;
    }
    echo json_encode($json_array);
    
    //$filename = "storage.json";
    //file_put_contents($filename, json_encode($json_array));
    
?>
