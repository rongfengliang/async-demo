/**
 * demo promise
 * @param name  input  info
 */
async  function demo(name:string):Promise<string>{
    return new Promise((resolve,reject)=>{
        if(name=="dalong"){
            reject("some wrong  not allow")
        }
        return  resolve(name)
    })
}
/**
 * call demo promise with async && await
 * @param info 
 */
async function   call(info:string){
    let result = await demo(info);
    return result;
}

export default call
export {
    call,
    demo
}