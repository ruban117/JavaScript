let a=prompt('Enter The Key:- ')
let b=prompt('Enter The Value:- ')

sessionStorage.setItem(a,b)

console.log(sessionStorage.getItem('Soumita'))

sessionStorage.removeItem('Ruban')

console.log(sessionStorage.key(3))

console.log(sessionStorage.length)

sessionStorage.one=1

//delete sessionStorage.one
//sessionStorage.clear()