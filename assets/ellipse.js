const Shape = require('./shapeclass')

class Ellipse extends Shape{
constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);  
};
render(){
return`
<svg version='1.1'
width = '300'  height = '200'  xmlns="http://www.w3.org/2000/svg">'
<circle cx= '150' cy= '100' rx="150" ry="100" fill='${this.shapeColor}'/>
<text x= '150' y= '100' font-size= '24' text-anchor='middle' fill='${this.textColor}'></text></svg>
`   
};  
};
module.exports = Ellipse;