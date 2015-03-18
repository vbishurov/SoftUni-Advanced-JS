var shapesModule = shapesModule || {};

(function (scope) {

    function Point(x, y) {
        if (!(this instanceof arguments.callee)) {
            return new arguments.callee(x, y);
        }

        this.x = x;
        this.y = y;
    }

    Object.defineProperty(Point.prototype, 'x', {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        }
    });

    Object.defineProperty(Point.prototype, 'y', {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        }
    });

    Point.prototype.toString = function () {
        return '{ ' + this.x + ', ' + this.y + ' }';
    };

    scope.Point = Point;
}(shapesModule));