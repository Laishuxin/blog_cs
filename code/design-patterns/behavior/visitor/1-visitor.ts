export {}

// 设计模式 - 访问者模式
// 访问者模式要求类的个数确定，
// 采用的 double dispatch 的方式，在运行时绑定。

abstract class Element {
  public abstract accept(visitor: Visitor): void
  public abstract process(): void
}

class ElementA extends Element {
  public accept(visitor: Visitor): void {
    visitor.visitElementA(this)
  }
  public process(): void {
    console.log('process elementA...')
  }
}

class ElementB extends Element {
  public accept(visitor: Visitor): void {
    visitor.visitElementB(this)
  }
  public process(): void {
    console.log('process elementB...')
  }
}

abstract class Visitor {
  public abstract visitElementA(element: ElementA): void
  public abstract visitElementB(element: ElementB): void
}

class VisitorA extends Visitor {
  public visitElementA(element: ElementA): void {
    console.log('visit elementA...', element)
  }
  public visitElementB(element: ElementB): void {
    throw new Error('Method not implemented.')
  }
}

class VisitorB extends Visitor {
  public visitElementA(element: ElementA): void {
    throw new Error('Method not implemented.')
  }
  public visitElementB(element: ElementB): void {
    console.log('visit elementB...', element)
  }
}

function main() {
  const element: Element = new ElementA()
  element.accept(new VisitorA())
}

main()
