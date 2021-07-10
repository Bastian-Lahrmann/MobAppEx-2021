<?php
error_reporting(E_ALL);

// Zum Aufbau der Verbindung zur Datenbank
define ( 'MYSQL_HOST',      'localhost' );
define ( 'MYSQL_BENUTZER',  'id17076712_fes_admin' );
define ( 'MYSQL_KENNWORT',  'Yv8LwNH_RhH/r<DO' );
define ( 'MYSQL_DATENBANK', 'id17076712_fes_fahrzeug_db' );

$db_link = mysqli_connect (MYSQL_HOST, 
                           MYSQL_BENUTZER, 
                           MYSQL_KENNWORT, 
                           MYSQL_DATENBANK);


mysqli_set_charset($db_link, 'utf8');

if ( $db_link )
{
    echo 'Verbindung erfolgreich: ';
    echo '<br> Legende: ';
    echo '<br> 0 = False ';
    echo '<br> 1 = True ';
    //print_r( $db_link);
}
else
{
    // hier sollte dann später dem Programmierer eine
    // E-Mail mit dem Problem zukommen gelassen werden
    die('keine Verbindung möglich: ' . mysqli_error());
}
?>