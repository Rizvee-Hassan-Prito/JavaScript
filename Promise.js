
const p1= new Promise((resolve,reject)=>{
    var x=Math.random()*2
    console.log(x)
    if(x>1){
        resolve("P1 Task is completed")
    }
    // else{
    //     reject(new Error("Error: P1 Task is not completed"))
    // }

    // setTimeout(() => {
    //     resolve("Done P1 Task")
    // }, 3000)
})

const p2= new Promise((resolve,reject)=>{
    var x=10*Math.random()*5
    console.log(x)
    if(x>5){
        resolve("P2 Task is completed")
    }
    else{
        reject(new Error("Error: P2 Task is not completed"))
    }

    // setTimeout(() => {
    //     resolve("Done P2 Task")
    // }, 1000)

})

p2.then((res)=>{
    console.log(res)
}).catch((res)=>{
    console.log(res.message)
})

// Promise.all([p1,p2]).then(([res1,res2])=>{
//     console.log(res1)
//     console.log(res2)
// })



//-----> Promises can be used Asynchronous

// Promise.race([p1,p2]).then((res)=>{
//     console.log(res)
// })