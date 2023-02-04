/**
 * Attaches callbacks for the resolution and/or rejection of the Promise.
 * @param onfulfilled The callback to execute when the Promise is resolved.
 * @param onrejected The callback to execute when the Promise is rejected.
 * @returns A Promise for the completion of which ever callback is executed.
 */
const obj= new Promise((resolve, reject)=>{
    console.log('begin');
    resolve(1, 2, 3);
    console.log('end');
});
obj.then((value)=> console.log(value),(param)=>console.error(param));