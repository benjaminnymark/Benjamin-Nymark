<?php

// Här inkluderas kod som kopplar mot databasen
 require 'includes/databaskoppling.php';

// hämtar *alla fält och alla rader* från tabellen serie.
$sql =  "SELECT * FROM serie";

// Detta är koden som kör sql-queryn mot databasen
 $result = $mysqli->query($sql);
?>
<!-- Exempel på format för en tabell på sidan -->
<h1>Serier</h1>

<!--
Titta i pagecontent_1.php för att se hur ni här kan
skriva ut en HTML-tabell med innehållet från databastabellen serie.
-->
<table id="minTabell2">
  <thead>
    <tr>
      <th>Serietitel</th>
      <th>Antal avsnitt</th>
    </tr>
  </thead>
  <tbody>

<?php

//while-loop som hämtar tabell information från databasen med en array och resultat visas i tabellen
while($myRow = $result->fetch_array()) {
  echo "<tr><td>" . $myRow['serie_titel'] . "</td><td>" . $myRow['antal_avsnitt'] . "</td></tr>\n";
 }
?>
<p>
  Här ska det finnas någon typ av listning av Serier. Det kan vara en HTML-tabell eller någon annan form.
</p>
 </tbody>
</table>
