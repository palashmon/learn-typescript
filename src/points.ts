// Draw Points using Class
//---------------------------------------------
{
  class Point {
    // Properties to the Point class
    x: number;
    y: number;

    // Draw method for this class
    draw() {
      console.log(`X: ${this.x}, Y: ${this.y}`);
    }

    getDistance(another: Point) {
      // ...
    }
  }

  let point = new Point();
  point.x = 1;
  point.y = 2;
  point.draw();
}
