class Line {
  constructor(startingPoint, endingPoint) {
    this.startingPoint = startingPoint;
    this.endingPoint = endingPoint;
  }

  equals(otherLine) {
    return otherLine instanceof Line &&
      this.startingPoint.equals(otherLine.startingPoint) &&
      this.endingPoint.equals(otherLine.endingPoint);
  }

  slope() {
    const dy = this.endingPoint.y - this.startingPoint.y;
    const dx = this.endingPoint.x - this.startingPoint.x;
    const radians = Math.atan(dy / dx);
    return parseFloat(radians.toFixed(2));
  }

  contains(point) {
    const startToPoint = this.startingPoint.distanceFrom(point);
    const endToPoint = this.endingPoint.distanceFrom(point);
    const lengthOfLine = this.startingPoint.distanceFrom(this.endingPoint);

    return lengthOfLine === startToPoint + endToPoint;
  }
}

exports.Line = Line;
