const Shape = require('./Shape')

class Circle extends Shape{
constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);  
};  
render(){
return`<circle cx= '100' cy= '150' r= '100' fill='${this.shapeColor}'/>`
};
};
module.exports = Circle;