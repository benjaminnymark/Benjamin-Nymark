<!DOCTYPE html>
<html lang="sv-se">
	<head>
		<meta charset="utf-8">
		<title>Uppdatera artistuppgifter</title>
	</head>
<body>
<?php
	// inkludera databaskoppling
	require('databaskoppling.php');


	// Om användaren klickat på formulärets spara-knapp
	if(isset($_POST['spara'])){

		// Hämta in värden från formulär som skickats med POST
		$Artist_id = $_POST['artist_id'];
		$Fornamn = $_POST['fornamn'];
		$Efternamn = $_POST['efternamn'];
		$Fodelsear = $_POST['fodelsear'];

		// SQL-fråga (UPDATE)
		// Notera att alla fält hämtas in och skrivs eftersom det är okänt *vilka* fält som har ändrats.
		$sql = "UPDATE person SET fornamn='$Fornamn', efternamn='$Efternamn', fodesear='$Fodelsear' WHERE artist_id=$Artist_id";

		// Kör frågan
				$mysqli->query($sql);

		// Skriv ut meddelande och länk tillbaka till startsidan
		echo "Personen är nu ändrad<br />";
		echo "<a href='read.php'>Tillbaka till listningssidan</a>";
	}

	// Om användare INTE klickat på spara-knapp
	else{

		// Hämta in Artist_id från querystring
		$Artist_id = $_GET['artist_id'];

		// Definiera SQL
		$sql = "SELECT * FROM person WHERE artist_id=$Artist_id";

		// Kör frågan och spara i en array
		$result = $mysqli->query($sql);

		$myRow = $result->fetch_array()

		?>

		<!-- Ett formulär med samtliga fält från den aktuella personen -->
		<!-- I varje cell skrivs en kolumn ut, detta med hjälp av variabeln $myRow (arrayen som resultatet av SQL-frågan sparats i) -->
		<!-- Notera de korta php-blocken som finns i varje input-fält som skriver ut data som hämtats från tabellen -->
		<h3>Uppdatera artistuppgifter</h3>
		<form action="update_artist.php" method="post">
			<table>
				<!--
				Notera att fältet för personId är 'readonly' eftersom detta är personens
				primärnyckel i tabellen och ska alltså inte gå att ändra. Här används värdet för att
				hålla reda på vilken person som ska uppdateras. Ett alternativt sätt att få med värdet
				utan att göra det 'ändringsbart' är att skriva det i ett 'gömt' fält (<input type="hidden">).
				Då blir det också osynligt.
				-->
				<tr><td class="yell">Förnamn</td><td><input type="text" name="fornamn" value="<?php echo $myRow['fornamn']; ?>" /></td></tr>
				<tr><td class="yell">Efternamn</td><td><input type="text" name="efternamn" value="<?php echo $myRow['efternamn']; ?>" /></td></tr>
				<tr><td class="yell">Födelseår</td><td><input type="text" name="fodelsear" value="<?php echo $myRow['fodelsear']; ?>" /></td></tr>
				<tr><td></td><td><input type="submit" name="spara" value="Spara" /></td></tr>
			</table>
		</form>
		<?php
		}
		?>



	</body>
</html>
