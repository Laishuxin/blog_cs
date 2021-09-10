import { Movable } from '../typings'

export default class Maserati implements Movable {
  go(): void {
    console.log('Maserati is moving...')
  }
}
