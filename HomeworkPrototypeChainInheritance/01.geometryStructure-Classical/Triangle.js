var shapesModule = shapesModule || {};

(function (scope) {

	function validateTriangle(PointA, PointB, PointC) {
		var distanceAB = Math.floor(Math.sqrt((PointB.x - PointA.x) * (PointB.x - PointA.x) + (PointB.y - PointA.y) * (PointB.y - PointA.y))),
			distanceAC = Math.floor(Math.sqrt((PointC.x - PointA.x) * (PointC.x - PointA.x) + (PointC.y - PointA.y) * (PointC.y - PointA.y))),
			distanceBC = Math.floor(Math.sqrt((PointC.x - PointB.x) * (PointC.x - PointB.x) + (PointC.y - PointB.y) * (PointC.y - PointB.y)));
		if (distanceAB + distanceBC < distanceAC ||
			distanceAB + distanceAC < distanceBC ||
			distanceAC + distanceBC < distanceAB) {
			throw new Error('Invalid Points for a triangle');
		}
	}

	function Triangle(PointA, PointB, PointC, color) {
		if (!(this instanceof arguments.callee)) {
			return new arguments.callee(PointA, PointB, PointC, color);
		}

		validateTriangle(PointA, PointB, PointC);

		scope.Shape.call(this, PointA, color);
		this.PointB = PointB;
		this.PointC = PointC;
	}

	Triangle.prototype = Object.create(scope.Shape.prototype);
	Triangle.prototype.constructor = Triangle;

	Object.defineProperty(Triangle.prototype, 'PointB', {
		get: function () {
			return this._PointB;
		},
		set: function (value) {
			if (!(value instanceof scope.Point)) {
				throw new Error("Point B must be instance of Point")
			}

			this._PointB = value;
		}
	});

	Object.defineProperty(Triangle.prototype, 'PointC', {
		get: function () {
			return this._PointC;
		},
		set: function (value) {
			if (!(value instanceof scope.Point)) {
				throw new Error("Point C must be instance of Point")
			}

			this._PointC = value;
		}
	});

	Triangle.prototype.toString = function () {
		var shape = scope.Shape.prototype.toString.call(this);
		return 'Triangle - A: ' + shape[0] + ', B: ' + this.PointB.toString() + ', C: ' + this.PointC.toString() + ', Color: ' + shape[1];
	};

	scope.Triangle = Triangle;
}(shapesModule));