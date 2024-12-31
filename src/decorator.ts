/*
function Logger(logString: string) {
    // console.log('LOGGER Factory')
    return function (_: Function) {
        // console.log(logString)
        logString
    }
}

const WithTemplate = ((template: string, hookId: string) =>
    function <T extends { new(...args: any[]): { name: string } }>(originalTarget: T) {
        return class extends originalTarget {
            constructor(..._: any[]) {
                super()
                const hookEl = document.getElementById(hookId)
                if (hookEl) {
                    hookEl.innerHTML = template
                    this.name = 'Renamed'
                    hookEl.querySelector('h1')!.textContent = this.name
                }
            }
        }
    }
)

@Logger('LOGGING_PERSON')
@WithTemplate('<h1>My Person</h1>', 'app')
class PersonDecorator {
    name = 'Tien'
    constructor() {
        console.log('Creating person object')
    }
}

const person = new PersonDecorator()
*/

const PropDecor = (_: any, name: string | Symbol) => console.log('Property Decorator', name)
const AccessorDecor = (constructor: any, name: string, description: PropertyDescriptor) => console.log('Accessor Decorator', name, description, constructor)
const MethodDecor = (constructor: any, name: string, description: PropertyDescriptor) => console.log('Method Decorator', name, description, constructor)
const ParamDecor = (_: any, name: string, position: number) => console.log('Param Decorator', name, position)

class Product {
    @PropDecor
    title: string;

    private _price: number = 0

    @AccessorDecor
    get price() {
        return this._price
    }
    set price(@ParamDecor val: number) {
        val > 0
            ? this._price = val
            : {}
    }

    @MethodDecor
    getPriceWithTax(@ParamDecor tax: number) {
        return this._price * (1 + tax)
    }
    constructor(t: string, p: number) {
        this.title = t
        this.price = p
    }
}

interface Target {
    new(...args: any[]): {}
}
function AutoBind(_: any, __: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            console.log(this);

            const boundFn = originalMethod.bind(this)
            return boundFn
        },
    }
    return adjDescriptor
}


class Printer {
    message = 'This works!'

    @AutoBind
    showMessage() {
        console.log(this.message)
    }
}

const p = new Printer()

const button = document.querySelector('button')!
button.addEventListener('click', p.showMessage)















// --- validation decorator
interface ValidatorConfig {
    [prop: string]: {
        [validatable: string]: string[] // ['required', 'positive']
    }
}

const registeredValidator: ValidatorConfig = {}

function Required(target: any, propName: string) {
    registeredValidator[target.constructor.name] = {
        ...registeredValidator[target.constructor.name],
        [propName]: ['required']
    }
}
function PositiveNumber(target: any, propName: string) {
    registeredValidator[target.constructor.name] = {
        ...registeredValidator[target.constructor.name],
        [propName]: ['positive']
    }
}
function validate(obj: any) {
    const objValidationConfig = registeredValidator[obj.constructor.name]
    if (!objValidationConfig) {
        return true
    }
    for (const prop in objValidationConfig) {
        for (const validator of objValidationConfig[prop]) {
            switch (validator) {
                case 'required':
                    return !!obj[prop]
                case 'positive':
                    return obj[prop] > 0
            }
        }
    }
    return true
}

class Course {
    @Required
    title: string
    @PositiveNumber
    price: number
    constructor(title: string, price: number) {
        this.title = title
        this.price = price
    }
}

const courseForm = document.querySelector('form')!
courseForm.addEventListener('submit', e => {
    e.preventDefault()
    const titleEl = document.getElementById('title') as HTMLInputElement
    const priceEl = document.getElementById('price') as HTMLInputElement

    const title = titleEl.value
    const price = priceEl.value

    const course = new Course(title, +price)
    if (!validate(course)) {
        alert('Invalid input, please try again')
    }
    else console.log(course);

})