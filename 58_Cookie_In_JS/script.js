alert(document.cookie)
document.cookie="user=Ruban12305"
document.cookie="user2=Ruban123056"
alert(document.cookie)
let a=prompt("Enter Key:- ")
let b=prompt("Enter Value:- ")

document.cookie=`${encodeURIComponent(a)}=${encodeURIComponent(b)}`
alert(document.cookie)
