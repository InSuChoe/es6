const obj= new Promise((resolve, reject)=>{
    console.log('begin');
    resolve(100);
    console.log('end');
});
obj.then((value)=> value + 50).then((param)=>console.error(param));