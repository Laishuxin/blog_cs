export {}
abstract class Duck {
  // protected name: string
  constructor(protected name: string) {}

  public display() {
    console.log(`${this.name}: flying...`)
  }
  public swim() {
    console.log(`${this.name}: swimming...`)
  }
}

interface Flyable {
  fly(): void
}

interface Quackable {
  quack(): void
}

/**
 * 绿头野鸭
 */
class MallardDuck extends Duck implements Flyable, Quackable {
  constructor(name: string) {
    super(name)
  }

  quack(): void {
    console.log(`${this.name}: quacking...`)
  }
  fly(): void {
    console.log(`${this.name}: flying...`)
  }
}

class RedheadDuck extends Duck implements Flyable {
  fly(): void {
    console.log(`${this.name}: flying...`)
  }
}

function testChange() {
  const mallardDuck = new MallardDuck('mallard duck 1')
  const redHeadDuck = new RedheadDuck('read head duck 1')
  mallardDuck.display()
  mallardDuck.fly()
  mallardDuck.quack()

  console.log('----------')
  redHeadDuck.display()
  redHeadDuck.fly()
}

testChange()
