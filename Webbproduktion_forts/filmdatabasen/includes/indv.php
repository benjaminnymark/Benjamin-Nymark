<!--Denna div är kopplad till css filen för layout-->
<div class="grid-container">
</div>
<?php

// Här inkluderas kod som kopplar mot databasen
require 'includes/databaskoppling.php';

// hämtar alla poster från tabellen 'genre'

$sql =  "SELECT * FROM artister";

// Kör sql-queryn mot databasen
$result = $mysqli->query($sql);

?>
<!--table id för att generera id från genrelistan i js -->

<!--Länk till en create-sida -->
<a href="create_artist.php"><button type="button">Lägg till ny artist</a></button>
 <table id="artist_lista">
  <thead>
    <tr>
      <th>Förnamn</th>
      <th>Efternamn</th>
      <th>Födelseår</th>
    </tr>
  </thead>
  <tbody>

    <?php

// Visar resultatet av SQL-queryn med while-loop som loopas igenom med en fetch-array 
//myrow-variablen skriver sedan ut de poster som hämtats från databasen med information.
    while($myRow = $result->fetch_array()) {
  echo "<tr><td>" . $myRow['fornamn'] . "</td><td>" . $myRow['efternamn'] . "</td><td>" . $myRow['fodelsear'] ."</td></tr>\n\n";
    echo "</tr>\n\n";



    echo '<td><a href="update_artist.php?artist_id=' . $myRow['artist_id'] . '">Ändra</a></td>' . "\n";
    echo '<td><a href="delete_artist.php?artist_id=' . $myRow['artist_id'] . '">Radera</a></td>' . "\n";
    echo "</tr>\n\n";

}
    ?>
  </tbody>
</table>
<h2>Favoritlista</h2>
<!-- Div dit element ska hamna vid klickande av genre-->
<div id="favoritlista"></div>
<!--Länk till js kod-->
<script src="indv.js"></script>
