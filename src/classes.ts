class Department {
    protected employees: string[] = []
    constructor(private readonly id: string, public name: string) { }
    decribe(this: Department) {
        console.log(`Department ${this.id}: ${this.name}`);
    }
    addEmployee(employee: string) {
        this.employees.push(employee)
    }
    showEmployee() {
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admin: string[]) {
        super(id, 'IT')
    }
    showEmployee(): void {
        console.log(this.employees);

    }
}

const itDepartment = new ITDepartment('123', ['tien'])
// itDepartment.addEmployee('ad')
console.log(itDepartment);
itDepartment.showEmployee()