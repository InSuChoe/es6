/**
 * Creates a Promise that is resolved with an array of results when all of the provided Promises
 * resolve, or rejected when any Promise is rejected.
 * @param values An iterable of Promises.
 * @returns A new Promise.
 */
function order(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('실행자: ', delay);
            resolve(delay);
        }, delay);
    });
};Promise.all([order(500), order(300), order(100)]).then((param) => console.log('then: ' + param));

function otherOrder(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(delay);
            delay === 300 ? reject(delay) : resolve(delay)
        }, delay);
    });
};
console.log()
Promise.all([order(500), order(300), order(100)])
    .then(param => console.log('성공: ' + param),
          param =>  console.log('err: '+ param))


