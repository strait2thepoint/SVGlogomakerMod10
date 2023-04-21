const rectangle = require('../Rectangle');
const Shape = require('./Parentclasstest');

describe('Rectangle', () => {
it('should return SVG logo with user choice of shape color, choice text and text color', () => {
const rectangle = new Rectangle('pink','LJS','aqua');
expect(rectangle.render()).toEqual(`<rect width="200" height="200" fill="pink"/>`
);
});
});