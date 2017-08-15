// Draw Points using Class
//---------------------------------------------
{
    var Point = (function () {
        function Point(x, y) {
            this.x = x || 10;
            this.y = y || 20;
        }
        // Draw method for this class
        Point.prototype.draw = function () {
            console.log("X: " + this.x + ", Y: " + this.y);
        };
        return Point;
    }());
    var point = new Point();
    point.draw();
}
