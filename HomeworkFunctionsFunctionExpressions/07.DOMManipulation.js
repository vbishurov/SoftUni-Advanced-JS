"use strict";

var domModule = (function () {
    function appendChild(element, child) {
        element = getElement(element);
        child = getElement(child);

        child.appendChild(element);
    }

    function removeChild(element, child) {
        element = getElement(element);
        child = getElement(child);

        element.removeChild(child);
    }

    function addHandler(element, eventType, eventHandler) {
        element = getElements(element);
        for (var i = 0; i < element.length; i++) {
            element[i].addEventListener(eventType, eventHandler);
        }
    }

    function retrieveElements(selector) {
        return getElements(selector);
    }

    function getElement(element) {
        if (!(element instanceof HTMLElement)) {
            element = document.querySelector(element);
        }

        return element
    }

    function getElements(element) {
        if (!(element instanceof HTMLElement)) {
            element = document.querySelectorAll(element);
        }

        return element
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        retrieveElements: retrieveElements
    };
})();

var liElement = document.createElement("li");

domModule.appendChild(liElement, ".birds-list");

domModule.removeChild("ul.birds-list", "li:first-child");

domModule.addHandler("li.bird", 'click', function () {
    alert("I'm a bird!")
});

var elements = domModule.retrieveElements(".bird");
console.log(elements);

