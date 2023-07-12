const navbackground=()=>{
    document.body.childNodes[1].childNodes[3].style.background="gray"
}


navbackground()


//console.log(document.body.childNodes[1].childNodes[1].childNodes[1])
console.log(document.body.previousElementSibling)
console.log(document.body.nextElementSibling)
console.log(document.body.firstElementChild)
console.log(document.body.lastElementChild)