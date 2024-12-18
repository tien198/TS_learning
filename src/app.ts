const names: Array<string> = []

const promise: Promise<string> = new Promise((resolve, reject) => {
    resolve('This is done!')
    // resolve(12)
})

promise.then(data => data.split(' '))

function merge<T extends object, U extends object>(objA: T, objB: U) {
    const target = {}
    return Object.assign(target, objA, objB)
}

const mergeObj = merge({ name: 'tien' }, { age: 12 })
console.log(mergeObj);
