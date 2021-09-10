import { IIterable, IIterator } from './Iterator'

export {}

interface IMenu extends IIterable<string> {
  addItem(name: string): void
  removeItem(name: string): void
  hasItem(name: string): boolean
}

class MenuIterator implements IIterator<string> {
  private position = 0
  constructor(private items: string[]) {}

  hasNext(): boolean {
    return this.position < this.items.length
  }
  next(): string | null {
    if (this.hasNext()) {
      const next = this.items[this.position]
      this.position += 1
      return next
    }
    return null
  }
  remove(): void {
    if (this.position < this.items.length) {
      this.items = this.items.slice(this.position, 1)
    }
  }
}

class DinnerMenu implements IMenu {
  private items: string[] = []

  addItem(name: string): void {
    this.items.push(name)
  }
  removeItem(name: string): void {
    const index = this.items.indexOf(name)
    if (index >= 0) {
      this.items.splice(index, 1)
    }
  }
  hasItem(name: string): boolean {
    return this.items.indexOf(name) >= 0
  }
  createIterator(): IIterator<string> {
    return new MenuIterator(this.items)
  }
}

function main() {
  const menu: IMenu = new DinnerMenu()
  menu.addItem('水果沙拉')
  menu.addItem('夫妻肺片')
  menu.addItem('如鱼得水')
  menu.addItem('雪花牛排')
  menu.removeItem('夫妻肺片')
  const iterator = menu.createIterator()
  let item
  while (iterator.hasNext()) {
    item = iterator.next()
    console.log('item = ', item)
  }
}

main()
