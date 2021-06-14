import { Movable } from "../typings";

export default class Benz implements Movable {
  go(): void {
    console.log('benz is moving...');
  }
}
