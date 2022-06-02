class Line {
  #startingPoint;
  #endingPoint;

  constructor(startingPoint, endingPoint) {
    this.#startingPoint = startingPoint;
    this.#endingPoint = endingPoint;
  }

  equals(otherLine) {
    return otherLine instanceof Line &&
      this.#startingPoint.equals(otherLine.#startingPoint) &&
      this.#endingPoint.equals(otherLine.#endingPoint);
  }

  slope() {
    const dy = this.#startingPoint.deltaY(this.#endingPoint);
    const dx = this.#startingPoint.deltaX(this.#endingPoint);

    const radians = Math.atan(dy / dx);
    return parseFloat(radians.toFixed(2));
  }

  contains(givenPoint) {
    const startingToGivenPoint = this.#startingPoint.distanceFrom(givenPoint);
    const endingToGivenPoint = this.#endingPoint.distanceFrom(givenPoint);
    const lengthOfLine = this.#startingPoint.distanceFrom(this.#endingPoint);

    return lengthOfLine === startingToGivenPoint + endingToGivenPoint;
  }
}

exports.Line = Line;
