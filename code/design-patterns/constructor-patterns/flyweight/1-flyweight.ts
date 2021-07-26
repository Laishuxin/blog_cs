export {}
// 设计模式 - 享元模式
interface ITool {
  use(): void;
}

class Tool implements ITool {
  use(): void {
    console.log('use tool...');
  }
}


class ToolFactory {
  private pool: Map<string, Tool> = new Map();
  getTool(key: string) {
    let result = this.pool.get(key);
    if (!result) {
      result = new Tool();
      this.pool.set(key, result)
    }
    return result;
  }

  getToolCount(): number {
    return this.pool.size;
  }
}

function main() {
  const factory = new ToolFactory();
  let tool1 = factory.getTool('hammer');
  let tool2 = factory.getTool('hammer');
  tool1.use();
  tool2.use();
  console.log(tool1 === tool2)
}

main();