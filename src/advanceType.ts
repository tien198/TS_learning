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

function add(a: number, b: number): number
function add(a: string, b: string | number): string
function add(a: string | number, b: string): string
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string')
        return a.toString() + b.toString()
    return a + b
}


class Car {
    drive() {
        console.log('Driving...');
    }
}

class Trunk {
    drive() {
        console.log('Trunk is driving ...');
    }
    loadCargo(amount: number) {
        console.log('loading cargo: ' + amount);
    }
}

type Vehicle = Car | Trunk

const v1 = new Car()
const v2 = new Trunk()

function useVehicle(vehicle: Vehicle) {
    vehicle.drive()
    if (vehicle instanceof Trunk)
        vehicle.loadCargo(12)
}

// useVehicle(v1)
// useVehicle(v2)

interface Bird {
    type: 'Bird'
    flyingSpeed: number
}

interface Horse {
    type: 'Horse'
    runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
    let speed: number
    switch (animal.type) {
        case 'Bird':
            speed = animal.flyingSpeed
            break
        case 'Horse':
            speed = animal.runningSpeed
            break
    }
    console.log('Moving at speed: ' + speed)
}

moveAnimal({ type: 'Bird', flyingSpeed: 12 })

interface ErrorContainer {
    [prop: string]: string
}


const error: ErrorContainer = {
    'id': 'Id can\'t be null'
}

const fetchedUserData = {
    id: 'usr-1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company!' }
}

console.log(fetchedUserData?.job?.description);

const userInput = undefined
const storedData = userInput ?? 'Default';
console.log(storedData);
