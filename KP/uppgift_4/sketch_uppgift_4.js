let coins;
let player;
let score = 0;
let Amongus_Image
let bulletImage
let particleImage
function preload(){
    bulletImage = loadImage("assets/asteroids_bullet.png");
    Amongus_Image = loadImage("assets/amongus_character.png");
    particleImage = loadImage("assets/asteroids_particle.png");

}
 
function setup() {
  createCanvas(800, 400);
  coins = new Group();
  for (let i = 0; i < 10; i++) {
    let c = createSprite(
      random(100, width-100),
      random(100, height-100),
      10, 10);
    c.shapeColor = color(255, 255, 0);
    coins.add(c);
  }
  player = createSprite(50, 50, 40, 40);
  player.shapeColor = color(255);
}
function draw() {
  background(50);
  player.velocity.x = 
    (mouseX-player.position.x)*0.1;
  player.velocity.y = 
    (mouseY-player.position.y)*0.1;
  player.overlap(coins, getCoin);
  drawSprites();
  fill(255);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  if (coins.length > 0) {
    text(score, width/2, height/2);
  }
  else {
    text("you win!", width/2, height/2);
  }
}
function getCoin(player, coin) {
  coin.remove();
  score += 1;
}
