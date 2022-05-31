const assert = require('assert');
const { Point } = require('../src/point.js');

describe('Point', () => {
  it('Should tell if two instances of Point are equal.', () => {
    const point1 = new Point(1, 2);
    const point2 = new Point(1, 2);
    const point3 = new Point(2, 2);
    assert.strictEqual(point1.equals(point2), true);
    assert.strictEqual(point1.equals(point3), false);
    assert.strictEqual(point1.equals({ x: 1, y: 2 }), false);
  });

  it('Should tell distance from the given point.', () => {
    const point1 = new Point(0, 0);
    const point2 = new Point(3, 4);
    const point3 = new Point(4, 5);
    assert.strictEqual(point1.distanceFrom(point2), 5);
    assert.strictEqual(point1.distanceFrom(point3), 6.40);
  });

  it('Should give distance between same points.', () => {
    const point1 = new Point(0, 0);
    assert.strictEqual(point1.distanceFrom(point1), 0);
  });

  it('should tell distance from a point behind it.', () => {
    const point1 = new Point(3, 4);
    const point2 = new Point(0, 0);
    assert.strictEqual(point1.distanceFrom(point2), 5);
  });
});
