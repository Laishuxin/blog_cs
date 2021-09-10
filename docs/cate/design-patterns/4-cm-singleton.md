---
title: 设计模式 - 单例模式
time: 2021-07-04
author: ru shui
category: design pattern
tag:
  - design pattern
visitor: false
article: true
sticky: false
---

<center><img src="./images/design-pattern.jpg"></center>

单例的核心原理是将类的创建构造器进行私有化，从而使外部无法创建类实例，
类的实例由内部进行管理。

## 饿汉式

### 静态常量

在单例中使用静态成员常量作为我们的 `Singleton`。

```java
public class Singleton1 {
    private final static Singleton1 singleton = new Singleton1();

    private Singleton1() {
    }

    public static Singleton1 getInstance() {
        return Singleton1.singleton;
    }

    public final void show() {
        System.out.println("A singleton");
    }
}
```

优点：

1. 写法简单，就是在类装载的时候完成实例化，避免了线程同步问题。

缺点：

1. 浪费内存。在类装载的时候就进行实例化，没有达到懒加载的目的，如果
   从始至终都从未使用个这个单例的话就会导致内存的浪费。

使用场景：
明确要使用该类，同时，不想考虑线程问题的话，可以采用该方式实现。

### 静态代码块

```java
public class Singleton2 {
    private static final Singleton2 singleton;

    static {
        singleton = new Singleton2();
    }

    private Singleton2() {
    }

    public static Singleton2 getInstance() {
        return Singleton2.singleton;
    }

    public final void show() {
        System.out.println("A singleton");
    }
}
```

## 懒汉式

与饿汉式实现不同，懒汉式实现是在获取实例的时候，如果发现实例不存在，
则创建新的实例。

```java
public class Singleton1 {
    private static Singleton1 singleton;

    private Singleton1()  {}

    @Override
    public String toString() {
        return "Singleton1";
    }

    public static Singleton1 getInstance() {
        if (Singleton1.singleton == null) {
            Singleton1.singleton = new Singleton1();
        }
        return Singleton1.singleton;
    }
}
```

优点:

1. 按需创建。只有需要用到实例的时候，才会创建相应的实例。

缺点：

1. 存在线程安全问题。当其中一个线程进入 `if` 语句里面，在没有来得及创建
   实例时，另一个线程也进入 `if` 分支里面，这就会导致创建多个实例。

在实际开发中，不会使用这种模式实现单例。

### 同步方法

```java
public class Singleton2 {
    private static Singleton2 singleton;

    private Singleton2()  {}

    @Override
    public String toString() {
        return "Singleton1";
    }

    public static synchronized Singleton2 getInstance() {
        if (Singleton2.singleton == null) {
            Singleton2.singleton = new Singleton2();
        }
        return Singleton2.singleton;
    }
}
```

优点：

1. 解决线程安全。

缺点：

1. 效率太低。线程锁的颗粒度太大。

实际开发中也不推进使用这种方式实现。

### 双重检查

```java
public class Singleton3 {
    private static volatile Singleton3 singleton;

    private Singleton3()  {}

    @Override
    public String toString() {
        return "Singleton1";
    }

    public static Singleton3 getInstance() {
        if (Singleton3.singleton == null) {
            synchronized (Singleton3.class) {
                if (Singleton3.singleton == null) {
                    Singleton3.singleton = new Singleton3();
                }
            }
        }
        return Singleton3.singleton;
    }
}
```

注意事项：
使用静态代码块的时候需要进行二次判断，同时将单例设置为 `volatile`确保每次访问到的数据是最新的，否则还是会遇到线程同步问题。

优点：

1. 按需实例化。
2. 线程安全。

缺点：

1. 代码相对其他实现方式略显复杂。

实际开发可以使用它这种方式实现。

## 静态内部类

```java
public class Singleton {
    private Singleton() {
    }

    private static class InnerClass {
        private static final Singleton instance = new Singleton();
    }

    @Override
    public String toString() {
        return "A singleton";
    }

    public static synchronized  Singleton getInstance() {
        return InnerClass.instance;
    }
}
```

优点：避免了线程不安全的问题，利用静态内部类特点实现延迟加载，效率高。
采用类装载的机制来 保证初始化实例时只有一个线程。
静态内部类在 `Singleton` 被装载时并不会立即实例化，而是在需要实例化时，
调用 `getInstance` 方法的时候才会装载 `InnerClass` 类，从而完成 `Singleton` 实例化。

## 枚举

```java
public enum Singleton {
    instance;

    @Override
    public String toString() {
       return "A singleton";
    }
}
```

使用枚举实现单例可以避免线程问题，而且其实现方式很简单。

## 应用

在 `java.Runtime` 中就是采用了 单例的设计模式，而且是采用饿汉式的实现方式。

```java
public class Runtime {
    private static final Runtime currentRuntime = new Runtime();

    private static Version version;

    /**
     * Returns the runtime object associated with the current Java application.
     * Most of the methods of class {@code Runtime} are instance
     * methods and must be invoked with respect to the current runtime object.
     *
     * @return  the {@code Runtime} object associated with the current
     *          Java application.
     */
    public static Runtime getRuntime() {
        return currentRuntime;
    }

    /** Don't let anyone else instantiate this class */
    private Runtime() {}
    // ...
}
```
