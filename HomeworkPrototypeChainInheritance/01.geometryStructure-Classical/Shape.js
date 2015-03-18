var shapesModule = shapesModule || {};

(function (scope) {

    function Shape(Point, color) {
        if (!(this instanceof arguments.callee)) {
            return new arguments.callee(Point, color);
        }

        this.Point = Point;
        this.color = color;
    }

    Object.defineProperty(Shape.prototype, 'Point', {
        get: function () {
            return this._Point;
        },
        set: function (value) {
            if (!(value instanceof scope.Point)) {
                throw new Error("Point must be instance of Point");
            }

            this._Point = value;
        }
    });

    Object.defineProperty(Shape.prototype, 'color', {
        get: function () {
            return this._color;
        },
        set: function (value) {
            if (!(/^#([A-Fa-f0-9])\1\1$|^#[A-Fa-f0-9]{6}$/g.test(value))) {
                throw new Error("Color must be a valid hexadecimal color.")
            }

            this._color = value;
        }
    });

    Shape.prototype.toString = function () {
        return [this.Point.toString(), this.color];
    };

    scope.Shape = Shape;
}(shapesModule));