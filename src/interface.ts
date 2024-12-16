type AddFunc = (a: number, b: number) => void
interface IAddFunc {
    (a: number, b: number): void
}

interface Greetable {
    readonly name: string;
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 30;

    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

class Student extends Person { }

let user1: Greetable;

user1 = new Person('Tien');

user1.greet('Hi there - I am');
console.log(user1);
