const assert = require('assert');
const { Point } = require('../src/point.js');

describe('Point', () => {
  it('Should tell if two instances of Point are equal.', () => {
    const point1 = new Point(1, 2);
    const point2 = new Point(1, 2);
    const point3 = new Point(2, 2);
    assert.strictEqual(point1.equals(point2), true);
    assert.strictEqual(point1.equals(point3), false);
  });
});
