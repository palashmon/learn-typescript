// Interfaces
//---------------------------------------------
{
    var drawPoint = function (point) {
        console.log({ x: point.x, y: point.y });
    };
    drawPoint({ x: 10, y: 20 });
    // drawPoint({ name: 'Palash' });
    // Compile type error, as argument here is not assignable to parameter of type 'Point'.
    // This helps in future proofing our code, in case wrong parameters are passed
}
