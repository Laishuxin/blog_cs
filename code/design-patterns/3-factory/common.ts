export abstract class Pizza {
  constructor(private name: string) {}

  public abstract prepare(): void

  public bake(): void {
    console.log(`${this.name} pizza is baking...`)
  }

  public cut(): void {
    console.log(`${this.name} pizza is cutting...`)
  }

  public box(): void {
    console.log(`${this.name} pizza is boxing...`)
  }

  public toString(): string {
    return `${this.name}Pizza`
  }
}

export class CheesePizza extends Pizza {
  constructor() {
    super('Cheese')
  }

  public prepare(): void {
    console.log('Cheese pizza is preparing...')
  }
}

export class GreekPizza extends Pizza {
  constructor() {
    super('Greek')
  }

  public prepare(): void {
    console.log('Greek pizza is preparing...')
  }
}
export class NewYorkGreekPizza extends Pizza {
  constructor() {
    super('NewYork Greek')
  }

  public prepare(): void {
    console.log('NewYork Greek pizza is preparing...')
  }
}

export class NewYorkCheesePizza extends Pizza {
  constructor() {
    super('NewYork Cheese')
  }

  public prepare(): void {
    console.log('NewYork Cheese pizza is preparing...')
  }
}

export class ChicagoGreekPizza extends Pizza {
  constructor() {
    super('Chicago Greek')
  }

  public prepare(): void {
    console.log('Chicago Greek pizza is preparing...')
  }
}
export class ChicagoCheesePizza extends Pizza {
  constructor() {
    super('Chicago Cheese')
  }

  public prepare(): void {
    console.log('Chicago Cheese pizza is preparing...')
  }
}
