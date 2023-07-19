let p1=new Promise((resolve,reject)=>{
    console.log("Your Promise Is Now Pending")
    setTimeout(()=>{
        resolve("Your Promise Is Now Resolved")
       // reject(new Error('Sorry Your Promise Is Rejected'))
    },3000)
})

p1.then((value)=>{
    console.log(value)
})



p1.then(()=>{
    console.log("Fulfilled_2")
})

