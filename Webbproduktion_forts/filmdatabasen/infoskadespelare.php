<h1>Info om skådespelaren</h1>

<?php

// Inkluderar fil som skapar databaskoppling.
 require 'includes/databaskoppling.php';

//Hämtar med get-parameter id från databasen så att rätt person visas ifrån tabellen

$skadespelare_id = $_GET['skadespelare_id'];

        // Hämtar alla poster från tabellen skadespelare med korrekt id output

        $sql = "SELECT * FROM skadespelare WHERE skadespelare_id=$skadespelare_id";

// Kör sql-queryn mot databasen
 $result = $mysqli->query($sql);

//Resultatet fån SQL-queryn visas med while-loop som loopas igenom med en fetch-array 
//myrow-variablen skriver sedan ut de poster som hämtats från databasen med information

// \n skapar en radbrytning i utskriften/källan

$myrow=$result->fetch_array();

echo "\n". $myrow['fornamn'];

echo "\n". $myrow['efternamn'];

echo "\n". $myrow['fodelsear'];
            

?>
