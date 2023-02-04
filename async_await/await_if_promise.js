function create(param){
    return new Promise((resolve)=>{
        resolve(param);
    });
};

async function getPoint(option){
    const value = await create(option);
    console.log(value);
};
getPoint({point:100});