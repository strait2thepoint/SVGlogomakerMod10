const colors = require("./colors");
console.log("colors", colors);

//making parent classes and extending children classes for the questions??
const Question = class Question {
constructor(name, message) {
this.name = name
this.message = message
}
}
    
class InputQuestion extends Question {
constructor(name, message) {
super(name, message)
this.type = "input"
}
}
    
class ListQuestion extends Question {
constructor(name, message, choices) {
super(name, message)
this.type = "list",
this.choices = choices
}
}
//Shape
const shapeSelectionQuestion = new ListQuestion ('shapeSelection', 'Select a shape option:', ['square', 'circle', 'triangle', 'ellipse', 'rectangle']);
//I need some kind of method that will print this to the CLI and allow for input.  there is printMetaData() and ask()


//Shape color
const shapeColor = new InputQuestion('shapeColor', 'What is the color of the shape?');
console.log(shapeColor.answers);
const shapeAnswers = shapeColor.answers
console.log(shapeAnswers)
const shapeLowerCaseAns = shapeAnswers.toLowerCase.trim;
console.log(shapeLowerCaseAns);

//colors- validate that the input matches one of our colors
const checkAnswers = ((shapeLowerCaseAns)=>{
for(var i = 0, length = colors.length; i<length; ++i){
    if (shapeLowerCaseAns.indexOf(colors[i]) !=-1)
    return true;
}
return console.log('\n Please enter a valid color')
});
checkAnswers();//??????

//I think there needs to be something in her with a for loop

//text

const textColorQuestion = new InputQuestion ('textColor', 'What is the text color?');
const textColAnswers = textColorQuestion.answers
const textLowerCaseAns = textColAnswers.toLowerCase().trim();
console.log(textLowerCaseAns);

const verifyAnswers = ((textLowerCaseAns)=>{
for(var i = 0, length = colors.length; i<length; ++i){
    if(textLowerCaseAns.indexOf(colors[i]) !=-1)//not certain about !=-1.  Can I combine this with line 38?
    return true;
}
return console.log('\n Please enter a valid color')   
});

module.exports = Question
    
    
    
    