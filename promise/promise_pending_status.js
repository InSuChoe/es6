console.log('start');
const obj =  new Promise((resolve, reject)=>{
    resolve();
    console.log('pending');
});

obj.then((value)=>{
    console.log('suc');
}, (reason)=>{
    console.log('err');
});
console.log('end');