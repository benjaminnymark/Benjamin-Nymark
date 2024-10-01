<?php if(isset($_GET['skicka_knapp'])){    
	echo "Användaren har tryckt på skicka<br>"; } 
	else{ ?> 
		<form action="form2.php" method="get">    
			<label>Skriv in ditt värde här:</label><br>    
			<input type="text" name="myText"><br><br>    
			<input type="submit" name="skicka_knapp" value="Skicka"> 
		</form> 
		<?php } 
	?> 