import { Movable, Status } from './typings'

export default abstract class VehicleFactory {
  protected _status: Status

  constructor(status: Status) {
    this._status = status
  }

  get status(): string {
    return Status[this._status]
  }

  abstract create(): Movable
}
