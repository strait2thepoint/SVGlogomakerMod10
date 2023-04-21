const Shape = require('./Shape')

class Square extends Shape{
constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);  
};
render(){
return`<rect width= '200' height = '300' fill ='${this.shapeColor}'/>`    
}; 
};
module.exports = Square;