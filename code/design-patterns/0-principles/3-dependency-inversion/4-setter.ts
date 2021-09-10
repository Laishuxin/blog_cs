export {}

interface IReceiver {
  setMessage(message: IMessage): void
  receive(): void
}

interface IMessage {
  getMessage(): string
}

class Person implements IReceiver {
  private message!: IMessage
  setMessage(message: IMessage): void {
    this.message = message
  }

  receive(): void {
    if (!this.message) return
    console.log('receive message: ', this.message.getMessage())
  }
}

class Email implements IMessage {
  getMessage(): string {
    return 'email message'
  }
}

function main() {
  const p = new Person()
  p.setMessage(new Email())
  p.receive()
}

main()
