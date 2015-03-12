"use strict";

Object.prototype.inherits = function inherits(parent) {
	this.prototype = Object.create(parent.prototype);
	this.prototype.constructor = this;
};

Object.prototype.isNullOrEmpty = function (varName) {
	if (typeof (this.valueOf()) != 'string') {
		throw new TypeError(varName + " must be a String");
	}

	if (!this.valueOf()) {
		throw new RangeError(varName + " cannot be undefined or empty");
	}

	return false;
};

Object.prototype.isIntegerInRange = function (minValue, maxValue, varName) {
	if (typeof ( this.valueOf() ) != 'number') {
		throw new TypeError(varName + " must be a Number.");
	}

	if (this.valueOf() % 1 !== 0) {
		throw new TypeError(varName + " must be an Integer.");
	}

	if (minValue > this.valueOf() || this.valueOf() > maxValue) {
		throw new RangeError(varName + " must be in range[" + minValue + "..." + maxValue + "].");
	}

	return true;
};

Object.prototype.isBoolean = function (varName) {
	if (typeof (this.valueOf()) != 'boolean') {
		throw new TypeError(varName + " must be a Boolean value.");
	}

	return true;
};

var Container = (function () {

	function Container(sections) {
		this.sections(sections);
	}

	Container.prototype.sections = function (value) {
		if (value) {
			if (this._sections === undefined) {
				this._sections = [];
			}

			if (value instanceof Array) {
				for (var i = 0; i < value.length; i++) {
					if (!(value[i] instanceof Section)) {
						throw new TypeError("Container can contain only items");
					}

					this._sections.push(value[i]);
				}
			} else {
				if (!(value instanceof Section)) {
					throw new TypeError("Container can contain only items");
				}

				this._sections.push(value);
			}
		}
		else {
			return this._sections;
		}
	};

	Container.prototype.toString = function () {
		var result = "Container: ";
		for (var i = 0; i < this.sections().length; i++) {
			result += this.sections()[i].toString();
			if (i != this.sections().length - 1) {
				result += ", ";
			}
		}

		return result
	};

	return Container;
}());

var Section = (function () {

	function Section(title, items) {
		this.title(title);
		this.items(items);
	}

	Section.prototype.title = function (value) {
		if (value) {
			value.isNullOrEmpty("Title");
			this._title = value;
		}
		else {
			return this._title;
		}
	};

	Section.prototype.items = function (value) {
		if (value) {
			if (this._items === undefined) {
				this._items = [];
			}

			if (value instanceof Array) {
				for (var i = 0; i < value.length; i++) {
					if (!(value[i] instanceof Item)) {
						throw new TypeError("Sections can contain only items");
					}

					this._items.push(value[i]);
				}
			} else {
				if (!(value instanceof Item)) {
					throw new TypeError("Sections can contain only items");
				}

				this._items.push(value);
			}
		}
		else {
			return this._items;
		}
	};

	Section.prototype.toString = function () {
		var result = "Section " + this.title() + ": ";
		for (var i = 0; i < this.items().length; i++) {
			result += this.items()[i].toString();
			if (i != this.items().length - 1) {
				result += ", ";
			}
		}

		return result;
	};

	return Section;
}());

var Item = (function () {

	function Item(content, status) {
		this.content(content);
		this.status(status);
	}

	Item.prototype.content = function (value) {
		if (value) {
			value.isNullOrEmpty("Content");
			this._content = value;
		}
		else {
			return this._content;
		}
	};

	Item.prototype.status = function (value) {
		if (value) {
			if (value.toLowerCase() !== 'completed' && value.toLowerCase() !== 'not completed') {
				throw new RangeError("Status can be \"Completed\" or \"Not completed\"")
			}

			this._status = value;
		}
		else {
			return this._status;
		}
	};

	Item.prototype.toString = function () {
		return this.content() + " - " + this.status();
	};

	return Item;
}());

var item = new Item("Hello", "not completed");
var item1 = new Item("Hello", "not completed");
var section = new Section("Main", [item, item1]);
var section1 = new Section("Main", item);
var container = new Container([section, section1]);
console.log(container.toString());