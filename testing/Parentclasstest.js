//creating a parent class that can then extend children classes of Ellipse, Square, Circle and Triangle 
class Shape {
    constructor(shapeColor, text, textColor){
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
renderSVG(){
return `
<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    
    <text x="150" y="125" font-size="70" text-anchor="middle" fill="aqua">LJS</text>
    </svg>
    `
}
};
//export it
module.exports = Parentclasstest;