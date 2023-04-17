const fs = require('fs');
// const SVG = require('svg.js');
const questions = require('./assets/questions.js');
const myShape = require('./assets/myShape.js');
const fileName = './new/logo.svg';
const inquirer = import('inquirer');

import('inquirer')
.then((inquirer) =>{
console.log(inquirer)
})
.catch((error)=>{
console.log('error')
});

//create new svg file via inquirer & fs
const makeLogo = ((response)=>{
const svg = myShape(response);
fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
});

//init, questions -->logo via input, catch errors
function init() {
inquirer 
.prompt(questions)
.then((response) => {
createLogo(response);
})
.catch(err => {
console.log(err)
});
}

init();
