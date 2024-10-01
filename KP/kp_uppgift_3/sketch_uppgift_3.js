// Deklarerar en mängd variabler
let songDuration, pausedTime, SoundOn, started, percentPlayed, translateX, bgHue, xForImage, level, rawLevel, smoothFactor, amplitude, translateValue, size, mySound, myFont1, myFont2, myFont3, myFont4, thenote, theConcert, bgRGB;

// Deklarerar och ger variabler värde.
let angle = 0;
let sum =1;

// Preloada ljudfil, bild(er) och typsnitt
function preload(){

  mySound = loadSound('assets/Harry_Styles_Little_Freak.mp3');
  //mySound = loadSound('assets/ca_plane_pour_moi_2.mp3');

  myFont1 = loadFont('assets/Amatic-Bold.ttf');
  myFont2 = loadFont('assets/coiny-regular.ttf');
  myFont3 = loadFont('assets/gorillaz_1.ttf');
  myFont4 = loadFont('assets/UnifrakturMaguntia20.ttf');

  thenote = loadImage('assets/note.svg');
  theConcert = loadImage('assets/concert_pic.jpg');

}

function setup(){
  canvas = createCanvas(600, 300);
  canvas.parent('sketch-holder');


  // För att få bilder att rotera runt sin egen mittpunkt
  imageMode(CENTER);

  // Sätt colorMode till HSB (Hue, Saturation, Brightness) och ange '100' som maxvärde.
  colorMode(HSB, 100);

  // Ange DEGREES som mode för angle/rotation
  angleMode(DEGREES);

  // Om ljudfilen är laddad;
  // ta reda på hur långt ljudet är och sätt volymen till 1 (alltså max, skalan går från 0 till 1).
  if(mySound.isLoaded()){
    songDuration = floor(mySound.duration());
    mySound.setVolume(1);

    // Sätt booleska variabler till false
    started = false;
    soundOn = false;

    // Här känns det logiskt att starta ljudet men eftersom flera webbläsare
    // inte tillåter automatisk uppspelning utan någon användarinteraktion behövs en
    // funktion som startar ljudet när användare klickar, se funktionen mousePressed() längre ned.
  }

  // Sätt utjämningsfaktor till 0.2, används i funktionen getVolume()
  smoothFactor = 0.2;

  // Skapa objekt för amplitud, används i funktionen getVolume() för att ta reda på volym-värde
  amplitude = new p5.Amplitude();

  // Sätt ett värde för att anpassa rotation till ljudets längd.
  translateValue = ((songDuration/25)/360);
}

