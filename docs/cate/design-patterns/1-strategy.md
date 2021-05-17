---
title: 设计模式 - 策略模式
time: 2021-05-14
author: ru shui
category: design patterns
tag:
  - typescript
  - design pattern
visitor: false
article: true
sticky: false
---

<div align="center"><img src="./images/design-pattern.jpg" /></div>
## 引例

我们有两个配置对象（`config1`, `config2`），现在的需求是我们需要两个对象进行合并。对于对象中的不同字段，我们要求合并方式不一样。
合成的结果如下面例子中（`expected`）所示。对于对象中 `data` 字段，我们合并后的对象中的 `data, url` 来自 `config2`；对于对象中的 `headers` 字段，我们采用深度合并（`deepMerge`），即 `config2.headers` 有则选择 `config2.headers` 中的字段，否则选择`config2.headers` 中的字段；对于其他字段，我们默认采用 `config2` 的。

事实上，上面的需求可以简述成一句话：根据对象不同字段选择不同的合并策略。

```typescript
const config1 = {
  method: 'get',
  data: {
    a: 1
  },
  headers: {
    'Content-Type': 'application/json'
  }
}

const config2 = {
  url: '/config/post',
  data: {
    a: 10,
    b: 100
  },
  headers: {
    Accept: 'application/json, text/plain, */*'
  }
}

const expected = {
  method: 'get',
  url: '/config/post',
  data: {
    a: 10,
    b: 100
  },
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*'
  }
}
```

## 实现

1. 制定策略。根据不同的需求，创建不同的策略。
2. 设置策略规则。按照规则获取相应的策略。
3. 应用。

```typescript
interface Strategy {
  (value1: any, value2: any): any
}

interface StrategyMap {
  [index: string]: Strategy
}

// 1. 制定策略。

// 默认策略
const defaultStrategy: Strategy = (value1: any, value2: any): any => {}

// 只取 value2 策略。
const fromValue2Strategy: Strategy = (value1: any, value2: any): any => {}

// 深度合并策略。
const deepMergeStrategy: Strategy = (value1: any, value2: any): any => {}

// 2. 设置策略规则。
const strategyMap: StrategyMap = {}
const fromValuesKeys = ['data', 'url']
const deepMergeKeys = ['headers']
// const defaultKeys: any[]

fromValuesKeys.forEach((key) => (strategyMap[key] = fromValue2Strategy))
deepMergeKeys.forEach((key) => (strategyMap[key] = deepMergeStrategy))

// 3. 应用
function merge(config1: any, config2: any) {
  const dest: any = {}
  Object.keys(config2).forEach((key: string) => {
    // 获取策略
    const strategy: Strategy = strategyMap[key] || defaultStrategy
    // 合并配置
    dest[key] = strategy(config1[key], config2[key])
  })

  Object.keys(config1).forEach((key: string) => {
    const strategy: Strategy = strategyMap[key] || defaultStrategy

    dest[key] = strategy(config1[key], config2[key])
  })
  return dest
}
```

1. 根据需要，我们创建了 `defaultStrategy`, `fromValue2Strategy`, `deepMergeStrategy` 三个策略。每个策略对应不同的合并规则。
2. 采用 `Map` 的方式进行策略匹配。
3. 应用。

下面我们来实现具体的合并规则：

```typescript
// 默认策略
const defaultStrategy: Strategy = (value1: any, value2: any): any => {
  return typeof value2 !== 'undefined' ? value2 : value1
}

// 只取 value2 策略。
const fromValue2Strategy: Strategy = (value1: any, value2: any): any => {
  return value2
}

// 深度合并策略。
const isPlainObject = (value: any) =>
  Object.prototype.toString.call(value) === '[object Object]'

/**
 * 深度合并
 * @param values 待合并的对象集合
 */
const _deepMerge = (...values: any[]) => {
  const result = Object.create(null)
  values.forEach((obj) => {
    if (typeof obj === 'undefined' || obj === null) {
      return
    }
    Object.keys(obj).forEach((key) => {
      const value = obj[key]
      if (isPlainObject(value)) {
        result[key] = isPlainObject(result[key])
          ? _deepMerge(result[key], value)
          : _deepMerge(Object.create(null), value)
      } else {
        result[key] = value
      }
    })
  })
  return result
}

const deepMergeStrategy: Strategy = (value1: any, value2: any): any => {
  if (isPlainObject(value2)) {
    return _deepMerge(value1, value2)
  } else if (typeof value2 !== 'undefined') {
    return value2
  } else if (isPlainObject(value1)) {
    return _deepMerge(value1)
  } else if (typeof value1 !== 'undefined') {
    return value1
  }
}
```

## 小结

策略模式提供了一种灵活的应用，利用多态实现获取不同策略，根据不同策略得到不同的结果。
在前端 axios 中，合并配置就是采用策略模式实现的。

我们可以把策略模式抽象成如下的代码，方便后续的使用：

```typescript
// 声明策略接口
interface Strategy {}
interface StrategyMap {
  [index: string]: Strategy
}

// 映射规则
const strategyMap: StrategyMap = {}
strategyMap[key] = ConcreteStrategy // ConcreteStrategy 需要提供具体的实现。

// 使用策略
function use(strategyName: string) {
  const strategy = strategyMap[strategyName]
  // do something...
  strategy()
}
```
