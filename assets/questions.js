const colors = require("./colors");

//making parent classes and extending children classes for the questions??
class Question {
    constructor(name, message) {
        this.name = name
        this.message = message
    }
}

class InputQuestion extends Question {
    constructor(name, message) {
        super(name, message)
        this.type = "input"
    }
}

class ListQuestion extends Question {
    constructor(name, message, choices) {
        super(name, message)
        this.type = "list"
        this.choices = choices
    }
}
const verifyColor = value =>
        colors.indexOf(value) != -1
        ? true
        : '\n Please enter a valid color'
        
const verifyLength = value =>
        value.length < 4
        ? true
        : '\n Please enter up to three letters'

module.exports = [
    new ListQuestion('shapeSelection', 'Select a shape option:', ['square', 'circle', 'triangle', 'ellipse', 'rectangle']),
    {...new InputQuestion('shapeColor', 'What is the color of the shape?'), validate: verifyColor},
    {...new InputQuestion('textColor', 'What is the color of the text?'), validate: verifyColor},
    {...new InputQuestion('text', "What text would you like in your shape? (up to 3 letters)"),validate: verifyLength}

]



