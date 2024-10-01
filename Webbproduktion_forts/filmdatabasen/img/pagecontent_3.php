<!-- Här börjar pagecontent_3.php -->
<?php

// Här inkluderas kod som kopplar mot databasen
 require 'includes/databaskoppling.php';

// Här ska ni skapa en SQL-query som ska hämta alla poster från tabellen 'skadespelare' och sorterar dessa fallande på efternamn.
$sql =  "SELECT * FROM skadespelare ORDER BY efternamn";

// Kör queryn
 $result = $mysqli->query($sql);

?>

    <h1>Skådespelare</h1>
    <p>
      Här ska det finnas någon typ av listning av skådespelare. Det kan vara en HTML-tabell eller någon annan form.<br>
      Varje skådespelarnamn ska länka till en sida som visar info om den skådespelaren. Den sidan ska ni alltså skapa själva, tänk på att ni
      då också behöver göra ändringar i index.php.

    </p>
<table id="minTabell2">
  <thead>
    <tr>
      <th>Förnamn</th>
      <th>Efternamn</th>
      <th>Födelseår</th>
    </tr>
  </thead>
  <tbody>


    <?php

    while($myRow = $result->fetch_array()) {
  echo '<tr><td><a href="index.php?skadespelare_id=' . '">' . $myRow['fornamn'] . '</a></td>' . "</td><td>" . $myRow['efternamn'] . "</td><td>" . $myRow['fodelsear'] . "</td></tr>\n";
 }
?>
    // Tänk på att när ni skapar en länk för varje skådespelare så behöver id för skådespelare (skadespelare_id) finnas
    // med i querystringen för att kunna skickas med till sidan som visar en enskild skådespelare.
    // Exempel på hur det kan se ut finns t.ex. i CRUD-övningen (read.php).

<!-- Här slutar pagecontent_3.php -->
 </tbody>
</table>