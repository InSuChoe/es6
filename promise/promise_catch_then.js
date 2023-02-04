/**
 * Attaches a callback for only the rejection of the Promise.
 * @param onrejected The callback to execute when the Promise is rejected.
 * @returns A Promise for the completion of the callback.
 */
const obj =
    new Promise((resolve, reject) => {
        console.log('begin');
        resolve(100)
        console.log('end');
    });
obj.then((value) => {
    throw 'err';
})
    .catch(err => {
        console.error(err);
        return 'catch ' + err;
    }).then((param) => {
    console.log('then ' + param)
}).catch((err2) => {
    console.log('err2 ' + err2)
});