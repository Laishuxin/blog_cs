export {}
interface FlyBehavior {
  fly(): void
}

abstract class Duck {
  abstract display(): void
  abstract swim(): void

  fly() {
    this.flyBehavior.fly()
  }

  protected flyBehavior!: FlyBehavior
  constructor(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior
  }

  setFlyBehavior(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior
  }

  getFlyBehavior(): FlyBehavior {
    return this.flyBehavior
  }
}

class RedheadDuck extends Duck {
  display(): void {
    console.log('RedheadDuck: displaying...')
  }

  swim(): void {
    console.log('RedheadDuck: swimming...')
  }
}

class FlyFastest implements FlyBehavior {
  fly() {
    console.log('fly fastest...')
  }
}

class FlySlowest implements FlyBehavior {
  fly() {
    console.log('fly slowest...')
  }
}

function test() {
  const flyFast = new FlyFastest()
  const flySlow = new FlySlowest()
  
  const duck = new RedheadDuck(flyFast)
  duck.fly()
  duck.setFlyBehavior(flySlow)
  duck.fly()
}
test()