"use strict";

function traverse(selector) {
    var elementToTraverse = document.querySelector(selector);

    traverseNode(elementToTraverse, '');

    function traverseNode(node, spacing) {
        var child, elementString, elementClass, elementID;
        spacing = spacing || '';
        if (node != elementToTraverse) {
            elementString = spacing + node.nodeName.toLowerCase() + ":";
            elementID = node.getAttribute('id');
            elementClass = node.getAttribute('class');

            if (elementID != null) {
                elementString += " id=\"" + elementID + "\"";
            }

            if (elementClass != null) {
                elementString += " class=\"" + elementClass + "\"";
            }

            console.log(elementString);
        }

        for (var i = 0, len = node.childNodes.length; i < len; i += 1) {
            child = node.childNodes[i];

            if (child.nodeType === document.ELEMENT_NODE) {
                traverseNode(child, spacing + '    ');
            }
        }
    }
}

