export {}
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