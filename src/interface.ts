// Interfaces
//---------------------------------------------
{
  // In TypeScript, interfaces are a powerful way of defining contracts within your code
  // as well as contracts with code outside of your project.
  interface Point {
    x: number;
    y: number;
  }

  let drawPoint = (point: Point) => {
    console.log({ x: point.x, y: point.y });
  };

  drawPoint({ x: 10, y: 20 });
  // drawPoint({ name: 'Palash' });
  // Compile type error, as argument here is not assignable to parameter of type 'Point'.
  // This helps in future proofing our code, in case wrong parameters are passed
}
