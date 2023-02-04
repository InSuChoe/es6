const check=false;
const obj=
    new Promise((resolve, reject)=>{
        console.log('begin');
        check ? resolve(check) : reject(1,2,3);
        console.log('end');
    });
obj.then((value)=>console.log(value))
   .catch((value)=>console.error(value));