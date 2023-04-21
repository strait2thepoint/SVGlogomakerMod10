const square = require('../lib/Square.js');
const Shape = require('./Parentclasstest.js')

describe('Square', () => {
it('should return SVG logo with user choice of shape color, choice text and text color', () => {
const square = new Square('pink','LJS','aqua');
expect(square.render()).toEqual(`<rect width="200" height="200" fill="pink"/>`
);
});
});