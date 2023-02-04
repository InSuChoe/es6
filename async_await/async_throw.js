async function sports(){
    throw 'error';
};

sports().then(()=>0, (rej)=>console.log(rej));

