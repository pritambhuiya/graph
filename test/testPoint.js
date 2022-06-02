const assert = require('assert');
const { Point } = require('../src/point.js');

describe('Point', () => {
  it('Should equate two instances of Point.', () => {
    const point1 = new Point(1, 2);
    const point2 = new Point(1, 2);
    const point3 = new Point(2, 2);

    assert.strictEqual(point1.equals(point2), true);
    assert.strictEqual(point1.equals(point3), false);
    assert.strictEqual(point1.equals({ x: 1, y: 2 }), false);
  });

  it('Should give distance from the given point.', () => {
    const point1 = new Point(0, 0);
    const point2 = new Point(3, 4);
    const point3 = new Point(4, 5);

    assert.strictEqual(point1.distanceFrom(point2), 5);
    assert.strictEqual(point1.distanceFrom(point3), 6.403);
  });

  it('Should give distance between same points.', () => {
    const point1 = new Point(0, 0);
    assert.strictEqual(point1.distanceFrom(point1), 0);
  });

  it('Should give distance from a point behind it.', () => {
    const point1 = new Point(3, 4);
    const point2 = new Point(0, 0);

    assert.strictEqual(point1.distanceFrom(point2), 5);
  });

  it('Should give deltaX', () => {
    const point1 = new Point(0, 0);
    const point2 = new Point(3, 0);

    assert.strictEqual(point1.deltaX(point2), 3);
  });

  it('Should give deltaY', () => {
    const point1 = new Point(0, 0);
    const point2 = new Point(0, 3);

    assert.strictEqual(point1.deltaY(point2), 3);
  });
});
