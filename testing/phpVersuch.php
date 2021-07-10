<?php
require_once ('konfiguration.php');
$db_link = mysqli_connect (
                     MYSQL_HOST, 
                     MYSQL_BENUTZER, 
                     MYSQL_KENNWORT, 
                     MYSQL_DATENBANK
                    );
                    
mysqli_set_charset($db_link, 'utf8');


//.js in PHP Variable speichern

$rfid = $_GET["js_rfid_one"];

//Datenbank Abfrage

$sql = "SELECT * FROM `Fahrzeuge` WHERE `Fahrzeug_RFID` = '".$rfid."'"; 

$db_erg = mysqli_query( $db_link, $sql );
if ( ! $db_erg )
{
  die('Ungültige Abfrage: ' . mysqli_error());
}

while ($zeile = mysqli_fetch_array( $db_erg, MYSQLI_ASSOC))
{

//Datenbank Spalten speichern in VARIABLEN
  $varFiD = $zeile['Fahrzeug_RFID'] ;
  $varFk = $zeile['Kennzeichen'] ;
  $varFf = $zeile['Fahrzeug'] ;
  $varFb = $zeile['B'] ;
  $varFc1 = $zeile['C1'] ;
  $varFc = $zeile['C'] ;
  $varFd1 = $zeile['D1'] ;
  $varFd = $zeile['D'] ;
  $varFbe = $zeile['BE'] ;
  $varFc1e = $zeile['C1E'] ;
  $varFce = $zeile['CE']  ;
  $varFd1e = $zeile['D1E'] ;
  $varFde = $zeile['DE']  ;
  $varFl = $zeile['L'] ;
  $varFt = $zeile['T'] ;
  $varFq1 = $zeile['Q1'] ;
  $varFq2 = $zeile['Q2'] ;
  $varFq3 = $zeile['Q3'] ;
  $varFq4 = $zeile['Q4'] ;
  $varFq5 = $zeile['Q5'] ;
  $varFq6 = $zeile['Q6'] ;
  $varFq7 = $zeile['Q7'] ;
  $varFq8 = $zeile['Q8'] ;
  $varFq9 = $zeile['Q9'] ;
  $varFq10 = $zeile['Q10'] ;
}

mysqli_free_result( $db_erg );

//Datenbank Abfrage

$sql = "SELECT * FROM `Mitarbeiter` WHERE `Mitarbeiter_RFID` = '".$rfid."'";  //WHERE `Mitarbeiter_RFID` = $rfid

$db_erg = mysqli_query( $db_link, $sql );
if ( ! $db_erg )
{
  die('Ungültige Abfrage: ' . mysqli_error());
}

while ($zeile = mysqli_fetch_array( $db_erg, MYSQLI_ASSOC))
{

//Datenbank Spalten speichern in VARIABLEN
  $varMiD = $zeile['Mitarbeiter_RFID'] ;
  $varMk = $zeile['Vorname'] ;
  $varMf = $zeile['Nachname'] ;
  $varMb = $zeile['B'] ;
  $varMc1 = $zeile['C1'] ;
  $varMc = $zeile['C'] ;
  $varMd1 = $zeile['D1'] ;
  $varMd = $zeile['D'] ;
  $varMbe = $zeile['BE'] ;
  $varMc1e = $zeile['C1E'] ;
  $varMce = $zeile['CE']  ;
  $varMd1e = $zeile['D1E'] ;
  $varMde = $zeile['DE']  ;
  $varMl = $zeile['L'] ;
  $varMt = $zeile['T'] ;
  $varMq1 = $zeile['Q1'] ;
  $varMq2 = $zeile['Q2'] ;
  $varMq3 = $zeile['Q3'] ;
  $varMq4 = $zeile['Q4'] ;
  $varMq5 = $zeile['Q5'] ;
  $varMq6 = $zeile['Q6'] ;
  $varMq7 = $zeile['Q7'] ;
  $varMq8 = $zeile['Q8'] ;
  $varMq9 = $zeile['Q9'] ;
  $varMq10 = $zeile['Q10'] ;
}

mysqli_free_result( $db_erg );

//Test Ausgabe der VARIABLEN

echo ": $rfid";

echo '<table border="1">';
{
echo '<tr><th>RFID</th><th>Kennzeichen</th><th>Fahrzeug</th>

            <th>B</th><th>C1</th><th>C</th><th>D1</th>
            <th>D</th><th>BE</th><th>C1E</th><th>CE</th>
            <th>D1E</th><th>DE</th><th>L</th><th>T</th>

            <th>Q 1</th><th>Q 2</th><th>Q 3</th><th>Q 4</th>
            <th>Q 5</th><th>Q 6</th><th>Q 7</th><th>Q 8</th>
            <th>Q 9</th><th>Q 10</th>
        </th>';
        // habe ein paar Fahrzeug-variablen zu Mitarbeiter-V geändert
        echo "<tr>";
        echo "<td>". $varMiD . "</td>";
        echo "<td>". $varMk . "</td>";
        echo "<td>". $varFf . "</td>";
        echo "<td>". $varFb . "</td>";
        echo "<td>". $varFc1 . "</td>";
        echo "<td>". $varFc . "</td>";
        echo "<td>". $varFd1 . "</td>";
        echo "<td>". $varFd . "</td>";
        echo "<td>". $varFbe . "</td>";
        echo "<td>". $varFc1e . "</td>";
        echo "<td>". $varFce . "</td>";
        echo "<td>". $varFd1e . "</td>";
        echo "<td>". $varFde . "</td>";
        echo "<td>". $varFl . "</td>";
        echo "<td>". $varFt . "</td>";
        echo "<td>". $varFq1 . "</td>";
        echo "<td>". $varFq2 . "</td>";
        echo "<td>". $varFq3 . "</td>";
        echo "<td>". $varFq4 . "</td>";
        echo "<td>". $varFq5 . "</td>";
        echo "<td>". $varFq6 . "</td>";
        echo "<td>". $varFq7 . "</td>";
        echo "<td>". $varFq8 . "</td>";
        echo "<td>". $varFq9 . "</td>";
        echo "<td>". $varMq10 . "</td>";        
        echo "</tr>";
      }
      echo "</table>";

?>