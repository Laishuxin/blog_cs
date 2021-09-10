enum ShapeType {
  circle,
  triangle,
  rectangle,
}

abstract class Shape {
  // constructor(protected type: ShapeType) {}
  protected _type!: ShapeType

  get type() {
    return this._type
  }
}

class Triangle extends Shape {
  constructor() {
    super()
    this._type = ShapeType.triangle
  }
}

class Rectangle extends Shape {
  constructor() {
    super()
    this._type = ShapeType.triangle
  }
}

class Circle extends Shape {
  constructor() {
    super()
    this._type = ShapeType.circle
  }
}

class Graph {
  constructor(private shape: Shape) {}

  draw() {
    const type = this.shape.type
    if (type === ShapeType.circle) {
      this.drawCircle()
    } else if (type === ShapeType.rectangle) {
      this.drawRectangle()
    } else if (type === ShapeType.triangle) {
      this.drawTriangle()
    }
  }

  drawCircle() {
    console.log('drawing a circle...')
  }
  drawTriangle() {
    console.log('drawing a triangle...')
  }
  drawRectangle() {
    console.log('drawing a rectangle...')
  }
}
