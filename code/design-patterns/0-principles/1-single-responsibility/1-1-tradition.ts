export {}
class Vehicle {
  public type: string;

  constructor(type: string) {
    this.type = type;
  }

  operate(start: number, end: number) {
    const interval = end - start;
    const LIMIT = 20;
    if (interval <= LIMIT) { 
      console.log(`${this.type} is running...`);
    } else {
      console.log(`Out of time...`);
    }
  }
}

function main() {
  const car   = new Vehicle('car');
  const train = new Vehicle('train');
  const plane = new Vehicle('plane');
  
  car.operate(0, 10);
  train.operate(0, 10);
  plane.operate(0, 10);
}

main();
/*
car is running...
train is running...
plane is running...
*/
