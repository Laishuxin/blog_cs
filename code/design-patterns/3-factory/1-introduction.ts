import { CheesePizza, GreekPizza, Pizza } from './common'

class PizzaStore {
  protected createPizza(type: string): Pizza | null {
    type = type.toLowerCase()
    let pizza: Pizza | null = null
    switch (type) {
      case 'cheese':
        pizza = new CheesePizza()
        break
      case 'greek':
        pizza = new GreekPizza()
        break
    }
    return pizza
  }

  public orderPizza(type: string): Pizza | null {
    const pizza = this.createPizza(type)
    if (!pizza) return null
    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.box()
    return pizza
  }
}

function main() {
  let type = 'cheese'
  let pizza = new PizzaStore().orderPizza(type)
  console.log(pizza)
}

main()
