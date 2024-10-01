
<?php
//Inkluderar fil för koppling till databas.
 require 'includes/databaskoppling.php';

 // Hämtar alla poster från tabellen genre och sorteras enligt genrenamn

$sql =  "SELECT * FROM genre ORDER BY genrenamn";

// Kör denna SQL-query mot databasen.
 $result = $mysqli->query($sql);
?>

<h1>Genrer</h1>

<table id="minTabell2">
  <thead>
    <tr>
      <th>Förnamn</th>
    </tr>
  </thead>
  <tbody>

<?php

// Visar resultatet av SQL-queryn visas med while-loop som loopas igenom med en fetch-array 
//myrow-variablen skriver sedan ut de poster som hämtats från databasen med information.
 while($myRow = $result->fetch_array()) {
  echo "<tr><td>" . $myRow['genrenamn']  ."</td></tr>\n";
 }
?>

<p>
  Här ska det finnas någon typ av listning av Genrer.
</p>
 </tbody>
</table>