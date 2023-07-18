let p=new Promise((resolve,reject)=>{
    console.log('Your Promise Is Pending')
    setTimeout(()=>{
        resolve("Your promise has been resolved successfully!")
    },3000)
})

let q=new Promise((resolve,reject)=>{
    console.log('Your Promise Is Pending')
    setTimeout(()=>{
        reject(new Error("Due to some unexpected circumstances your promise has been rejected!"))
    },3000)
})


p.then((value)=>{
    console.log(value)
})

q.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})
