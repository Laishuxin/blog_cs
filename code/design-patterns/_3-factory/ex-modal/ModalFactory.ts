import StatusFactory from './StatusFactory'
import { IModalFactory } from './typing'

export default class ModalFactory implements IModalFactory {
  constructor(
    dom: Element,
    statusFactory: InstanceType<typeof StatusFactory>,
  ) {}
}
