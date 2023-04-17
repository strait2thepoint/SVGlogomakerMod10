const Shape = require('./shapeclass')

class Rectangle extends Shape{
constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);  
};
render(){
return `
<svg version='1.1'
width = '400'  height = '200'  xmlns="http://www.w3.org/2000/svg">'
<rect width= '400' height = '200' fill ='${this.shapeColor}'/>
<text x='200' y='100' font-size= text-anchor='middle' fill='${this.textColor}'>${this.text}'</text></svg>
`   
};
};
module.exports = Rectangle;