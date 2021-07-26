export {}
// 设计模式 - 适配器模式

interface ITarget {
  print(): void;
}

interface IAdaptee {
  show(): void;
}

class Adapter implements ITarget {
  constructor(private apdatee: IAdaptee) {}
  print(): void {
    return this.apdatee.show();
  }
}

class Adaptee implements IAdaptee {
  show(): void {
    console.log('Talk is cheap, show me the code.');
  }
}

function main() {
  const target: ITarget = new Adapter(new Adaptee());
  target.print();
}

main();