"use strict";

Array.prototype.flatten = function flattern() {
	var result = [],
        i;

	for (i = 0; i < this.length; i++) {
		if (this[i] instanceof Array) {
			result = result.concat(this[i].flatten());
		}
		else {
			result.push(this[i]);
		}
	}

	return result;
};

var array = [1, 2, 3, 4];
console.log(array.flatten());
console.log();

var array1 = [1, 2, [3, 4], [5, 6]];
console.log(array1.flatten());
console.log(array1); // Not changed
console.log();

var array2 = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array2.flatten());
