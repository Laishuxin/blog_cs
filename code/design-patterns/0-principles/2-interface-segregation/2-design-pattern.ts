export {}

interface CommonEnjoyable {
  sleeping(): void
}

interface AdvancedEnjoyable extends CommonEnjoyable {
  massaging(): void
  dancing(): void
}

interface SeniorEnjoyable extends CommonEnjoyable {
  playing(): void
  singing(): void
}

class Advance implements AdvancedEnjoyable {
  massaging(): void {
    console.log(`Advanced massaging...`)
  }

  dancing(): void {
    console.log(`Advanced dancing...`)
  }

  sleeping(): void {
    console.log(`Advanced sleeping...`)
  }
}

class Senior implements SeniorEnjoyable {
  singing(): void {
    console.log(`Senior singing...`)
  }

  sleeping(): void {
    console.log(`Senior sleeping...`)
  }

  playing(): void {
    console.log(`Senior playing...`)
  }
}

class Boss {
  enjoy(activities: AdvancedEnjoyable) {
    activities.dancing()
    activities.massaging()
    activities.sleeping()
  }
}

class Employee {
  enjoy(activities: SeniorEnjoyable) {
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
