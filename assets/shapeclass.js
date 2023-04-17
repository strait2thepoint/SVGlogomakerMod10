//creating a parent class that can then extend children classes of Ellipse, Square, Circle and Triangle 
class Shape {
    constructor(shapeColor, text, textColor){
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
};
//export it
module.exports = Shape;