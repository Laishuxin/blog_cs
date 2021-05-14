---
title: 设计模式 - 设计原则
time: 2021-05-14
author: ru shui
category: design patterns
tag:
  - design pattern
visitor: false
article: true
sticky: false
---

## 面向接口

> 面向接口编程，而不是针对实现编程。

面向接口编程的好处在于：

- 我们在使用时，只需要知道接口提供的方法的用途，而不需要知道接口的具体实现。
- 可以实现接口复用。

### 代码实现

```typescript
interface FlyBehavior {
  fly(): void
}

class FlyWithWings implements FlyBehavior {
  fly() {
    console.log('实现飞行行为...')
  }
}

class FlyNoWay implements FlyBehavior {
  fly() {
    console.log('飞不起来...')
  }
}
```

在上面的例子中，我们定义了一个飞的行为（FlyBehavior）的接口，在实际的生产中，我们可以根据不同的需要实现这个接口。

## 变与不变

> 把不变的部分抽象到基类中，把变化的部分“封装”（独立）起来，好让其他部分不受影响。

例如：对于一只鸭子，我们知道它会游泳（swim），而且我们还想展示（display）这只鸭子。但是，并非所有的鸭子都会飞（fly），也并非所有的鸭子都会呱呱叫（quack）。于是，我们可以把游泳（swim）和展示（display）存放在公共类中，把飞（fly）和呱呱叫（quack）抽离出来。

### 代码实现

```typescript
abstract class Duck {
  // protected name: string
  constructor(protected name: string) {}

  public display() {
    console.log(`${this.name}: flying...`)
  }
  public swim() {
    console.log(`${this.name}: swimming...`)
  }
}

interface Flyable {
  fly(): void
}

interface Quackable {
  quack(): void
}

/**
 * 绿头野鸭
 */
class MallardDuck extends Duck implements Flyable, Quackable {
  constructor(name: string) {
    super(name)
  }

  quack(): void {
    console.log(`${this.name}: quacking...`)
  }
  fly(): void {
    console.log(`${this.name}: flying...`)
  }
}

class RedheadDuck extends Duck implements Flyable {
  fly(): void {
    console.log(`${this.name}: flying...`)
  }
}
```

## 组合

> 多用组合，少用继承。

在讲组合之前，我们先考虑一下面向对象的基本特性之继承。

### 继承

来看下面的一个例子：我们已经设计处鸭子类（Duck），现在我们想让某些鸭子具有会飞的属性。

```typescript
// 基类
abstract class Duck {
  abstract display(): void
  abstract swim(): void
}
```

我们可以通过继承来实现这个需求，只需要在基类（Duck）中，添加一个 `fly` 方法即可。

```typescript
abstract class Duck {
  abstract display(): void
  abstract swim(): void

  // ⬇⬇⬇⬇⬇⬇⬇
  abstract fly(): void
}
```

### 组合
除了使用继承实现之外，我们还可以使用组合进行实现。来看具体的代码：
```typescript

interface FlyBehavior {
  fly(): void
}

abstract class Duck {
  // ...
  abstract swim(): void

  protected flyBehavior!: FlyBehavior

  fly() {
    this.flyBehavior.fly()
  }
}
```

我们为 `Duck` 添加一个成员属性 `flyBehavior`，而具体的 `fly` 方法是通过调用 `flyBehavior.fly` 实现的。
咋一看，这样做比单纯的继承要复杂的多。但是，这样的做的好处在于，`fly` 方法可以在**运行时**才确定的（当然，javascript 也可以在运行时修改 `fly` 方法）。而且，我们可以根据不同的**策略**，定制不同的 `fly` 方法。

来看具体的代码：
```typescript
abstract class Duck {
  // ...
  setFlyBehavior(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior
  }

  getFlyBehavior(): FlyBehavior {
    return this.flyBehavior
  }
}

class RedheadDuck extends Duck {
  display(): void {
    console.log('RedheadDuck: displaying...')
  }

  swim(): void {
    console.log('RedheadDuck: swimming...')
  }
}

class FlyFastest implements FlyBehavior {
  fly() {
    console.log('fly fastest...')
  }
}

class FlySlowest implements FlyBehavior {
  fly() {
    console.log('fly slowest...')
  }
}

function test() {
  const flyFast = new FlyFastest()
  const flySlow = new FlySlowest()
  
  const duck = new RedheadDuck(flyFast)
  duck.fly()
  duck.setFlyBehavior(flySlow)
  duck.fly()
}
test()
```

我们只需要为 Duck 类添加 getter 和 setter 就可以实现运行时调用不同的策略。

事实上，java bean 是组合原则的一个很好体现。

