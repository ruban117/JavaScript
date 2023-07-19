let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 Resolved Successfully")
    },2000)
})

p.then((value)=>{
    console.log(value)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("we are half done")
        },3000)
    })
}).then((value)=>{
    console.log(value)
    return "Now We Are All Done"
}).then((value)=>{
    console.log(value)
})

//Quick Quiz

function loadScript(src){
    return new Promise((resolve,reject)=>{
        let s=document.createElement('script')
        s.src=src
        s.onload=()=>{
            resolve("Your Script Has Been Loaded Successfully")
        }
        s.onerror=()=>{
            reject(new Error("Unable To Load Your Script Please Check Script"))
        }
        document.body.appendChild(s)

    })
}

let p1=loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js')

p1.then((value)=>{
    alert(value)
    return loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js')
}).then(()=>{
    alert("Second Script Has Been Loaded")
}).catch((error)=>{
    alert(error)
})