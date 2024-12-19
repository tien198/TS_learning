function Logger(logString: string) {
    return function (_: Function) {
        console.log(logString)
    }
}

@Logger('LOGGING_PERSON')
class PersonDecorator {
    name = 'Tien'
    constructor() {
        console.log('Creating person object')
    }
}

const person = new PersonDecorator()