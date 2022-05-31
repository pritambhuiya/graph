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
}

exports.Point = Point;