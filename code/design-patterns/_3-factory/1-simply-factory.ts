export {}
/* 1-simply-factory.ts */

abstract class Pizza {
  name!: string
  dough!: string
  sauce!: string
  readonly toppings: Array<any> = []

  prepare(): void {
    console.log(`Preparing: ${this.name}`)
    console.log(`Tossing dough...`)
    console.log(`Adding sauce...`)
    console.log(`Adding toppings: `, this.toppings)
  }

  bake(): void {
    console.log('Bake for 25 minutes at 350')
  }

  cut(): void {
    console.log(`Cutting the pizza into diagonal slices.`)
  }

  box(): void {
    console.log(`Place pizza in official PizzaStore box`)
  }
}

class CheesePizza extends Pizza {
  constructor() {
    super()
    this.name = 'cheese pizza'
    this.dough = 'cheese dough'
    this.sauce = 'cheese sauce'
  }
}

class GreekPizza extends Pizza {
  constructor() {
    super()
    this.name = 'greek pizza'
    this.dough = 'greek dough'
    this.sauce = 'greek sauce'
  }
}

class PepperoniPizza extends Pizza {
  constructor() {
    super()
    this.name = 'pepperoni pizza'
    this.dough = 'pepperoni dough'
    this.sauce = 'pepperoni sauce'
  }
}

// function orderPizza (type: string): Pizza {
//   let pizza: Pizza
//   if (type === 'cheese') {
//     pizza = new CheesePizza();
//   } else if (type === 'greek') {
//     pizza = new GreekPizza();
//   } else if (type === 'pepperoni') {
//     pizza = new PepperoniPizza();
//   } else {
//     throw new TypeError(`${type} pizza not exists.`);
//   }

//   pizza.prepare();
//   pizza.bake();
//   pizza.cut();
//   pizza.box();
//   return pizza;
// }

class SimpleFactory {
  createPizza(type: string): Pizza {
    let pizza: Pizza
    if (type === 'cheese') {
      pizza = new CheesePizza()
    } else if (type === 'greek') {
      pizza = new GreekPizza()
    } else if (type === 'pepperoni') {
      pizza = new PepperoniPizza()
    } else {
      throw new TypeError(`${type} pizza not exists.`)
    }
    return pizza
  }
}

function orderPizza(type: string): Pizza {
  const factory = new SimpleFactory()
  const pizza = factory.createPizza('cheese')

  pizza.prepare()
  pizza.bake()
  pizza.cut()
  pizza.box()
  return pizza
}

class PizzaStore {
  constructor(private factory: SimpleFactory) {}

  orderPizza(type: string): Pizza {
    const pizza = this.factory.createPizza(type)

    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.box()
    return pizza
  }
}
