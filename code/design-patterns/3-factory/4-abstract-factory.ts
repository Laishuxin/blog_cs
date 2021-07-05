import {
  Pizza,
  ChicagoCheesePizza,
  ChicagoGreekPizza,
  NewYorkCheesePizza,
  NewYorkGreekPizza,
} from './common'

abstract class AbstractFactory {
  public abstract createPizza(type: string): Pizza | null;
}

class NewYorkFactory extends AbstractFactory {
  public createPizza(type: string): Pizza | null {
    let pizza: Pizza | null = null;
    type = type.toLowerCase();

    switch (type) {
      case 'cheese':
        pizza = new NewYorkCheesePizza();
        break;
      case 'greek':
        pizza = new NewYorkGreekPizza();
        break;
      default:
        break;
    }
    return pizza;
  }
}

class ChicagoFactory extends AbstractFactory {
  public createPizza(type: string): Pizza | null {
    let pizza: Pizza | null = null;
    type = type.toLowerCase();

    switch (type) {
      case 'cheese':
        pizza = new ChicagoCheesePizza();
        break;
      case 'greek':
        pizza = new ChicagoGreekPizza();
        break;
      default:
        break;
    }
    return pizza;
  }
}

class PizzaStore {
  private factory!: AbstractFactory;
  
  setFactory(factory: AbstractFactory) {
    this.factory = factory;
  }

  orderPizza(type: string) {
    const pizza = this.factory.createPizza(type);
    if (!pizza) return null;
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
}
