<!--Denna div är kopplad till css filen för layout-->
<div class="grid-container">
</div>
<?php

// Här inkluderas kod som kopplar mot databasen
require 'includes/databaskoppling.php';

// hämtar alla poster från tabellen 'genre'
$sql =  "SELECT * FROM genre";
// Kör sql-queryn mot databasen
$result = $mysqli->query($sql);

?>
<!--table id för att generera id från genrelistan i js -->
<table id="genre_lista">
  <thead><tr>
    <th>Genre</th></thead>
  </tr>
  <tbody>
    <?php

// Visar resultatet av SQL-queryn med while-loop som loopas igenom med en fetch-array 
//myrow-variablen skriver sedan ut de poster som hämtats från databasen med information.
    while($myRow = $result->fetch_array()) {
      echo '<tr><td>' . $myRow['genrenamn']  ."</td></tr>\n";
    }
    ?>
  </tbody>
</table>
<h2>Favoritlista</h2>
<!-- Div dit element ska hamna vid klickande av genre-->
<div id="favoritlista"></div>
<!--Länk till js kod-->
<script src="jslabb.js"></script>
