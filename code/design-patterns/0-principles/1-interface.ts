interface FlyBehavior {
  fly(): void
}

class FlyWithWings implements FlyBehavior {
  fly() {
    console.log('实现飞行行为...')
  }
}

class FlyNoWay implements FlyBehavior {
  fly() {
    console.log('飞不起来...')
  }
}