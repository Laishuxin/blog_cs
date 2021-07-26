export {}

// 设计模式 - 责任链
// 责任链属于数据结构模式，利用链表实现
// 事件下发。

enum RequestType {
  HANDLER1,
  HANDLER2,
  HANDLER3,
}

class Request {
  constructor(private description: string, private type: RequestType) {}
  public getDescription(): string { return this.description; }
  public getType(): RequestType { return this.type; }
}

abstract class Handler {
  private nextChain: Handler | null = null;

  public setNextChain(handler: Handler) { this.nextChain = handler; }
  public handle(request: Request) {
    if (this.canHandleRequest(request)) {
      this.processRequest(request);
    } else {
      this.sendRequestToNextChain(request);
    }
  }

  protected abstract canHandleRequest(request: Request): boolean;
  protected abstract processRequest(request: Request): void;
  private sendRequestToNextChain(request: Request) {
    if (this.nextChain) {
      this.nextChain.handle(request)
    }
  }
}

class Handler1 extends Handler {
  protected canHandleRequest(request: Request): boolean {
    console.log(`handler1 can handle? ${request.getType() === RequestType.HANDLER1}`);
    return request.getType() === RequestType.HANDLER1;
  }
  protected processRequest(request: Request): void {
    console.log(`handle1: ${request.getDescription()}, type: ${request.getType()}`);
  }
}
class Handler2 extends Handler {
  protected canHandleRequest(request: Request): boolean {
    console.log(`handler2 can handle? ${request.getType() === RequestType.HANDLER2}`);
    return request.getType() === RequestType.HANDLER2;
  }
  protected processRequest(request: Request): void {
    console.log(`handler2: ${request.getDescription()}, type: ${request.getType()}`);
  }
}

function main() {
  const request1 = new Request('request1', RequestType.HANDLER1);
  const request2 = new Request('request2', RequestType.HANDLER2);

  let handler: Handler = new Handler1();
  console.log('---- handler1 -----');
  handler.handle(request1);
  console.log('---- handler2 -----');
  handler.handle(request2);
  new Handler2().handle(request2);
}

main();