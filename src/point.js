class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(otherPoint) {
    return otherPoint instanceof Point &&
      otherPoint.x === this.x &&
      otherPoint.y === this.y;
  }

  distanceFrom(otherPoint) {
    const deltaX = otherPoint.x - this.x;
    const deltaY = otherPoint.y - this.y;
    const distance = Math.hypot(deltaX, deltaY);
    return +distance.toFixed(3);
  }
}

exports.Point = Point;
