interface ISplitter {
  split(data: string): void
}

class BinarySplitter implements ISplitter {
  split(data: string): void {
    console.log('splitting binary data...')
  }
}
class ImageSplitter implements ISplitter {
  split(data: string): void {
    console.log('splitting image data...')
  }
}
class VideoSplitter implements ISplitter {
  split(data: string): void {
    console.log('splitting video data...')
  }
}

abstract class SplitterFactory {
  public abstract createSplitter(): ISplitter
}

class BinarySplitterFactory extends SplitterFactory {
  public createSplitter(): ISplitter {
    return new BinarySplitter()
  }
}

class ImageSplitterFactory extends SplitterFactory {
  public createSplitter(): ISplitter {
    return new ImageSplitter()
  }
}

class VideoSplitterFactory extends SplitterFactory {
  public createSplitter(): ISplitter {
    return new VideoSplitter()
  }
}

class MainForm {
  private data: string = ''
  constructor(private readonly splitterFactory: SplitterFactory) {}

  public setData(data: string) {
    this.data = data
  }

  public buttonClick() {
    const splitter = this.splitterFactory.createSplitter()
    splitter.split(this.data)
  }
}

function main() {
  const mainForm = new MainForm(new BinarySplitterFactory())
  mainForm.setData('hello factory method')
  mainForm.buttonClick()
}

main()
