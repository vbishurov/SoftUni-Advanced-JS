"use strict";

Object.prototype.extend = function (properties) {
	function F() {
	}

	var prop;

	F.prototype = Object.create(this);

	for (prop in properties) {
		F.prototype[prop] = properties[prop];
	}

	F.prototype._super = this;
	return new F();
};

var Point = {
	construct: function (x, y) {
		this.x = x;
		this.y = y;
		return this;
	},

	toString: function () {
		return "{ X: " + this.x + ", Y: " + this.y + " }";
	}
};

var Shape = {
	construct: function (point, color) {
		this.point = point;
		this.color(color);
		return this;
	},

	color: function (value) {
		if (value) {
			if (!/^#[0-9abcdef]{6}$/.test(value)) {
				throw Error("Invalid hexademical color.");
			}
			this._color = value;
		}
		else {
			return this._color;
		}
	},

	toString: function () {
		return this.point.toString() + ", Color: " + this.color();
	}
};

var Circle = Shape.extend({
	construct: function (point, radius, color) {
		this._super.construct(point, color);
		this.radius(radius);
		return this;
	},

	radius: function (value) {
		if (value) {
			if (value < 0) {
				throw Error("Circle radius cannot be negative");
			}

			this._radius = value;
		} else {
			return this._radius;
		}
	},

	toString: function () {
		return "Circle - Center: " + this._super.toString() + ", Radius: " + this.radius();
	},

	draw: function (ctx) {
		ctx.beginPath();
		ctx.arc(this.point.x, this.point.y, this.radius(), 0, Math.PI * 2, true);
		ctx.fill();
	}
});

var Rectangle = Shape.extend({
	construct: function (point, width, height, color) {
		this._super.construct(point, color);
		this.width(width);
		this.height(height);
		return this;
	},

	width: function (value) {
		if (value) {
			if (value < 0) {
				throw Error("Width cannot be negative.")
			}

			this._width = value;
		}
		else {
			return this._width;
		}
	},

	height: function (value) {
		if (value) {
			if (value < 0) {
				throw Error("Height cannot be negative.")
			}

			this._height = value;
		}
		else {
			return this._height;
		}
	},

	toString: function () {
		return "Rectangle - Top left corner: " + this._super.toString() + ", Width: " + this.width() + ", Height: " + this.height();
	},

	draw: function (ctx) {
		ctx.fillRect(this.point.x, this.point.y, this.width(), this.height());
	}
});

var Triangle = Shape.extend({
	construct: function (pointA, pointB, pointC, color) {
		this._super.construct(pointA, color);
		this.pointB = pointB;
		this.pointC = pointC;
		return this;
	},

	toString: function () {
		return "Triangle - Point A: " + this._super.toString() + ", Point B: " + this.pointB.toString() + ", Point C: " + this.pointC.toString();
	},

	draw: function (ctx) {
		ctx.beginPath();
		ctx.moveTo(this.point.x, this.point.y);
		ctx.lineTo(this.pointB.x, this.pointB.y);
		ctx.lineTo(this.pointC.x, this.pointC.y);
		ctx.fill();
	}
});

var Line = Shape.extend({
	construct: function (pointA, pointB, color) {
		this._super.construct(pointA, color);
		this.pointB = pointB;
		return this;
	},

	toString: function () {
		return "Line - Point A: " + this._super.toString() + ", Point B: " + this.pointB.toString();
	},

	draw: function (ctx) {
		ctx.beginPath();
		ctx.moveTo(this.point.x, this.point.y);
		ctx.lineTo(this.pointB.x, this.pointB.y);
		ctx.stroke();
	}
});

var Segment = Shape.extend({
	construct: function (pointA, pointB, color) {
		this._super.construct(pointA, color);
		this.pointB = pointB;
		return this;
	},

	toString: function () {
		return "Segment - Point A: " + this._super.toString() + ", Point B: " + this.pointB.toString();
	},

	draw: function (ctx) {
		ctx.beginPath();
		ctx.moveTo(this.point.x, this.point.y);
		ctx.lineTo(this.pointB.x, this.pointB.y);
		ctx.stroke();
	}
});

var center = Object.create(Point).construct(0, 0);
var pointA = Object.create(Point).construct(80, 80);
var pointB = Object.create(Point).construct(20, 80);
var pointC = Object.create(Point).construct(40, 40);

var circle = Object.create(Circle).construct(center, 80, "#ff0000");
console.log(circle.toString());

var rectangle = Object.create(Rectangle).construct(pointA, 100, 100, "#ff0000");
console.log(rectangle.toString());

var triangle = Object.create(Triangle).construct(pointA, pointB, pointC, "#ff0000");
console.log(triangle.toString());

var line = Object.create(Line).construct(pointB, pointC, "#ff0000");
console.log(line.toString());

var segment = Object.create(Segment).construct(pointA, pointB, "#ff0000");
console.log(segment.toString());