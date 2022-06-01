const assert = require('assert');
const { Line } = require('../src/line.js');
const { Point } = require('../src/point.js');

describe('Line', () => {
  it('Should tell whether two instances of Line are equal.', () => {
    const line1 = new Line(new Point(0, 0), new Point(2, 2));
    const line2 = new Line(new Point(0, 0), new Point(3, 2));

    assert.strictEqual(line1.equals(line1), true);
    assert.strictEqual(line1.equals(line2), false);
    assert.strictEqual(line1.equals({ x: 0, y: 0 }, { x: 2, y: 2 }), false);
  });
});
