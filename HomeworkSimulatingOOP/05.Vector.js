"use strict";

function Vector(arrayOfComponents) {
	if (!arrayOfComponents || arrayOfComponents.length < 1) {
		throw "Empty componenets not allowed";
	}

	this.components = arrayOfComponents;
}

Vector.prototype = {
	get components() {
		return this._components;
	},
	set components(value) {
		this._components = value;
	},
	toString: function () {
		return "(" + this.components.join(", ") + ")";
	},
	add: function (otherVector) {
		if (!(otherVector instanceof Vector) || !(this instanceof Vector)) {
			throw "Command is applicable to vectors only.";
		}

		if (this.components.length != otherVector.components.length) {
			throw "Cannot add Vectors of different size.";
		}

		var newComponents = [];
		for (var i = 0; i < this.components.length; i++) {
			newComponents.push(this.components[i] + otherVector.components[i]);
		}

		return new Vector(newComponents);
	},
	subtract: function (otherVector) {
		if (!(otherVector instanceof Vector) || !(this instanceof Vector)) {
			throw "Command is applicable to vectors only.";
		}

		if (this.components.length != otherVector.components.length) {
			throw "Cannot add Vectors of different size.";
		}

		var newComponents = [];
		for (var i = 0; i < this.components.length; i++) {
			newComponents.push(this.components[i] - otherVector.components[i]);
		}

		return new Vector(newComponents);
	},
	dot: function (otherVector) {
		if (!(otherVector instanceof Vector) || !(this instanceof Vector)) {
			throw "Command is applicable to vectors only.";
		}

		if (this.components.length != otherVector.components.length) {
			throw "Cannot add Vectors of different size.";
		}

		var sum = 0;
		for (var i = 0; i < this.components.length; i++) {
			sum += this.components[i] * otherVector.components[i];
		}

		return sum;
	},
	norm: function () {
		if (!(this instanceof Vector)) {
			throw "Command is applicable to vectors only.";
		}

		var sum = 0;

		for (var i = 0; i < this.components.length; i++) {
			sum += this.components[i] * this.components[i];
		}

		return Math.sqrt(sum);
	}
};

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(a.toString());
console.log(c.toString());
console.log();

//// The following throw errors
//var wrong = new Vector();
//var anotherWrong = new Vector([]);

var result = a.add(b);
console.log(result.toString());
console.log();

//a.add(c); // Error

result = a.subtract(b);
console.log(result.toString());
console.log();

//a.subtract(c); // Error

result = a.dot(b);
console.log(result.toString());
console.log();

//a.dot(c); // Error

console.log(a.norm());
console.log(b.norm());
console.log(c.norm());
console.log(a.add(b).norm());
