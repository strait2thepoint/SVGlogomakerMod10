const Shape = require('./shapeclass')

class Circle extends Shape{
constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);  
};  
render(){
return`
<svg version='1.1'
width = '300'  height = '300'  xmlns="http://www.w3.org/2000/svg">'
<circle cx= '150' cy= '150' r= '150' fill='${this.shapeColor}'/>
<text x= '150' y= '150' font-size= '24' text-anchor='middle' fill='${this.textColor}'></text></svg>
`    
};
};
module.exports = Circle;