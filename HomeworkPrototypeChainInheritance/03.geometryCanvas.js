"use strict";

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var shapes = [];

function addShape() {
	var x = document.getElementById('x').value,
		y = document.getElementById('y').value,
		x2 = document.getElementById('x2').value,
		y2 = document.getElementById('y2').value,
		x3 = document.getElementById('x3').value,
		y3 = document.getElementById('y3').value,
		color = document.getElementById('color').value,
		radius = document.getElementById('radius').value,
		width = document.getElementById('width').value,
		height = document.getElementById('height').value,
		point1 = Object.create(Point).construct(x, y),
		point2 = Object.create(Point).construct(x2, y2),
		point3 = Object.create(Point).construct(x3, y3),
		textArea = document.getElementById("shapes");

	switch (document.getElementById("shape").value) {
		case "circle":
			shapes.push(Object.create(Circle).construct(point1, radius, color));
			context.fillStyle = color;
			shapes[shapes.length - 1].draw(context);
			textArea.innerHTML += shapes[shapes.length - 1].toString() + "\\\n";
			break;
		case "rectangle":
			shapes.push(Object.create(Rectangle).construct(point1, width, height, color));
			context.fillStyle = color;
			shapes[shapes.length - 1].draw(context);
			textArea.innerHTML += shapes[shapes.length - 1].toString() + "\\\n";
			break;
		case "triangle":
			shapes.push(Object.create(Triangle).construct(point1, point2,point3, color));
			context.fillStyle = color;
			shapes[shapes.length - 1].draw(context);
			textArea.innerHTML += shapes[shapes.length - 1].toString() + "\\\n";
			break;
		case "line":
			shapes.push(Object.create(line).construct(point1, point2, color));
			context.strokeStyle = color;
			shapes[shapes.length - 1].draw(context);
			textArea.innerHTML += shapes[shapes.length - 1].toString() + "\\\n";
			break;
		case "segment":
			shapes.push(Object.create(Segment).construct(point1, point2, color));
			context.strokeStyle = color;
			shapes[shapes.length - 1].draw(context);
			textArea.innerHTML += shapes[shapes.length - 1].toString() + "\\\n";
			break;
	}
}