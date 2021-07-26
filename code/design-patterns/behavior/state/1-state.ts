export {}
// 设计模式 - 状态模式
abstract class NetworkState {
  protected nextState!: NetworkState;

  constructor() {}
  public abstract operation1(): void;
  public abstract operation2(): void;
  public abstract operation3(): void;
  public abstract getNextState(): NetworkState;
}

class OpenState extends NetworkState {
  private static instance: NetworkState;
  private constructor() {
    super();
  }
  
  public static getInstance(): NetworkState {
    return this.instance || (this.instance = new OpenState());
  }

  public operation1(): void {
    console.log('open state: ', this.operation1.name);
    this.nextState = ConnectState.getInstance();
  }
  public operation2(): void {
    console.log('open state: ', this.operation2.name);
    this.nextState = WaitState.getInstance();
  }
  public operation3(): void {
    console.log('open state: ', this.operation3.name);
    this.nextState = CloseState.getInstance();
  }
  public getNextState(): NetworkState {
    return this.nextState;
  }
}

class CloseState extends NetworkState {
  private static instance: NetworkState;
  private constructor() {
    super();
  }
  
  public static getInstance(): NetworkState {
    return this.instance || (this.instance = new CloseState());
  }

  public operation1(): void {
    console.log('close state: ', this.operation1.name);
    this.nextState = ConnectState.getInstance();
  }
  public operation2(): void {
    console.log('close state: ', this.operation2.name);
    this.nextState = WaitState.getInstance();
  }
  public operation3(): void {
    console.log('close state: ', this.operation3.name);
    this.nextState = OpenState.getInstance();
  }
  public getNextState(): NetworkState{
    return this.nextState;
  }
}

class WaitState extends NetworkState {
  private static instance: NetworkState;
  private constructor() {
    super();
  }
  
  public static getInstance(): NetworkState {
    return this.instance || (this.instance = new WaitState());
  }

  public operation1(): void {
    console.log('wait state: ', this.operation1.name);
    this.nextState = ConnectState.getInstance();
  }
  public operation2(): void {
    console.log('wait state: ', this.operation2.name);
    this.nextState = CloseState.getInstance();
  }
  public operation3(): void {
    console.log('wait state: ', this.operation3.name);
    this.nextState = OpenState.getInstance();
  }
  public getNextState(): NetworkState {
    return this.nextState;
  }
}

class ConnectState extends NetworkState {
  private static instance: NetworkState;
  private constructor() {
    super();
  }
  
  public static getInstance(): NetworkState {
    return this.instance || (this.instance = new ConnectState());
  }

  public operation1(): void {
    console.log('connect state: ', this.operation1.name);
    this.nextState = OpenState.getInstance();
  }
  public operation2(): void {
    console.log('connect state: ', this.operation2.name);
    this.nextState = CloseState.getInstance();
  }
  public operation3(): void {
    console.log('connect state: ', this.operation3.name);
    this.nextState = WaitState.getInstance();
  }
  public getNextState(): NetworkState {
    return this.nextState;
  }
}

class NetworkService {
  constructor(private networkState: NetworkState) {}
  operation1() {
    this.networkState.operation1();
    this.networkState = this.networkState.getNextState();
    console.log('network service next state: ', this.networkState)
  }
  operation2() {
    this.networkState.operation2();
    this.networkState = this.networkState.getNextState();
    console.log('network service next state: ', this.networkState)
  }
  
  operation3() {
    this.networkState.operation3();
    this.networkState = this.networkState.getNextState();
    console.log('network service next state: ', this.networkState)
  }
}

function main() {
  const networkState = new NetworkService(OpenState.getInstance());
  networkState.operation1();
  networkState.operation2();
  networkState.operation3();
}

main();
