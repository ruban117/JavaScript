/*Q1> write a program to load a js file in the browser using promises use .then to display an alert
when the load is compleated*/

const loadScript=async(src)=>{
   return new Promise((resolve,reject)=>{
        let s=document.createElement('script')
        s.src=src
        s.onload=()=>{
            alert('Fetching The data of your script........')
            setTimeout(()=>{
                resolve('Congratualations Your Script Has Been Loaded Successfully!!')
            },5000)
        }
        s.onerror=()=>{
            alert('Fetching The data of your script........')
            setTimeout(()=>{
                reject(new Error('Your Script Loading Is Failed Due To Some Error Occured'))
            },5000)
        }
        document.body.appendChild(s)
   })
}

let r=await loadScript('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/brands.min.js')

r.then((values)=>{
    alert(values)
})
r.catch((error)=>{
    alert(error)
})

/*Q2>Do the same question using async await*/

const main1=async()=>{
    try{
        let q=await loadScript('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/brands.min.js')
        alert(q)
    }catch(err){
        alert(err)
    }
}

main1()

/*Q3> Create a promise which rejects after 3 seconds use an async/await to get it's value use a try catch 
handler to handle the error*/


const fun=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error('Hey i Am An Error And I Am Handled'))
        },3000)
    })
}

const p=async()=>{
    try{
        let a=await fun()
        alert(a)
    }catch(err){
        alert(err)
    }
}

p()


/*Q4> write a program using Promise.all() inside an async/await to await 3 promises.Compare it's result
with the case where we await promises one by one*/

const fun1=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('1st Promise Resolved')
        },3000)
    })
}

const fun2=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('2nd Promise Resolved')
        },6000)
    })
}

const fun3=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('3rd Promise Resolved')
        },9000)
    })
}

const main2=async()=>{
    let a=await Promise.all([fun1(),fun2(),fun3()])
    console.log(a)
}

main2()