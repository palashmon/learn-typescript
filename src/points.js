// Draw Points using Class
//---------------------------------------------
{
    var Point = (function () {
        function Point() {
        }
        // Draw method for this class
        Point.prototype.draw = function () {
            console.log("X: " + this.x + ", Y: " + this.y);
        };
        Point.prototype.getDistance = function (another) {
            // ...
        };
        return Point;
    }());
    var point = new Point();
    point.x = 1;
    point.y = 2;
    point.draw();
}
