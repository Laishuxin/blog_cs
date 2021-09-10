export {}

interface Enjoyable {
  singing(): void
  massaging(): void
  dancing(): void
  sleeping(): void
  playing(): void
}

class Advance implements Enjoyable {
  singing(): void {
    console.log(`Advanced singing...`)
  }
  massaging(): void {
    console.log(`Advanced massaging...`)
  }
  dancing(): void {
    console.log(`Advanced dancing...`)
  }

  sleeping(): void {
    console.log(`Advanced sleeping...`)
  }
  playing(): void {
    console.log(`Advanced playing...`)
  }
}

class Senior implements Enjoyable {
  singing(): void {
    console.log(`Senior singing...`)
  }
  massaging(): void {
    console.log(`Senior massaging...`)
  }
  dancing(): void {
    console.log(`Senior dancing...`)
  }

  sleeping(): void {
    console.log(`Senior sleeping...`)
  }
  playing(): void {
    console.log(`Senior playing...`)
  }
}

class Boss {
  enjoy(activities: Enjoyable) {
    activities.dancing()
    activities.massaging()
    activities.sleeping()
  }
}

class Employee {
  enjoy(activities: Enjoyable) {
    activities.playing()
    activities.sleeping()
    activities.singing()
  }
}

function main() {
  const boss = new Boss()
  const employee = new Employee()
  boss.enjoy(new Advance())
  employee.enjoy(new Senior())
}

main()
