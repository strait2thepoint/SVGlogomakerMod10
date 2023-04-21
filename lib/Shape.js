//creating a parent class that can then extend children classes of Ellipse, Square, Circle and Triangle 
class Shape {
    constructor(shapeColor, text, textColor){
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    renderSVG(){
        return `<svg version='1.1'
        width = '200'  height = '300'  xmlns="http://www.w3.org/2000/svg">
        ${this.render()}
        <text x= '150' y= '100' font-size= '72' text-anchor='middle' fill='${this.textColor}'>${this.text}</text></svg>
        `
    }
};
//export it
module.exports = Shape;