"use strict";

var add = (function() {
    var sum = 0;

    function add(increment) {
        sum += increment;
        return add;
    }

    add.toString = function() {
        return sum;
    };

    return add;
})();

//console.log(add(1).toString());
//console.log(add(2)(3).toString());
//console.log(add(1)(1)(1)(1)(1).toString());
//console.log(add(1)(0)(-1)(-1).toString());

var addTwo = add(2);

console.log(addTwo.toString());

//console.log(addTwo(3).toString());

//console.log(addTwo(3)(5).toString());

