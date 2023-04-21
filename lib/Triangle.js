const Shape = require('./Shape')

class Triangle extends Shape{
constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);  
};  
render(){
return`<polygon points="100, 15 200, 200 0, 200" fill ='${this.shapeColor}'/>` 
};
};
module.exports = Triangle;

//I need to look at these temlate literals