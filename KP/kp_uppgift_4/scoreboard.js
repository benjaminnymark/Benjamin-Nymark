// Kod för klassen "Scoreboard".

class Scoreboard{
  // Konstruktor, inga variabler innan konstruktorn!

  // Konstruktor med 3 parametrar; spelarnamn, x- och y-värde
  constructor(_playerName, _x, _y){
    this.playerName = _playerName;

    // Här sätts spelares 'liv' till 5
    this.life = 5;

    // Här sätts spelares 'score' till 100
    this.score = 100;

    // X- och y-värden för placering av scoreboarden.
    this.x = _x;
    this.y = _y;

    // Scoreboarden ska inte påverkas av kollisioner.
    this.isColliding = false;
  }

  // En metod som ökar värdet i objektets score med 1.
  increaseScore(){
    this.score += 1;
  }

// En metod som minskar värdet i objektets score med 1.
  decreaseScore(){
    this.score -= 1;

    // Om objektets score har gått ner till 0, minska 'life' med 1
    // och ge objektets score 100 'nya' poäng.
    if(this.score == 0){
      this.life -=1;
      this.score = 100;
    }
  }

  // En metod som kontrollerar om objektet är dött.
  // Alltså, om objektets 'life' är 0
  isDead(){
    //print(this.life);
    if(this.life == 0){
      this.score=0;
      return true;
    }
    else{
      return false;
    }
  }

  // En metod som ritar ut en scoreboard för ett objekt.
  // Notera att radbrytning i text här görs med "\n", alltså backslash och n (inom citattecken).
  showScoreboard(){
    fill(255, 50);
    stroke(0,50);
    rect(this.x-10, this.y-10, 90, 60);
    textAlign(LEFT);
    fill(0);
    textSize(12);
    text(this.playerName + '\nPoäng: ' + this.score + '\nLiv: ' + this.life, this.x, this.y, this.x+50, this.x+50);
  }


}
