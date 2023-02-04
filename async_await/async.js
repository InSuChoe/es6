async function sports(){
    return "sccor";
};

console.log(Object.prototype.toString.call(sports));

const obj= sports();
console.log(obj instanceof Promise);

