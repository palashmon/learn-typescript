// Properties in Classes
// Run code in cmd using
// tsc src\properties.ts --t "ES5" && node src\properties.js
//--------------------------------------------------------------------------------
{
  class Point {
    constructor(private _x?: number, private _y?: number) {}

    // Draw method for this class
    draw() {
      console.log(`X: ${this._x}, Y: ${this._y}`);
    }

    // Getter property for this class
    get x() {
      return this._x;
    }

    // Setter property for this class
    set x(value) {
      if (value < 0) throw new Error('Value can not be less than 0 here.');
      this._x = value;
    }
  }

  // Call the point class
  let point = new Point(1, 2);

  // Call the class getter property
  let x = point.x;
  console.log(x);

  // Call the class setter property
  point.x = 10;
  console.log(point.x); // again call getter, to view if private _x is updated or not

  // Call the class draw() method
  point.draw();

  // Output
  // 1
  // 10
  // X: 10, Y: 2
}
