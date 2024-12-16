"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    decribe() {
        console.log(`Department ${this.id}: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    showEmployee() {
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admin) {
        super(id, 'IT');
        this.admin = admin;
    }
    showEmployee() {
        console.log(this.employees);
    }
}
const itDepartment = new ITDepartment('123', ['tien']);
console.log(itDepartment);
itDepartment.showEmployee();
//# sourceMappingURL=classes.js.map