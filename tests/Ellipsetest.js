const ellipse = require('../lib/Ellipse.js');
const Shape = require('./Parentclasstest.js')

describe('Ellipse', () => {
it('should return SVG logo with user choice of shape color, choice text and text color', () => {
const ellipse = new Ellipse ('pink','LJS','aqua');
expect(ellipse.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="pink" />`
);
});
});