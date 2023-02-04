async function getPoint(option){
    const value = await option.point+200;
    console.log(value);
};
getPoint({point:100});