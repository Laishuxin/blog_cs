import { Controller, HttpController } from './Controller'
import {
  AnnotationAdapter,
  HandlerAdapter,
  HttpHandlerAdapter,
  SimpleHandlerAdapter,
} from './HandlerAdapter'

export class DispatchSevlet {
  private handlerAdapter: HandlerAdapter[] = []
  constructor() {
    this.handlerAdapter.push(new HttpHandlerAdapter())
    this.handlerAdapter.push(new AnnotationAdapter())
    this.handlerAdapter.push(new SimpleHandlerAdapter())
  }

  public doDispatch() {
    // 模拟 SpringMVC doDispatch 的实现过程
    const controller: Controller = new HttpController()
    const handlerAdapter: HandlerAdapter | null = this.getHandler(controller)
    if (!handlerAdapter) {
      return
    }
    handlerAdapter.handle(controller)
  }

  private getHandler(controller: Controller): HandlerAdapter | null {
    for (const adapter of this.handlerAdapter) {
      if (adapter.supports(controller)) return adapter
    }
    return null
  }
}

function main() {
  new DispatchSevlet().doDispatch()
}

main()
