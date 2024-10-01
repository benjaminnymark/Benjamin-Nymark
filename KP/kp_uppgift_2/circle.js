//Cirklar skapas
class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 1;
    this.growing = true;
  }

  grow() {
    if (this.growing) {
      this.r += 1;
    }
  }
//Objektet fylls av cirklar
  show() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
//Håller sig inom den valda bild objektet
  edges() {
    return (
      this.x + this.r >= width ||
      this.x - this.r <= 0 ||
      this.y + this.r >= height ||
      this.y - this.r <= 0
    )
  }
}
