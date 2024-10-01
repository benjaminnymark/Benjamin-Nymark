
let value = 0;
let bg;
let player, gems;

function setup() {
  bg = loadImage('assets/forest.jpg');
	createCanvas(windowWidth, windowHeight); //windowWidth, windowHeight 1200, 800
  r = random(255);
  g = random(255);
  b = random(255);

}


/*function draw() {
	circle(mouseX, mouseY, 20);
} */
function draw() {
    background(bg);
  
    circle(mouseX, mouseY, 20);
    stroke(r, g, b, 127);
   // if (s.isChanged) {
      // Draw our ellipse using the Slider2d output values
 // fill( 95, 158, 160);
  //ellipse(s.valX, s.valY, 100);
//}

 // for each touch, draw an ellipse at its location.
  // touches are stored in array.
  for (var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y, 50, 50);
  }
    
    setCenter(width/2, height/2);
    
    // polarLines( number, radius, distance, [callback] )
   // stroke('#000')
    //strokeWeight(0.3);
    //polarLines(3, 200, 0);
    
    noStroke();
    
    // polarHexagon( angle, radius, [distance] )
    fill(245, 221, 123); (245, 221, 123) //(175, 170, 238)
    polarHexagon(30, 50, 0);
    
    // polarEllipse( angle, widthRadius, heightRadius, [distance] )
    fill(252, 248, 200);
    polarEllipses(12, 8, 8, 60); //12, 10, 10, 80
    fill(value); //238, 175, 170
    polarEllipses(12, 40, 40, 250);
    //rotate(value * 3);
    /*if (x > 300){
      fill(100)
    }*/
    fill(252, 248, 200, 120);
    polarPentagons(5, 80, 130);   
    // polarEllipses(5, 80, 80, 160);
  }

  /// Add these lines below sketch to prevent scrolling on mobile
/*function touchMoved() {
  // do some stuff
  return false;
}*/
function touchMoved() {
  value = value + 3;
  if (value > 255) {
    value = 0;
    r = random(255);
    g = random(255);
    b = random(255);

  }
  return false;
}
// do this prevent default touch interaction
/*function mousePressed() {
  return false;
}*/

/*document.addEventListener('gesturestart', function(e) {
  e.preventDefault();
});*/