function create(param) {
    return new Promise((res, rej) => {
        rej(param);
    });
};

async function getPoint(option) {
    try {
        await create(option);
        console.log(value);
    } catch (err) {
        console.log(err);
    }
};
getPoint({point: 100});