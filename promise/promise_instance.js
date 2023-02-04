/**
 * Creates a new Promise.
 * @param executor A callback used to initialize the promise. This callback is passed two arguments:
 * a resolve callback used to resolve the promise with a value or the result of another promise,
 * and a reject callback used to reject the promise with a provided reason or error.
 */
console.log('start');
const obj = new Promise((resolve, reject)=>{
    resolve('suc');
    reject('err');
});
obj.then((value)=>{
    console.log(value);
}, (reason) =>{
    console.log(reason);
});
console.log('end');