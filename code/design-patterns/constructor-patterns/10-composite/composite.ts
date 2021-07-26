export {}
interface IIterator<T> {
  hasNext(): boolean;
  next(): T | null;
  remove?(): void;
  [Symbol.iterator](): T | null;
}

// class MyIterator<T> implements IIterator<T> {
//   private position = 0;
//   private items: T[];
  
//   constructor(items: T[]) {
//     this.items = items;
//   }
//   [Symbol.iterator](): T | null {
//     return this.next();
//   }
//     hasNext(): boolean {
//       return this.position < this.items.length;
//     }
//     next(): T | null {
//       if (this.hasNext()) {
//         return this.items[this.position++];
//       }
//       return null;
//     }
// }

class  NullIterator implements IIterator<any> {
  [Symbol.iterator]() {
    return this.next();
  }
  hasNext(): boolean {
    throw new Error("Method not implemented.");
  }
  next(): any {
    throw new Error("Method not implemented.");
  }

}

abstract class MenuComponent {
  public getName(): string {
    throw new Error("Unsupported error");
  }  
  public getDescription(): string {
    throw new Error("Unsupported error");
  }
  public addItem(menuComponent: MenuComponent): void {
    throw new Error("Unsupported error");
  }
  public removeItem(menuComponent: MenuComponent): void {
    throw new Error("Unsupported error");
  }
  public hasItem(menuComponent: MenuComponent): void {
    throw new Error("Unsupported error");
  }
  public createIterator(): IIterator<MenuComponent> {
    throw new Error("Unsupported error");
  }
  public print(): void {
    throw new Error("Unsupported error");
  }
}

class MenuItem extends MenuComponent {
  constructor(private name: string, private desc: string) {
    super();
  }
  
  public getName(): string {
    return this.name;
  }
  public getDescription(): string {
    return this.desc;
  }
  public print(): void {
    console.log('name = ', this.name, ', description = ', this.desc);
  }
  public createIterator() {
    return new NullIterator()
  }
}

class Menu extends MenuComponent {

  private items = new Map<MenuComponent, boolean>()
  constructor(private name: string, private desc: string) {
    super();
  }

  public getName(): string {
    return this.name;
  }  
  public getDescription(): string {
    return this.desc;
  }
  public addItem(menuComponent: MenuComponent): void {
    this.items.set(menuComponent, true);
  }
  public hasItem(menuComponent: MenuComponent): boolean {
    return this.hasItem(menuComponent);
  }
  public removeItem(menuComponent: MenuComponent): void {
    this.items.delete(menuComponent);
  }
  public createIterator(): IIterator<MenuComponent> {
    return new CompositeIterator([...this.items.keys()]);
  }
  
  public print(): void {
    console.log('name = ', this.name, ', description = ', this.desc);
    console.log('----------------\n');
  }
}

class CompositeIterator implements IIterator<MenuComponent> {
  private stack: MenuComponent[] = []

  constructor(iterator: MenuComponent[]) {
    this.stack.push(...iterator)
  }

  hasNext(): boolean {
    return this.stack.length > 0;
  }

  next(): MenuComponent | null {
    if (this.hasNext()) {
      const component = this.stack.pop();
      if (component instanceof Menu) {
        const it = component.createIterator();
        while (it.hasNext()) {
          this.stack.push(it.next()!)
        }
      }
      return component!;
    }
    return null;
  }

  [Symbol.iterator]() {
    return this.next();
  }
}


function main() {
  const breakfastMenu: MenuComponent = new Menu('1-breakfast menu', 'breakfast menu...')
  const lunchMenu: MenuComponent = new Menu('2-lunch menu', 'lunch menu...')
  const dinnerMenu: MenuComponent = new Menu('3-dinner menu', 'dinner menu...')
  const allMenus = new Menu('0-all menus', 'all menus combined...');
  allMenus.addItem(breakfastMenu);
  allMenus.addItem(lunchMenu);
  allMenus.addItem(dinnerMenu);
  
  dinnerMenu.addItem(new MenuItem('3-1-fruit salad', 'fruit salad...'));
  dinnerMenu.addItem(new MenuItem('3-2-watermelon', 'watermelon...'));
  dinnerMenu.addItem(new MenuItem('3-3-coffee', 'coffee...'));
  lunchMenu.addItem(new MenuItem('2-1-rice with milk', 'rice with milk...'));
  
  const it = allMenus.createIterator();
  try {
    console.log('all menu: ');
    while (it.hasNext()) {
      const menu = it.next()
      menu?.print();
    }
    
  } catch (e) {
    console.log('iterating: ', e);
  }
  // allMenus.print();
}

main();