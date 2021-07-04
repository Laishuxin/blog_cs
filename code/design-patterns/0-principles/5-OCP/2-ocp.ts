export {}

enum ShapeType {
  circle,
  triangle,
  rectangle,
};

abstract class Shape {
  // constructor(protected type: ShapeType) {}
  protected _type!: ShapeType;
  get type() {return this._type}
  abstract draw():  void;
}

class Circle extends Shape {
  constructor() {
    super();
    this._type = ShapeType.circle;
  }

  draw(): void {
    console.log('drawing a circle...');
  }
}
class Rectangle extends Shape {
  constructor() {
    super();
    this._type = ShapeType.rectangle;
  }

  draw(): void {
    console.log('drawing a rectangle...');
  }
}

class Triangle extends Shape {
  constructor() {
    super();
    this._type = ShapeType.triangle;
  }

  draw(): void {
    console.log('drawing a triangle...');
  }
}

class Graph {
  constructor(private shape: Shape) {}
  draw(): void {
    this.shape.draw();
  }
}

function main() {
  new Graph(new Triangle()).draw();
}

main();