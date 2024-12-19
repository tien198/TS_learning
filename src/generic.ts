
const promise: Promise<string> = new Promise((resolve, reject) => {
    resolve('This is done!')
    // resolve(12)
    reject('rejected!')
})

promise.then(data => data.split(' '))

function merge<T extends object, U extends object>(objA: T, objB: U) {
    const target = {}
    return Object.assign(target, objA, objB)
}

const mergeObj = merge({ name: 'tien' }, { age: 12 })
console.log(mergeObj);

interface CourseGoal {
    title: string
    description: string
    untilDate: Date
}
// generic unlti type

function createCourseGoal(
    title: string,
    description: string,
    untilDate: Date
) {
    const partial: Partial<CourseGoal> = {}
    partial.title = title
    partial.description = description
    partial.untilDate = untilDate
    return <CourseGoal>partial
}

const names: Readonly<string[]> = ['edit me if you can!']

console.log(names);
