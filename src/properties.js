// Properties in Classes
//---------------------------------------------
{
    var Point = (function () {
        function Point(_x, _y) {
            this._x = _x;
            this._y = _y;
        }
        // Draw method for this class
        Point.prototype.draw = function () {
            console.log("X: " + this._x + ", Y: " + this._y);
        };
        Object.defineProperty(Point.prototype, "x", {
            // Getter property for this class
            get: function () {
                return this._x;
            },
            // Setter property for this class
            set: function (value) {
                if (value < 0)
                    throw new Error('Value can not be less than 0 here.');
                this._x = value;
            },
            enumerable: true,
            configurable: true
        });
        return Point;
    }());
    // Call the point class
    var point = new Point(1, 2);
    // Call the class getter property
    var x = point.x;
    console.log(x);
    // Call the class setter property
    point.x = 10;
    console.log(point.x); // again call getter, to view if private _x is updated or not
    // Call the class draw() method
    point.draw();
}
