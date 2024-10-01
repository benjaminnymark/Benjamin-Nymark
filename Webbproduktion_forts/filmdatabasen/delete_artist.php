<!DOCTYPE html>
<html lang="sv-se">
<head>
	<meta charset="utf-8">
	<title>Radera artist</title>
</head>
<body>
<?php
	//inkludera databaskoppling
	require('databaskoppling.php');

	// Om användaren klickat på formulärets ja-knapp
	if(isset($_POST['ja'])){

		// Hämta in Artist_id från querystring
		$Artist_id = $_GET['artist_id'];

		// SQL-fråga (DELETE), notera att det inte finns enkla
		// citat-tecken runt $Artist_id i SQL-queryn eftersom det är ett numeriskt värde!
		$sql = "DELETE FROM artister WHERE artist_id=$Artist_id";

		// Kör fråga
		$mysqli->query($sql);

		// Skriv ut meddelande och länk tillbaka till startsidan
		echo "Personen är borttagen<br />";

		// Notera hur enkla och dubbla citat-tecken används här.
		echo '<a href="index.php?sida=6">Tillbaka till listningssidan</a>';
	}

	// Annars, om användaren klickat på förmulärets nej-knapp
	elseif(isset($_POST['nej'])){
		echo "Åtgärden har avbrutits<br />";

		// Notera hur citat-tecken och \" (backslash + dubbelt citat-tecken) används på ett
		// annat sätt här, effekten är dock samma som för rad 30.
		echo "<a href=\"index.php?sida=6\">Tillbaka till listningssidan</a>";
	}

	// Annars, om användare INTE klickat på varken ja- eller nej-knappen:
	// Detta händer alltså när användaren kommer hit från read.php
	else{

		// Hämta in PersonId från querystring
		$Artist_id = $_GET['artist_id'];

		// Definiera SQL
		$sql = "SELECT fornamn, efternamn FROM artister WHERE artist_id=$Artist_id";

		// Kör frågan och spara i en vektor

		$result =$mysqli->query($sql);
		$myRow = $result->fetch_array();

		// Skriv ut ett meddelande som bekräftar om användaren vill ta bort personen
		echo "<h3>Ta bort artisten</h3>";
		echo "Är du säker på att du vill ta bort denna artist?<br />";

		// Skriv ut förnamnet och efternamnet på personen som kommer att tas bort
		// Detta med hjälp av variabeln $myRow (vektorn som resultatet av SQL-frågan sparats i)
		echo "<strong>" . $myRow['fornamn'] . "</strong> ";
		echo "<strong>" . $myRow['efternamn'] . "</strong>";

		// Avslutar PHP och skriver ut formuläret i HTML istället.
		?>

		<!-- Ett formulär med en ja- och nej knapp -->
		<!--  Artist_id skickas med i querystring, detta görs i formulärets action-attribut -->
		<form action="delete_artist.php?artist_id=<?php echo $Artist_id?>" method="post">
			<input type="submit" name="nej" value="Nej" />
			<input type="submit" name="ja" value="Ja" />
		</form>

	<?php
	// Avslut på else
	}
	?>
	</body>
</html>
