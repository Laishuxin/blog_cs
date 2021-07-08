export {}

interface IVoltage5 {
  output5(): number;
}

class Voltage220 {
  public output220(): number {
    console.log('输出 220V');
    return 220;
  }
}

class Adapter implements IVoltage5 {
  private voltage!: Voltage220;
  
  public setVoltage(voltage: Voltage220) {
    this.voltage = voltage;
  }

  output5() {
    if (!this.voltage) {
      throw new Error('input error: without voltage');
    }
    const output220 = this.voltage.output220();
    console.log('输出 5V');
    return output220 / 44;
  }
}

class Phone {
  charging(adapter: Adapter): void {
    const voltage = adapter.output5();
    if (voltage > 5 || voltage <= 0) {
      throw new Error('invalid voltage');
    }
    console.log('给手机充电...');
    console.log(`当前输入电压为：${voltage}V`);
  }
}

function main() {
  const adapter = new Adapter();
  adapter.setVoltage(new Voltage220());
  const phone = new Phone();
  phone.charging(adapter);
}

main();
