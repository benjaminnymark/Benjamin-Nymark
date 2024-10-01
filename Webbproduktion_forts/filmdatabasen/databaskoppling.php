<?php
// Här ska du lägga in anslutningsinformation för att kunna ansluta dig mot din databas:
// ditt_användarnamn, ditt_databaslösenord och namnet på den databas du har skapat tabellerna i.
// De här uppgifterna finns i filen 'dbconn.php' som ligger i din www-mapp på studentwebbservern.

$mysqli = new mysqli('mariadb.suni.se', '21beny', 'TAMER hull Shred erupt', '21beny');


//Kontrollerar teckentabell
if (!$mysqli->set_charset("utf8")) {
  echo "Fel vid inställning av teckentabell utf8: %s\n". $mysqli->error;
}
// else {
//   // Här kan du skriva ut något om du vill ha en bekräftelse på att det funkar
//   //
//   //echo "Nuvarande teckenkodningstabell: %s\n". $mysqli->character_set_name();
// }

if ($mysqli->connect_errno) {
  // Om något gått fel skrivs felmeddelande ut
  echo "Misslyckades att ansluta till MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

?>
