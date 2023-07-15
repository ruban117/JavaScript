var p =prompt("Choose R to red G To Green")
let a=document.getElementById('btn')
let b=document.getElementById('color')


let y=function(e){
    document.getElementsByClassName('inner')[0].style.background='red'
    console.log(e.type)
    console.log(e.currentTarget)
    console.log(e.clientX+" "+e.clientY)
}

let z=function(e){
    document.getElementsByClassName('inner')[0].style.background='green'
}
b.addEventListener('click',y)
b.addEventListener('click',z)


if(p=='R')
    b.removeEventListener('click',y)
else if(p=='G'){
    b.removeEventListener('click',z)
}
else{
    alert("Wrong Input")
}

