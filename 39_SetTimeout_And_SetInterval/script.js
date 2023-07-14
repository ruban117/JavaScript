setTimeout(function(){
    alert("This Is A Gentle Alert")
},2000)




const sum=(a,b)=>{
    console.log(a+b)
}

let c=setTimeout(sum,5000,1,2)

let d=confirm("Do You Want To Clear The Timeout:- ")

if(d==true){
    clearTimeout(d)
}

setInterval(function(){
    alert("I am infinite alert")
},5000)


let mul=(a,b)=>{
    console.log(a*b)
}


let e=setInterval(mul,3000,2,3)

let f=confirm("Do You Want To Clear The Interval:- ")

if(f==true){
    clearInterval(e)
}


