export {}
abstract class Vehicle {
  public type: string

  constructor(type: string) {
    this.type = type
  }

  abstract operate(start: number, end: number): void
}

class RunnableVehicle extends Vehicle {
  operate(start: number, end: number): void {
    const interval = end - start
    if (interval <= 20) {
      console.log(`${this.type} is running...`)
    } else {
      console.log(`out of time...`)
    }
  }
}

class SwimmableVehicle extends Vehicle {
  operate(start: number, end: number): void {
    const interval = end - start
    if (interval <= 20) {
      console.log(`${this.type} is swimming...`)
    } else {
      console.log(`out of time...`)
    }
  }
}

class FlyableVehicle extends Vehicle {
  operate(start: number, end: number): void {
    const interval = end - start
    if (interval <= 20) {
      console.log(`${this.type} is flying...`)
    } else {
      console.log(`out of time...`)
    }
  }
}

function main() {
  const vehicle1: Vehicle = new RunnableVehicle('car')
  const vehicle2: Vehicle = new SwimmableVehicle('train')
  const vehicle3: Vehicle = new FlyableVehicle('plane')

  vehicle1.operate(0, 10)
  vehicle2.operate(0, 10)
  vehicle3.operate(0, 10)
}

main()
