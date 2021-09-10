interface Color {
  render(): void
}

class Red implements Color {
  render(): void {
    console.log('rendering red...')
  }
}

class Green implements Color {
  render(): void {
    console.log('rendering green...')
  }
}

class Yellow implements Color {
  render(): void {
    console.log('rendering yellow...')
  }
}

function main(type: string) {
  let color: Color
  switch (type) {
    case 'red':
      color = new Red()
      break
    case 'green':
      color = new Green()
      break
    case 'yellow':
      color = new Yellow()
      break
    default:
      throw new TypeError(`${type} color not exists.`)
  }
  color.render()
}

main('yellow')
// rendering yellow...
