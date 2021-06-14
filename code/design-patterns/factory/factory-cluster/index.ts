export {}

interface Movable {
  go(): void;
}

interface Enjoyable {
  rest(): void;
}

enum StatusType {
  tight   = 'tight',
  rich    = 'rich',
  wellOff = 'wellOff',
}

class Car implements Movable {
  go(): void {
    console.log('car is moving...');
  }
}

class Plane implements Movable {
  go(): void {
    console.log('plane is flying...');
  }
}

class Train implements Movable {
  go(): void {
    console.log('train is moving...');
  }
}

class Hotel implements Enjoyable {
  rest(): void {
    console.log('hotel is so enjoyable...');
  }
}

class Massage implements Enjoyable {
  rest(): void {
    console.log('massage is so enjoyable...');
  }
}

class SPA implements Enjoyable {
  rest(): void {
    console.log('SPA is so enjoyable...');
  }
}

abstract class ServiceFactory {
  abstract createVehicle(): Movable;
  abstract createEntertainment(): Enjoyable;
}

class TightServiceFactory extends ServiceFactory {
  createVehicle(): Movable {
    return new Car();
  }
  createEntertainment(): Enjoyable {
    return new Hotel();
  }
}

class RichServiceFactory extends ServiceFactory {
  createVehicle(): Movable {
    return new Train();
  }
  createEntertainment(): Enjoyable {
    return new Massage();
  }
}

class WellOfServiceFactory extends ServiceFactory {
  createVehicle(): Movable {
    return new Plane();
  }
  createEntertainment(): Enjoyable {
    return new SPA();
  }
}

const serviceMap = {
  tight  : TightServiceFactory,
  rich   : RichServiceFactory,
  wellOff: WellOfServiceFactory,
}

function main() {
  const status: StatusType = StatusType.rich;
  const service: ServiceFactory = new serviceMap[status]();
  const entertainment = service.createEntertainment();
  const vehicle = service.createVehicle();

  entertainment.rest();
  vehicle.go();
}

main();
