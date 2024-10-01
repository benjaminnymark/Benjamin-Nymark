<?php
// Inkludera start.php som innehåller start-html och body
// header, navigation och start av sidinnehåll.
require 'start.php';


// Kolla vad (om något) som finns i querystringen
// som heter 'sida'. Inkludera sida som korresponerar mot
// värdet. Här kan ni lägga till ytterligare elseif-sater om de behövs.
// Default-sida är pagecontent_start.php
if($_GET['sida']==1){
	require 'pagecontent_1.php';
}
elseif($_GET['sida']==2){
	require 'pagecontent_2.php';
}
elseif($_GET['sida']==3){
	require 'pagecontent_3.php';
}
elseif($_GET['sida']==4){
	require 'pagecontent_4.php';
}
elseif($_GET['sida']==5){
	require 'pagecontent_5.php';
}

//Länkning med get-parameter för att hämta artist id från db.

elseif($_GET['skadespelare_id']){
	require 'infoskadespelare.php';
}
elseif($_GET['sida']==6){
	require 'indv.php';
}
elseif($_GET['']){
	require 'update_artist.php';
}
else{
	require 'pagecontent_start.php';
}


// Inkludera end.php. Innehåller sluttagg för sidinnehåll,
// footer och Avslutningstaggar för body och html
require 'end.php';

?>
