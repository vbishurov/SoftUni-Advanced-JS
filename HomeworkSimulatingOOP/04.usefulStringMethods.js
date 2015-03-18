"use strict";

String.prototype.startsWith = function (substring) {
	var pattern = new RegExp('^' + substring);
	return pattern.test(this);
};

String.prototype.endsWith = function (substring) {
	var pattern = new RegExp(substring + '$');
	return pattern.test(this);
};

String.prototype.left = function (count) {
	return this.substr(0, Math.min(this.length, count));
};

String.prototype.right = function (count) {
	return this.substr(Math.max(this.length - count, 0), count);
};

String.prototype.padLeft = function (count, character) {
	if (!character) {
		character = ' ';
	}

	count = count - this.length;

	return character.repeat(count) + this;
};

String.prototype.padRight = function (count, character) {
	if (!character) {
		character = ' ';
	}

	count = count - this.length;

	return this + character.repeat(count);
};

String.prototype.repeat = function (count) {
	var result = '',
        i;
	for (i = 0; i < count; i++) {
		result += this;
	}

	return result;
};

var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));
console.log();

console.log(example.endsWith("poses."));
console.log(example.endsWith("example"));
console.log(example.startsWith("something else"));
console.log();

console.log(example.left(9));
console.log(example.left(90));
console.log();

console.log(example.right(9));
console.log(example.right(90));
console.log();

var combinationsExample = "abcdefgh";
console.log(combinationsExample.left(5).right(2));
console.log();

var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));
console.log();

console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
console.log(hello.padRight(2, "."));
console.log();

var character = "*";
console.log(character.repeat(5));
console.log();

console.log("~".repeat(3));
console.log();

console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));