function draw(){

  // Hämta utjämnat värde för volym.
  level = getVolume();

  // Sätt ett HSB-nyans-värde relativt till volymvärde. Volymvärdet som finns i variabeln 'level' kan ha ett värde mellan 0 (ingen volym) till 1 (full volym).
  bgHue = floor(map(level, 0, 1, 0, 800));

  // Sätt ett RGB-nyans-värde relativt till volymvärde.
  bgRGB = floor(map(level, 0, 1, 0, 800));

  // Rita upp bakgrund med varierat hue-värde (HSB).
  background(bgHue, 60, 70);

  // Använd hue-värdet även i bakgrundsfärg för <body>
  document.body.style.backgroundColor = 'rgb(255,' + bgHue + ',0)';

  // Ett avsnitt som skriver ut olika värden, mest för tydliggöra hur dessa förändras.
  textFont(myFont1);

  // Bestäm textstorlek.
  textSize(20);
  textAlign(LEFT);
  fill(0,0,0);
  text('songDuration: ' + songDuration, 30, 60);
  text('currentTime: ' + mySound.currentTime(), 30, 80);
  text('percentPlayed: ' + percentPlayed, 30, 100);
  text('bghue: ' + bgHue, 30, 120);
  text('angle: ' + angle, 30, 140);
  text('size: ' + size, 30, 160);

// slut koll

// Om ljudet spelas
  if(mySound.isPlaying()){

    // Ta reda på hur stor procent av ljudet som spelats
    // med hjälp av 'aktuell spelad tid' och total tidslängd av ljudet.
    // Mappa om till en skala mellan 0 och 100 (alltså procent).
    percentPlayed=map(mySound.currentTime(), 0, songDuration, 0, 100);

    // Öka värde i angle med värde relativt till ljudets längd
    angle+=translateValue;

    // Sätt storleksvärde relativt till volymvärde.
    // Tänk på att level (alltså volymen) här är något värde mellan 0 och 1
    size = map(level, 0, 1, 0, 700);
  }

  else{
    // Om percentPlayed är NaN (Not a Number), alltså om variabeln är tom
    // eller innehåller något annat än ett numeriskt värde:
    // Visa start-text. Detta blir bara sant innan ljudet startats för första gången.
    if(isNaN(percentPlayed)){
      textAlign(CENTER);
      textSize(30);
      fill(0,0,100);
    }
  }

  // Ändra värde translateX bara om procentvärdet är större än noll
  if(percentPlayed > 0){
    translateX = map(percentPlayed, 0, 100, 0, width);
  }

  push();

  // Translate till relativt x-värde och centrera (minus 30) i höjdled.
  translate(translateX,height/2-30);

  // Rotera till värde i angle.
  rotate(angle);

  // Här kan man tänka sig att t.ex. byta bild - eller något annat - relativt till värdet i variabeln size.
  if(size<50){
     if(size<55){
    image(thenote, 0, 0, size*4.3, size*2.9);
    image(thenote, 10, 80, size*4.3, size*2.9);
    image(thenote, 90, 20, size*4.3, size*2.9);

  }
  }

  pop();

  // Centrera texter som visar info om procent
  textAlign(CENTER);

  // Om spelad procent av ljudets längd är mindre än 10
  if(percentPlayed < 10){
    // Sätt typsnitt
    textFont(myFont2);

    // Sätt textstorlek
    textSize(42);

    // Sätt fyllningsfärg
    fill(0, 0, 70, 70);

  }

  // Om spelad procent av ljudets längd är mer än 10 och mindre än 30...
  if(percentPlayed > 0 && percentPlayed <100){
    textFont(myFont1);
    textSize(52);
    fill(0, 0, 100, 70);
    text(floor(percentPlayed) + "% av musiken spelad", width/2,height/2+130);
  }


/*
Ett avsnitt som använder värden - percentPlayed, size och bgRGB - relaterade till
ljudfilen för att manipulera olika html-element.
*/
  // Bestäm en fontstorlek (som används för förändring av CSS-värde), relativ till 'size'.
  // Det här värdet kan användas för att förändra CSS-angivelse för något html-element.
  fontStorlek = map(size, 0, 500, 0.8, 1.8);

  // Bestäm ett 'skew'-värde (som används för förändring av CSS-värde), relativ till 'size'.
  skewY = map(size, 0, 100, -5, 5);

  // Två html-element påverkas av innehållet i variabeln 'percentPlayed'. Titta i index.htm för att hitta elementen.
  // Experimentera gärna med att låta andra html-element förändras mha av (varierande) värden från sketchen.
  document.getElementById('procent-visare').innerHTML = floor(percentPlayed) + '% av ljudfil spelad...';
  document.getElementById('instruktioner').style.margin = (size/20) + 'em auto 0 ' + percentPlayed + '%';
  //document.getElementById('instruktioner').style.fontSize = fontStorlek + 'em';
  //document.getElementById('instruktioner').style.transform = 'skewY('  + skewY + 'deg)';
  document.getElementById('instruktioner').style.transform = 'rotate(-'  + percentPlayed + 'deg)';
  document.getElementById('instruktioner').style.backgroundColor = 'rgb(10, ' + floor(bgRGB) + ',' + (floor(bgRGB)+100) + ')';


}

// Funktion som används för att starta/pausa ljudet vid musklick.
function mousePressed(){
  // Om ljudet inte är startat (started = false).
  // Här innebär att om started=false, har användaren INTE har startat ljudet genom att klicka FÖRSTA gången.
  // När användaren gjort detta (started=true) ska alla efterkommande musklick istället hantera start/paus-funktionalitet.
  // Detta eftersom vissa webbläsare inte tillåter automatisk (icke användar-initierad) uppspelning av t.ex. ljud.
  if(!started){
    // Spela ljudet
    mySound.play();

    // Sätt started och soundOn till true.
    started=true;
    soundOn=true;
  }

  // Annars - om ljudet är startat (started = true)
  else{
    // Om ljudet är på (soundOn = true)
    if(soundOn){
      // Pausa ljudet och sätt soundOn till false.
      mySound.pause();
      soundOn = false;
    }
    // annars (soundOn = false).
    else{
      // Spela ljudet och sätt soundOn till true.
      mySound.play();
      soundOn=true;
    }
  }
}

// Funktion som returnerar ett utjämnat volymvärde för att åstadkomma 'mjukare' animering av objekt.
function getVolume(){
  rawLevel = amplitude.getLevel();
  sum += (rawLevel-sum) * smoothFactor;
  return sum;
}
