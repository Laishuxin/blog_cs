export {}

interface IData {
  getData(): string
  setData(data: string): void
}

class Data implements IData {
  constructor(private data: string) {}

  getData(): string {
    return this.data
  }
  setData(data: string): void {
    this.data = data
  }
}

type Keys<T> = T extends IData ? keyof IData : never

function getProxy<T extends object>(data: T): T {
  const proxy = new Proxy<T>(data, {
    set(target, p, v) {
      console.log('p = ', p)
      console.log('v = ', v)
      return Reflect.set(target, p, v)
    },
    get(target, p) {
      return Reflect.get(target, p)
    },
  })
  return proxy
}

function main() {
  const proxy = getProxy(new Data('data'))
  const data = proxy.getData()
  proxy.setData('world')
  console.log('data = ', data)
}
main()
