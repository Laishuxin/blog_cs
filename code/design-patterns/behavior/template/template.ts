export {}

// 设计模式 - 模板模式

abstract class Library {
  public step1(): boolean {
    const random = Math.random();
    return random >= 0.5;
  }

  public step3(): void {
    console.log('doing step3...');
  }
  public step5(): void {
    console.log('doing step5...');
  }

  public run() {
    if (this.step1()) {
      this.step2();
    }

    this.step3();
    for (let i = 0; i < 4; ++i) {
      this.step4();
    }
    this.step5();
  }

  // 变化的部分。也可以采用 public 的方式
  protected abstract step2(): void;
  protected abstract step4(): void;
}

class Application extends Library {
  protected step2(): void {
    console.log('doing step2...');
  }
  protected step4(): void {
    console.log('doing step4...');
  }
}

function main() {
  const app: Library = new Application();
  app.run();
}

main();