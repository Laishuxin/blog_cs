import { Movable, Status } from "../typings";
import VehicleFactory from "../VehicleFactory";
import Benz from "./Benz";
import Bus from "./Bus";
import Maserati from "./Maserati";

export default class CarFactory extends VehicleFactory {
  create(): Movable {
    let m: Movable;
    switch (this._status) {
      case Status.tight:
        m  = new Bus();
        break;
      case Status.rich:
        m = new Benz();
        break;
      case Status.wellOff:
        m = new Maserati();
        break;
      default:
        throw new TypeError(`unknown economic status: ${this._status}`);
    }
    return m;
  }
}
