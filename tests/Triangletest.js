const triangle = require('../lib/Triangle.js');
const Shape = require('./Parentclasstest.js')

describe('Triangle', () => {
it('should return SVG logo with user choice of shape color, choice text and text color', () => {
const triangle = new Triangle('pink','LJS','aqua');
expect(triangle.render()).toEqual(`<polygon points="100, 15 200, 200 0, 200" fill="pink"/>`
);
});
});