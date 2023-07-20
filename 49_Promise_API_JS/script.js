let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve("Hello I am resolved at 1st Sec")
        reject(new Error('Hey I Am Rejected'))
    },1000)
})


let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve("Hello I am resolved at 3rd Sec")
        reject(new Error('Hey I Am Rejected'))
    },2000)
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello I am resolved at 6th Sec")
    },3000)
})

let promise_all=Promise.all([p1,p2,p3])

promise_all.then((values)=>{
    console.log(values)
})

let promise_all2=Promise.allSettled([p1,p2,p3])

promise_all2.then((values)=>{
    console.log(values)
})

let promise_all3=Promise.race([p1,p2,p3])

promise_all3.then((values)=>{
    console.log(values)
})

let promise_all4=Promise.any([p1,p2,p3])

promise_all4.then((values)=>{
    console.log(values)
})

let promise_all5=Promise.resolve('Hey Problem Solved')

promise_all5.then((values)=>{
    console.log(values)
})

let promise_all6=Promise.reject(new Error('I am Rejected'))

promise_all6.catch((values)=>{
    console.log(values)
})