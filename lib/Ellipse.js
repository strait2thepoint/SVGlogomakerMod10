const Shape = require('./Shape')

class Ellipse extends Shape{
constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);  
};
render(){
return`<circle cx= '100' cy= '150' rx="100" ry="100" fill='${this.shapeColor}'/>`   
};  
};
module.exports = Ellipse;