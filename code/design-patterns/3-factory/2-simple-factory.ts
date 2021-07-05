import { CheesePizza, GreekPizza, Pizza } from "./common";

class SimpleFactory {
  createPizza(type: string): Pizza | null {
    let pizza: Pizza | null = null;
    type = type.toLowerCase();

    switch (type) {
      case 'cheese':
        pizza = new CheesePizza();
        break;
      case 'greek':
        pizza = new GreekPizza();
        break;
      default:
        break;
    }
    return pizza;
  }
}

class PizzaStore {
  constructor(private factory: SimpleFactory) {}
  
  public orderPizza(type: string): Pizza | null {
    const pizza = this.factory.createPizza(type);
    if (!pizza) return null;
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
}

function main() {
  new PizzaStore(new SimpleFactory()).orderPizza('cheese');
}

main();
