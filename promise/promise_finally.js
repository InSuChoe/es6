const obj=
    new Promise((resolve, reject)=>{
        console.log('begin');
        resolve(100);
        console.log('end');
    });
obj.then((value)=> {
    console.log(value);
    return 200;
}).catch((reason)=>{console.log(reason);
}).finally((param)=>{
    console.log('finally '+param);
});
