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
}

exports.Line = Line;
