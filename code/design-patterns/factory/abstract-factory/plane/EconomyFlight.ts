import { Movable } from '../typings'

export default class EconomyFlight implements Movable {
  go(): void {
    console.log('economy flight is flying...')
  }
}
