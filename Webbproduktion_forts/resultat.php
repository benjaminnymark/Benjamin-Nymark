<?php

//Hämtar data från formuläret

if($_SERVER["REQUEST_METHOD"] == "POST"){

//Hämtar ordet från inmatningsfältet

$ordSomSkaOversattas = $_POST['ord'];

//Hämtar språket som valts från drop-down menyn

$spraksomvalts = $_POST['sprak'];

//De ord som kan översättas i en array

$arrayMedSvenskaOrd = ["katt", "hund", "kaffe", "dator", "studera", "mobil", "skola", "lektion", "redovisning", "uppgift"];

//Ord som översatts till engelska

$arrayMedEngelskaOrd = ["cat", "dog", "coffee", "computer", "study", "phone", "school", "lecture", "presentation", "assigment"];

//Ord som översatts till franska

$arrayMedFranskaOrd = ["chat", "chien", "café", "l'ordinteur", "étude", "téléphone", "lécole", "cours", "présentation", "tache"];

//Ord som översatts till spanska

$arrayMedSpanskaOrd = ["gato", "perro", "café", "computadora", "estudio", "teléfono", "colegio", "lección", "presentación", "tarea"];

//Ord som översatts till italienska

$arrayMedItalienskaOrd = ["gatto", "cane", "caffé", "computer", "studia", "telefono", "scuola", "lezione", "presentazione", "compito"];

//Ord som översatts till portugusiska

$arrayMedPortugisiskaOrd = ["gato", "cao", "café", "computador", "estude", "telefone", "escola", "lição", "apresentação", "terefa"];


//Loopar igenom arrayn och tar sedan indexvärdet och ordet översätts med Post
foreach ($arrayMedSvenskaOrd as $index=>$value){
	if($value == $ordSomSkaOversattas){
	$indexForHittatOrd = $index;

  }
}
//En if-sats för att informera om användaren inte skrivit in ett alternativt ord
if(!is_numeric($indexForHittatOrd)){
	echo "ordet finns inte bland alternativen";
}
//språk-variblerna skriver ut rätt ord från array som hämtats från sparade index-varibeln
else
	if($spraksomvalts == "engelska"){

//Skriver ut det engelska ordet
echo $arrayMedEngelskaOrd[$indexForHittatOrd];


} elseif ($spraksomvalts == "franska"){

//Skriver ut det franska ordet
echo $arrayMedFranskaOrd[$indexForHittatOrd];


} elseif ($spraksomvalts == "spanska"){

//Skriver ut det spanska ordet
echo $arrayMedSpanskaOrd[$indexForHittatOrd];

} elseif ($spraksomvalts == "italienska"){

//Skriver ut det italienska ordet
echo $arrayMedItalienskaOrd[$indexForHittatOrd];


} elseif ($spraksomvalts == "portugisiska"){

//Skriver ut det portugisiska ordet
echo $arrayMedPortugisiskaOrd[$indexForHittatOrd];
}

}

?>