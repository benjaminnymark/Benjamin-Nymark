//Börja med att deklarera variabler för att till exampel hålla reda på position
let xpos = 100;

// Variabler för färg, färgförändringsvärde, typsnitt och en variabel för info-text
let greenValue, c, tradeFontBold, tradeFontLight, infoText='';

// En boolesk variabel som innehåller true eller false.
// Används för att hålla koll på om användar klickat.
let followMouse = false;

// En variabel som innehåller värde för den högra ellipsens x-värde.
xOfSmallEllipse = 340;

// Funktion som laddas i "förväg", innan sketchen körs.
// Här kan t.ex. bilder, videos, ljud eller typsnitt laddas in i förväg.
function preload(){
  // Ladda in två typsnitt till loggan
  tradeFontBold = loadFont('assets/Trade_Gothic_LT_Bold_No_2.ttf');
  tradeFontLight = loadFont('assets/Trade_Gothic_LT_Light.ttf');
}

// Funktion som gör några grundinställningar, innan den loopande funktionen draw() startar
function setup() {
  // variabeln canvas tilldelas 'canvas-värde', bredd och höjd
  canvas = createCanvas(500, 500);

  // Här kopplas själva canvas-objektet till en "förälder" som är
  // ett html-element med id "sketch-holder", detta element är definierat i html i index-filen
  canvas.parent('sketch-holder');

  // Stäng av stroke-funktionen
  noStroke();

  // Tilldela variabeln c ett färgvärde (i rgb) som är sh:s gula nyans.
  // Notera hur funktionen color() används när variabeln innehåller ett färgvärde.
   c = color(255,213,48);
 }

// draw-funktionen loopas automatiskt när sidan laddats
function draw() {
  background(255);
  /*
  här sätts bakgrunden till vit och ritar
  över allt som ritats tidigare. Prova att ta
  bort den här raden och se vad som händer
  (när ni har lite saker som rör på sig på skärmen)
  */

  // Lite info-text
  textSize(13);
  text("Klicka och rör på musen. Se om du kan hitta den 'sh-gula' nyansen.", 60, 100);

  //Här ritas logotypen upp

  // Fyll med SH-gul färg
  fill(c);
  /*
  Rita den större gula ellipsen
  Här kan ni också prova att istället göra en transparent ellips som
  har en bred gul yttre kant (se stroke() och strokeWeight())
  */
  ellipse(200,250,170,170);

  // Fyll med vit färg
  fill(255);
  // rita en mindre vit ellips
  ellipse(200,250,120,120);

  // Fyll med SH-gul färg
  fill(c);
  // Rita den minsta gula ellipsen
  ellipse(200,250,70,70);

  /*
  Räkna om värdet för musens x-position till ett värde mellan 0 och 255,
  tilldela detta värde till variabeln greenValue.
  Titta i referensen hur map() fungerar [https://p5js.org/reference/#/p5/map]
  */
  greenValue = map(mouseX, 0, width, 0, 255);

  /*
  Kollar om followMouse innehåller 'true'.
  Titta längre ner i koden på funktionen mousePressed() för att se hur
  variabeln byter värde mellan 'true' och 'false'.
  */
  if(followMouse){
    // Sätt ellipsens x-värde till samma som musens x-värde
    xOfSmallEllipse = mouseX;
  }
  // ...annars, sätt x-värdet till 340.
  else{
    xOfSmallEllipse = 340;
  }


  // Fyll med färg, värde för grönt bestämt av musens x-position (0-255)
  fill(255,greenValue,48);
  /*
  Rita den högra, minsta ellipsen, denna kommer att ändra färg, relativt till musens x-position.
  Den kommer också att följa musens x-position OM variabeln followMouse innehåller 'true' (klicka med musen och prova).
  */
  ellipse(xOfSmallEllipse,250,70,70);


  /*
  Här börjar avsnittet som skapar texten under logotypen
  */

  // Sätt fyllningsfärg till svart
  fill(0);

  // Sätt textstorlek och välj typsnitt
  textSize(18.5);
  textFont(tradeFontBold);

  // Skriv ut text
  text('SÖDERTÖRNS HÖGSKOLA', 110, 365);

  // Sätt stroke-färg till svart och strokestorlek till width
  stroke(0);
  strokeWeight(1);


  // Rita upp det lodräta strecket
  // Här kunde ett "|" ha skrivits ut men det får inte rätt dimensioner
  line(340, 350, 340, 368);

  // Stäng av stroke
  noStroke();

  // Byt typsnitt
  textFont(tradeFontLight);

  // Skriv ut text
  text('STOCKHOLM', 351, 365);
  text('sh.se', 110, 385);

  /*
  Slut på logotyptext
  */

  // Byt textstorlek
  textSize(13);

  // Om det avrundade värdet i greenValue är 213, fyll variabeln infoText med lite text.
  if(floor(greenValue) == 213){
    infoText = " Nu är högra ellipsen sh-gul!";
  }
  // Annars, töm variabeln infoText. (sätt den till en tom textsträng)
  else{
    infoText = '';
  }

  // Skriv ut text och värde i variabeln greenValue (avrundat nedåt), och sist innehållet i variabeln infoText.
  // Notera hur text, värden och variabler byggs ihop med hjälp av + (plus-tecken).
  text('Värdet i variabeln greenValue är ' + floor(greenValue) + infoText, 110, 420);
}

/*
Funktion som körs när användare klickar.
Variabeln followMouse sätts till "det jag inte är" (och jag kan bara vara true eller false, fungerar alltså för booleska variabler).
Alltså; om followMouse innehåller 'true' sätts followMouse till 'false', och vice versa. Det betyder att värdet byts vid varje musklick.
*/
function mousePressed(){
  followMouse = !followMouse;
}
