const Shape = require('./Shape')

class Triangle extends Shape{
constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);  
};  
render(){
return`<polygon points=""150, 15 300, 300 0, 300"" fill ='${this.shapeColor}'/>` 
};
};
module.exports = Triangle;

//I need to look at these temlate literals