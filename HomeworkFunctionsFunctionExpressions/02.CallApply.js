"use strict";

function printArgsInfo() {
    var type;

    for (var i = 0; i < arguments.length; i++) {
        type = typeof arguments[i];
        if (Array.isArray(arguments[i])) {
            type = "array";
        }

        console.log(arguments[i] + " (" + type + ")");
    }
}

printArgsInfo.call();
printArgsInfo.call("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});

printArgsInfo.apply();
console.log();
printArgsInfo.apply(null, ["some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {
    name: "Peter",
    age: 20
}]);
