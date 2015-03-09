"use strict";

function testContext() {
    // this is undefined because it's in the global scope
    console.log(this);
}

function anotherFunction() {
    // this is the nested function
    return function testContext() {
        console.log(this);
    }
}

testContext();
testContext.apply(anotherFunction());

// Creates new object through the function prototype therefore this is an object
new testContext();