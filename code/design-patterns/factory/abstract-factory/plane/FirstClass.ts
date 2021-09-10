import { Movable } from '../typings'

export default class FirstClass implements Movable {
  go(): void {
    console.log('first class is flying...')
  }
}
