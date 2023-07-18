let promise=new Promise(function(resolve,reject){
    console.log("Inside Promise")
    resolve(117)
})


console.log('Hello One')

setInterval(function () { 
    console.log('Hello Two')
 },2000)
console.log('Hello Three')

console.log(promise)