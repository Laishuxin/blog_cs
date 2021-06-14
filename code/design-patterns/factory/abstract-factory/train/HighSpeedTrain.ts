import { Movable } from "../typings";

export default class HighSpeedTrain implements Movable {
  go(): void {
    console.log('hight speed train is sliding...');
  }
}
