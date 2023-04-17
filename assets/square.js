const Shape = require('./shapeclass')

class Square extends Shape{
constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);  
};
render(){
return`
<svg version='1.1'
width = '300'  height = '300'  xmlns="http://www.w3.org/2000/svg">'
<rect width= '300' height = '300' fill ='${this.shapeColor}'/>
<text x= '150' y= '150' font-size='24' text-anchor='middle' fill='${this.textColor}'>${this.text}'</text></svg>
`    
}; 
};
module.exports = Square;