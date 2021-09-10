interface IInterface {
  method1(): void
  method2(): void
  method3(): void
}

abstract class AClass implements IInterface {
  method1(): void {}
  method2(): void {}
  method3(): void {}
}

function useInterface(i: IInterface): void {
  i.method1()
}

function main() {
  const aClass = new (class extends AClass {
    method1() {
      console.log('这是一个匿名类...')
    }
  })()

  useInterface(aClass)
}

main()
