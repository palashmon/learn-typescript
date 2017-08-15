// Automatic assignment
//---------------------------------------------
{
    var Point = (function () {
        // We can use automatic assignment of constructor parameters to the relevant property
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        // Draw method for this class
        Point.prototype.draw = function () {
            console.log("X: " + this.x + ", Y: " + this.y);
        };
        return Point;
    }());
    var point = new Point(1, 2);
    point.draw();
}
