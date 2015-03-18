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

printArgsInfo(2, 3, 2.5, -110.5564, false);
console.log();
printArgsInfo(null, undefined, "", 0, [], {});
console.log();
printArgsInfo([1, 2], ["string", "array"], ["single value"]);
console.log();
printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});
console.log();
printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);