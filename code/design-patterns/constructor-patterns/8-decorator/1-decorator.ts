export {}
const MILK_PRICE = 5
const SOY_PRICE = 10
const CHOCOLATE_PRICE = 8
const ESPRESSO_PRICE = 100
const LONGBLACK_PRICE = 120
const SHORTBLACK_PRICE = 125
const DECAF_PRICE = 130

interface IDrink {
  cost(): number
  getDescription(): string
}

abstract class Decorator implements IDrink {
  protected drink!: IDrink

  constructor(drink: IDrink) {
    this.drink = drink
  }

  public cost(): number {
    return this.drink.cost()
  }
  public getDescription(): string {
    return this.drink.getDescription()
  }
}

abstract class Drink implements IDrink {
  protected description: string = ''

  constructor() {}

  public abstract cost(): number
  public getDescription(): string {
    return this.description
  }
}

abstract class Coffee extends Drink {}

class Decaf extends Coffee {
  constructor() {
    super()
    this.description += 'Decaf'
  }
  public cost(): number {
    return DECAF_PRICE
  }
}

class LongBlack extends Coffee {
  constructor() {
    super()
    this.description += 'LongBlack'
  }

  public cost(): number {
    return LONGBLACK_PRICE
  }
}

class Espresso extends Coffee {
  constructor() {
    super()
    this.description += 'Espresso'
  }
  public cost(): number {
    return ESPRESSO_PRICE
  }
}

class ShortBlack extends Coffee {
  constructor() {
    super()
    this.description += 'ShortBlack'
  }

  public cost(): number {
    return SHORTBLACK_PRICE
  }
}

class Milk extends Decorator {
  public cost(): number {
    return super.cost() + MILK_PRICE
  }

  public getDescription(): string {
    return this.drink.getDescription() + ' + milk'
  }
}

class Soy extends Decorator {
  public cost(): number {
    return super.cost() + SOY_PRICE
  }
  public getDescription(): string {
    return super.getDescription() + ' + soy'
  }
}
class Chocolate extends Decorator {
  public cost(): number {
    return super.cost() + CHOCOLATE_PRICE
  }
  public getDescription(): string {
    return super.getDescription() + ' + chocolate'
  }
}

class Sugar extends Decorator {
  public cost(): number {
    return super.cost() + 2
  }

  public getDescription(): string {
    return super.getDescription() + ' + sugar'
  }
}

function _main() {
  let coffee: IDrink = new LongBlack()
  coffee = new Milk(coffee)
  console.log('cost = ', coffee.cost(), ', desc = ', coffee.getDescription())
  coffee = new Soy(coffee)
  console.log('cost = ', coffee.cost(), ', desc = ', coffee.getDescription())
}

function main() {
  let coffee: IDrink = new ShortBlack()
  coffee = new Sugar(coffee)
  console.log('cost = ', coffee.cost(), ', desc = ', coffee.getDescription())
  coffee = new Milk(coffee)
  console.log('cost = ', coffee.cost(), ', desc = ', coffee.getDescription())
}

main()
