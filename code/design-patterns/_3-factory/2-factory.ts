class Pizza {
  constructor (public name: string) {}
  
  prepare () {
    console.log(`Preparing ${this.name} pizza...`);
  }

  bake () {
    console.log(`Baking ${this.name} pizza...`);
  }

  cut () {
    console.log(`Cutting ${this.name} pizza...`);
  }

  box () {
    console.log(`Boxing ${this.name} pizza...`);
  }
}

abstract class PizzaStore {
  name!: string;
  
  orderPizza (type: string): Pizza {
    const pizza: Pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
  
  abstract createPizza (type: string): Pizza
}

class NYStylePizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    let pizza: Pizza;
    if (type === 'Cheese') {
      pizza = new NYStyleCheesePizza();
    } else if (type === 'Greek') {
      pizza = new NYStyleGreekPizza();
    } else if (type === 'Clam') {
      pizza = new NYStyleClamPizza();
    } else {
      throw new TypeError(`${type} pizza not exists`);
    }
    return pizza;
  }
}

class ChicagoStylePizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    let pizza: Pizza;
    if (type === 'Cheese') {
      pizza = new ChicagoStyleCheesePizza();
    } else if (type === 'Greek') {
      pizza = new ChicagoStyleGreekPizza();
    } else if (type === 'Clam') {
      pizza = new ChicagoStyleClamPizza();
    } else {
      throw new TypeError(`${type} pizza not exists`);
    }
    return pizza;
  }
}

class NYStyleCheesePizza extends Pizza {
  constructor () { super('NYStyle Cheese'); }
}

class NYStyleGreekPizza extends Pizza {
  constructor () { super('NYStyle Greek'); }
}

class NYStyleClamPizza extends Pizza {
  constructor () { super('NYStyle Clam'); }
}

class ChicagoStyleCheesePizza extends Pizza {
  constructor () { super('ChicagoStyle Cheese'); }
}

class ChicagoStyleGreekPizza extends Pizza {
  constructor () { super('ChicagoStyle Greek'); }
}

class ChicagoStyleClamPizza extends Pizza {
  constructor () { super('ChicagoStyle Clam'); }
}
