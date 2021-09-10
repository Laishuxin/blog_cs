export {}

interface IReceive {
  getMessage(message: IMessage): void
}

interface IMessage {
  getMessage(): string
}

class Person implements IReceive {
  getMessage(message: IMessage): void {
    console.log('receive message: ', message.getMessage())
  }
}

class Email implements IMessage {
  getMessage(): string {
    return 'email message'
  }
}

class WeiChat implements IMessage {
  getMessage(): string {
    return 'wechat message'
  }
}

function main() {
  const message: IMessage = new Email()
  new Person().getMessage(message)
}

main()
