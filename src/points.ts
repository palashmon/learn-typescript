// Draw Points using Class
//---------------------------------------------
{
  class Point {
    // Properties to the Point class
    x: number;
    y: number;

    constructor(x?: number, y?: number) {
      this.x = x || 10;
      this.y = y || 20;
    }

    // Draw method for this class
    draw() {
      console.log(`X: ${this.x}, Y: ${this.y}`);
    }
  }

  let point = new Point();
  point.draw();
}
