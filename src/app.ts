type Admin = {
    name: string
    privilege: string[]
}

type Employee = {
    name: string
    startDate: Date
}

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
    name: '',
    privilege: [''],
    startDate: new Date()
}

type Combinable = number | string
type Numeric = number | boolean

type Universal = Combinable & Numeric

const universal: Universal = 0