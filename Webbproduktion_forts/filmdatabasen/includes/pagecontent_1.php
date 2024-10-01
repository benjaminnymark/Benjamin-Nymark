<!-- Här börjar pagecontent_1.php -->
<?php

// Inkludera fil som skapar databaskoppling.
 require 'includes/databaskoppling.php';

// Här ska ni formulera en SQL-query som hämtar *alla fält och alla rader* från tabellen film.
$sql = ""SELECT * FROM table" 'film";


// Här körs queryn mot databasen
 $result = $mysqli->query($sql);
?>

<!-- Rubrik för sidan -->
<h1>Filmer</h1>

<p>
Här ska ni visa någon typ av listning av de filmer som finns tabellen <i>film</i>.<br>
Läs kommentarer och instruktioner i koden på &quot;pagecontent_1.php&quot;.
</p>

<!-- Exempel på format för en tabell på sidan -->
<p>Det här är en testtabell</p>
<table id="minTabell">
  <thead>
    <tr>
      <th>Filmtitel</th>
      <th>Speltid</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Filmtitel 1</td>
      <td>Speltid 1</td>
    </tr>
    <tr>
      <td>Filmtitel 2</td>
      <td>Speltid 2</td>
    </tr>
    <tr>
      <td>Filmtitel 3</td>
      <td>Speltid 3</td>
    </tr>
  </tbody>
</table>

<p>Det här är en html-tabell som kommer att innehålla alla filmer från databasen.</p>

<!-- Starttaggar för en tabell som kommer att innehålla filmer från databasen -->
<table id="minTabell2">
  <thead>
    <tr>
      <th>Filmtitel</th>
      <th>Speltid</th>
    </tr>
  </thead>
  <tbody>

<?php
// ---------------------------------------------
// En tabellrad med två tabellceller skrivs ut för varje rad som hämtats från databastabellen.
// En cell/kolumn för 'filmtitel' och en för 'speltid'.
// Följande kod kan avkommenteras och köras när ni gjort er query och den körs mot databasen, se ovan.
// Notera att i t.ex. $myRow['filmtitel'] är det viktigt att det är samma namn som för databas-fältet.
// Titta på tabellen 'film' i phpmyadmin och kontrollera att namnen överensstämmer.

// Nedan följer kod som ni kan avkommentera och använda:
// ---------------------------------------------

 while($myRow = $result->fetch_array()) {
  echo "<tr><td>" . $myRow['filmtitel'] . "</td><td>" . $myRow['speltid'] . "</td></tr>\n";
 }
?>

<!-- Avslutningstaggar för tabellen -->
  </tbody>
</table>
<!-- Här slutar pagecontent_1.php -->
