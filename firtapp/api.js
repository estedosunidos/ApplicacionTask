const API='http://192.168.68.122:9800/'
export const getTask= async ()=>{
    const res=await  fetch(API)
    return await res.json()
}
export const savetask= async (newtask)=>{
    const res=await  fetch(API,{
        method:"POST",
        headers: {Accept: "application/json","Content-Type": "application/json"},
        body:JSON.stringify(newtask)
    })
    return await res.json()
}