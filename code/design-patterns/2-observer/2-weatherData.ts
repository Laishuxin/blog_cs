export {}
interface Observer {
  // 主题状态发生变化，执行观察者的 update 方法。
  update(temperature: number, humidity: number, pressure: number): any
}

interface Subject {
  // observers: Observer[]

  addObserver(observer: Observer): void
  deleteObserver(observer: Observer): void

  notifyObservers(): void
}

class WeatherData implements Subject {
  private _temperature: number = 0
  private _humidity: number = 0
  private _pressure: number = 0
  private _observers: Observer[] = []

  getTemperature() {
    return this._temperature
  }

  getHumidity() {
    return this._humidity
  }

  getPressure() {
    return this._pressure
  }

  // 为了实现接口适配
  // ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
  measurementChanged() {
    this.notifyObservers()
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this._temperature = temperature
    this._humidity = humidity
    this._pressure = pressure
    this.measurementChanged()
  }

  addObserver(observer: Observer): void {
    this._observers.push(observer)
  }

  deleteObserver(observer: Observer): void {
    const index = this._observers.indexOf(observer)
    if (index >= 0) {
      for (let i = index, len = this._observers.length - 1; i < len; i++) {
        this._observers[i] = this._observers[i + 1]
      }
      this._observers.pop()
    }
  }

  notifyObservers(): void {
    this._observers.forEach(observer =>
      observer.update(this._temperature, this._humidity, this._pressure),
    )
  }
}

interface DisplayElement {
  display(): void
}

class CurrentConditionsDisplay implements Observer, DisplayElement {
  private _temperature!: number
  private _humidity!: number
  // private subject: Subject

  constructor(private subject: Subject) {
    subject.addObserver(this)
  }

  display(): void {
    if (
      typeof this._temperature !== 'undefined' &&
      typeof this._humidity !== 'undefined'
    ) {
      console.log(
        `Current conditions: ${this._temperature}F degrees and ${this._humidity}% humidity`,
      )
    }
  }

  update(temperature: number, humidity: number, pressure: number) {
    this._temperature = temperature
    this._humidity = humidity
    this.display()
  }
}

class StatisticsDisplay implements Observer, DisplayElement {
  private _temperatures: number[] = []
  // private subject: Subject

  constructor(private subject: Subject) {
    subject.addObserver(this)
  }

  display(): void {
    let min: string | number = 0
    let max: string | number = 0
    let avg: string | number = 0
    if (this._temperatures.length === 0) {
      min = 'unknown'
      max = 'unknown'
      avg = 'unknown'
    }
    this._temperatures.sort((a, b) => a - b)
    min = this._temperatures[0]
    max = this._temperatures[this._temperatures.length - 1]
    avg =
      this._temperatures.reduce((prev, cur) => prev + cur, 0) /
      this._temperatures.length

    console.log(
      `Avg/Max/Min temperature = ${avg.toFixed(2)}/${min.toFixed(
        2,
      )}/${max.toFixed(2)}`,
    )
  }

  update(temperature: number, humidity: number, pressure: number) {
    this._temperatures.push(temperature)
    this.display()
  }
}

class ForecastDisplay implements Observer, DisplayElement {
  // private _temperatures!: number
  // private _humidity!: number
  // private _pressure!: number
  // private subject: Subject

  constructor(private subject: Subject) {
    subject.addObserver(this)
  }

  display(): void {
    console.log('Forecast: Improving weather on the way!')
  }

  update(temperature: number, humidity: number, pressure: number) {
    this.display()
  }
}

function weatherStation() {
  const weatherData = new WeatherData()
  const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData)
  const statisticsDisplay = new StatisticsDisplay(weatherData)
  const forecastDisplay = new ForecastDisplay(weatherData)
  console.log('-------------------------------------------')
  weatherData.setMeasurements(80, 65, 30.4)
  console.log('-------------------------------------------')
  weatherData.setMeasurements(82, 70, 29.2)
  console.log('-------------------------------------------')
  weatherData.setMeasurements(78, 90, 29.2)
}

weatherStation()
// -------------------------------------------
// Current conditions: 80F degrees and 65% humidity
// Avg/Max/Min temperature = 80.00/80.00/80.00
// Forecast: Improving weather on the way!
// -------------------------------------------
// Current conditions: 82F degrees and 70% humidity
// Avg/Max/Min temperature = 81.00/80.00/82.00
// Forecast: Improving weather on the way!
// -------------------------------------------
// Current conditions: 78F degrees and 90% humidity
// Avg/Max/Min temperature = 80.00/78.00/82.00
// Forecast: Improving weather on the way!
