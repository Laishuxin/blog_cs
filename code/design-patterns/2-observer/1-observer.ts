export {}
interface Observer {
  // 主题状态发生变化，执行观察者的 update 方法。
  update(/*some states*/): any
}

interface Subject {
  // observers: Observer[]

  addObserver(observer: Observer): void
  deleteObserver(observer: Observer): void

  notifyObservers(): void
}

class ConcreteSubject implements Subject {
  private readonly observers: Observer[] = []
  private state: number = 1

  addObserver(observer: Observer): void {
    this.observers.push(observer)
  }

  deleteObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer)
    if (index >= 0) {
      for (let i = index, len = this.observers.length - 1; i < len; i++) {
        this.observers[i] = this.observers[i + 1]
      }
      this.observers.pop()
    }
  }

  notifyObservers(): void {
    this.observers.forEach((observer) => observer.update())
  }

  getState(): number {
    return this.state
  }
  setState(state: number) {
    if (this.state !== state) {
      this.state = state
      this.notifyObservers()
    }
  }
}

class ConcreteObserver implements Observer {
  constructor(private subject: Subject, private name?: string) {
    subject.addObserver(this)
  }
  update() {
    console.log(`${this.name} update data/state.`)
  }
  deregister() {
    this.subject.deleteObserver(this)
  }
}

const subject = new ConcreteSubject()
const observer1 = new ConcreteObserver(subject, 'observer1')
const observer2 = new ConcreteObserver(subject, 'observer2')
const observer3 = new ConcreteObserver(subject, 'observer3')
subject.setState(100)

console.log('----------')
observer2.deregister()
subject.setState(10)
// observer1 update data/state.
// observer2 update data/state.
// observer3 update data/state.
// ----------
// observer1 update data/state.
// observer3 update data/state.