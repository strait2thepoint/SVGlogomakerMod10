const circle = require('../lib/Circle');
const Shape = require('./Parentclasstest')

describe('Circle', () => {
it('should return SVG logo with user choice of shape color, choice text and text color', () => {
    const circle = new Circle('pink','LJS','aqua');
    expect(circle.render()).toEqual(
        `<circle cx="150" cy="100" r="100" fill="pink" />`
    );
});
});

