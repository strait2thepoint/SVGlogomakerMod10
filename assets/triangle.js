const Shape = require('./shapeclass')

class Triangle extends Shape{
constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);  
};  
render(){
return`
<svg version='1.1'
width = '300'  height = '300'  xmlns="http://www.w3.org/2000/svg">'
<polygon points=""150, 15 300, 300 0, 300"" fill ='${this.shapeColor}'/>
<text x= '100' y= '185' font-size= '24' text-anchor= 'middle' fill='${this.textColor}'>${this.text}</text></svg>
` 
};
};
module.exports = Triangle;

//I need to look at these temlate literals