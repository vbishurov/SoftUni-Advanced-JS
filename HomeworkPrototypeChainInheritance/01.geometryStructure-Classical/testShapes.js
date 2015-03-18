"use strict";

var center = new shapesModule.Point(0, 0);
var point1 = new shapesModule.Point(2, 4);
var point2 = new shapesModule.Point(4, 0);
var point3 = new shapesModule.Point(2, 2);

var circle = new shapesModule.Circle(center, 2, "#00ff00");
console.log(circle.toString());

var rectangle = new shapesModule.Rectangle(point1, 4, 6, "#ff0000");
console.log(rectangle.toString());

var triangle = new shapesModule.Triangle(center, point2, point3, "#0000ff");
console.log(triangle.toString());

var line = new shapesModule.Line(center, point2, "#0000ff");
console.log(line.toString());

var segment = new shapesModule.Segment(center, point2, "#0000ff");
console.log(segment.toString());

// Produce same results without new keyword
//var center = shapesModule.Point(0, 0);
//var point1 = shapesModule.Point(2, 4);
//var point2 = shapesModule.Point(4, 0);
//var point3 = shapesModule.Point(2, 2);

//var circle = shapesModule.Circle(center, 2, "#00ff00");
//console.log(circle.toString());

//var rectangle = shapesModule.Rectangle(point1, 4, 6, "#ff0000");
//console.log(rectangle.toString());

//var triangle = shapesModule.Triangle(center, point2, point3, "#0000ff");
//console.log(triangle.toString());

//var line = shapesModule.Line(center, point2, "#0000ff");
//console.log(line.toString());

//var segment = shapesModule.Segment(center, point2, "#0000ff");
//console.log(segment.toString());