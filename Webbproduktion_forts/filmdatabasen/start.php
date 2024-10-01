<?php
// Här kan php-kod skrivas om det behövs...

// Menyn är här gjord som en numeriskt indexerad array.
// För att ändra/lägga till saker i menyn görs ändringar i den här arrayen.

$minMeny = array(1=>'Filmer', 2=>'Serier', 3=>'Skådespelare', 4=>'Genrer', 5=>'Javascript-labb', 6=>'Individuell');

?>
<!DOCTYPE html>
<html lang="sv">
<head>
	<meta charset="UTF-8" />
	<title>Filmdatabasen</title>
	<link rel="stylesheet" href="css/min_stil.css">
</head>

<body>
	<!-- Här börjar det centrerade elementet som innehåller alla sidans delar -->
	<div id="page-container">

		<!-- Här börjar elementet som innehåller header -->
		<header>
			<h1><a href="index.php">Min Filmdatabas</a></h1>
		</header>
		<!-- Slut på header -->

		<!-- Här börjar elementet som innehåller menyn -->
		<nav>
			<ul>
				<?php
				// Här skrivs menyn ut genom att loopa en array.
				// Notera hur arrayens index-värden används i länkningen och i valet av css-klass.

				foreach ($minMeny as $index => $value) {
					if($index==$_GET['sida']){
						$linkClass = ' class="active-menu"';
					}
					else{
						$linkClass='';
					}
					echo '<li ' . $linkClass . '><a href="index.php?sida=' . $index . '">' . $value . '</a></li>' . "\n";
				}

				?>



				<!-- <li><a href="?sida=1">Filmer</a></li>
				<li><a href="?sida=2">Serier</a></li>
				<li><a href="?sida=3">Skådespelare</a></li>
				<li><a href="?sida=4">Genrer</a></li> -->

				<!--
				Exempel på hur ytterligare menyrubriker kan se ut.
				<li><a href="?sida=5">Style Guide</a></li>
				<li><a href="?sida=6">Admin</a></li>
				-->

				<!--
				Om ni vill utöka menyn kan ni fylla på här, tänk dock på att ni då kanske också behöver
				skapa nya php-sidor och lägga till elseif-satser i index.php.
				-->
			</ul>
		</nav>
		<!-- Slut på menyn -->

		<!-- Här börjar elementet som innehåller sidans innehåll -->
		<div id="page-content">
		<!-- Här slutar start.php -->
