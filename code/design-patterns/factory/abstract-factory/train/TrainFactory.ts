import { Movable, Status } from '../typings'
import VehicleFactory from '../VehicleFactory'
import HighSpeedTrain from './HighSpeedTrain'
import MotorTrain from './MotorTrain'
import Train from './Train'

export default class TrainFactory extends VehicleFactory {
  create(): Movable {
    let m: Movable
    switch (this._status) {
      case Status.tight:
        m = new Train()
        break
      case Status.rich:
        m = new MotorTrain()
        break
      case Status.wellOff:
        m = new HighSpeedTrain()
        break
      default:
        throw new TypeError(`unknown economic status: ${this._status}`)
    }
    return m
  }
}
