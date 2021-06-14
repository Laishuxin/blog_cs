import { Movable } from "../typings";

export default class BusinessFlight implements Movable {
  go(): void {
    console.log('business flight is flying...');
  }
}
