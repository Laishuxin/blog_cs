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

设计模式的七大设计原则：

1. 单一职责原则
2. 接口隔离原则
3. 依赖倒置原则
4. 里氏替换原则
5. 开放封闭原则（OCP）
6. 迪米特法则
7. 合成复用原则

## 单一职责原则

对于类而言，单一职责要求一个类只负责一项职责。
如果类 A 负责两个不同的职责，如：职责 1 和职责 2。
当职责 1 需求改变时改变类 A，可能会造成职责 2 执行错误，
这种情况下就违法了单一职责原则。
所以我们需要把类 A 的分解为 A1， A2，分别负责不同的职责。

对于函数也类似。

### introduction

上面的说法可能有些抽象，让我们从具体的例子中体验一下这一原则。

需求：

1. 我们使用不同的交通工具出行。
2. 需要有时间限制。

### implementation

#### tradition

我们先来实现第一个功能：
```typescript
class Vehicle {
  public type: string;

  constructor(type: string) {
    this.type = type;
  }

  operate() {
    console.log(`${this.type} is running...`);
  }
}
```


从上面的例子上看，我们实现一个交通工具类 (`Vehicle`)，让
它执行一个 `operate` 方法，来现象出行。

接下来，我们来实现第二个功能：
```typescript
  operate(start: number, end: number) {
    const interval = end - start;
    const LIMIT = 20;
    if (interval <= LIMIT) { 
      console.log(`${this.type} is running...`);
    } else {
      console.log(`Out of time...`);
    }
  }
```

下面就开启我们的出行之旅：

```typescript
function main() {
  const car   = new Vehicle('car');
  const train = new Vehicle('train');
  const plane = new Vehicle('plane');
  
  car.operate(0, 10);
  train.operate(0, 10);
  plane.operate(0, 10);
}

main();
```

从实现上面看，汽车 (car) 和火车 (train) 会跑，这显然没有问题。
但是，飞机 (plane) 也会跑这显然就离谱了。
其次就是每次我们修改 `LIMIT`，对所有的出行工具都有影响。
但是，我们想对不同的工具进行不同的时间限制，如果从
上面的代码进行修改，我们得使用到很多的 `if else` 判断
才能实现。

显然，我们这样的设计是有缺陷的，也就是违反了**单一设计原则**。

#### design pattern

接下来，我们使用更好的设计（只是单纯演示，并没有使用具体的
设计模式），来实现上面的功能。

首先，我们通过类层面实现：
```typescript
abstract class Vehicle {
  public type: string

  constructor(type: string) {
    this.type = type
  }

  abstract operate(start: number, end: number): void
}

class RunnableVehicle extends Vehicle {
  operate(start: number, end: number): void {
    const interval = end - start
    if (interval <= 20) {
      console.log(`${this.type} is running...`)
    } else {
      console.log(`out of time...`)
    }
  }
}

class SwimmableVehicle extends Vehicle {
  operate(start: number, end: number): void {
    const interval = end - start
    if (interval <= 20) {
      console.log(`${this.type} is swimming...`)
    } else {
      console.log(`out of time...`)
    }
  }
}

class FlyableVehicle extends Vehicle {
  operate(start: number, end: number): void {
    const interval = end - start
    if (interval <= 20) {
      console.log(`${this.type} is flying...`)
    } else {
      console.log(`out of time...`)
    }
  }
}
```

我们将 `Vehicle` 类进行抽象，同时创建三个具体的类。
每个类只负责单一的职责。通过这样的修改后，我们再去
修改时间限制就不会影响到其他类了。

接下来我们再从方法层面实现：
```typescript
class Vehicle {
  public type: string;

  constructor(type: string) {
    this.type = type;
  }

  run(start: number, end: number) {
    const interval = end - start
    if (interval <= 20) {
      console.log(`${this.type} is running...`)
    } else {
      console.log(`out of time...`)
    }
  }
  
  fly(start: number, end: number) {
    const interval = end - start
    if (interval <= 20) {
      console.log(`${this.type} is flying...`)
    } else {
      console.log(`out of time...`)
    }
  }
  
  swim(start: number, end: number) {
    const interval = end - start
    if (interval <= 20) {
      console.log(`${this.type} is swimming...`)
    } else {
      console.log(`out of time...`)
    }
  }
}
```

#### comparison

通过比较上面两种实现方式，我们可以更好地理解
单一职责原则。利用这一原则，有利于我们后续对
代码的修改和维护。

### precautions

单一职责原则要求我们：
1. 降低类的复杂度，一个类只负责一项职责。
2. 提高类的可读性、可维护性。
3. 降低变化而引起的风险。
4. 通常情况下，我们应当遵守单一职责原则。只有当
   逻辑组够简单的时候，才可以在代码级违反单一职责原则。
   只有类中方法数量组够少，才可以在方法层面上保持
   单一职责原则。

## 接口隔离原则

## 依赖倒置原则

## 里氏替换原则

## 开放封闭原则（OCP）

## 迪米特法则

## 合成复用原则
