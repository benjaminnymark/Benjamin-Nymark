<?php

// Här inkluderas kod som kopplar mot databasen
 require 'includes/databaskoppling.php';

// hämtar alla poster från tabellen 'skadespelare' och sorterar dessa fallande på efternamn.
$sql =  "SELECT * FROM skadespelare ORDER BY efternamn";

// Kör sql-queryn mot databasen
 $result = $mysqli->query($sql);

?>

    <h1>Skådespelare</h1>
    <p>
      
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

//Resultatet fån SQL-queryn visas med while-loop som loopas igenom med en fetch-array och myrow-variablen skriver sedan ut de poster som hämtats från databasen med information till tabellen
// \n skapar en radbrytning i utskriften/källan

    while($myRow = $result->fetch_array()) {
  echo '<tr><td><a href="index.php?skadespelare_id=' . $myRow['skadespelare_id'] . '">' . $myRow['fornamn'] . '</a></td>' . "</td><td>" . $myRow['efternamn'] . "</td><td>" . $myRow['fodelsear'] . "</td></tr>\n";
 }
?>
    // Tänk på att när ni skapar en länk för varje skådespelare så behöver id för skådespelare (skadespelare_id) finnas
    // med i querystringen för att kunna skickas med till sidan som visar en enskild skådespelare.
    // Exempel på hur det kan se ut finns t.ex. i CRUD-övningen (read.php).

<!-- Här slutar pagecontent_3.php -->
 </tbody>
</table>