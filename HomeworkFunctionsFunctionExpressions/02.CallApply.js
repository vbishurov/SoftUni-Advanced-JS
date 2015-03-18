"use strict";

function printArgsInfo() {
    var argsLength = arguments.length,
        type,
        i,
        element;

    for (i = 0; i < argsLength; i++) {
        element = arguments[i];
        if (Array.isArray(element)) {
            type = "array";
        } else {
            type = typeof element;
        }

        console.log(element + " (" + type + ")");
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
