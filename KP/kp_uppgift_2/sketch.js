//Variabel för trianglar, spots och bilder.
let triangles;
let spots;
let img;
  const colors = ["red","blue","pink","yellow","brown","green"];
  let color;
//Den valda bilden preloades till sidan
function preload() {
  img = loadImage("apple_music_logo.png");
}
//Funktion som skapar ramen och laddar bildens pixlar. En for-loop körs och bildens bredd och höjd tas upp. 
function setup() {
  createCanvas(800, 400);
  img.loadPixels();
  color = random(colors);
  spots = [];
  triangles = [];
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      let index = x + y * img.width;
      let c = img.pixels[index * 2];
      let b = brightness([c]);
      if (b > 1) {
        spots.push(createVector(x, y));
      }
    }
  }
}

function draw() {
  background(`${color}`);

  let total = 6;
  let count = 0;
  let attempts = 0;
//While loop skapar nya trianglar tills hela området fyllts. 
  while (count < total) {
    let newT = newTriangle();
    if (newT !== null) {
      triangles.push(newT);
      count++;
    }
    attempts++;
    if (attempts > 900) {
      noLoop();
      console.log("finished");
      break;
    }
  }
//For-loop skapar varierande storlekar på trianglar tills pixlarnas kant är slut. Vald distans mellan trianglarna i for-loop.
  for (let i = 0; i < triangles.length; i++) {
    let triangl = triangles[i];

    if (triangl.growing) {
      if (triangl.edges()) {
        triangl.growing = false;
      } else {
        for (let j = 0; j < triangles.length; j++) {
          let other = triangles[j];
          if (triangl !== other) {
            var d = dist(triangl.x, triangl.y, other.x, other.y);
            var distance = triangl.r + other.r;

            if (d - 8 < distance) {
              triangl.growing = false;
              break;
            }
          }
        }
      }
    }

    triangl.show();
    triangl.grow();
  }
}
//Funktion där ny triangel skapas varierat runt bildens pixlar
function newTriangle() {
  var r = int(random(0, spots.length));
  var spot = spots[r];
  var x = spot.x;
  var y = spot.y;

  var valid = true;
  for (var i = 0; i < triangles.length; i++) {
    var triangle = triangles[i];
    var d = dist(x, y, triangle.x, triangle.y);
    if (d < triangle.r) {
      valid = false;
      break;
    }
  }
  if (valid) {
    return new Triangle(x, y);
  } else {
    return null;
  }
}
