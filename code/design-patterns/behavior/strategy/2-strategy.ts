export {}
// 设计模式 - 策略模式

enum ETaxType {
  US,
  ZH,
  UK,
}

class Context {
  constructor(private type: ETaxType) {}
  public getType(): ETaxType {
    return this.type
  }
}

interface Strategy {
  calculate(count: number): number
}

class USStrategy implements Strategy {
  calculate(count: number): number {
    return count * (1 - 0.2)
  }
}
class UKStrategy implements Strategy {
  calculate(count: number): number {
    return count * (1 - 0.18)
  }
}
class ZHStrategy implements Strategy {
  calculate(count: number): number {
    return count * (1 - 0.15)
  }
}
class SimpleStrategyFactory {
  create(context: Context): Strategy | null {
    let strategy: Strategy | null = null
    const type = context.getType()
    if (type === ETaxType.UK) {
      strategy = new UKStrategy()
    } else if (type === ETaxType.US) {
      strategy = new USStrategy()
    } else if (type === ETaxType.ZH) {
      strategy = new ZHStrategy()
    }
    return strategy
  }
}

class Order {
  constructor(private factory: SimpleStrategyFactory) {}

  public calculate(context: Context, count: number): number {
    const strategy = this.factory.create(context)
    if (!strategy) {
      throw new TypeError(`No strategy for ${context.getType()}`)
    }
    return strategy.calculate(count)
  }
}

function main() {
  const order = new Order(new SimpleStrategyFactory())
  const result = order.calculate(new Context(ETaxType.UK), 100)
  console.log('result = ', result)
}

main()
