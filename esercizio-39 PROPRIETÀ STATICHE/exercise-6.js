class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(shape) {
    if (shape instanceof Square) { //shape è un istanza di Square: true, riga 48)
      return shape.side * shape.side;
    } else if (shape instanceof Rectangle) {
      return shape.width * shape.height;
    } else if (shape instanceof Circle) {
      return shape.radius * shape.radius * 3.14;
    }
  }
}

/* 

ALTRO MODO PER SELEZIONARE PIù DI UNA FIGURA:

class AreaCalculator {
  static calculate(shape) {
    if (shape.side != undefined) {
      return 1;
    } else if (shape.width != undefined) {
      return 2;
    } else if (shape.radius != undefined) {
      return 3;
    }
  }
} */

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));