# SVGlogomakerMod10

[Video of functionality of SVG logo maker](https://github.com/strait2thepoint/SVGlogomakerMod10.git)

[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![Jest Badge](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=fff&style=flat)](https://jestjs.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# README

## Table of Content
-[Project description](#Description)
-[Usage](#Usage)
-[Contribution](#Contribution)
-[Installation](#Installation)
-[Questions](#Questions)
-[License](#License)

## Description
Creating a SVG logo maker that takes inputs from the user and renders and SVG image

## Usage
To be able to generate an SVG logo for any project
![Video of usage](https://watch.screencastify.com/v/5K82h7p129KreXVzoJkV)

## Installation
Type "node -v" in your command line to check for Node.js installation on your computer. If node is not present, please refer to Node.js website. Next, using codespace or VSC, clone the repository to your computer. Use the command "npm install" on the CLI while in the SVGLOGOMAKERMOD10 folder to install npm dependencies. The command "npm install --save-dev jest" will install Jest as a devDependency.

## Usage
CD into the SVGLOGOMAKERMOD10 folder. Type "node index.js"in the CLI to launch the application. Answer the series of questions. If you do not enter a valid color that matches the color list provided in the color.js file, you will be prompted to try again. You can only enter 3 characters.  If you enter more, you will be prompted to try again. Once all the questions have been appropriately answered, your SVG logo will be generated under the file name 'shape.svg'. Right click on the file and open in your browser.  See video for example.

## License
MIT License

## Contributing
[Code inspiration from](https://github.com/elizabetholsavsky/SVG-logo-maker.git).  Elizabeth used multiple files to be able to organize and keep all her code clean.  I really liked her approach and did similar.
[Research materials](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering),

[Research materials](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse),

[Research materials](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect),

[Research materials](https://www.w3.org/TR/SVG/shapes.html#CircleElement),

## Tests
Each shape class (Circle, Square, Rectangle, Ellipse and Triangle) is tested for a render() method.  It will return a string for the corresponding SVG file with matching color and text requests. Type "npm test" in the command line for Jest to run the tests.

## Questions
Ask questions by contacting me at:

Github: https://github.com/strait2thepoint

Email: sewstrait@gmail.com