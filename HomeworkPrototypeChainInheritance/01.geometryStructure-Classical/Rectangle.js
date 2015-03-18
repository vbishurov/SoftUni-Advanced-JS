var shapesModule = shapesModule || {};

(function (scope) {

    function Rectangle(TopLeftCornerPoint, width, height, color) {
	    if (!(this instanceof arguments.callee)) {
		    return new arguments.callee(TopLeftCornerPoint, width, height, color);
	    }

        scope.Shape.call(this, TopLeftCornerPoint, color);
        this.width = width;
        this.height = height;
    }

    Rectangle.prototype = Object.create(scope.Shape.prototype);
    Rectangle.prototype.constructor = Rectangle;

    Object.defineProperty(Rectangle.prototype, 'width', {
        get: function () {
            return this._width;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('Width cannot be negative.')
            }

            this._width = value;
        }
    });

    Object.defineProperty(Rectangle.prototype, 'height', {
        get: function () {
            return this._height;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('Height cannot be negative.')
            }

            this._height = value;
        }
    });

    Rectangle.prototype.toString = function () {
        var shape = scope.Shape.prototype.toString.call(this);
        return 'Rectangle - Top Left Corner: ' + shape[0] + ', Width: ' + this.width + ', Height: ' + this.height + ', Color: ' + shape[1];
    };

    scope.Rectangle = Rectangle;
}(shapesModule));