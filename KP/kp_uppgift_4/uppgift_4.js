// Deklarerar och ger variabler värde.
let myStenar = [];
let playerGroup;
let players = [];
let antalStenar = 2;
let stralar = [];
let antalStralar = 1000;

// Deklarerar och tilldelar värde för gravitation, som sätts till 0, och "move-styrka" som ändrar skeppets fart.
let GRAVITY = 0;
let MOVE = 5;

// Start av setup funktion med canvas och sketch-holdern.
function setup() {
  myCanvas = createCanvas(800, 400);
  myCanvas.parent('sketch-holder');

  // Skapar play.js-sprites som utgör "väggar" för att hålla spelaren inom ytan.
  wallTop = createSprite(width / 2, -10 / 2, width, 10);
  wallTop.immovable = true;

  wallBottom = createSprite(width / 2, height + 10, width, 10);
  wallBottom.immovable = true;

  wallRight = createSprite(width+5, height/2, 10, height);
  wallRight.immovable = true;

  wallLeft = createSprite(-5, height/2, 10, height);
  wallLeft.immovable = true;

  /*
  Skapar en spelare på plats [0] i klassen Player (för att kunna loopa arrayen med spelare lite senare). Med parametrarna: Spelarens namn, utgångsvärde för x och y, Styrtangent för vänster, uppåt, neråt och höger, x och y värde för var scoreborden visas.
*/
  players[0] = new Player('X-Wing', 200, height/2, 'LEFT_ARROW', 'UP_ARROW', 'DOWN_ARROW', 'RIGHT_ARROW', 30, 30);

  // I constructorn i klassen player görs objektet till en p5.play-sprite med createSprite(). Med playSprite anropas egenskaper och metoder för objektet:

  // De olika animationer som finns under playSprite för player[0].
  players[0].playSprite.addAnimation('normal', 'assets/amongus_character.png');
  players[0].playSprite.addAnimation('boom', 'assets/boom.png');

  // Skapar en p5play-grupp för spelare och lägger till spelaren i denna grupp.
  playerGroup = new Group();
  players[0].playSprite.addToGroup(playerGroup);

  // Skapar stenar och en grupp för objekten 'stenar'.
  stenar = new Group();

  // En loop som skapar så många stenar som angivits i variabeln 'antalStenar'.  
  for(let i = 0 ; i < antalStenar ; i++){
    // Ett objekt som utgör 'stenar' som alltid startar utanför canvas och på randomiserade platser på y-axeln. Indexeras i arrayen 'myStenar' med hjälp av [i].
    myStenar[i] = createSprite(800, random(height));

    // Objektet tilldelas en animation.
    myStenar[i].addAnimation('normal', 'assets/asteroid.png');

    // Objektet läggs till i gruppen 'stenar'.
    myStenar[i].addToGroup(stenar);
  }

  // For loop som skapar de individuella strålarna och dess rörelser. De rör sig slumpmässigt över canvas och har olika randomiserade nyanser av vit.
  for(let i = 0 ; i < antalStralar ; i++){
    // Färgen som används. Avslutas med opacitet.
    let tempColor = color(random(240, 255), random(240, 255), random(240, 255), 5);
    // Skapar ny 'Strale' för varje objekt i 'stralar'.
    stralar[i] = new Strale(random(width), random(height), random(0.4, 4), tempColor);
  }
}

// Start av draw funktion
function draw() {
  // Ritar upp en mörkblå bakgrund.
  background(34, 43, 56);

  // Loopar 'players' och anropar de olika metoder som finns i klasserna Player och Scoreboard.
  for(let i = 0 ; i < players.length ; i++){
    players[i].setGravity();
    players[i].checkWallCollide();
    players[i].move();
    players[i].checkPlatformCollide();
    players[i].scoreboard.showScoreboard();
      if(players[i].scoreboard.isDead()){
        players[i].playSprite.changeAnimation('boom');
        gameover();
      }
  }

  // Skapar stenar som rör sig över x-axeln.
  for(let i = 0 ; i < myStenar.length ; i++){
    // Skapar rörelsen. Stenarna rör sig bakåt på x-axeln.
    myStenar[i].position.x -= 7;
    // Om stenarna rör sig utanför vänstersidan på canvas börjar de om utanför högersidan på canvas på nya randomiserade positioner på y-axeln. 
    if (myStenar[i].position.x < 0){
      myStenar[i].position.x = (800);
      myStenar[i].position.y = (random(20, 380));
    }
  }

  // Anropar klassen Strale för att rita upp bakgrunden.
  for(let i = 0 ; i < stralar.length ; i++){
    stralar[i].visa();
    stralar[i].flytta();
  }

  // Alla sprites ritas upp på slutet.
  drawSprites();
}

// Skapar ny klass för 'Strale'.
class Strale{
  // x-position, y-position, snabbhet, färg.
  constructor(_x, _y, _speed, _col){
    this.x = _x;
    this.y = _y;
    this.speed = _speed;
    this.col = _col;
  }
  
  // Ritar upp vad som kommer att visas.
  visa(){
    fill(this.col);
    strokeWeight(1);
    stroke(this.col);
    beginShape();
    vertex(width, 0);
    vertex(this.x, this.y);
    endShape();
  }
  // Skapar objektets rörelser
  flytta(){
    this.x = this.x + this.speed;
    if(this.x > width){
      this.x = 0-50;
    }
  }
}

// Startar om på ENTER
function keyPressed() {
  if(keyCode === ENTER){
      location.reload()
  }

}

// Funktion för text som kommer fram när spelaren har förlorat.
function gameover (){
  fill(254, 216, 0);
  textSize (40);
  textAlign(CENTER);
  text ("GAME OVER", width/2, height/2);
  // Stoppar spelet från att fortsätta
  noLoop();
}