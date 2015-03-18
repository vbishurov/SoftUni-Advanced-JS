var shapesModule = shapesModule || {};

(function (scope) {

	function Segment(PointA, PointB, color) {
		if (!(this instanceof arguments.callee)) {
			return new arguments.callee(PointA, PointB, color);
		}

		scope.Shape.call(this, PointA, color);
		this.PointB = PointB;
	}

	Segment.prototype = Object.create(scope.Shape.prototype);
	Segment.prototype.constructor = Segment;

	Object.defineProperty(Segment.prototype, 'PointB', {
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

	Segment.prototype.toString = function () {
		var shape = scope.Shape.prototype.toString.call(this);
		return 'Segment - A: ' + shape[0] + ', B: ' + this.PointB.toString() + ', Color: ' + shape[1];
	};

	scope.Segment = Segment;
}(shapesModule));