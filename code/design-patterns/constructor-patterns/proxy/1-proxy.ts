export {}

interface IData {
  getData(): string;
  setData(data: string): void;
}

class MyProxy implements IData {
  constructor(private data: IData) {}
  getData(): string {
    console.log('get data...');
    return this.data.getData();
  }
  
  setData(data: string): void {
    console.log('check data...');
    if (typeof data === 'string' && data !== '') {
      this.data.setData(data);
    }
  }
}

class Data implements IData {
  constructor(private data: string) {}
  getData(): string {
    return this.data;
  }
  setData(data: string): void {
    this.data = data;
  }
}

function main() {
  const proxy = new MyProxy(new Data('hello world'));
  proxy.getData();
  proxy.setData('hello js');
}

main();
