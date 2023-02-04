function order(delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(delay);
            resolve(delay);
        }, delay);
    });
};

let a = Promise.race([order(500), order(100), order(300)])
       .then(param => console.log('then: '+param));
