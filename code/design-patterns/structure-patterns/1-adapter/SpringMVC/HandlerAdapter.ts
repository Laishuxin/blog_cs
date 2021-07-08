import { AnnotationController, HttpController, SimpleController } from "./Controller";

export interface HandlerAdapter {
  supports(handler: Object): boolean;
  handle(handler: Object): void;
}

export class SimpleHandlerAdapter implements HandlerAdapter {
  supports(handler: Object): boolean {
    return handler instanceof SimpleController;
  }

  handle(handler: Object): void {
    (handler as SimpleController).doSimpleHandler();
  }
}

export class HttpHandlerAdapter implements HandlerAdapter {
  supports(handler: Object): boolean {
    return handler instanceof HttpController;
  }
  handle(handler: Object): void {
    (handler as HttpController).doHttpHandler();
  }
}

export class AnnotationAdapter implements HandlerAdapter {
  supports(handler: Object): boolean {
    return handler instanceof AnnotationController;
  }
  handle(handler: Object): void {
    (handler as AnnotationController).doAnnotationHandler();
  }
}
