let a=prompt('Enter The Key:- ')
let b=prompt('Enter The Value:- ')

localStorage.setItem(a,b)

console.log(localStorage.getItem('Soumita'))

localStorage.removeItem('Ruban')

console.log(localStorage.key(3))

console.log(localStorage.length)


window.onstorage=(e)=>{
    alert("Changed")
    console.log(e)
}

localStorage.one=1
delete localStorage.one
localStorage.clear()

