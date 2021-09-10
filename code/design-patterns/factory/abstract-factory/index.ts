import CarFactory from './car/CarFactory'
import PlaneFactory from './plane/PlaneFactory'
import TrainFactory from './train/TrainFactory'
import { Movable, Status, VehicleType } from './typings'
import VehicleFactory from './VehicleFactory'

function getVehicle(vehicleType: VehicleType, status: Status): Movable {
  let vehicleFactory: VehicleFactory
  switch (vehicleType) {
    case VehicleType.car:
      vehicleFactory = new CarFactory(status)
      break
    case VehicleType.plane:
      vehicleFactory = new PlaneFactory(status)
      break
    case VehicleType.train:
      vehicleFactory = new TrainFactory(status)
      break
    default:
      throw new TypeError(`${vehicleType} not exists...`)
  }
  return vehicleFactory.create()
}

function main() {
  const currentStatus = Status.wellOff
  const choice = VehicleType.plane
  const m = getVehicle(choice, currentStatus)
  m.go()
}

main()
