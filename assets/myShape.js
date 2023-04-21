const Circle = require('../lib/Circle.js');
const Square = require('../lib/Square.js');
const Triangle = require('../lib/Triangle.js');
const Ellipse = require('./lib/Ellipse.js');
const Rectangle = require('../lib/Rectangle.js');

//this is checking to see if the input matches one of our available shapes and then exports it
const myShape = ((response)=>{
if (response.shape === 'Circle') {
let selectedShape = new Circle (response.shapeColor, response.text, response.textColor)
return selectedShape.render()
}

if (response.shape === 'Square'){
let selectedShape = new Square (response.shapeColor, response.text, response.textColor)
return selectedShape.render()
}

if (response.shape === 'Triangle'){
let selectedShape = new Triangle (response.shapeColor, response.text, response.textColor)
return selectedShape.render()
}

if (response.shape === 'Ellipse'){
let selectedShape = new Ellipse (response.shapeColor, response.text, response.textColor)
return selectedShape.render()
}

if (response.shape === 'Rectangle'){
let selectedShape = new Rectangle (response.shapeColor, response.text, response.textColor)
return selectedShape.render()
}

});

module.exports = myShape