export {}
// 设计模式 - 桥接模式

interface IMessengerPlatform {
  playSound(): void;
  drawShape(img: string): void;
  writeText(text: string): void;
  connect(): void;
}

abstract class Messenger {
  constructor(protected readonly messagePlatform: IMessengerPlatform) {}

  public abstract login(username: string, password: string): void;
  public abstract sendMessage(message: string): void;
  public abstract sendPicture(img: string): void;
}

class MessengerLite extends Messenger {
  public login(username: string, password: string): void {
    this.messagePlatform.connect();
    console.log(`username: ${username} login successfully.`);
  }
  public sendMessage(message: string): void {
    this.messagePlatform.writeText(message);
    console.log(`write ${message} successfully.`);
  }
  public sendPicture(img: string): void {
    this.messagePlatform.drawShape(img);
    console.log('draw shape successfully.');
  }
}

class MessengerPerfect extends Messenger {
  public login(username: string, password: string): void {
    this.messagePlatform.connect();
    console.log(`username: ${username} login successfully.`);
    this.messagePlatform.playSound();
  }
  public sendMessage(message: string): void {
    this.messagePlatform.writeText(message);
    console.log(`write ${message} successfully.`);
    this.messagePlatform.playSound();
  }
  public sendPicture(img: string): void {
    this.messagePlatform.drawShape(img);
    console.log('draw shape successfully.');
    this.messagePlatform.playSound();
  }
}

class PCPlatForm implements IMessengerPlatform {
  public playSound(): void {
    console.log('pc: deng deng deng deng...');
  }
  public drawShape(img: string): void {
    console.log('pc: biu biu biu... ', img);
  }
  public writeText(text: string): void {
    console.log('pc: shua shua shua...', text);
  }
  public connect(): void {
    console.log('pc: waiting...');
  }
}

class MobilePlatForm implements IMessengerPlatform {
  public playSound(): void {
    console.log('mobile: dang dang dang dang...');
  }
  public drawShape(img: string): void {
    console.log('mobile: jiu jiu jiu... ', img);
  }
  public writeText(text: string): void {
    console.log('mobile: ca ca ca...', text);
  }
  public connect(): void {
    console.log('mobile: ~~~~~~~~~...');
  }
}

function main() {
  const pcPlatform = new PCPlatForm();
  const mobilePlatform = new MobilePlatForm();
  const pcMessengerPerfect: Messenger = new MessengerPerfect(pcPlatform);
  pcMessengerPerfect.login('lihua', 'without password');
  pcMessengerPerfect.sendMessage('hello messenger...');
  pcMessengerPerfect.sendPicture('^^^^^^_____');
  
  const mobileMessengerLite = new MessengerLite(mobilePlatform);
  mobileMessengerLite.login('lihua', 'without password');
  mobileMessengerLite.sendMessage('hello messenger...');
  mobileMessengerLite.sendPicture('^^^^^^_____');
}

main();
