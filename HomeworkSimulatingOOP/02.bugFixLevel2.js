"use strict";

var Person = (function () {

    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    Object.defineProperty(Person.prototype, 'firstName', {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        }
    });

    Object.defineProperty(Person.prototype, 'lastName', {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        }
    });

    Object.defineProperty(Person.prototype, 'fullName', {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        set: function (value) {
            var items = value.split(' ');
            this.firstName = items[0];
            this.lastName = items[1];
        }
    });

    Person.prototype.toString = function () {
        return this.constructor.name;
    };

    return Person;
}());

var person = new Person("Peter", "Jackson");
// Getting values
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);

console.log();

// Changing values
person.firstName = "Michael";
console.log(person.firstName);
console.log(person.fullName);
person.lastName = "Williams";
console.log(person.lastName);
console.log(person.fullName);

console.log();

// Changing the full name should work too
person.fullName = "Alan Marcus";
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);