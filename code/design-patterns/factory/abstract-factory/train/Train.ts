import { Movable } from "../typings";

export default class Train implements Movable {
  go(): void {
    console.log('train is sliding...');
  }
}
