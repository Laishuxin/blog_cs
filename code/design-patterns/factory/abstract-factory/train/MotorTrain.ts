import { Movable } from "../typings";

export default class MotorTrain implements Movable {
  go(): void {
    console.log('motor train is sliding...');
  }
}
