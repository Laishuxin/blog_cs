import {
  NewYorkCheesePizza,
  NewYorkGreekPizza,
  ChicagoCheesePizza,
  ChicagoGreekPizza,
  Pizza,
} from './common'

abstract class PizzaStore {
  public orderPizza(type: string): Pizza | null {
    const pizza = this.createPizza(type)
    if (!pizza) return null
    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.box()
    return pizza
  }

  protected abstract createPizza(type: string): Pizza | null
}

class NewYorkPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza | null {
    let pizza: Pizza | null = null
    type = type.toLowerCase()

    switch (type) {
      case 'cheese':
        pizza = new NewYorkCheesePizza()
        break
      case 'greek':
        pizza = new NewYorkGreekPizza()
        break
      default:
        break
    }
    return pizza
  }
}
class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza | null {
    let pizza: Pizza | null = null
    type = type.toLowerCase()

    switch (type) {
      case 'cheese':
        pizza = new ChicagoCheesePizza()
        break
      case 'greek':
        pizza = new ChicagoGreekPizza()
        break
      default:
        break
    }
    return pizza
  }
}

function main() {
  let type = 'cheese'
  let pizza = new ChicagoPizzaStore().orderPizza(type)
  console.log(pizza)
}
main()
