export {}
abstract class Stream {
  public abstract read(n: number): string
  public abstract write(data: string): void
  public abstract seek(position: number): void
}

class NetworkStream extends Stream {
  private _data: string = ''
  private _seek = 0

  public read(n: number): string {
    n =
      this._seek + n < this._data.length ? n : this._data.length - this._seek
    const result = this._data.slice(this._seek, this._seek + n)
    this._seek += n
    return result
  }

  public write(data: string): void {
    this._data += data
  }
  public seek(position: number): void {
    if (position < this._data.length) {
      this._seek = position
    }
  }
}

class FileStream extends Stream {
  private _data: string = ''
  private _seek = 0

  public read(n: number): string {
    n =
      this._seek + n < this._data.length ? n : this._data.length - this._seek
    const result = this._data.slice(this._seek, this._seek + n)
    this._seek += n
    return result
  }

  public write(data: string): void {
    this._data += data
  }
  public seek(position: number): void {
    if (position < this._data.length) {
      this._seek = position
    }
  }
}

abstract class Decorator extends Stream {
  constructor(protected readonly stream: Stream) {
    super()
  }
}

class CryptoStream extends Decorator {
  public read(n: number): string {
    console.log('decrypto successfully')
    return this.stream.read(n)
  }
  public write(data: string): void {
    console.log('crypto successfully')
    this.stream.write(data)
  }
  public seek(position: number): void {
    this.stream.seek(position)
  }
}

class BufferStream extends Decorator {
  public read(n: number): string {
    console.log('read from buffer successfully')
    return this.stream.read(n)
  }
  public write(data: string): void {
    console.log('add buffer successfully')
    return this.stream.write(data)
  }
  public seek(position: number): void {
    this.stream.seek(position)
  }
}

function main() {
  const stream: Stream = new NetworkStream()
  let bufferCryptoNetworkStream: Stream = new CryptoStream(
    new BufferStream(stream),
  )
  bufferCryptoNetworkStream.write('hello world')
  bufferCryptoNetworkStream.seek(5)
  const result = bufferCryptoNetworkStream.read(10)
  console.log(result)
}

main()
