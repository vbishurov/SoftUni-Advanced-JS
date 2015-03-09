"use strict";

function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype = {
	get firstName() {
		return this._firstName;
	},
	set firstName(value) {
		this._firstName = value;
	},
	get lastName() {
		return this._lastName;
	},
	set lastName(value) {
		this._lastName = value;
	},
	get fullName() {
		return this.firstName + " " + this.lastName;
	},
	set fullName(value) {
		var names = value.split(' ');
		this.firstName = names[0];
		this.lastName = names[1];
	}
};

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