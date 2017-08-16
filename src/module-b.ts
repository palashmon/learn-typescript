// A module which we will export
//--------------------------------------------------------------------------------
export class Point {
  constructor(private _x?: number, private _y?: number) {}

  // Draw method for this class
  draw() {
    console.log(`X: ${this._x}, Y: ${this._y}`);
  }
}

// One more class that we can export
export class Person {
  constructor(private firstName: string, private lastName: string) {}
}
