// Draw Points using Class
//---------------------------------------------
{
  class Point {
    // Properties to the Point class
    // When a member is marked private, it cannot be accessed from outside of its containing class
    private x: number;
    private y: number;

    constructor(x?: number, y?: number) {
      this.x = x || 10;
      this.y = y || 20;
    }

    // Draw method for this class
    draw() {
      console.log(`X: ${this.x}, Y: ${this.y}`);
    }
  }

  let point = new Point(1, 2);
  // point.x = 10; // Error: 'x' is private;
  point.draw();
}
