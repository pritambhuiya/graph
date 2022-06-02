class Point {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  equals(otherPoint) {
    return otherPoint instanceof Point &&
      otherPoint.#x === this.#x &&
      otherPoint.#y === this.#y;
  }

  deltaX(otherPoint) {
    return otherPoint.#x - this.#x;
  }

  deltaY(otherPoint) {
    return otherPoint.#y - this.#y;
  }

  distanceFrom(otherPoint) {
    const dx = this.deltaX(otherPoint);
    const dy = this.deltaY(otherPoint);
    const distance = Math.hypot(dx, dy);

    return +distance.toFixed(3);
  }
}

exports.Point = Point;
