import { Movable, Status } from "../typings";
import VehicleFactory from "../VehicleFactory";
import BusinessFlight from "./BusinessClass";
import EconomyFlight from "./EconomyFlight";
import FirstClass from "./FirstClass";

export default class PlaneFactory extends VehicleFactory {
  create(): Movable {
    let m: Movable;
    switch (this._status) {
      case Status.tight:
        m = new EconomyFlight();
        break;
      case Status.rich:
        m = new FirstClass();
        break;
      case Status.wellOff:
        m = new BusinessFlight();
        break;
      default:
        throw new TypeError(`unknown economic status: ${this._status}`);
    }
    return m;
  }
}
