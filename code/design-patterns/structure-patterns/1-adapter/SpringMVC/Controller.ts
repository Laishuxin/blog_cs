export interface Controller {}

export class HttpController implements Controller {
  public doHttpHandler(): void {
    console.log('do http handler')
  }
}

export class SimpleController implements Controller {
  public doSimpleHandler(): void {
    console.log('do simple handler')
  }
}

export class AnnotationController implements Controller {
  public doAnnotationHandler(): void {
    console.log('do annotation handler')
  }
}
