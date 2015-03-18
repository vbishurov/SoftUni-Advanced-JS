var shapesModule = shapesModule || {};

(function (scope) {

	function Line(PointA, PointB, color) {
		if (!(this instanceof arguments.callee)) {
			return new arguments.callee(PointA, PointB, color);
		}

		scope.Shape.call(this, PointA, color);
		this.PointB = PointB;
	}

	Line.prototype = Object.create(scope.Shape.prototype);
	Line.prototype.constructor = Line;

	Object.defineProperty(Line.prototype, 'PointB', {
		get: function () {
			return this._PointB;
		},
		set: function (value) {
			if (!(value instanceof scope.Point)) {
				throw new Error('Point B must be instance of Point')
			}

			this._PointB = value;
		}
	});

	Line.prototype.toString = function () {
		var shape = scope.Shape.prototype.toString.call(this);
		return 'Line - A: ' + shape[0] + ', B: ' + this.PointB.toString() + ', Color: ' + shape[1];
	};

	scope.Line = Line;
}(shapesModule));