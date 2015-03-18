var shapesModule = shapesModule || {};

(function (scope) {

    function Circle(CenterPoint, radius, color) {
        if (!(this instanceof arguments.callee)) {
            return new arguments.callee(CenterPoint, radius, color);
        }

        scope.Shape.call(this, CenterPoint, color);
        this.radius = radius;
    }

    Circle.prototype = Object.create(scope.Shape.prototype);
    Circle.prototype.constructor = Circle;

    Object.defineProperty(Circle.prototype, 'radius', {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Radius cannot be negative.");
            }

            this._radius = value;
        }
    });

    Circle.prototype.toString = function () {
        var shape = scope.Shape.prototype.toString.call(this);
        return "Circle - Center: " + shape[0] + ', Radius: ' + this.radius + ', Color: ' + shape[1];
    };

    scope.Circle = Circle;
}(shapesModule));
