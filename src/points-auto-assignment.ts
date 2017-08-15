// Automatic assignment
//---------------------------------------------
{
  class Point {
    // We can use automatic assignment of constructor parameters to the relevant property
    constructor(private x?: number, private y?: number) {}

    // Draw method for this class
    draw() {
      console.log(`X: ${this.x}, Y: ${this.y}`);
    }
  }

  let point = new Point(1, 2);
  point.draw();
}
