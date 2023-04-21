const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./assets/questions.js');
const { Circle, Rectangle, Square, Triangle, Ellipse } = require("./lib/index")
// const SVG = require('svg.js');
// const myShape = require('./assets/myShape.js');
// const fileName = './new/logo.svg';

//create new svg file via inquirer & fs
const makeLogo = (shape) => {
    fs.writeFile("shape.svg", shape.renderSVG(), (err) => err
        ? console.log(err)
        : console.log('Generated logo.svg'));
}

//init, questions -->logo via input, catch errors
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response)
            let selectedShape;
            switch (response.shapeSelection) {
                case "square":
                    selectedShape = new Square(response.shapeColor, response.text, response.textColor)
                    break;
                case "circle":
                    selectedShape = new Circle(response.shapeColor, response.text, response.textColor)
                    break;
                case "rectangle":
                    selectedShape = new Rectangle(response.shapeColor, response.text, response.textColor)
                    break;
                case "ellipse":
                    selectedShape = new Ellipse(response.shapeColor, response.text, response.textColor)
                    break;
                case "triangle":
                    selectedShape = new Triangle(response.shapeColor, response.text, response.textColor)
                    break;

                default:
                    console.log("loo")
                    break;
            }
            makeLogo(selectedShape)

        })
        .catch(err => {
            console.log(err)
        });
}

init();
