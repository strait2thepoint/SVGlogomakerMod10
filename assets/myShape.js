const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');
const Ellipse = require('./ellipse.js');
const Rectangle = require('./rectangle.js');

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