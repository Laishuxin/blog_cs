export {}
// 设计模式 - 观察者模式


abstract class Observer<T> {
  public abstract update(state: T): void;
}

class Subject<T> {
  protected static id = 0;
  protected observerMap: Map<number, Observer<T>> = new Map();
  protected state: T | null = null;
  
  /**
   * Add observer and return its id.
   * @param observer 
   * @returns id
   */
  public add(observer: Observer<T>): number {
    this.observerMap.set(Subject.id, observer);
    return Subject.id++; 
  }
  
  public remove(id: number): void {
    this.observerMap.delete(id);
  }

  public notify(): void {
    if (this.state === null) { return; }
    const observers = this.observerMap.values();
    for (const observer of observers) {
      observer.update(this.state);
    }
  }
  
  public setState(state: T) {
    if (this.state === state) { return; }
    this.state = state;
    this.notify();
  } 
  
  public getState(): T | null { return this.state; }
}


class MainFormObserver extends Observer<number> {
  public update(state: number): void {
    setTimeout(() => {
      console.log('='.repeat(state))
    }, state * 60);
  }
}
class ConsoleObserver extends Observer<number> {
  public update(state: number): void {
    setTimeout(() => {
      console.log('·'.repeat(state))
    }, state * 50);
  }
}

function main() {
  const subject: Subject<number> = new Subject();
  subject.add(new MainFormObserver());
  subject.add(new ConsoleObserver());
  for (let i = 0; i < 100; ++i) {
    subject.setState(i);
  }
}

main();