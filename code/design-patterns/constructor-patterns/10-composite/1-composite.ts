export {}
// 设计模式 - 组合模式
// 组合模式可以花费为数据结构模式的一种，
// 其采用的树形结构管理对象容器中的复杂关系
// 通过向外界暴露统一的接口，简化客户端的操作。

/**
 * 定义抽象接口，对于叶子节点，为了方便客户端的调用，
 * 默认实现了 `add` 和 `remove` 方法，但对于叶子节点
 * 则会抛出 Unsupported Error.
 */
abstract class Component {
  constructor(protected name: string) {}
  public abstract process(): void
  public add(component: Component): number {
    throw new Error('Unsupported Error')
  }
  public remove(id: number): void {
    throw new Error('Unsupported Error')
  }
}

class Composite extends Component {
  private static id: number = 0
  private container: Map<number, Component> = new Map()
  public process(): void {
    console.log(`composite: ${this.name}`)
    for (const component of this.container.values()) {
      component.process()
    }
  }

  public add(component: Component) {
    this.container.set(Composite.id, component)
    return Composite.id++
  }

  public remove(id: number) {
    this.container.delete(id)
  }
}
class Leaf extends Component {
  public process(): void {
    console.log(`leaf: ${this.name}`)
  }
}

function invoke(component: Component) {
  try {
    return component.process()
  } catch (e) {
    console.log('encounter error: ', e)
    return e
  }
}

function main() {
  const root: Component = new Composite('root')
  const composite1: Component = new Composite('composite1')
  const composite2: Component = new Composite('composite2')
  const leaf1: Component = new Leaf('leaf1')
  const leaf2: Component = new Leaf('leaf2')
  const leaf3: Component = new Leaf('leaf3')
  root.add(composite1)
  const id = root.add(composite2)
  composite1.add(leaf1)
  composite1.add(leaf2)
  composite2.add(leaf3)

  console.log('--------------------root-------------------')
  invoke(root)
  console.log('--------------------composite2-------------------')
  invoke(composite2)
  console.log('--------------------root-------------------')
  root.remove(id)
  invoke(root)
}

main()
