---
title: 设计模式 - 原型模式
time: 2021-07-05
author: ru shui
category: design pattern
tag:
  - design pattern
visitor: false
article: true
sticky: false
---

## introduction

要讲清楚原型模式，我们需要通过一个示例来说明：
我们现在有一个类的原稿，我们想要根据这个类进行复制，创建出与这个类相同的类，
即对这个类的拷贝。

我们先用传统的方式实现：

```java
// ./Prototype.java
public class Prototype {
    private String name;
    private int id;

    public Prototype(String name, int id) {
        this.name = name;
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
       return "name: " + this.name + ", id: " + this.id;
    }
}

// ./Clone.java
public class Clone {
    public Prototype clone(Prototype prototype) {
        return new Prototype(prototype.getName(), prototype.getId());
    }
}

// ./Entry.java
public class Entry {
    public static void main(String[] args) {
        Prototype p0 = new Prototype("Tom", 1);

        final Clone clone = new Clone();
        Prototype p1 = clone.clone(p0);
        Prototype p2 = clone.clone(p0);
        System.out.println(p0);
        System.out.println(p1);
        System.out.println(p2);
    }
}

/*
name: Tom, id: 1
name: Tom, id: 1
name: Tom, id: 1
*/
```

## 原型模式

使用传统的方式实现方式简单，但是存在一个问题：当要复制的类中成员变量
发生变化的时候我们还需要修改复制方法，那么是否有一种一劳永逸的方法来
实现呢？

这就需要用到 java 为我们提供的 Cloneable 接口实现的复制：

```java
// ./Prototype.java
public class Prototype implements Cloneable {
    // ...

    @Override
    protected Prototype clone() {
        Prototype prototype = null;
        try {
            Object obj = super.clone();
            prototype = (Prototype)obj;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return prototype;
    }
}

// ./Entry.java
public class Entry {
    public static void main(String[] args) {
        Prototype p0 = new Prototype("Tom", 1);
        Prototype p1 = (Prototype) p0.clone();
        Prototype p2 = p0.clone();
    }
}
/*
name: Tom, id: 1
name: Tom, id: 1
name: Tom, id: 1
*/
```

java 的 Cloneable 是基于原型模式实现的，从上面输出的结果来看，其功能与我们使用传统的方式实现一摸一样，而且它的扩展性也非常好，如果 Prototype 添加了一个新的成员属性的话，我们克隆类也会一同复制。

但是也存在一个问题，就是使用这种方式的克隆，对于引用类型是采用复制引用值的方式，
也就是浅拷贝。

```java
Prototype p0 = new Prototype("Tom", 1, new Prototype("jack", 2));
Prototype p1 = (Prototype) p0.clone();
Prototype p2 = p0.clone();
System.out.println(p0.p.hashCode());
System.out.println(p1.p.hashCode());
System.out.println(p0.p.hashCode() == p1.p.hashCode());
/*
  189568618
  189568618
  true
 */
```

从原对象和拷贝后的对象的 hashCode 来看，原对象中的引用类型成员只是浅拷贝。

## 深拷贝与浅拷贝

深拷贝的方式有两种：单独复制和序列号。这里只讲前面一种。

```java
protected Prototype clone() {
  Prototype prototype = null;
  try {
      Object obj = super.clone();
      prototype = (Prototype)obj;
      if (prototype.p != null) {
          prototype.p = this.p.clone();
      }
  } catch (Exception e) {
      e.printStackTrace();
  }
  return prototype;
} 
```


