export interface Movable {
  go(): void;
}

export enum Status {
  tight,
  rich,
  wellOff,
}

export enum VehicleType {
  car,
  plane,
  train,
}