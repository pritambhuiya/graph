const assert = require('assert');
const { Line } = require('../src/line.js');
const { Point } = require('../src/point.js');

describe('Line', () => {
  it('Should equate two instances of line.', () => {
    const line1 = new Line(new Point(0, 0), new Point(2, 2));
    const line2 = new Line(new Point(0, 0), new Point(3, 2));

    assert.strictEqual(line1.equals(line1), true);
    assert.strictEqual(line1.equals(line2), false);
    assert.strictEqual(line1.equals({ x: 0, y: 0 }, { x: 2, y: 2 }), false);
  });

  it('Shoud give the slope of given line', () => {
    const line = new Line(new Point(0, 0), new Point(2, 2));
    assert.strictEqual(line.slope(), 0.79);
  });

  it('Should give true if the point lies on line.', () => {
    const line = new Line(new Point(0, 0), new Point(2, 2));
    const point1 = new Point(1, 1);

    assert.strictEqual(line.contains(point1), true);
  });

  it('Should give false if the point does not lies on line.', () => {
    const line = new Line(new Point(0, 0), new Point(2, 2));
    const point2 = new Point(1, 2);

    assert.strictEqual(line.contains(point2), false);
  });

  it('Should give false if the point lies outside of line segment.', () => {
    const line = new Line(new Point(0, 0), new Point(2, 2));
    const point3 = new Point(3, 3);

    assert.strictEqual(line.contains(point3), false);
  });
});
