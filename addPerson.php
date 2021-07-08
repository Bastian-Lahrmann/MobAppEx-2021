<php?
$rfid = $_POST['rfid']
$vorname = $_POST['vorname']
$nachname = $_POST['nachname']
$license_b = $_POST['license_b']
$license_be = $_POST['license_be']
$license_t = $_POST['license_t']
$license_l = $_POST['license_l']
$license_c = $_POST['license_c']
$license_c1 = $_POST['license_c1']
$license_c1e = $_POST['license_c1e']
$license_ce = $_POST['license_ce']
$license_d = $_POST['license_d']
$license_d1 = $_POST['license_d1']
$license_de = $_POST['license_de']
$q1 = $_POST['q1']
$q2 = $_POST['q2']
$q3 = $_POST['q3']
$q4 = $_POST['q4']


$require_once ('konfiguration.php');
$db_link = mysqli_connect (
                     MYSQL_HOST, 
                     MYSQL_BENUTZER, 
                     MYSQL_KENNWORT, 
                     MYSQL_DATENBANK
                    );
if($db_link->connect_error){
    die('Connection failed : '.$db_link->connect_error);
}else{
    $stmt = $db_link->prepare("insert into registration(")
}
?>