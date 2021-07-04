export {}

interface IReceiver {
  receive(): void;
}

interface IMessage {
  getMessage(): string;
}

class Person implements IReceiver {
  constructor(private message: IMessage) {
  }

  receive(): void {
    console.log('receive message: ', this.message.getMessage())
  }
}

class Email implements IMessage {
  getMessage(): string {
    return 'email message';
  }
}

function main() {
  new Person(new Email());
}

main();