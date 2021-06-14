import { Movable } from "../typings";

export default class Bus implements Movable {
  go(): void {
    console.log('bus is moving...');
  }
}
