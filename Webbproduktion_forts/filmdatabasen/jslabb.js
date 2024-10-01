//Variabel för att få id från genre listan och för att få in element i en ny lista
var min_div = document.getElementById('favoritlista');
var genre_lista = document.getElementById('genre_lista');
var mina_rader = genre_lista.getElementsByTagName('tr');



//Loop för att köra igenom tabellistan och bygga på vartefter med element
for (let i = 1; i < mina_rader.length; i++) {
// Lägger till en eventListener för aktuell rad
mina_rader[i].addEventListener('click', function() {

			// Hittar innehåll i första <td> för aktuell rad och det listas under varann
			var innehall = mina_rader[i].getElementsByTagName('td')[0].innerHTML+"<br>";

			// Visa detta innehåll i den 'tomma' div:en
			min_div.innerHTML += innehall;

			//Pop-up ruta för att tala om att genre lagts till i lista
			 alert("Genre har lagts till i favoritlista");

			//Ändrar bakgrund i genretabellen när användaren klickar på ett element

			mina_rader[i].style.backgroundColor = '#ff0';

			mina_rader[i].style.color = '#f00';

			mina_rader[i].style.backgroundColor = '#ff0';

	});
			//Funktion i genretabellen för att meddela användaren att den har dubbelklickat
			mina_rader[i].addEventListener('dblclick', function(){min_div.innerHTML = '<h2>Nu dubbelklickade du...</h2>';});
}
