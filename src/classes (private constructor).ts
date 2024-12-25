
abstract class Department {
    static fiscalYear = 2020
    protected employees: string[] = []
    constructor(protected readonly id: string, public name: string) { }
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

// 
// Sigleton - using private constructor
// __________________________________________________________________________________

class AccountingDepartment extends Department {
    private _lastReport: string
    get lastReport() {
        return this._lastReport
    }

    private static instance: AccountingDepartment
    static getInstance() {
        if (this.instance)
            return this.instance
        else {
            this.instance = new AccountingDepartment('d2', [])
            return this.instance
        }
    }
    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
        this._lastReport = this.reports[0]
    }
}

const itDepartment = new ITDepartment('123', ['tien'])
// itDepartment.addEmployee('ad')
console.log(itDepartment);
itDepartment.showEmployee()

AccountingDepartment.getInstance()