export {}

// 设计模式 - 策略模式
enum ETax {
  US_TAX = 0,
  ZH_TAX,
  UK_TAX,
}

interface IStrategy {
  (count: number): number
}

const strategies = new Map<ETax, IStrategy>()
function USCalculator(count: number): number {
  return count * (1 - 0.2)
}

function ZHCalculator(count: number): number {
  return count * (1 - 0.15)
}

function UKCalculator(count: number): number {
  return count * (1 - 0.19)
}

strategies.set(ETax.UK_TAX, UKCalculator)
strategies.set(ETax.US_TAX, USCalculator)
strategies.set(ETax.ZH_TAX, ZHCalculator)
const defaultStrategy = ZHCalculator

function main() {
  const count = 100
  const strategy = strategies.get(ETax.UK_TAX) || defaultStrategy
  console.log(strategy(count))
}

main()
