export {}

/**
 * 学校总部员工。
 */
class SchoolEmployee {
  constructor(private id: number) {}
  getId() {
    return this.id
  }
  setId(id: number) {
    this.id = id
  }

  toString() {
    return `学校员工${this.id}`
  }
}

/**
 * 下属学校员工。
 */
class SubSchoolEmployee {
  constructor(private id: number) {}
  getId() {
    return this.id
  }
  setId(id: number) {
    this.id = id
  }
  toString() {
    return `下属学校员工${this.id}`
  }
}

/**
 * 下属学校管理。
 */
class SubSchoolManager {
  private employees: SubSchoolEmployee[] = []
  constructor() {
    for (let i = 0; i < 5; i++) {
      this.employees.push(new SubSchoolEmployee(i))
    }
  }
  getEmployees() {
    return this.employees
  }
}

class SchoolManager {
  private employees: SchoolEmployee[] = []
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.employees.push(new SchoolEmployee(i))
    }
  }

  /**
   * 获取学校总部员工。
   */
  getEmployees() {
    return this.employees
  }

  /**
   * 展示所有的员工信息，包括学校总部和下属学校的员工信息。
   */
  showAllEmployees() {
    const subSchoolManager = new SubSchoolManager()
    console.log('学校总部员工：', this.getEmployees().toString())
    console.log('下属学校员工：', subSchoolManager.getEmployees().toString())
  }
}

function main() {
  new SchoolManager().showAllEmployees()
}

main()
