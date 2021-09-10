interface IIterator<T = any> {
  hasNext(): boolean
  next(): T | null
  remove(): void
}

interface IIterable<T = any> {
  createIterator(): IIterator<T>
}

export { IIterator, IIterable }
