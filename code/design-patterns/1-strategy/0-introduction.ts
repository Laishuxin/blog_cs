/* 0-introduction.ts */
export {}

const config1 = {
  method: 'get',
  data: {
    a: 1,
  },
  headers: {
    'Content-Type': 'application/json',
  },
}

const config2 = {
  url: '/config/post',
  data: {
    a: 10,
    b: 100,
  },
  headers: {
    Accept: 'application/json, text/plain, */*',
  },
}

interface Strategy {
  (value1: any, value2: any): any
}

interface StrategyMap {
  [index: string]: Strategy
}

// 1. 制定策略。

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
  values.forEach(obj => {
    if (typeof obj === 'undefined' || obj === null) {
      return
    }
    Object.keys(obj).forEach(key => {
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

// 2. 设置策略规则。
const strategyMap: StrategyMap = {}
const fromValuesKeys = ['data', 'url']
const deepMergeKeys = ['headers']
// const defaultKeys: any[]

fromValuesKeys.forEach(key => (strategyMap[key] = fromValue2Strategy))
deepMergeKeys.forEach(key => (strategyMap[key] = deepMergeStrategy))

// 3. 应用
function merge(config1: any, config2: any) {
  const dest: any = {}
  Object.keys(config2).forEach((key: string) => {
    // 获取策略
    const strategy: Strategy = strategyMap[key] || defaultStrategy
    // 合并配置
    dest[key] = strategy(config1[key], config2[key])
  })

  // console.log(dest)
  Object.keys(config1).forEach((key: string) => {
    const strategy: Strategy = strategyMap[key] || defaultStrategy
    dest[key] = strategy(config1[key], config2[key])
  })
  return dest
}

console.log(merge(config1, config2))
