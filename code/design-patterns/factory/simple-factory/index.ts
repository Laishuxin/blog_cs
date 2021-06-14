export {}

interface Movable {
  go(): void;
}

class Car implements Movable {
  go(): void {
    console.log('car is moving...');
  }
}

class Plane implements Movable {
  go(): void {
    console.log('plane is moving...');
  }
}

class Train implements Movable {
  go(): void {
    console.log('train is moving...');
  }
}

class HighSpeedTrain implements Movable {
  go(): void {
    console.log('high speed train is moving...')
  }
}

enum MovableType {
  car,
  plane,
  // train,
  highSpeedTrain,
}

class VehicleFactory {
  create(type: MovableType): Movable {
    console.log(`${MovableType[type]} is producing...`)
    let m: Movable;
    switch (type) {
      case MovableType.car:
        m = new Car();
        break;
      case MovableType.plane:
        m = new Plane();
        break;
      // case MovableType.train:
      //   m = new Train();
      //   break;
      case MovableType.highSpeedTrain:
        m = new HighSpeedTrain();
        break;
      default:
        throw new TypeError(`${MovableType[type]} is not movable...`)
    }
    console.log(`${MovableType[type]} is coming...`)
    return m;
  }
}

function main() {
  const vehicleFactory = new VehicleFactory();
  const vehicle = vehicleFactory.create(MovableType.car);
  vehicle.go();
}

main();
