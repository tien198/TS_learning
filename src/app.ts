function Logger(logString: string) {
    console.log('LOGGER Factory')
    return function (_: Function) {
        console.log(logString)
    }
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE Factory')
    return function (constructor: any) {
        const hookEl = document.getElementById(hookId)
        const p = new constructor()
        if (hookEl) {
            hookEl.innerHTML = template
            hookEl.querySelector('h1')!.textContent = p.name
        }
    }
}


@Logger('LOGGING_PERSON')
@WithTemplate('<h1>My Person</h1>', 'app')
class PersonDecorator {
    name = 'Tien'
    constructor() {
        console.log('Creating person object')
    }
}

// const person = new PersonDecorator()