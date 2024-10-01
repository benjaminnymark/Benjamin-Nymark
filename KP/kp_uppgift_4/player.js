// Kod för klassen "Player".
class Player{

  // konstrutorn tar emot 7 parametrar. Av parameternamnen framgår användningsområde.
  constructor(_playerName, _x, _y, _leftMove, _upMove, _downMove, _rightMove, _scoreboardX, _scoreboardY){
    this.playerName = _playerName;
    this.x = _x;
    this.y = _y;
    this.leftMove = _leftMove;
    this.upMove = _upMove;
    this.downMove = _downMove;
    this.rightMove = _rightMove;

    // Här används createSprite() från p5.play-biblioteket.
    this.playSprite = createSprite(this.x, this.y);

    // Här används klassen 'Scoreboard' som definieras i filen 'scoreboard.js'. Varje instans av klassen 'Player' har en egen instans av klassen 'Scoreboard'. 
    this.scoreboard = new Scoreboard(this.playerName, _scoreboardX, _scoreboardY);
  }

  // Metod för rörelse av spelarens skepp.
  move(){
    //Om knappen är nedtryckt sätt kurs uppåt.
    if(keyDown(this.upMove))
    {
      //När spelaren trycker på pilknapp upp sätter skeppet kurs uppåt på y-axeln. Den fortsätter åt det hållet tills spelaren avbryter rörelsen genom att ändra riktning eller når bordern.
      this.playSprite.velocity.y = -MOVE;
    }

    //Om knappen är nedtryckt sätt kurs nedåt.
    if(keyDown(this.downMove))
    {
      //När spelaren trycker på pilknapp ner sätter skeppet kurs neråt på y-axeln. Den fortsätter åt det hållet tills spelaren avbryter rörelsen genom att ändra riktning eller når bordern.
      this.playSprite.velocity.y = MOVE;
    }
    //Om knappen är nedtryckt sätt kurs mot vänster.
    if(keyDown(this.leftMove))
    {
      //När spelaren trycker på pilknapp ner sätter skeppet kurs till vänster på x-axeln. Den fortsätter åt det hållet tills spelaren avbryter rörelsen genom att ändra riktning eller når bordern.
      this.playSprite.velocity.x = -MOVE;
    }
    //Om knappen är nedtryckt sätt kurs mot höger.
    if(keyDown(this.rightMove))
    {
      //När spelaren trycker på pilknapp ner sätter skeppet kurs till höger på x-axeln. Den fortsätter åt det hållet tills spelaren avbryter rörelsen genom att ändra riktning eller når bordern.
      this.playSprite.velocity.x = MOVE;
    }
  }

  // Om spelaren krockar med ett objekt i gruppen 'stenar'.
  checkPlatformCollide(){
    for(let i = 0 ; i < stenar.length ; i++){
      if(this.playSprite.collide(stenar[i])){
        // Stanna spelarens rörelse.
        this.playSprite.velocity.y = 0;
        this.playSprite.velocity.x = 0;
        // Byt animation
        this.playSprite.changeAnimation('boom');
        // Kallar på metod isDead
        this.scoreboard.isDead();
        // Kallar på funktionen gameover
        gameover();
      }
    }
  }

  checkWallCollide(){
    //Om spelare kolliderar med någon av väggarna
    if(this.playSprite.collide(wallLeft) || this.playSprite.collide(wallRight) || this.playSprite.collide(wallTop) || this.playSprite.collide(wallBottom)){
      // Stanna spelares rörelse
      this.playSprite.velocity.y = 0;
      this.playSprite.velocity.x = 0;
    }
  }

  // Här sätts gravitationen, alla spelare 'faller' nedåt konstant.
  // Alltså; y-velocitet plussas på med värdet som finns i GRAVITY.
  setGravity(){
    this.playSprite.velocity.y += GRAVITY;
  }
}