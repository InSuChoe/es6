const list = [10, 20];
async function show(){
    for await (const value of list)
    console.log(value);
};
show();