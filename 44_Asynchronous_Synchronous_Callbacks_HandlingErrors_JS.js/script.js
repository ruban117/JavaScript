//synchronous

/*let a="Ruban"
let b="BCA"
console.log(a+"Persuing "+b+" From Techno College Hooghly")
*/

//Asynchronous

/*console.log("Start")
setInterval(function(){
    console.log("Hello")
},2000)
console.log("End")*/

//callbacks

function loadscript(src,callback){
    let a=document.createElement('script')
    a.src=src
    a.onload=function(){
        callback(null,src)
    }
    a.onerror=function(){
        callback(new Error('Got some Error'))
    }
    document.body.appendChild(a)
}



function notice(error,s){
    if(error){
        alert(error)
        return
    }
    alert("Script Has Been Loaded successfully "+s)
}

loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',notice)