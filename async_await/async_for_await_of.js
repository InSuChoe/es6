async function* point(){
    yield 10;
    yield 20;
};

async function show(){
    for await (const value of point())
    console.log(value);
};

show();