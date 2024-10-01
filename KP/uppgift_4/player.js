this// Kod för klassen "Player".
class Player{
  // Konstruktor, inga variabler innan konstruktorn!

  // konstrutorn tar emot 6 parametrar. Av parameternamnen framgår användningsområde.
  constructor(_playerName, _x, _y, _leftMove, _upMove, _rightMove, _scoreboardX, _scoreboardY){
    this.playerName = _playerName;
    this.x = _x;
    this.y = _y;
    this.leftMove = _leftMove;
    this.upMove = _upMove;
    this.rightMove = _rightMove;
    // Här används createSprite() från p5.play-biblioteket. Ett 'Playerobjekt' kan alltså
    // använda metoder som hör till p5.play's 'sprite', titta i referensen för p5.play
    this.playSprite = createSprite(this.x, this.y);
    //this.label = '';

    // Här används klassen 'Scoreboard' som definieras i filen 'scoreboard.js'.
    // Varje instans av klassen 'Player' har en egen instans av klassen 'Scoreboard'.
    // Alltså, varje spelare har en egen scoreboard.
    this.scoreboard = new Scoreboard(this.playerName, _scoreboardX, _scoreboardY);
  }

  move(){
    if(keyWentDown(this.upMove))
    {
      // Några exempel på vad som skulle kunna hända:
       players[0].changeAnimation('stretch');
      // players[0].animation.rewind();spelare[0]
      //players[0].rotation -= 10;

      // Om användare trycker på uppåt-pil-tangent:
      // Förändra spritens velocitet i y-led med (minus)värdet för JUMP. Alltså hoppa!
      this.playSprite.velocity.y = -JUMP;
      this.playSprite.changeAnimation('jump');
    }
    // Om användare trycker på pil vänster, flytta till
    // vänster/minus i x-led (antal pixlar angivet i variabeln MOVE)
    if(keyDown(this.leftMove))
    {
      this.playSprite.velocity.x = -MOVE;

      // Spegla spriten horisontellt
      this.playSprite.mirrorX(1);

    }

    // Om användare trycker på pil höger, flytta till
    // höger/plus i x-led (antal pixlar angivet i variabeln MOVE)
    if(keyDown(this.rightMove))
    {
      this.playSprite.velocity.x = MOVE;
      this.playSprite.mirrorX(-1);
    }
  }

  // Om spelare krockar med plattform:
  // Sätt x/y-velocitet till 0 (alltså stanna).
  // Spegla och byt animation.
  checkPlatformCollide(){
    for(let i = 0 ; i < platforms.length ; i++){
      if(this.playSprite.collide(platforms[i])){
        this.playSprite.velocity.y = 0;
        this.playSprite.velocity.x = 0;
        this.playSprite.mirrorX(1);
        this.playSprite.changeAnimation('normal');
      }
    }
  }


  checkWallCollide(){
    //Om spelare kolliderar med någon av de andra väggarna
    if(this.playSprite.collide(wallLeft) || this.playSprite.collide(wallRight) || this.playSprite.collide(wallTop)){
      // Stanna spelares rörelse
      this.playSprite.velocity.y = 0;
      this.playSprite.velocity.x = 0;
    }
    else if(this.playSprite.collide(wallBottom)){
      // Stanna spelares rörelse
      this.playSprite.velocity.y = 0;
      this.playSprite.velocity.x = 0;
      // Brinn!
      this.playSprite.changeAnimation('burning');
      this.scoreboard.decreaseScore();
    }
  }

  // Här sätts gravitationen, alla spelare 'faller' nedåt konstant.
  // Alltså; y-velocitet plussas på med värdet som finns i GRAVITY.
  setGravity(){
    this.playSprite.velocity.y += GRAVITY;
  }
}
